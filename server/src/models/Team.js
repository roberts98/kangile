const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 4
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    boards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
      }
    ]
  },
  {
    timestamps: true
  }
);

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
