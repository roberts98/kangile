const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 4
    },
    tasks: [
      {
        name: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        author: {
          type: String,
          required: true
        },
        asignee: {
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

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
