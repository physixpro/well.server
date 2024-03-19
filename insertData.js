const { MongoClient } = require("mongodb");
const getDiseases = require("./diseaseDatabase");

// MongoDB Atlas connection string
const mongoURI = "mongodb+srv://keagan:1234@cluster0.qvhok.mongodb.net/";
const dbName = "SeedSource";
const collectionName = "diseases";

async function insertData() {
  const client = new MongoClient(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const diseases = getDiseases();

    // Convert the diseases object into an array of documents
    const documents = diseases.map(
      ({ name, description, nutrients, imageUrl }) => ({
        name,
        description,
        nutrients,
        imageUrl,
      })
    );

    // Insert the documents into the MongoDB collection
    const result = await collection.insertMany(documents);
    console.log(
      `Data inserted successfully. ${result.insertedCount} documents inserted.`
    );
  } catch (error) {
    console.error("Error inserting data into MongoDB:", error);
  } finally {
    // Close the MongoDB Atlas connection
    await client.close();
    console.log("MongoDB Atlas connection closed");
  }
}

// Run the insertData function
insertData();
