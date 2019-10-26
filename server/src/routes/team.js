const express = require('express');

const auth = require('../middlewares/auth');
const Team = require('../models/Team');
const User = require('../models/User');

const router = new express.Router();

router.post('/', auth, async (req, res) => {
  const team = new Team({ ...req.body, members: [req.user._id] });

  try {
    await team.save();

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
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
