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

router.get('/:boardId/:taskId', auth, async (req, res) => {
  try {
    const { boardId, taskId } = req.params;
    const board = await Board.findById(boardId);
    const task = board.tasks.filter(task => task._id.toString() === taskId)[0];
    const asignee = await User.findById(task.asignee);
    const author = await User.findById(task.author);

    res.status(200).send({ task: { ...task.toObject(), asignee, author } });
  } catch (error) {
    res.status(401).send();
  }
});

router.patch('/:boardId/:taskId', auth, async (req, res) => {
  try {
    const { boardId, taskId } = req.params;
    const { key, value } = req.body;
    const board = await Board.findById(boardId);
    let index = 0;

    const task = board.tasks
      .filter((task, i) => {
        index = i;
        return task._id.toString() === taskId;
      })[0]
      .toObject();

    if (key === 'comments') {
      task[key] = [...task[key], value];
    } else {
      task[key] = value;
    }

    board.tasks[index] = task;

    await board.save();

    res.status(200).send({ data: board.tasks[index][key] });
  } catch (error) {
    res.status(401).send();
  }
});

module.exports = router;
