const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB Atlas connection string
const mongoURI = "mongodb+srv://keagan:1234@cluster0.qvhok.mongodb.net/";

const client = new MongoClient(mongoURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});
let diseasesCollection; // MongoDB collection for diseases

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    const database = client.db("SeedSource");
    diseasesCollection = database.collection("diseases");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

connectToMongoDB();

app.post("/input", async (req, res) => {
  console.log("Received input request:", req.body); // Add this line
  const { body } = req;
  const { input } = body;
  const sanitizedInput = input
    .replace(/ /g, "_")
    .replace(/-/g, "_")
    .toLowerCase();

  try {
    // Retrieve disease description from MongoDB
    console.log("Before querying MongoDB");
    const diseaseDocument = await diseasesCollection.findOne({
      name: sanitizedInput,
    });
    console.log("After querying MongoDB");

    if (diseaseDocument) {
      console.log("Found disease document:", diseaseDocument); // Add this line
      res.status(200).json({
        description: diseaseDocument.description,
        nutrients: diseaseDocument.nutrients,
        imageUrl: diseaseDocument.imageUrl,
      });
    } else {
      console.log("No disease document found"); // Add this line
      res.status(200).json({ description: "No description found." });
    }
  } catch (error) {
    console.error("Error retrieving data from MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
  console.log("Responded to input request"); // Add this line
});

app.get("/query", (req, res) => {
  const { key } = req.query;
  const sanitizedKey = key.replace(/ /g, "_").replace(/-/g, "_").toLowerCase();
  // Implement your query logic here based on the new MongoDB setup
  // ...

  res.status(200).send("Not implemented yet");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
