const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScoreSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  questionsAttempted: {
    type: Number,
    default: 0,
  },
  correctAnswers: {
    type: Number,
    default: 0,
  },
  wrongAnswers: {
    type: Number,
    default: 0,
  },
  score: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserScore = mongoose.model('UserScore', userScoreSchema);

module.exports = UserScore;
