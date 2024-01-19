const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  Question: {
    type: String,
    required: true,
  },
  Answer: {
    type: String,
    required: true,
  },
  Op1: {
    type: String,
    required: true,
  },
  Op2: {
    type: String,
    required: true,
  },
  Op3: {
    type: String,
    required: true,
  },
  Op4: {
    type: String,
    required: true,
  },
  Level: {
    type: Number,
    required: true,
  },
});

const QuestionModel = mongoose.model('exercise', questionSchema);

module.exports = QuestionModel;
