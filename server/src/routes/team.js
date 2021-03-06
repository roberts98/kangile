const express = require('express');

const auth = require('../middlewares/auth');
const Team = require('../models/Team');
const Board = require('../models/Board');

const router = new express.Router();

router.post('/', auth, async (req, res) => {
  const todoBoard = new Board({ name: 'todo', order: 1 });
  const inProgressBoard = new Board({ name: 'in progress', order: 2 });
  const doneBoard = new Board({ name: 'done', order: 3 });
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
      .populate('members')
      .exec();

    res.send(team);
  } catch (error) {
    res.status(404).send();
  }
});

router.patch('/:id/boardsOrder', auth, async (req, res) => {
  try {
    const team = await Team.findById(req.params.id)
      .populate('boards')
      .exec();

    team.boards = req.body.boards;

    await team.save();

    res.send(team.boards);
  } catch (error) {
    res.status(404).send();
  }
});

router.patch('/:id/updateTasks', auth, async (req, res) => {
  try {
    const team = await Team.findById(req.params.id)
      .populate('boards')
      .exec();

    team.boards.map((board, i) => {
      (async function() {
        const MBoard = await Board.findById(board._id);
        const tasks = req.body.boards.filter(
          FBoard => FBoard._id === board._id.toString()
        )[0].tasks;
        MBoard.tasks = tasks;

        await MBoard.save();
      })();
    });

    await team.save();

    res.send({ boards: req.body.boards });
  } catch (error) {
    console.log(error);
    res.status(404).send();
  }
});

router.post('/:teamId/message', auth, async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);

    team.messages = [...team.messages, req.body.message];

    await team.save();

    res.status(200).send({ message: team.messages[team.messages.length - 1] });
  } catch (error) {
    console.log(error);
    res.status(401).send();
  }
});

router.get('/:teamId/message', auth, async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);

    res.status(200).send({ messages: team.messages });
  } catch (error) {
    res.status(401).send();
  }
});

module.exports = router;
