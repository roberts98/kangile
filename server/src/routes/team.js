const express = require('express');

const auth = require('../middlewares/auth');
const Team = require('../models/Team');
const Board = require('../models/Board');

const router = new express.Router();

router.post('/', auth, async (req, res) => {
  const todoBoard = new Board({ name: 'todo' });
  const inProgressBoard = new Board({ name: 'in progress' });
  const doneBoard = new Board({ name: 'done' });
  const team = new Team({
    ...req.body,
    members: [req.user._id],
    boards: [todoBoard, inProgressBoard, doneBoard]
  });

  try {
    await team.save();
    await todoBoard.save();
    await inProgressBoard.save();
    await doneBoard.save();

    res.status(201).send({ team });
  } catch (error) {
    res.status(400).send({ error });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const teams = await Team.find({ members: req.user._id })
      .populate('members')
      .exec();

    res.send(teams);
  } catch (error) {
    res.status(500).send();
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const team = await Team.findById(req.params.id)
      .populate('boards')
      .exec();

    res.send(team);
  } catch (error) {
    res.status(404).send();
  }
});

module.exports = router;
