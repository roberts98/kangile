const express = require('express');

const auth = require('../middlewares/auth');
const Board = require('../models/Board');
const Team = require('../models/Team');

const router = new express.Router();

router.post('/:boardId/newTask', auth, async (req, res) => {
  try {
    const board = await Board.findById(req.params.boardId);

    board.tasks.push(req.body);
    await board.save();

    res.status(200).send({ board });
  } catch (error) {
    res.status(404).send();
  }

  res.send();
});

module.exports = router;
