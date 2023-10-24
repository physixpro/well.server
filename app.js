const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 9000;
const getDiseases = require("./diseaseDatabase"); // Here I imported the diseases function
app.use(bodyParser.json());
app.use(cors());

const submittedStrings = [];

const diseases = getDiseases();

app.post("/input", (req, res) => {
  const { body } = req;
  const { input } = body;
  const sanitizedInput = input
    .replace(/ /g, "_")
    .replace(/-/g, "_")
    .toLowerCase(); // Replace spaces with underscores and convert to lowercase
  submittedStrings.push(sanitizedInput);

  const diseaseDescription = diseases[sanitizedInput];
  if (diseaseDescription) {
    res.status(200).json({ description: diseaseDescription });
  } else {
    res.status(200).json({ description: "No description found." });
  }
});

app.get("/query", (req, res) => {
  const { key } = req.query;
  const sanitizedKey = key.replace(/ /g, "_").toLowerCase(); // Replace spaces with underscores and convert to lowercase
  const count = submittedStrings.filter((str) => str === sanitizedKey).length;
  res.status(200).send(count.toString());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
