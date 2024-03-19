// diseaseDatabase.js

const diseasesData = [
  {
    name: "covid19",
    description:
      "COVID-19 is a highly contagious respiratory illness caused by the SARS-CoV-2 virus. It can cause severe respiratory symptoms and, in some cases, lead to pneumonia and organ failure.",
    nutrients: ["potassium", "acelic", "vitaminA", "vitaminC"],
    imageUrl: "", // You can leave it blank initially
  },
  {
    name: "cancer",
    description:
      "Cancer is a group of diseases characterized by the uncontrolled growth and spread of abnormal cells. There are various types of cancer, each with specific symptoms and treatments.",
    nutrients: ["potassium", "acelic", "vitaminA", "vitaminC"],
    imageUrl: "https://www.pexels.com/photo/two-white-garlics-928251/", // You can leave it blank initially
  },
  // Add other diseases here...
];

function getDiseases() {
  return diseasesData;
}

module.exports = getDiseases;
