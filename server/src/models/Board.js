const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 4
    },
    order: {
      type: Number,
      required: true
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
        },
        deadline: {
          type: Date
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
