const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("./src/database/mongoconn.js");

const apiRouter = require("./src/setup.js");
app.use("/api", apiRouter);

app.get("/", (req, res) => {np
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});