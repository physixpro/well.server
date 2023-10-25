const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const getDiseases = require("./diseaseDatabase");

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use(cors());

const diseases = getDiseases();

const submittedStrings = [];

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
    //console.log("truthy description,displays description if there is a matching pair", diseaseDescription);
  } else {
    res.status(200).json({ description: "No description found." });
    // console.log(
    //   "falsy description,i.e. no matching string",
    //   diseaseDescription
    // );
  }
});

app.get("/query", (req, res) => {
  const { key } = req.query;
  const sanitizedKey = key.replace(/ /g, "_").replace(/-/g, "_").toLowerCase(); // Replace spaces with underscores and convert to lowercase
  const count = submittedStrings.filter((str) => str === sanitizedKey).length;
  res.status(200).send(count.toString());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
