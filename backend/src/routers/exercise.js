const QuizRouter = require("express").Router();
require("dotenv").config({ path: ".env" });

const Exercise = require("../database/models/exercise");

const { authJWT } = require("../middlewares/jwt");

QuizRouter.get("/question", async (req, res) => {
  try {
    // Get a random question from the Exercise collection
    const randomQuestion = await Exercise.aggregate([{ $sample: { size: 1 } }]);

    if (randomQuestion.length === 0) {
      return res.status(404).json({ message: "No questions found" });
    }

    return res.status(200).json({ question: randomQuestion[0] });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error, Try again later.",
    });
  }
});

module.exports = QuizRouter;
