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
    description: {
      type: String,
      required: false
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
    ],
    messages: [
      {
        authorId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        message: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
