const api = require("express").Router();

const userRouter = require("./routers/user");
const quizRouter = require("./routers/exercise");
api.use("/user", userRouter);
api.use("/exercise", quizRouter);

module.exports = api;