const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use(cors());

const diseases = {
  diabetes: "Description for diabetes.",
  cancer: "Description for cancer.",
  hypertension: "Description for hypertension.",
  "covid-19": "Description for COVID-19.",
  heart_disease: "Description for heart disease.",
  cold: "Description for cold.",
  flu: "Description for flu.",
  "lime-disease": "Description for Lyme Disease.",
};

const submittedStrings = [];

app.post("/input", (req, res) => {
  const { body } = req;
  const { input } = body;
  const sanitizedInput = input.replace(/ /g, "_").toLowerCase(); // Replace spaces with underscores and convert to lowercase
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
