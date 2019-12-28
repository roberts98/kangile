const express = require('express');

const auth = require('../middlewares/auth');
const Board = require('../models/Board');
const User = require('../models/User');

const router = new express.Router();

router.post('/:boardId/newTask', auth, async (req, res) => {
  try {
    const board = await Board.findById(req.params.boardId);
    const asignee = await User.findOne({ username: req.body.asignee });
    const userId = req.user._id;

    board.tasks.push({
      ...req.body,
      asignee: asignee._id,
      author: userId
    });

    await board.save();

    res.status(200).send({ board });
  } catch (error) {
    res.status(422).send();
  }

  res.send();
});

router.delete('/:boardId/:taskId', auth, async (req, res) => {
  try {
    const board = await Board.findById(req.params.boardId);

    const newTasks = board.tasks.filter(
      task => task._id.toString() !== req.params.taskId
    );
    board.tasks = newTasks;
    await board.save();

    res.status(200).send({ board });
  } catch (error) {
    res.status(404).send();
  }
});

module.exports = router;
