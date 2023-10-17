const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use(cors());

const diseases = {
  covid_19:
    "COVID-19 is a highly contagious respiratory illness caused by the SARS-CoV-2 virus. It can cause severe respiratory symptoms and, in some cases, lead to pneumonia and organ failure.",
  cancer:
    "Cancer is a group of diseases characterized by the uncontrolled growth and spread of abnormal cells. There are various types of cancer, each with specific symptoms and treatments.",
  diabetes:
    "Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). It can lead to various complications if not properly managed.",
  heart_disease:
    "Heart disease refers to several conditions that affect the heart, including coronary artery disease and heart attacks. It is a leading cause of death worldwide.",
  obesity:
    "Obesity is a medical condition characterized by excess body weight. It can increase the risk of various health problems, including heart disease, diabetes, and certain cancers.",
  mental_health:
    "Mental health encompasses a person's emotional, psychological, and social well-being. Mental health disorders include depression, anxiety, and bipolar disorder.",
  alzheimers_disease:
    "Alzheimer's disease is a progressive brain disorder that affects memory, thinking, and behavior. It is the most common cause of dementia in older adults.",
  stroke:
    "A stroke occurs when there is a disruption in the blood supply to the brain, leading to brain cell damage. Strokes can cause paralysis, speech problems, and cognitive impairments.",
  hiv_aids:
    "HIV (Human Immunodeficiency Virus) attacks the immune system, and AIDS (Acquired Immunodeficiency Syndrome) is the final stage of HIV infection. HIV/AIDS weakens the immune system, making it difficult for the body to fight infections.",
  hepatitis:
    "Hepatitis is inflammation of the liver. There are different types of hepatitis viruses (A, B, C) that can cause acute or chronic liver disease.",
  asthma:
    "Asthma is a chronic respiratory condition that causes airways to become inflamed and narrowed, leading to difficulty breathing. It can be triggered by various factors, including allergies and respiratory infections.",
  arthritis:
    "Arthritis is inflammation of one or more joints, causing pain and stiffness. There are many types of arthritis, including osteoarthritis and rheumatoid arthritis.",
  dementia:
    "Dementia is a general term for a decline in mental ability severe enough to interfere with daily life. Alzheimer's disease is the most common type of dementia.",
  epilepsy:
    "Epilepsy is a neurological disorder characterized by recurrent seizures. Seizures can vary from brief lapses of attention to severe and prolonged convulsions.",
  influenza_flu:
    "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness and sometimes lead to hospitalization or death.",
  osteoporosis:
    "Osteoporosis is a bone disease that occurs when the body loses too much bone, makes too little bone, or both. Bones become weak and may break from a fall or, in serious cases, from sneezing or minor bumps.",
  chronic_obstructive_pulmonary_disease_copd:
    "COPD is a group of lung diseases that block airflow and make it difficult to breathe. Emphysema and chronic bronchitis are common conditions of COPD.",
  autism_spectrum_disorder_asd:
    "ASD is a developmental disorder that affects communication, behavior, and social interaction. It includes a wide range of symptoms, skills, and levels of disability.",
  high_blood_pressure_hypertension:
    "High blood pressure, also known as hypertension, occurs when the force of blood against the artery walls is consistently too high. It can lead to heart disease and stroke.",
  anxiety_disorders:
    "Anxiety disorders involve excessive worry, fear, or anxiety about situations in everyday life. These disorders can interfere with daily activities and may be accompanied by physical symptoms.",
  acne: "Acne is a skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It can result in pimples, blackheads, and whiteheads.",
  allergies:
    "Allergies occur when the immune system reacts to substances (allergens) that are usually harmless. Common allergens include pollen, dust mites, and certain foods.",
  anemia:
    "Anemia is a condition characterized by a lack of red blood cells or a low hemoglobin level, leading to reduced oxygen transport in the body. It can cause fatigue and weakness.",
  bipolar_disorder:
    "Bipolar disorder, also known as manic-depressive illness, is a mental health condition characterized by extreme mood swings, including periods of mania and depression.",
  celiac_disease:
    "Celiac disease is an autoimmune disorder in which the ingestion of gluten (a protein found in wheat, rye, and barley) leads to damage in the small intestine. It can cause digestive issues and nutrient deficiencies.",
  crohns_disease:
    "Crohn's disease is a chronic inflammatory bowel disease that causes inflammation in the digestive tract. Symptoms include abdominal pain, diarrhea, weight loss, and fatigue.",
  endometriosis:
    "Endometriosis is a painful disorder in which tissue similar to the tissue that normally lines the inside of the uterus grows outside the uterus. It can cause pelvic pain and fertility problems.",
  fibromyalgia:
    "Fibromyalgia is a disorder characterized by widespread musculoskeletal pain, fatigue, and tenderness in specific areas of the body. It can also cause sleep disturbances and cognitive difficulties.",
  gout: "Gout is a type of arthritis caused by the accumulation of uric acid crystals in the joints. It leads to severe pain, swelling, and redness in the affected joints.",
  irritable_bowel_syndrome_ibs:
    "IBS is a common digestive disorder that causes abdominal pain, bloating, and changes in bowel habits. It can alternate between episodes of diarrhea and constipation.",
  lupus:
    "Lupus is an autoimmune disease in which the immune system attacks healthy tissues and organs. It can cause joint pain, skin rashes, fatigue, and organ damage.",
  migraines:
    "Migraines are severe headaches that can cause throbbing pain, nausea, and sensitivity to light and sound. They can last for hours or even days.",
  multiple_sclerosis_ms:
    "MS is a chronic autoimmune disease that affects the central nervous system. It can cause fatigue, difficulty walking, numbness, and problems with coordination and balance.",
  obsessive_compulsive_disorder_ocd:
    "OCD is a mental health disorder characterized by obsessive thoughts and compulsive behaviors. Individuals with OCD may engage in repetitive rituals to alleviate anxiety.",
  psoriasis:
    "Psoriasis is a skin condition that causes cells to build up rapidly on the surface of the skin. It results in red, itchy, and scaly patches. Psoriasis is a chronic autoimmune disease.",
  rheumatoid_arthritis:
    "Rheumatoid arthritis is an autoimmune disorder that causes joint pain, swelling, and stiffness. It can lead to joint deformities and impair daily functioning.",
  sleep_apnea:
    "Sleep apnea is a sleep disorder characterized by pauses in breathing during sleep. It can cause loud snoring and excessive daytime sleepiness.",
  ulcerative_colitis:
    "Ulcerative colitis is a chronic inflammatory bowel disease that causes inflammation and ulcers in the colon and rectum. It can lead to abdominal pain, diarrhea, and weight loss.",
  ovarian_cancer:
    "Ovarian cancer is a type of cancer that begins in the ovaries. It can cause abdominal bloating, pelvic pain, frequent urination, and changes in appetite.",
  pancreatic_cancer:
    "Pancreatic cancer is a malignant tumor of the pancreas. It often has a poor prognosis and can cause abdominal pain, weight loss, jaundice, and digestive problems.",
  kidney_stones:
    "Kidney stones are solid mineral deposits that form in the kidneys. They can cause severe pain, urinary tract infections, and blood in the urine.",
  schizophrenia:
    "Schizophrenia is a severe mental disorder that affects a person's ability to think, feel, and behave clearly. It may result in hallucinations, delusions, and disorganized thinking.",
  cystic_fibrosis:
    "Cystic fibrosis is a genetic disorder that affects the lungs and digestive system. It leads to thick, sticky mucus production, causing respiratory and digestive problems.",
  huntington_disease:
    "Huntington's disease is a genetic disorder that causes progressive degeneration of nerve cells in the brain. It leads to motor dysfunction, cognitive decline, and behavioral changes.",
  flu: "The flu, also known as influenza, is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness and sometimes lead to hospitalization or death.",
  common_cold:
    "The common cold is a viral infection of the upper respiratory tract. It is characterized by symptoms such as sore throat, runny nose, coughing, and sneezing.",
  rabies:
    "Rabies is a viral disease that affects the central nervous system. It is transmitted through the bite of an infected animal and can be fatal if not treated promptly.",
  herpes:
    "Herpes is a viral infection caused by herpes simplex viruses. It can cause cold sores on the mouth or genitals and, in some cases, lead to more severe complications.",
  hypothermia:
    "Hypothermia occurs when the body loses heat faster than it can produce it, causing a dangerously low body temperature. It can result in confusion, shivering, and loss of consciousness.",
  mrsa: "MRSA (Methicillin-Resistant Staphylococcus Aureus) is a type of bacteria that is resistant to many antibiotics. It can cause skin infections and, in severe cases, lead to bloodstream infections and pneumonia.",
  h1n1: "H1N1, also known as the swine flu, is a subtype of influenza A virus. It caused a global pandemic in 2009. Symptoms are similar to those of regular flu and can range from mild to severe.",
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
