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
  covid19:
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
  migraine:
    "Migraines are severe headaches that can cause throbbing pain, nausea, and sensitivity to light and sound. They can last for hours or even days.",
  multiple_sclerosis_ms:
    "MS(mutiple sclerosis) is a chronic autoimmune disease that affects the central nervous system. It can cause fatigue, difficulty walking, numbness, and problems with coordination and balance.",
  ms: "MS(mutiple sclerosis)is a chronic autoimmune disease that affects the central nervous system. It can cause fatigue, difficulty walking, numbness, and problems with coordination and balance.",
  obsessive_compulsive_disorder_ocd:
    "OCD is a mental health disorder characterized by obsessive thoughts and compulsive behaviors. Individuals with OCD may engage in repetitive rituals to alleviate anxiety.",
  obsessive_compulsive_disorder:
    "OCD is a mental health disorder characterized by obsessive thoughts and compulsive behaviors. Individuals with OCD may engage in repetitive rituals to alleviate anxiety.",
  ocd: "OCD(obsessive compulsive disorder) is a mental health disorder characterized by obsessive thoughts and compulsive behaviors. Individuals with OCD may engage in repetitive rituals to alleviate anxiety.",
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
  the_common_cold:
    "The common cold is a viral infection of the upper respiratory tract. It is characterized by symptoms such as sore throat, runny nose, coughing, and sneezing.",
  rabies:
    "Rabies is a viral disease that affects the central nervous system. It is transmitted through the bite of an infected animal and can be fatal if not treated promptly.",
  herpes:
    "Herpes is a viral infection caused by herpes simplex viruses. It can cause cold sores on the mouth or genitals and, in some cases, lead to more severe complications.",
  hypothermia:
    "Hypothermia occurs when the body loses heat faster than it can produce it, causing a dangerously low body temperature. It can result in confusion, shivering, and loss of consciousness.",
  mrsa: "MRSA (Methicillin-Resistant Staphylococcus Aureus) is a type of bacteria that is resistant to many antibiotics. It can cause skin infections and, in severe cases, lead to bloodstream infections and pneumonia.",
  h1n1: "H1N1, also known as the swine flu, is a subtype of influenza A virus. It caused a global pandemic in 2009. Symptoms are similar to those of regular flu and can range from mild to severe.",
  anorexia:
    "Anorexia nervosa is an eating disorder characterized by an intense fear of gaining weight and a distorted body image. People with anorexia restrict their food intake, leading to severe weight loss.",
  bulimia:
    "Bulimia nervosa is an eating disorder characterized by binge eating followed by purging, such as vomiting or excessive exercise. It can lead to electrolyte imbalances and other health complications.",
  glaucoma:
    "Glaucoma is a group of eye conditions that damage the optic nerve, leading to vision loss and blindness. Increased intraocular pressure is a major risk factor for glaucoma.",
  osteoarthritis:
    "Osteoarthritis is a degenerative joint disease that occurs when the protective cartilage on the ends of bones wears down over time. It causes pain, swelling, and reduced joint mobility.",
  tinnitus:
    "Tinnitus is the perception of noise or ringing in the ears without any external sound source. It can be caused by various factors, including exposure to loud noises and earwax blockage.",
  aneurysm:
    "An aneurysm is a bulge or ballooning in a blood vessel caused by a weakened arterial wall. Aneurysms can rupture, leading to severe internal bleeding and life-threatening complications.",
  endometriosis:
    "Endometriosis is a painful disorder in which tissue similar to the uterine lining grows outside the uterus. It can cause pelvic pain, infertility, and painful menstrual periods.",
  hypertension:
    "Hypertension, or high blood pressure, is a condition where the force of blood against the artery walls is consistently too high. It increases the risk of heart disease, stroke, and kidney problems.",
  jaundice:
    "Jaundice is a yellow discoloration of the skin and eyes caused by high levels of bilirubin in the blood. It can indicate liver or gallbladder problems and other underlying medical conditions.",
  narcolepsy:
    "Narcolepsy is a chronic sleep disorder characterized by excessive daytime sleepiness and sudden episodes of sleep. People with narcolepsy may experience cataplexy, a sudden loss of muscle tone.",
  osteoporosis:
    "Osteoporosis is a bone disease characterized by reduced bone density and increased risk of fractures. It often occurs in postmenopausal women and elderly individuals.",
  pneumonia:
    "Pneumonia is an inflammatory lung condition caused by bacterial, viral, or fungal infections. It leads to cough, difficulty breathing, and chest pain. Severe cases can be life-threatening.",
  scoliosis:
    "Scoliosis is a sideways curvature of the spine, often occurring during the growth spurt before puberty. Severe cases can cause pain and breathing difficulties.",
  lupus:
    "Lupus is an autoimmune disease that can affect various parts of the body, including joints, skin, kidneys, and organs. It can cause fatigue, joint pain, and skin rashes.",
  fibroids:
    "Uterine fibroids are non-cancerous growths in the uterus that can cause pelvic pain, heavy menstrual bleeding, and reproductive issues.",
  pneumonia:
    "Pneumonia is an inflammatory lung condition caused by infections, leading to symptoms like fever, cough, and difficulty breathing. It can be bacterial, viral, or fungal in origin.",
  meningitis:
    "Meningitis is inflammation of the protective membranes covering the brain and spinal cord. It is often caused by infections and can lead to severe headaches, neck stiffness, and sensitivity to light.",
  anemia:
    "Anemia is a condition characterized by a lack of red blood cells or low hemoglobin levels, leading to fatigue, weakness, and pale skin.",
  alopecia:
    "Alopecia is a medical term for hair loss. It can occur on the scalp or other parts of the body and may result from genetics, hormonal changes, or autoimmune disorders.",
  eczema:
    "Eczema, also known as atopic dermatitis, is a skin condition characterized by red, itchy, and inflamed skin. It often occurs in response to allergens or irritants.",
  hives:
    "Hives, or urticaria, are raised, itchy welts on the skin that often result from an allergic reaction to food, medication, or other triggers.",
  dermatitis:
    "Dermatitis refers to inflammation of the skin, resulting in redness, itching, and often a rash. It can have various causes, including allergic reactions to substances like certain soaps, chemicals, or plants (contact dermatitis), or non-allergic factors such as irritants, dry skin, or genetic predisposition. Dermatitis can appear in different forms, such as eczema, seborrheic dermatitis, or atopic dermatitis. Proper identification of the cause and management, which may include avoiding triggers, using topical treatments, and moisturizing, are crucial in alleviating symptoms and preventing flare-ups.",
  dyslexia:
    "Dyslexia is a learning disorder that affects reading, spelling, and writing abilities. It is not related to intelligence and often requires specialized teaching methods.",
  myopia:
    "Myopia, or nearsightedness, is a refractive error where distant objects appear blurry. It occurs when the eyeball is too long or the cornea has too much curvature.",
  glaucoma:
    "Glaucoma is a group of eye conditions that damage the optic nerve, leading to vision loss and blindness. Increased intraocular pressure is a major risk factor for glaucoma.",
  bipolar:
    "Bipolar disorder is a mental health condition characterized by extreme mood swings, including manic episodes of elevated mood and depressive episodes of sadness and hopelessness.",
  schizophrenia:
    "Schizophrenia is a severe mental disorder characterized by distorted thinking, hallucinations, and delusions. It affects a person's ability to perceive reality accurately.",
  dyscalculia:
    "Dyscalculia is a learning disorder that affects mathematical abilities. Individuals with dyscalculia may have difficulty understanding numbers, performing calculations, and solving math problems.",
  narcolepsy:
    "Narcolepsy is a chronic sleep disorder characterized by excessive daytime sleepiness and sudden, uncontrollable episodes of falling asleep. It can significantly impact daily activities.",
  emphysema:
    "Emphysema is a lung disease that damages the air sacs in the lungs, leading to difficulty breathing and chronic cough. It is often caused by long-term exposure to cigarette smoke.",
  osteogenesis_imperfecta:
    "Osteogenesis imperfecta, or brittle bone disease, is a genetic disorder characterized by fragile bones that break easily. It is caused by a deficiency in collagen, a protein essential for bone strength.",
  polycystic_ovary_syndrome:
    "Polycystic ovary syndrome (PCOS) is a hormonal disorder that affects the ovaries and can lead to irregular periods, ovarian cysts, and difficulty conceiving.",
  endometrial_cancer:
    "Endometrial cancer is a type of cancer that develops in the lining of the uterus. It can cause abnormal vaginal bleeding, pelvic pain, and changes in bowel habits.",
  glomerulonephritis:
    "Glomerulonephritis is inflammation of the glomeruli, tiny filters in the kidneys that help remove excess fluids and waste from the bloodstream. It can result in kidney damage and impaired kidney function.",
  pancreatitis:
    "Pancreatitis is inflammation of the pancreas, a gland behind the stomach. It can cause severe abdominal pain, nausea, and vomiting. Chronic pancreatitis can lead to digestive problems.",
  parkinsons:
    "Parkinson's disease is a progressive neurological disorder that affects movement. It leads to tremors, stiffness, and difficulty with balance and coordination.",
  osteosarcoma:
    "Osteosarcoma is a type of bone cancer that primarily affects young people. It often develops in the long bones and can cause pain, swelling, and fractures.",
  cysticercosis:
    "Cysticercosis is a parasitic infection caused by the larvae of the pork tapeworm. It can affect various organs, leading to seizures, muscle pain, and neurological symptoms.",
  hyperthyroidism:
    "Hyperthyroidism is a condition where the thyroid gland produces excessive thyroid hormones. It can cause weight loss, rapid heartbeat, and anxiety.",
  hypothyroidism:
    "Hypothyroidism is a condition where the thyroid gland does not produce enough thyroid hormones. It can lead to fatigue, weight gain, and depression.",
  thalassemia:
    "Thalassemia is a genetic blood disorder that affects hemoglobin production. It can cause anemia, fatigue, and pale skin.",
  tinnitus:
    "Tinnitus is the perception of ringing or buzzing sounds in the ears when there is no external sound source. It can be caused by exposure to loud noises, earwax blockage, or age-related hearing loss.",
  vertigo:
    "Vertigo is a type of dizziness characterized by a spinning sensation. It often feels like the person or their surroundings are moving or spinning when they are not.",
  osteomyelitis:
    "Osteomyelitis is a bone infection caused by bacteria or fungi. It can lead to pain, swelling, and difficulty moving the affected limb.",
  pericarditis:
    "Pericarditis is inflammation of the pericardium, the sac surrounding the heart. It can cause chest pain, fever, and difficulty breathing.",
  aphasia:
    "Aphasia is a language disorder that impairs a person's ability to speak, understand, read, or write. It often occurs after a stroke or brain injury.",
  ankylosing_spondylitis:
    "Ankylosing spondylitis is a type of arthritis that primarily affects the spine, causing pain, stiffness, and reduced mobility. It can also affect other joints and organs.",
  nephrotic_syndrome:
    "Nephrotic syndrome is a kidney disorder characterized by proteinuria, edema, low blood protein levels, and high cholesterol levels. It can result from various underlying causes.",
  pleurisy:
    "Pleurisy is inflammation of the pleura, the membranes surrounding the lungs. It can cause sharp chest pain, especially when breathing or coughing.",
  dengue_fever:
    "Dengue fever is a mosquito-borne viral infection that causes flu-like symptoms, severe joint pain, and a skin rash. In severe cases, it can lead to dengue hemorrhagic fever or dengue shock syndrome.",
  vitiligo:
    "Vitiligo is a skin disorder that causes loss of pigment, resulting in white patches on the skin and hair. The exact cause is unknown, but it is thought to involve autoimmune mechanisms.",
  fibroids:
    "Fibroids, or uterine leiomyomas, are non-cancerous growths in the uterus that can cause pelvic pain, heavy menstrual bleeding, and reproductive issues.",
  hyperhidrosis:
    "Hyperhidrosis is a condition characterized by excessive sweating, often beyond what is necessary to regulate body temperature. It can affect various parts of the body.",
  sarcoidosis:
    "Sarcoidosis is a disease that leads to inflammation in various organs, most commonly the lungs and lymph nodes. It can cause cough, shortness of breath, and fatigue.",
  acne_rosacea:
    "Acne rosacea is a chronic skin condition that causes redness, visible blood vessels, and pimple-like bumps on the face. It often affects middle-aged adults and can cause eye irritation.",
  alopecia_areata:
    "Alopecia areata is an autoimmune disorder that causes hair loss, often in small, round patches on the scalp. It can also affect eyebrows, eyelashes, and other body hair.",
  amyotrophic_lateral_sclerosis_als:
    "Amyotrophic lateral sclerosis (ALS), also known as Lou Gehrig's disease, is a progressive neurodegenerative disorder that affects nerve cells in the brain and spinal cord, leading to muscle weakness and loss of motor control.",
  ankylosing_spondylitis:
    "Ankylosing spondylitis is a type of arthritis that primarily affects the spine, causing inflammation of the vertebrae and leading to chronic pain and stiffness.",
  appendicitis:
    "Appendicitis is inflammation of the appendix, a small pouch located near the large intestine. It causes abdominal pain, loss of appetite, and can lead to a medical emergency if the appendix ruptures.",
  atrial_fibrillation:
    "Atrial fibrillation is a heart condition characterized by irregular and rapid heartbeats. It can lead to fatigue, palpitations, and an increased risk of stroke.",
  bell_palsy:
    "Bell's palsy is a temporary facial paralysis caused by damage or inflammation of the facial nerve. It results in sudden weakness or drooping on one side of the face.",
  bursitis:
    "Bursitis is inflammation of the bursae, small sacs filled with fluid that cushion and lubricate joints. It causes pain and swelling in the affected joint.",
  cataracts:
    "Cataracts are cloudy areas in the lens of the eye that can cause blurry or cloudy vision. It is often related to aging but can also be caused by injury or certain medical conditions.",
  cellulitis:
    "Cellulitis is a bacterial skin infection that causes redness, swelling, and tenderness of the affected area. It can spread rapidly and lead to serious complications if not treated promptly.",
  chlamydia:
    "Chlamydia is a common sexually transmitted infection caused by the bacterium Chlamydia trachomatis. It often has no symptoms but can lead to serious reproductive health issues if left untreated.",
  chronic_kidney_disease:
    "Chronic kidney disease (CKD) is a condition where the kidneys are unable to filter waste and excess fluids from the blood effectively. It can lead to kidney failure if not managed.",
  cluster_headaches:
    "Cluster headaches are severe headaches that occur in cyclical patterns or clusters. They cause intense pain around one eye and can last for weeks or months.",
  colitis:
    "Colitis is inflammation of the colon, leading to abdominal pain, diarrhea, and bloody stools. It can be caused by infections, autoimmune disorders, or inflammatory bowel disease.",
  diverticulitis:
    "Diverticulitis is inflammation or infection of small pouches (diverticula) that can form in the walls of the colon. It causes abdominal pain, fever, and changes in bowel habits.",
  dry_eye_syndrome:
    "Dry eye syndrome is a condition where the eyes do not produce enough tears or the tears evaporate too quickly, leading to discomfort, redness, and blurred vision.",
  endometrial_polyps:
    "Endometrial polyps are growths in the lining of the uterus (endometrium). They can cause abnormal uterine bleeding and, in some cases, lead to fertility problems.",
  epilepsy:
    "Epilepsy is a neurological disorder characterized by recurrent seizures. Seizures can vary from brief lapses of attention to severe and prolonged convulsions.",
  fibrocystic_breast_disease:
    "Fibrocystic breast disease is a benign condition in which the breasts feel lumpy or nodular due to fluid-filled cysts and fibrous tissue. It can cause breast tenderness and pain.",
  gallstones:
    "Gallstones are solid particles that form in the gallbladder, a small organ beneath the liver. They can cause intense pain in the upper abdomen and may require medical intervention.",
  gastroesophageal_reflux_disease_gerd:
    "Gastroesophageal reflux disease (GERD) is a chronic condition where stomach acid regularly flows back into the esophagus, causing symptoms such as heartburn and regurgitation.",
  glomerulonephritis:
    "Glomerulonephritis is inflammation of the glomeruli, tiny filters in the kidneys that help remove excess fluids and waste from the bloodstream. It can result in kidney damage and impaired kidney function.",
  graves_disease:
    "Graves' disease is an autoimmune disorder that causes the thyroid gland to overproduce thyroid hormones. It can lead to hyperthyroidism, resulting in symptoms such as weight loss, rapid heartbeat, and bulging eyes.",
  guillain_barre_syndrome:
    "Guillain-Barré syndrome is a rare neurological disorder where the body's immune system attacks the peripheral nerves, leading to muscle weakness and sometimes paralysis.",
  hemorrhoids:
    "Hemorrhoids are swollen blood vessels in the rectum or anus, causing discomfort, pain, and bleeding during bowel movements.",
  hepatitis_c:
    "Hepatitis C is a viral infection that affects the liver, often leading to chronic liver disease. It is transmitted through contact with infected blood and can cause fatigue, jaundice, and liver damage.",
  hiatus_hernia:
    "Hiatus hernia occurs when part of the stomach pushes up through the diaphragm into the chest cavity. It can cause heartburn, regurgitation, and chest pain.",
  hives:
    "Hives, or urticaria, are raised, itchy welts on the skin that often result from an allergic reaction to food, medication, or other triggers.",
  huntingtons_disease:
    "Huntington's disease is a genetic disorder that causes progressive degeneration of nerve cells in the brain. It leads to motor dysfunction, cognitive decline, and behavioral changes.",
  hyperthyroidism:
    "Hyperthyroidism is a condition where the thyroid gland produces excessive thyroid hormones. It can cause weight loss, rapid heartbeat, and anxiety.",
  hypothyroidism:
    "Hypothyroidism is a condition where the thyroid gland does not produce enough thyroid hormones. It can lead to fatigue, weight gain, and depression.",
  irritable_bowel_syndrome_ibs:
    "Irritable bowel syndrome (IBS) is a common digestive disorder that causes abdominal pain, cramping, bloating, and changes in bowel habits.",
  kidney_infection:
    "Kidney infection, also known as pyelonephritis, is a bacterial infection of the kidneys. It causes back pain, fever, and urinary symptoms and can lead to kidney damage.",
  lactose_intolerance:
    "Lactose intolerance is the inability to digest lactose, a sugar found in milk and dairy products. It can cause bloating, diarrhea, and abdominal pain after consuming dairy.",
  laryngitis:
    "Laryngitis is inflammation of the larynx (voice box), leading to hoarseness, throat pain, and difficulty speaking. It is often caused by viral or bacterial infections.",
  macular_degeneration:
    "Macular degeneration is an age-related eye condition that affects the macula, leading to central vision loss. It can cause blurriness and difficulty recognizing faces or reading.",
  mastitis:
    "Mastitis is inflammation of the breast tissue, often occurring in breastfeeding women. It causes breast pain, swelling, and redness and may be accompanied by flu-like symptoms.",
  melanoma:
    "Melanoma is a type of skin cancer that develops in melanocytes, the pigment-producing cells. It often appears as a mole with irregular borders and varying colors.",
  menopause:
    "Menopause is a natural biological process in women, marking the end of menstrual cycles. It causes symptoms such as hot flashes, mood swings, and changes in sexual desire.",
  migraines:
    "Migraines are severe headaches that can cause throbbing pain, nausea, and sensitivity to light and sound. They can last for hours or even days.",
  mitral_valve_prolapse:
    "Mitral valve prolapse is a heart valve disorder where the mitral valve does not close properly, allowing blood to leak backward. It may not cause symptoms in some cases but can lead to chest pain and palpitations.",
  multiple_myeloma:
    "Multiple myeloma is a cancer of plasma cells, a type of white blood cell. It can cause bone pain, fatigue, and anemia.",
  narcolepsy:
    "Narcolepsy is a chronic sleep disorder characterized by excessive daytime sleepiness and sudden, uncontrollable episodes of falling asleep. It can significantly impact daily activities.",
  obsessive_compulsive_disorder_ocd:
    "Obsessive-compulsive disorder (OCD) is a mental health condition characterized by obsessive thoughts and compulsive behaviors. Individuals with OCD may engage in repetitive rituals to alleviate anxiety.",
  osteomyelitis:
    "Osteomyelitis is a bone infection caused by bacteria or fungi. It can lead to pain, swelling, and difficulty moving the affected limb.",
  ovarian_cyst:
    "Ovarian cysts are fluid-filled sacs that form on the ovaries. They are common and often do not cause symptoms. However, large cysts can cause pelvic pain and discomfort.",
  pancreatitis:
    "Pancreatitis is inflammation of the pancreas, a gland behind the stomach. It can cause severe abdominal pain, nausea, and vomiting. Chronic pancreatitis can lead to digestive problems.",
  panic_disorder:
    "Panic disorder is a type of anxiety disorder characterized by recurring panic attacks. These episodes involve sudden feelings of fear, along with physical symptoms such as rapid heartbeat and shortness of breath.",
  pelvic_inflammatory_disease_pid:
    "Pelvic inflammatory disease (PID) is an infection of the female reproductive organs, often caused by sexually transmitted bacteria. It can lead to abdominal pain, fever, and fertility problems.",
  peptic_ulcer_disease:
    "Peptic ulcer disease is a condition where open sores develop on the inner lining of the stomach, small intestine, or esophagus. It can cause burning stomach pain, bloating, and nausea.",
  peritonitis:
    "Peritonitis is inflammation of the peritoneum, the tissue lining the abdominal cavity. It causes severe abdominal pain, tenderness, and swelling and is often a medical emergency.",
  plantar_fasciitis:
    "Plantar fasciitis is inflammation of the plantar fascia, a band of tissue on the bottom of the foot. It causes heel pain, especially with the first steps in the morning.",
  pneumonia:
    "Pneumonia is an inflammatory lung condition caused by infections, leading to symptoms like fever, cough, and difficulty breathing. It can be bacterial, viral, or fungal in origin.",
  polycystic_kidney_disease:
    "Polycystic kidney disease (PKD) is a genetic disorder where fluid-filled cysts form in the kidneys, leading to kidney enlargement and impaired kidney function.",
  post_traumatic_stress_disorder_ptsd:
    "Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. It causes flashbacks, nightmares, and severe anxiety.",
  premenstrual_syndrome_pms:
    "Premenstrual syndrome (PMS) refers to a group of physical and emotional symptoms that occur in the days leading up to menstruation. It can include mood swings, bloating, and breast tenderness.",
  prostatitis:
    "Prostatitis is inflammation of the prostate gland, often causing pelvic pain, urinary problems, and discomfort during ejaculation. It can be bacterial or non-bacterial in origin.",
  psoriatic_arthritis:
    "Psoriatic arthritis is a type of arthritis that affects some people with psoriasis, a skin condition. It causes joint pain, swelling, and skin symptoms such as red, scaly patches.",
  pulmonary_embolism:
    "Pulmonary embolism is a sudden blockage in a lung artery, usually caused by blood clots that travel to the lungs from the legs or other parts of the body. It can be life-threatening.",
  restless_legs_syndrome_rls:
    "Restless legs syndrome (RLS) is a neurological disorder characterized by uncomfortable sensations in the legs, leading to an irresistible urge to move them. It often worsens at night and can disrupt sleep.",
  retinal_detachment:
    "Retinal detachment is a serious eye condition where the retina separates from its normal position, leading to vision loss. It requires immediate medical attention.",
  rheumatic_fever:
    "Rheumatic fever is an inflammatory condition that can develop after untreated strep throat or scarlet fever. It can affect the heart, joints, skin, and brain.",
  rosacea:
    "Rosacea is a chronic skin condition that causes redness, visible blood vessels, and pimple-like bumps on the face. It can also affect the eyes, causing irritation and redness.",
  scabies:
    "Scabies is a contagious skin infestation caused by microscopic mites. It leads to intense itching, especially at night, and can result in a rash with small red bumps.",
  schizophrenia:
    "Schizophrenia is a severe mental disorder characterized by distorted thinking, hallucinations, and delusions. It affects a person's ability to perceive reality accurately.",
  scleroderma:
    "Scleroderma is a chronic autoimmune disease that causes the skin and connective tissues to harden and tighten. It can also affect internal organs and blood vessels.",
  sickle_cell_anemia:
    "Sickle cell anemia is a genetic blood disorder where red blood cells become misshapen and break down more easily, leading to anemia, pain, and organ damage.",
  sjogrens_syndrome:
    "Sjögren's syndrome is an autoimmune disorder where the immune system attacks the glands that produce saliva and tears. It causes dry mouth, dry eyes, and other symptoms.",
  sleep_paralysis:
    "Sleep paralysis is a temporary inability to move or speak while falling asleep or waking up. It can be accompanied by hallucinations and a feeling of pressure on the chest.",
  spina_bifida:
    "Spina bifida is a birth defect where the spinal cord and surrounding structures do not form properly. It can cause varying degrees of physical and intellectual disabilities.",
  splenomegaly:
    "Splenomegaly is an enlargement of the spleen, often due to underlying conditions such as liver disease, infections, or blood disorders. It can cause pain and discomfort in the abdomen.",
  stuttering:
    "Stuttering is a speech disorder characterized by disruptions in the normal flow of speech, including repetitions, prolongations, and blocks. It often starts in childhood and can persist into adulthood.",
  temporomandibular_joint_disorder_tmj:
    "Temporomandibular joint disorder (TMJ) is a condition that causes pain and dysfunction in the jaw joint and muscles that control jaw movement. It can cause jaw pain, headaches, and difficulty chewing.",
  testicular_cancer:
    "Testicular cancer is a type of cancer that develops in the testicles, the male reproductive glands. It can cause testicular pain, swelling, and lumps.",
  tinnitus:
    "Tinnitus is the perception of ringing or buzzing sounds in the ears when there is no external sound source. It can be caused by various factors, including exposure to loud noises and earwax blockage.",
  trichotillomania:
    "Trichotillomania is a mental health disorder characterized by the urge to pull out one's hair, leading to hair loss and distress. It is often related to anxiety and stress.",
  tuberculosis:
    "Tuberculosis (TB) is a bacterial infection that primarily affects the lungs. It can cause cough, chest pain, and weight loss. TB is spread through the air when an infected person coughs or sneezes.",
  ulcerative_colitis:
    "Ulcerative colitis is a chronic inflammatory bowel disease that causes inflammation and ulcers in the colon and rectum. It can lead to abdominal pain, diarrhea, and weight loss.",
  urinary_incontinence:
    "Urinary incontinence is the involuntary leakage of urine, often due to weakened pelvic muscles or nerve damage. It can occur during activities like coughing or laughing.",
  uterine_fibroids:
    "Uterine fibroids are non-cancerous growths in the uterus that can cause pelvic pain, heavy menstrual bleeding, and reproductive issues.",
  varicose_veins:
    "Varicose veins are swollen, twisted veins that are visible just beneath the surface of the skin. They often occur in the legs and can cause pain, aching, and discomfort.",
  vertigo:
    "Vertigo is a type of dizziness characterized by a spinning sensation. It often feels like the person or their surroundings are moving or spinning when they are not.",
  vitiligo:
    "Vitiligo is a skin disorder that causes loss of pigment, resulting in white patches on the skin and hair. The exact cause is unknown, but it is thought to involve autoimmune mechanisms.",
  vocal_cord_nodules:
    "Vocal cord nodules are small, non-cancerous growths on the vocal cords. They can cause hoarseness and a rough voice, especially in individuals who strain their voice frequently.",
  whooping_cough_pertussis:
    "Whooping cough, or pertussis, is a highly contagious respiratory infection caused by bacteria. It leads to severe coughing fits, often followed by a 'whooping' sound when breathing in.",
  wilsons_disease:
    "Wilson's disease is a genetic disorder that leads to copper buildup in the body, affecting the liver, brain, and other organs. It can cause jaundice, tremors, and behavioral changes.",
  yeast_infection:
    "Yeast infections, also known as candidiasis, occur when there is an overgrowth of yeast in the body. They can affect various parts of the body, including the mouth, throat, and genital area.",
  yellow_fever:
    "Yellow fever is a viral infection transmitted by mosquitoes. It can cause fever, jaundice, and organ failure. Vaccination is available to prevent yellow fever infection.",
  zika_virus:
    "Zika virus is a mosquito-borne viral infection that can cause mild to severe illness. In pregnant women, it can lead to birth defects in the baby. Precautions include avoiding mosquito bites.",
  asbestos_related_diseases:
    "Asbestos-related diseases are a group of lung conditions caused by exposure to asbestos fibers. They include asbestosis, lung cancer, and mesothelioma. Avoiding asbestos exposure is crucial in prevention.",
  carbon_monoxide_poisoning:
    "Carbon monoxide poisoning occurs when carbon monoxide, a colorless and odorless gas, builds up in enclosed spaces. It can cause headaches, dizziness, and in severe cases, death.",
  radiation_sickness:
    "Radiation sickness, also known as acute radiation syndrome, occurs after exposure to high levels of ionizing radiation. It can cause symptoms such as nausea, vomiting, and decreased organ function.",
  trench_foot:
    "Trench foot is a painful condition that occurs after prolonged exposure to cold and wet conditions. It leads to numbness, swelling, and discoloration of the feet, and can cause tissue damage.",
  nocardiosis:
    "Nocardiosis is a bacterial infection caused by Nocardia species. It can affect the lungs, brain, and skin, leading to symptoms such as cough, confusion, and skin abscesses.",
  hand_foot_and_mouth_disease:
    "Hand, foot, and mouth disease is a viral illness common in children. It causes fever, sore throat, and characteristic sores in the mouth and on the hands and feet.",
  rocky_mountain_spotted_fever:
    "Rocky Mountain spotted fever is a tick-borne illness caused by Rickettsia rickettsii bacteria. It leads to fever, rash, and flu-like symptoms. Early treatment with antibiotics is essential.",
  trench_fever:
    "Trench fever is a bacterial infection transmitted by lice. It causes fever, severe headaches, and muscle aches. Proper hygiene and avoiding lice-infested areas can prevent the disease.",
  histoplasmosis:
    "Histoplasmosis is a fungal infection caused by inhaling Histoplasma capsulatum spores. It can affect the lungs, leading to flu-like symptoms and, in severe cases, respiratory distress.",
  norovirus_infection:
    "Norovirus infection, also known as the stomach flu, is highly contagious and causes gastroenteritis. It leads to vomiting, diarrhea, stomach cramps, and dehydration.",
  clostridium_difficile_infection:
    "Clostridium difficile infection, often referred to as C. diff, is a bacterial infection that causes severe diarrhea and inflammation of the colon. It commonly occurs after antibiotic use.",
  necrotizing_fasciitis:
    "Necrotizing fasciitis, also known as flesh-eating bacteria, is a severe soft tissue infection that spreads rapidly and can lead to tissue death. It requires immediate medical intervention.",
  scoliosis:
    "Scoliosis is a sideways curvature of the spine, leading to an S or C-shaped appearance. It can cause back pain and, in severe cases, affect lung and heart function.",
  tay_sachs_disease:
    "Tay-Sachs disease is a rare genetic disorder that affects the central nervous system. It leads to progressive neurological deterioration, loss of motor skills, and vision and hearing impairment.",
  hyperemesis_gravidarum:
    "Hyperemesis gravidarum is a severe form of morning sickness during pregnancy. It causes persistent nausea, vomiting, and dehydration, requiring medical treatment to ensure the well-being of both the mother and the baby.",
  ebola_virus_disease:
    "Ebola virus disease is a severe and often fatal illness caused by the Ebola virus. It leads to fever, severe internal bleeding, and organ failure. Strict infection control measures are necessary to prevent its spread.",
  leishmaniasis:
    "Leishmaniasis is a parasitic infection transmitted through sandfly bites. It can cause skin sores (cutaneous leishmaniasis) or affect internal organs (visceral leishmaniasis), leading to serious health complications.",
  west_nile_virus_infection:
    "West Nile virus infection is a mosquito-borne illness that can cause flu-like symptoms, and in severe cases, neurological complications such as encephalitis or meningitis.",
  mumps:
    "Mumps is a viral infection that affects the salivary glands, causing swelling and pain in the jaw. It can also lead to fever, headache, and muscle aches.",
  rubella:
    "Rubella, also known as German measles, is a viral infection that causes a distinctive red rash on the skin. It can lead to complications if contracted during pregnancy, including birth defects.",
  cryptosporidiosis:
    "Cryptosporidiosis is a diarrheal disease caused by the Cryptosporidium parasite. It can cause watery diarrhea, stomach cramps, and dehydration, particularly in individuals with weakened immune systems.",
  chikungunya_fever:
    "Chikungunya fever is a viral disease transmitted by mosquitoes. It causes high fever, severe joint pain, and rash. There is no specific antiviral treatment, but supportive care can help manage symptoms.",
  typhoid_fever:
    "Typhoid fever is a bacterial infection caused by Salmonella typhi. It leads to high fever, abdominal pain, and gastrointestinal symptoms. Vaccination and proper hygiene can prevent the disease.",
  trench_mouth:
    "Trench mouth, or acute necrotizing ulcerative gingivitis (ANUG), is a severe gum infection causing painful, bleeding gums and ulcers. It can occur during times of stress or poor oral hygiene.",
  gingivitis:
    "Gingivitis is a common and mild form of gum disease (periodontal disease) that causes irritation, redness, and swelling (inflammation) of the gingiva, the part of the gum around the base of the teeth. It is usually caused by the accumulation of plaque—a sticky film of bacteria—on teeth. Gingivitis can lead to gum bleeding, bad breath, and, if left untreated, can progress to more severe forms of gum disease. Good oral hygiene practices, including regular brushing, flossing, and professional dental cleanings, are essential in preventing and treating gingivitis.",
  valley_fever:
    "Valley fever, or coccidioidomycosis, is a fungal infection caused by inhaling spores of Coccidioides fungi. It can cause flu-like symptoms and, in severe cases, affect the lungs and other organs.",
  creutzfeldt_jakob_disease_cjd:
    "Creutzfeldt-Jakob disease (CJD) is a rare and fatal brain disorder characterized by rapidly progressive dementia, muscle stiffness, and twitching. It is caused by abnormal proteins called prions.",
  dengue_fever:
    "Dengue fever is a mosquito-borne viral infection causing high fever, severe joint and muscle pain, and a rash. In severe cases, it can lead to dengue hemorrhagic fever or dengue shock syndrome.",
  schistosomiasis:
    "Schistosomiasis is a parasitic disease caused by trematode worms of the Schistosoma species. It can cause abdominal pain, diarrhea, and liver or bladder damage.",
  elephantiasis_lymphatic_filariasis:
    "Elephantiasis, or lymphatic filariasis, is a parasitic disease transmitted by mosquitoes. It leads to severe swelling in the arms, legs, or genitals due to damage to the lymphatic system.",
  guinea_worm_disease:
    "Guinea worm disease, or dracunculiasis, is a parasitic infection caused by the Guinea worm. It leads to painful blisters and ulcers as the worm emerges from the skin.",
  river_blindness_onchocerciasis:
    "River blindness, or onchocerciasis, is a parasitic disease transmitted by black flies. It can cause skin rash, itching, and eye lesions, potentially leading to blindness.",
  sleeping_sickness_african_trypanosomiasis:
    "Sleeping sickness, or African trypanosomiasis, is a parasitic disease transmitted by tsetse flies. It leads to neurological symptoms, sleep disturbances, and, if untreated, can be fatal.",
  toxoplasmosis:
    "Toxoplasmosis is a parasitic infection caused by Toxoplasma gondii. It can cause flu-like symptoms and, in severe cases, affect the brain, eyes, or other organs. It poses a risk to pregnant women and individuals with weakened immune systems.",
  trachoma:
    "Trachoma is a bacterial infection of the eyes, leading to conjunctivitis and scarring of the inner eyelids. It is a leading cause of preventable blindness worldwide.",
  whipworm_infection:
    "Whipworm infection, or trichuriasis, is a parasitic infection of the large intestine caused by Trichuris trichiura worms. It can cause abdominal pain, diarrhea, and anemia.",
  yellow_nail_syndrome:
    "Yellow nail syndrome is a rare disorder characterized by yellow, thickened, and slow-growing nails. It is often associated with respiratory or lymphatic conditions.",
  bronchiolitis_obliterans_organizing_pneumonia_boop:
    "Bronchiolitis obliterans organizing pneumonia (BOOP) is a rare lung disorder that causes cough, shortness of breath, and flu-like symptoms. It leads to inflammation and scarring of the bronchioles and alveoli.",
  wolff_parkinson_white_syndrome:
    "Wolff-Parkinson-White syndrome is a heart disorder where an extra electrical pathway in the heart can cause rapid heartbeat (tachycardia). It can lead to palpitations, dizziness, and fainting.",
  familial_mediterranean_fever:
    "Familial Mediterranean fever (FMF) is a genetic disorder characterized by recurrent episodes of fever and inflammation in the abdomen, chest, or joints. It can cause pain and swelling.",
  hereditary_angioedema:
    "Hereditary angioedema is a genetic disorder causing rapid swelling of the skin and mucous membranes. It can lead to abdominal pain, difficulty breathing, and swelling of the face and throat.",
  erythromelalgia:
    "Erythromelalgia is a rare vascular disorder characterized by episodes of red, hot, and painful extremities, often triggered by heat or exercise. Cooling the affected area can provide relief.",
  paraneoplastic_pemphigus:
    "Paraneoplastic pemphigus is a rare autoimmune blistering disorder associated with malignancies. It causes painful sores in the mouth, throat, and other mucous membranes.",
  postural_orthostatic_tachycardia_syndrome_pots:
    "Postural orthostatic tachycardia syndrome (POTS) is a condition characterized by a rapid increase in heartbeat upon standing up, causing dizziness and fainting. It can significantly impact daily functioning.",
  relapsing_polychondritis:
    "Relapsing polychondritis is a rare autoimmune disorder that causes inflammation of cartilage in the body, leading to pain, swelling, and deformity of affected areas.",
  takayasu_arteritis:
    "Takayasu arteritis is a rare autoimmune disease that causes inflammation of the large blood vessels, particularly the aorta and its branches. It can lead to high blood pressure, chest pain, and fatigue.",
  polyarteritis_nodosa:
    "Polyarteritis nodosa is a rare autoimmune disease that affects small and medium-sized arteries, leading to inflammation and damage to various organs. It can cause fever, fatigue, and muscle pain.",
  giant_cell_arteritis:
    "Giant cell arteritis, also known as temporal arteritis, is a condition characterized by inflammation of large and medium-sized arteries, primarily in the head and neck. It can cause severe headaches, jaw pain, and vision problems.",
  granulomatosis_with_polyangiitis:
    "Granulomatosis with polyangiitis, formerly known as Wegener's granulomatosis, is a rare autoimmune disease that affects small and medium-sized blood vessels. It can cause sinus inflammation, lung and kidney problems, and organ damage.",
  eosinophilic_esophagitis:
    "Eosinophilic esophagitis is a chronic immune system disease characterized by inflammation of the esophagus. It can cause difficulty swallowing, chest pain, and food impaction.",
  fibromyalgia:
    "Fibromyalgia is a chronic pain condition characterized by widespread musculoskeletal pain, fatigue, and tenderness in localized areas. It can also cause sleep disturbances and cognitive difficulties.",
  complex_regional_pain_syndrome:
    "Complex regional pain syndrome (CRPS) is a chronic pain condition that usually affects an arm or a leg. It can cause severe pain, swelling, and changes in skin color and temperature.",
  conversion_disorder_functional_neurological_symptom_disorder:
    "Conversion disorder, also known as functional neurological symptom disorder, is a mental health condition where psychological stressors manifest as physical symptoms. These symptoms cannot be explained by any underlying medical condition.",
  dissociative_identity_disorder:
    "Dissociative identity disorder (DID) is a mental health condition characterized by the presence of two or more distinct personality states, each with its own pattern of perceiving and interacting with the world.",
  factitious_disorder:
    "Factitious disorder is a mental health condition where a person fakes or exaggerates physical or psychological symptoms for attention or sympathy. It is different from malingering, where symptoms are fabricated for external gains.",
  gender_dysphoria:
    "Gender dysphoria is a mental health condition where an individual experiences significant discomfort and distress due to a disconnect between their assigned gender at birth and their experienced or expressed gender identity.",
  intermittent_explosive_disorder:
    "Intermittent explosive disorder (IED) is a behavioral disorder characterized by sudden, aggressive outbursts that are disproportionate to the situation. These outbursts may involve verbal aggression, physical violence, or destruction of property.",
  kleptomania:
    "Kleptomania is a mental health disorder characterized by a recurrent urge to steal items that are not needed for personal use or monetary gain. The thefts are driven by tension before the act and pleasure or relief afterward.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  trichotillomania:
    "Trichotillomania is a mental health disorder characterized by the recurrent urge to pull out one's hair, resulting in noticeable hair loss. The behavior is often driven by anxiety and relief is experienced after hair pulling.",
  anosmia:
    "Anosmia is the loss or absence of the sense of smell. It can be temporary or permanent and may be caused by various factors, including viral infections, head injuries, or neurological disorders.",
  dysgeusia:
    "Dysgeusia is a distorted or altered sense of taste, often described as a metallic or bitter taste in the mouth. It can be a side effect of medications, infections, or neurological disorders.",
  hyperosmia:
    "Hyperosmia is an enhanced sense of smell, where a person can detect odors at lower concentrations than others. It can occur due to hormonal changes, migraines, or neurological conditions.",
  hyposmia:
    "Hyposmia is a reduced sense of smell, which can result from nasal congestion, viral infections, or neurological disorders. It can affect the ability to detect and distinguish various odors.",
  parosmia:
    "Parosmia is a distorted sense of smell, where familiar odors are perceived as unpleasant or different. It can occur after viral infections or head injuries affecting the olfactory system.",
  presbyosmia:
    "Presbyosmia is the natural age-related decline in the sense of smell. It often begins around middle age and can affect the ability to detect certain odors.",
  dysarthria:
    "Dysarthria is a motor speech disorder characterized by difficulty in articulating words due to weakness or paralysis of the muscles used for speech. It can result from brain injuries, nerve damage, or neurological conditions.",
  aphasia:
    "Aphasia is a language disorder that impairs the ability to speak, write, or understand language. It is often caused by brain injuries, strokes, or neurological disorders, and the severity can vary widely.",
  dysphonia:
    "Dysphonia is a voice disorder characterized by hoarseness, weakness, or discomfort in the vocal cords, leading to changes in pitch and volume. It can be caused by vocal cord nodules, infections, or neurological conditions.",
  aphonia:
    "Aphonia is the loss of the ability to produce speech sounds, resulting in the inability to speak. It can be temporary or permanent and may be caused by vocal cord injuries, neurological disorders, or psychological factors.",
  prosopagnosia:
    "Prosopagnosia, also known as face blindness, is a neurological disorder characterized by the inability to recognize familiar faces, including one's own face, despite intact vision and intellectual abilities.",
  dyscalculia:
    "Dyscalculia is a specific learning disability that affects a person's ability to understand, remember, and manipulate numbers and mathematical concepts. It is not related to intelligence but can significantly impact academic performance.",
  dysgraphia:
    "Dysgraphia is a specific learning disability that affects writing abilities. People with dysgraphia may have difficulty with handwriting, spelling, and organizing thoughts on paper, despite normal intelligence and adequate instruction.",
  prosopagnosia:
    "Prosopagnosia, also known as face blindness, is a neurological disorder characterized by the inability to recognize familiar faces, including one's own face, despite intact vision and intellectual abilities.",
  dyscalculia:
    "Dyscalculia is a specific learning disability that affects a person's ability to understand, remember, and manipulate numbers and mathematical concepts. It is not related to intelligence but can significantly impact academic performance.",
  dysgraphia:
    "Dysgraphia is a specific learning disability that affects writing abilities. People with dysgraphia may have difficulty with handwriting, spelling, and organizing thoughts on paper, despite normal intelligence and adequate instruction.",
  prosopagnosia:
    "Prosopagnosia, also known as face blindness, is a neurological disorder characterized by the inability to recognize familiar faces, including one's own face, despite intact vision and intellectual abilities.",
  dyscalculia:
    "Dyscalculia is a specific learning disability that affects a person's ability to understand, remember, and manipulate numbers and mathematical concepts. It is not related to intelligence but can significantly impact academic performance.",
  dysgraphia:
    "Dysgraphia is a specific learning disability that affects writing abilities. People with dysgraphia may have difficulty with handwriting, spelling, and organizing thoughts on paper, despite normal intelligence and adequate instruction.",
  phonagnosia:
    "Phonagnosia is a rare neurological disorder characterized by the inability to recognize familiar voices, including one's own voice, despite intact hearing and intellectual abilities.",
  restless_legs_syndrome:
    "Restless legs syndrome (RLS) is a neurological disorder characterized by uncomfortable sensations in the legs, leading to an irresistible urge to move them. Symptoms worsen during periods of rest or inactivity.",
  periodic_limb_movement_disorder:
    "Periodic limb movement disorder (PLMD) is a sleep disorder characterized by repetitive limb movements, usually involving the legs, during sleep. It can cause frequent awakenings and disrupt sleep.",
  rapid_eye_movement_sleep_behavior_disorder:
    "Rapid eye movement (REM) sleep behavior disorder is a sleep disorder where individuals physically act out their dreams during REM sleep. It can result in injuries to the person or their sleep partner.",
  hypersomnia:
    "Hypersomnia is a sleep disorder characterized by excessive daytime sleepiness and prolonged nighttime sleep. It can interfere with daily functioning and may be caused by various underlying conditions.",
  circadian_rhythm_sleep_disorder:
    "Circadian rhythm sleep disorders are a group of sleep disorders characterized by disturbances in the sleep-wake cycle. This can lead to difficulties falling asleep, staying awake, or maintaining a regular sleep schedule.",
  non_24_hour_sleep_wake_disorder:
    "Non-24-hour sleep-wake disorder is a circadian rhythm sleep disorder where the sleep-wake cycle is not synchronized with the 24-hour day. People with this disorder often have difficulty falling asleep and waking up at desired times.",
  insomnia:
    "Insomnia is a common sleep disorder characterized by difficulty falling asleep, staying asleep, or both. It can lead to daytime fatigue, irritability, and impaired functioning.",
  obstructive_sleep_apnea:
    "Obstructive sleep apnea is a sleep disorder where breathing is briefly and repeatedly interrupted during sleep. It can lead to loud snoring, gasping for air, and daytime sleepiness.",
  narcolepsy:
    "Narcolepsy is a neurological disorder that affects the control of sleep and wakefulness. It can cause sudden attacks of sleep, muscle weakness, and hallucinations.",
  sleep_talking:
    "Sleep talking, also known as somniloquy, is a sleep disorder characterized by talking during sleep without the person being aware of it. The content of speech can range from nonsensical words to coherent conversations.",
  night_terror_disorder:
    "Night terror disorder, or sleep terrors, is a sleep disorder characterized by intense fear and agitation during sleep, often accompanied by screaming and thrashing. The person usually has no memory of the episode.",
  sleepwalking:
    "Sleepwalking, or somnambulism, is a sleep disorder that involves walking or performing other complex behaviors while still asleep. It can be dangerous as the person is not aware of their actions.",
  bedwetting:
    "Bedwetting, or nocturnal enuresis, is a common childhood condition where a child involuntarily urinates during sleep. It can be caused by various factors, including delayed development of bladder control.",
  anemia:
    "Anemia is a condition characterized by a deficiency of red blood cells or a lack of hemoglobin, leading to reduced oxygen-carrying capacity in the blood. It can cause fatigue, weakness, and paleness.",
  hemophilia:
    "Hemophilia is a genetic disorder that impairs the body's ability to form blood clots, leading to excessive bleeding and easy bruising. It is caused by a deficiency of certain clotting factors.",
  von_willebrand_disease:
    "Von Willebrand disease is a bleeding disorder caused by a deficiency or defect in von Willebrand factor, a protein that helps blood to clot. It can lead to prolonged bleeding after injuries or surgeries.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  deep_vein_thrombosis:
    "Deep vein thrombosis (DVT) is a blood clot that forms in a deep vein, usually in the legs. If the clot breaks loose and travels to the lungs, it can cause a life-threatening condition called pulmonary embolism.",
  pulmonary_embolism:
    "Pulmonary embolism (PE) is a sudden blockage in one of the pulmonary arteries in the lungs. It is often caused by blood clots that travel to the lungs from the legs or other parts of the body.",
  disseminated_intravascular_coagulation_dic:
    "Disseminated intravascular coagulation (DIC) is a serious disorder where the blood's clotting process is activated throughout the body, leading to excessive clotting and bleeding simultaneously. It can result from various underlying conditions.",
  sickle_cell_anemia:
    "Sickle cell anemia is a genetic blood disorder where red blood cells become rigid and sticky, leading to blockages in blood vessels and causing pain, organ damage, and anemia.",
  thalassemia:
    "Thalassemia is a genetic blood disorder that affects the production of hemoglobin, leading to anemia, fatigue, and other complications. The severity of thalassemia varies from mild to severe forms.",
  polycythemia_vera:
    "Polycythemia vera is a rare blood cancer where the bone marrow produces too many red blood cells. This can lead to thickened blood, increasing the risk of blood clots, stroke, and other complications.",
  aplastic_anemia:
    "Aplastic anemia is a rare but serious blood disorder where the bone marrow fails to produce enough blood cells, including red blood cells, white blood cells, and platelets. It can lead to fatigue, infections, and bleeding.",
  leukocytosis:
    "Leukocytosis is a condition characterized by a high white blood cell count in the blood. It can be caused by infections, inflammation, or other underlying conditions.",
  leukopenia:
    "Leukopenia is a condition characterized by a low white blood cell count in the blood. It can be caused by infections, bone marrow disorders, or certain medications, leading to an increased risk of infections.",
  lymphocytosis:
    "Lymphocytosis is an increase in the number of lymphocytes, a type of white blood cell, in the blood. It can be caused by infections, leukemia, or other immune system disorders.",
  lymphopenia:
    "Lymphopenia is a condition characterized by a low lymphocyte count in the blood. Lymphocytes play a key role in the immune system, and low levels can increase the risk of infections.",
  neutrophilia:
    "Neutrophilia is a condition characterized by a high neutrophil count in the blood. Neutrophils are a type of white blood cell that plays a key role in the immune response against infections.",
  neutropenia:
    "Neutropenia is a condition characterized by a low neutrophil count in the blood. Neutrophils are essential for fighting bacterial infections, and low levels can increase the risk of serious infections.",
  thrombocytosis:
    "Thrombocytosis is a condition characterized by a high platelet count in the blood. It can be caused by various conditions, including infections, inflammation, or bone marrow disorders.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  autism_spectrum_disorder:
    "Autism spectrum disorder (ASD) is a developmental disorder that affects communication, behavior, and social interaction. It includes a wide range of symptoms and severity, often appearing in early childhood.",
  attention_deficit_hyperactivity_disorder_adhd:
    "Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. It often begins in childhood and can persist into adolescence and adulthood.",
  bipolar_disorder:
    "Bipolar disorder, formerly known as manic depression, is a mental health condition characterized by extreme mood swings, including episodes of mania and depression. It can significantly impact daily functioning.",
  borderline_personality_disorder:
    "Borderline personality disorder (BPD) is a mental health condition characterized by unstable moods, behavior, and relationships. People with BPD often have a distorted self-image and struggle with impulsive actions.",
  conduct_disorder:
    "Conduct disorder is a childhood behavioral and emotional disorder characterized by aggressive, destructive, and deceitful behavior. It often leads to significant impairment in social, academic, and occupational functioning.",
  cyclothymic_disorder:
    "Cyclothymic disorder is a mood disorder characterized by chronic fluctuations in mood, involving periods of hypomania and mild depression. It is less severe than bipolar disorder but can still significantly impact daily life.",
  major_depressive_disorder:
    "Major depressive disorder (MDD) is a mental health condition characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities. It can interfere with daily functioning and lead to physical symptoms.",
  obsessive_compulsive_disorder:
    "Obsessive-compulsive disorder (OCD) is a mental health condition characterized by repetitive, intrusive thoughts (obsessions) and ritualistic behaviors or mental acts (compulsions). It can significantly impair daily functioning.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  panic_disorder:
    "Panic disorder is a mental health condition characterized by sudden and recurrent episodes of intense fear or panic attacks. These episodes may be accompanied by physical symptoms such as heart palpitations and shortness of breath.",
  persistent_depressive_disorder_dysthymia:
    "Persistent depressive disorder, also known as dysthymia, is a chronic form of depression characterized by a low mood that lasts for at least two years. It can lead to significant impairment in daily functioning.",
  post_traumatic_stress_disorder_ptsd:
    "Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. It is characterized by flashbacks, nightmares, and severe anxiety.",
  schizoaffective_disorder:
    "Schizoaffective disorder is a mental health condition that combines features of schizophrenia, such as hallucinations or delusions, with symptoms of a mood disorder, such as mania or depression.",
  schizophrenia:
    "Schizophrenia is a severe mental disorder characterized by distorted thinking and awareness, including hallucinations and delusions. It can significantly impair daily functioning and often requires lifelong treatment.",
  separation_anxiety_disorder:
    "Separation anxiety disorder is a childhood mental health condition characterized by excessive fear or anxiety about separation from home or caregivers. It can lead to significant distress and impairment in daily life.",
  social_anxiety_disorder_social_phobia:
    "Social anxiety disorder, also known as social phobia, is a mental health condition characterized by an intense fear of social situations and scrutiny by others. It can significantly impair social and occupational functioning.",
  antisocial_personality_disorder:
    "Antisocial personality disorder is a mental health condition characterized by a persistent pattern of disregard for the rights of others. People with this disorder often engage in manipulative and deceitful behaviors without remorse.",
  avoidant_personality_disorder:
    "Avoidant personality disorder is a mental health condition characterized by a pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation. It can significantly impact social and occupational functioning.",
  borderline_personality_disorder:
    "Borderline personality disorder (BPD) is a mental health condition characterized by unstable moods, behavior, and relationships. People with BPD often have a distorted self-image and struggle with impulsive actions.",
  dependent_personality_disorder:
    "Dependent personality disorder is a mental health condition characterized by a pervasive fear of separation and an excessive need to be taken care of. It can lead to submissive and clinging behavior.",
  histrionic_personality_disorder:
    "Histrionic personality disorder is a mental health condition characterized by a pattern of attention-seeking behavior, excessive emotionality, and an overwhelming need for approval and reassurance from others.",
  narcissistic_personality_disorder:
    "Narcissistic personality disorder is a mental health condition characterized by a long-term pattern of exaggerated self-importance, the need for excessive attention and admiration, and a lack of empathy for others.",
  obsessive_compulsive_personality_disorder:
    "Obsessive-compulsive personality disorder (OCPD) is a mental health condition characterized by a preoccupation with rules, orderliness, and control. People with OCPD may be perfectionistic and have difficulty relaxing.",
  paranoid_personality_disorder:
    "Paranoid personality disorder is a mental health condition characterized by a pervasive distrust and suspicion of others, even when there is no reason for it. People with this disorder often interpret others' actions as hostile or malicious.",
  schizoid_personality_disorder:
    "Schizoid personality disorder is a mental health condition characterized by a lack of interest in social relationships, a limited range of emotional expression, and a preference for solitary activities.",
  schizotypal_personality_disorder:
    "Schizotypal personality disorder is a mental health condition characterized by odd or eccentric behavior, unconventional beliefs, and difficulties in forming and maintaining relationships.",
  dissociative_amnesia:
    "Dissociative amnesia is a dissociative disorder characterized by the inability to recall important personal information, often related to a traumatic or stressful event, that cannot be attributed to a medical condition.",
  depersonalization_derealization_disorder:
    "Depersonalization-derealization disorder is a dissociative disorder characterized by persistent feelings of being detached from one's mental processes or body (depersonalization) or feeling detached from the surrounding environment (derealization).",
  dissociative_identity_disorder:
    "Dissociative identity disorder (DID) is a mental health condition characterized by the presence of two or more distinct personality states, each with its own pattern of perceiving and interacting with the world.",
  acute_stress_disorder:
    "Acute stress disorder is a mental health condition that can develop after experiencing or witnessing a traumatic event. It is similar to post-traumatic stress disorder (PTSD) but occurs within the first three days to four weeks after the trauma.",
  adjustment_disorders:
    "Adjustment disorders are a group of mental health conditions characterized by excessive, prolonged stress responses to a specific life event or change. These reactions can significantly impair daily functioning.",
  body_dysmorphic_disorder:
    "Body dysmorphic disorder (BDD) is a mental health condition characterized by obsessive preoccupation with perceived defects or flaws in physical appearance, which are not observable to others. It can lead to severe emotional distress.",
  enuresis:
    "Enuresis, or bedwetting, is a childhood disorder characterized by involuntary urination during sleep. It is more common in boys and can be caused by various factors, including delayed development of bladder control.",
  atherosclerosis:
    "Atherosclerosis is a cardiovascular condition characterized by the accumulation of plaque, primarily made of cholesterol, fat, and other substances, on the inner walls of arteries. Over time, this buildup narrows the arteries and restricts blood flow, leading to various heart-related problems such as heart attacks and strokes.",
  encopresis:
    "Encopresis is a childhood disorder characterized by the repeated passage of feces into inappropriate places, such as clothing or the floor. It is usually involuntary and may be caused by constipation or emotional factors.",
  feeding_and_eating_disorders_of_infancy_or_early_childhood:
    "Feeding and eating disorders of infancy or early childhood are a group of mental health conditions related to feeding and eating that occur during the early years of life. These conditions can affect growth and development.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  rumination_disorder:
    "Rumination disorder is a feeding or eating disorder characterized by the repeated regurgitation of food, which may be re-chewed, re-swallowed, or spit out. It is not due to a medical condition but can lead to malnutrition.",
  pica: "Pica is an eating disorder characterized by the persistent consumption of non-nutritive, non-food substances over a period of at least one month. It can occur in children, pregnant women, and individuals with developmental disorders.",
  avoidant_restrictive_food_intake_disorder:
    "Avoidant/restrictive food intake disorder (ARFID) is an eating disorder characterized by highly selective eating habits, avoidance of certain foods or textures, and sensory sensitivity. It can lead to nutritional deficiencies and impaired social functioning.",
  anorexia_nervosa:
    "Anorexia nervosa is an eating disorder characterized by an intense fear of gaining weight and a distorted body image, leading to self-imposed starvation and excessive weight loss. It can have severe physical and psychological consequences.",
  bulimia_nervosa:
    "Bulimia nervosa is an eating disorder characterized by recurrent episodes of binge eating, followed by compensatory behaviors such as self-induced vomiting, excessive exercise, or fasting. It can have serious health implications.",
  binge_eating_disorder:
    "Binge eating disorder is an eating disorder characterized by recurrent episodes of consuming large quantities of food in a short period, leading to a loss of control during binges. It does not involve compensatory behaviors like bulimia.",
  selective_mutism:
    "Selective mutism is a childhood anxiety disorder characterized by a consistent inability to speak in certain social situations, such as school or public places, despite speaking in other settings.",
  reactive_attachment_disorder_rad:
    "Reactive attachment disorder (RAD) is a childhood mental health disorder characterized by a lack of emotional responsiveness and a difficulty forming meaningful relationships. It often results from early neglect or trauma.",
  separation_anxiety_disorder:
    "Separation anxiety disorder is a childhood mental health condition characterized by excessive fear or anxiety about separation from home or caregivers. It can lead to significant distress and impairment in daily life.",
  stereotypic_movement_disorder:
    "Stereotypic movement disorder is a childhood disorder characterized by repetitive, nonfunctional motor movements, such as hand waving or head banging, that interfere with daily activities or cause physical injury.",
  tourette_syndrome:
    "Tourette syndrome is a neurological disorder characterized by repetitive, involuntary movements and vocalizations called tics. It often starts in childhood and can vary in severity over time.",
  persistent_motor_or_vocal_tic_disorder:
    "Persistent motor or vocal tic disorder is a condition characterized by the presence of motor or vocal tics, which are repetitive, sudden, and nonrhythmic movements or sounds. The disorder lasts for more than one year.",
  trichotillomania:
    "Trichotillomania is a mental health disorder characterized by the recurrent urge to pull out one's hair, resulting in noticeable hair loss. The behavior is often driven by anxiety and relief is experienced after hair pulling.",
  excoriation_skin_picking_disorder:
    "Excoriation (skin-picking) disorder is a mental health condition characterized by recurrent picking at one's own skin, leading to tissue damage and significant distress. It is often driven by the urge to remove perceived imperfections.",
  acute_respiratory_distress_syndrome_ards:
    "Acute respiratory distress syndrome (ARDS) is a severe lung condition characterized by rapid onset of widespread inflammation in the lungs, leading to difficulty breathing, low oxygen levels, and organ failure. It can be life-threatening.",
  chronic_obstructive_pulmonary_disease_copd:
    "Chronic obstructive pulmonary disease (COPD) is a progressive lung disease that makes it difficult to breathe. It is often caused by long-term exposure to irritants like cigarette smoke and leads to symptoms such as coughing and shortness of breath.",
  asthma:
    "Asthma is a chronic respiratory condition characterized by inflammation of the airways, leading to wheezing, coughing, and difficulty breathing. It can be triggered by various factors, including allergies and respiratory infections.",
  pulmonary_fibrosis:
    "Pulmonary fibrosis is a lung disease characterized by the formation of scar tissue in the lungs, which leads to difficulty breathing and reduced oxygen levels. The cause is often unknown, but it can be related to certain environmental exposures.",
  pneumonia:
    "Pneumonia is an infection that inflames the air sacs in one or both lungs. It can cause cough, fever, chest pain, and difficulty breathing. Pneumonia can be caused by bacteria, viruses, or fungi.",
  bronchitis:
    "Bronchitis is inflammation of the bronchial tubes in the lungs, leading to cough, chest discomfort, and production of mucus. It can be acute (short-term) or chronic (long-term) and is often caused by viral or bacterial infections.",
  pleurisy:
    "Pleurisy is inflammation of the pleura, the double-layered membrane surrounding the lungs. It can cause sharp chest pain and difficulty breathing, especially with deep breaths. Pleurisy is often a symptom of another underlying condition.",
  sarcoidosis:
    "Sarcoidosis is a disease characterized by the growth of tiny collections of inflammatory cells in different parts of the body. In the lungs, it can cause cough, chest discomfort, and difficulty breathing.",
  cystic_fibrosis:
    "Cystic fibrosis is a genetic disorder that affects the lungs and digestive system. It leads to the production of thick, sticky mucus that can clog airways and lead to respiratory infections. It is a progressive and life-limiting condition.",
  interstitial_lung_disease:
    "Interstitial lung disease is a group of disorders characterized by scarring of the lung tissue. This can lead to difficulty breathing and decreased oxygen levels. The cause is often unknown, but it can be related to autoimmune conditions or environmental exposures.",
  obstructive_sleep_apnea:
    "Obstructive sleep apnea is a sleep disorder where breathing is briefly and repeatedly interrupted during sleep. It can lead to loud snoring, gasping for air, and daytime sleepiness.",
  narcolepsy:
    "Narcolepsy is a neurological disorder that affects the control of sleep and wakefulness. It can cause sudden attacks of sleep, muscle weakness, and hallucinations.",
  insomnia:
    "Insomnia is a common sleep disorder characterized by difficulty falling asleep, staying asleep, or both. It can lead to daytime fatigue, irritability, and impaired functioning.",
  restless_legs_syndrome:
    "Restless legs syndrome (RLS) is a neurological disorder characterized by uncomfortable sensations in the legs, leading to an irresistible urge to move them. Symptoms worsen during periods of rest or inactivity.",
  periodic_limb_movement_disorder:
    "Periodic limb movement disorder (PLMD) is a sleep disorder characterized by repetitive limb movements, usually involving the legs, during sleep. It can cause frequent awakenings and disrupt sleep.",
  rapid_eye_movement_sleep_behavior_disorder:
    "Rapid eye movement (REM) sleep behavior disorder is a sleep disorder where individuals physically act out their dreams during REM sleep. It can result in injuries to the person or their sleep partner.",
  circadian_rhythm_sleep_disorder:
    "Circadian rhythm sleep disorders are a group of sleep disorders characterized by disturbances in the sleep-wake cycle. This can lead to difficulties falling asleep, staying awake, or maintaining a regular sleep schedule.",
  non_24_hour_sleep_wake_disorder:
    "Non-24-hour sleep-wake disorder is a circadian rhythm sleep disorder where the sleep-wake cycle is not synchronized with the 24-hour day. People with this disorder often have difficulty falling asleep and waking up at desired times.",
  parasomnia:
    "Parasomnia is a category of sleep disorders that involve abnormal movements, behaviors, emotions, perceptions, and dreams that occur while falling asleep, sleeping, between sleep stages, or during arousal from sleep.",
  sleep_talking:
    "Sleep talking, also known as somniloquy, is a sleep disorder characterized by talking during sleep without the person being aware of it. The content of speech can range from nonsensical words to coherent conversations.",
  night_terror_disorder:
    "Night terror disorder, or sleep terrors, is a sleep disorder characterized by intense fear and agitation during sleep, often accompanied by screaming and thrashing. The person usually has no memory of the episode.",
  sleepwalking:
    "Sleepwalking, or somnambulism, is a sleep disorder that involves walking or performing other complex behaviors while still asleep. It can be dangerous as the person is not aware of their actions.",
  bedwetting:
    "Bedwetting, or nocturnal enuresis, is a common childhood condition where a child involuntarily urinates during sleep. It can be caused by various factors, including delayed development of bladder control.",
  anemia:
    "Anemia is a condition characterized by a deficiency of red blood cells or a lack of hemoglobin, leading to reduced oxygen-carrying capacity in the blood. It can cause fatigue, weakness, and paleness.",
  hemophilia:
    "Hemophilia is a genetic disorder that impairs the body's ability to form blood clots, leading to excessive bleeding and easy bruising. It is caused by a deficiency of certain clotting factors.",
  von_willebrand_disease:
    "Von Willebrand disease is a bleeding disorder caused by a deficiency or defect in von Willebrand factor, a protein that helps blood to clot. It can lead to prolonged bleeding after injuries or surgeries.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  deep_vein_thrombosis:
    "Deep vein thrombosis (DVT) is a blood clot that forms in a deep vein, usually in the legs. If the clot breaks loose and travels to the lungs, it can cause a life-threatening condition called pulmonary embolism.",
  pulmonary_embolism:
    "Pulmonary embolism (PE) is a sudden blockage in one of the pulmonary arteries in the lungs. It is often caused by blood clots that travel to the lungs from the legs or other parts of the body.",
  disseminated_intravascular_coagulation_dic:
    "Disseminated intravascular coagulation (DIC) is a serious disorder where the blood's clotting process is activated throughout the body, leading to excessive clotting and bleeding simultaneously. It can result from various underlying conditions.",
  sickle_cell_anemia:
    "Sickle cell anemia is a genetic blood disorder where red blood cells become rigid and sticky, leading to blockages in blood vessels and causing pain, organ damage, and anemia.",
  thalassemia:
    "Thalassemia is a genetic blood disorder that affects the production of hemoglobin, leading to anemia, fatigue, and other complications. The severity of thalassemia varies from mild to severe forms.",
  polycythemia_vera:
    "Polycythemia vera is a rare blood cancer where the bone marrow produces too many red blood cells. This can lead to thickened blood, increasing the risk of blood clots, stroke, and other complications.",
  aplastic_anemia:
    "Aplastic anemia is a rare but serious blood disorder where the bone marrow fails to produce enough blood cells, including red blood cells, white blood cells, and platelets. It can lead to fatigue, infections, and bleeding.",
  leukocytosis:
    "Leukocytosis is a condition characterized by a high white blood cell count in the blood. It can be caused by infections, inflammation, or certain medical conditions. Leukocytosis is the body's response to infections or diseases.",
  leukopenia:
    "Leukopenia is a condition characterized by a low white blood cell count in the blood. It can be caused by infections, bone marrow disorders, or certain medications, leading to an increased risk of infections.",
  lymphocytosis:
    "Lymphocytosis is an increase in the number of lymphocytes, a type of white blood cell, in the blood. It can be caused by infections, leukemia, or other immune system disorders.",
  lymphopenia:
    "Lymphopenia is a condition characterized by a low lymphocyte count in the blood. Lymphocytes play a key role in the immune system, and low levels can increase the risk of infections.",
  neutrophilia:
    "Neutrophilia is a condition characterized by a high neutrophil count in the blood. Neutrophils are a type of white blood cell that plays a key role in the immune response against infections.",
  neutropenia:
    "Neutropenia is a condition characterized by a low neutrophil count in the blood. Neutrophils are essential for fighting bacterial infections, and low levels can increase the risk of serious infections.",
  thrombocytosis:
    "Thrombocytosis is a condition characterized by a high platelet count in the blood. It can be caused by various conditions, including infections, inflammation, or bone marrow disorders.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  autism_spectrum_disorder:
    "Autism spectrum disorder (ASD) is a developmental disorder that affects communication, behavior, and social interaction. It includes a wide range of symptoms and severity, often appearing in early childhood.",
  attention_deficit_hyperactivity_disorder_adhd:
    "Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. It often begins in childhood and can persist into adolescence and adulthood.",
  bipolar_disorder:
    "Bipolar disorder, formerly known as manic depression, is a mental health condition characterized by extreme mood swings, including episodes of mania and depression. It can significantly impact daily functioning.",
  borderline_personality_disorder:
    "Borderline personality disorder (BPD) is a mental health condition characterized by unstable moods, behavior, and relationships. People with BPD often have a distorted self-image and struggle with impulsive actions.",
  conduct_disorder:
    "Conduct disorder is a childhood behavioral and emotional disorder characterized by aggressive, destructive, and deceitful behavior. It often leads to significant impairment in social, academic, and occupational functioning.",
  cyclothymic_disorder:
    "Cyclothymic disorder is a mood disorder characterized by chronic fluctuations in mood, involving periods of hypomania and mild depression. It is less severe than bipolar disorder but can still significantly impact daily life.",
  major_depressive_disorder:
    "Major depressive disorder (MDD) is a mental health condition characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities. It can interfere with daily functioning and lead to physical symptoms.",
  obsessive_compulsive_disorder:
    "Obsessive-compulsive disorder (OCD) is a mental health condition characterized by repetitive, intrusive thoughts (obsessions) and ritualistic behaviors or mental acts (compulsions). It can significantly impair daily functioning.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  panic_disorder:
    "Panic disorder is a mental health condition characterized by sudden and recurrent episodes of intense fear or panic attacks. These episodes may be accompanied by physical symptoms such as heart palpitations and shortness of breath.",
  persistent_depressive_disorder_dysthymia:
    "Persistent depressive disorder, also known as dysthymia, is a chronic form of depression characterized by a low mood that lasts for at least two years. It can lead to significant impairment in daily functioning.",
  post_traumatic_stress_disorder_ptsd:
    "Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. It is characterized by flashbacks, nightmares, and severe anxiety.",
  schizoaffective_disorder:
    "Schizoaffective disorder is a mental health condition that combines features of schizophrenia, such as hallucinations or delusions, with symptoms of a mood disorder, such as mania or depression.",
  schizophrenia:
    "Schizophrenia is a severe mental disorder characterized by distorted thinking and awareness, including hallucinations and delusions. It can significantly impair daily functioning and often requires lifelong treatment.",
  separation_anxiety_disorder:
    "Separation anxiety disorder is a childhood mental health condition characterized by excessive fear or anxiety about separation from home or caregivers. It can lead to significant distress and impairment in daily life.",
  social_anxiety_disorder_social_phobia:
    "Social anxiety disorder, also known as social phobia, is a mental health condition characterized by an intense fear of social situations and scrutiny by others. It can significantly impair social and occupational functioning.",
  antisocial_personality_disorder:
    "Antisocial personality disorder is a mental health condition characterized by a persistent pattern of disregard for the rights of others. People with this disorder often engage in manipulative and deceitful behaviors without remorse.",
  avoidant_personality_disorder:
    "Avoidant personality disorder is a mental health condition characterized by a pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation. It can significantly impact social and occupational functioning.",
  borderline_personality_disorder:
    "Borderline personality disorder (BPD) is a mental health condition characterized by unstable moods, behavior, and relationships. People with BPD often have a distorted self-image and struggle with impulsive actions.",
  dependent_personality_disorder:
    "Dependent personality disorder is a mental health condition characterized by a pervasive fear of separation and an excessive need to be taken care of. It can lead to submissive and clinging behavior.",
  histrionic_personality_disorder:
    "Histrionic personality disorder is a mental health condition characterized by a pattern of attention-seeking behavior, excessive emotionality, and an overwhelming need for approval and reassurance from others.",
  narcissistic_personality_disorder:
    "Narcissistic personality disorder is a mental health condition characterized by a long-term pattern of exaggerated self-importance, the need for excessive attention and admiration, and a lack of empathy for others.",
  obsessive_compulsive_personality_disorder:
    "Obsessive-compulsive personality disorder (OCPD) is a mental health condition characterized by a preoccupation with rules, orderliness, and control. People with OCPD may be perfectionistic and have difficulty relaxing.",
  paranoid_personality_disorder:
    "Paranoid personality disorder is a mental health condition characterized by a pervasive distrust and suspicion of others, even when there is no reason to be suspicious. People with this disorder often interpret others' actions as hostile.",
  schizoid_personality_disorder:
    "Schizoid personality disorder is a mental health condition characterized by a lack of interest in social relationships, a limited range of emotional expression, and a preference for solitary activities.",
  schizotypal_personality_disorder:
    "Schizotypal personality disorder is a mental health condition characterized by odd or eccentric behavior, unconventional beliefs, and difficulties in forming and maintaining relationships.",
  dissociative_amnesia:
    "Dissociative amnesia is a dissociative disorder characterized by the inability to recall important personal information, often related to a traumatic or stressful event, that cannot be attributed to a medical condition.",
  depersonalization_derealization_disorder:
    "Depersonalization-derealization disorder is a dissociative disorder characterized by persistent feelings of being detached from one's mental processes or body (depersonalization) or feeling detached from the surrounding environment (derealization).",
  dissociative_identity_disorder:
    "Dissociative identity disorder (DID) is a mental health condition characterized by the presence of two or more distinct personality states, each with its own pattern of perceiving and interacting with the world.",
  acute_stress_disorder:
    "Acute stress disorder is a mental health condition that can develop after experiencing or witnessing a traumatic event. It is similar to post-traumatic stress disorder (PTSD) but occurs within the first three days to four weeks after the trauma.",
  adjustment_disorders:
    "Adjustment disorders are a group of mental health conditions characterized by excessive, prolonged stress responses to a specific life event or change. These reactions can significantly impair daily functioning.",
  body_dysmorphic_disorder:
    "Body dysmorphic disorder (BDD) is a mental health condition characterized by obsessive preoccupation with perceived defects or flaws in physical appearance, which are not observable to others. It can lead to severe emotional distress.",
  enuresis:
    "Enuresis, or bedwetting, is a childhood disorder characterized by involuntary urination during sleep. It is more common in boys and can be caused by various factors, including delayed development of bladder control.",
  encopresis:
    "Encopresis is a childhood disorder characterized by the repeated passage of feces into inappropriate places, such as clothing or the floor. It is usually involuntary and may be caused by constipation or emotional factors.",
  feeding_and_eating_disorders_of_infancy_or_early_childhood:
    "Feeding and eating disorders of infancy or early childhood are a group of mental health conditions related to feeding and eating that occur during the early years of life. These conditions can affect growth and development.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  rumination_disorder:
    "Rumination disorder is a feeding or eating disorder characterized by the repeated regurgitation of food, which may be re-chewed, re-swallowed, or spit out. It is not due to a medical condition but can lead to malnutrition.",
  pica: "Pica is an eating disorder characterized by the persistent consumption of non-nutritive, non-food substances over a period of at least one month. It can occur in children, pregnant women, and individuals with developmental disorders.",
  avoidant_restrictive_food_intake_disorder:
    "Avoidant/restrictive food intake disorder (ARFID) is an eating disorder characterized by highly selective eating habits, avoidance of certain foods or textures, and sensory sensitivity. It can lead to nutritional deficiencies and impaired social functioning.",
  anorexia_nervosa:
    "Anorexia nervosa is an eating disorder characterized by an intense fear of gaining weight and a distorted body image, leading to self-imposed starvation and excessive weight loss. It can have severe physical and psychological consequences.",
  bulimia_nervosa:
    "Bulimia nervosa is an eating disorder characterized by recurrent episodes of binge eating, followed by compensatory behaviors such as self-induced vomiting, excessive exercise, or fasting. It can have serious health implications.",
  binge_eating_disorder:
    "Binge eating disorder is an eating disorder characterized by recurrent episodes of consuming large quantities of food in a short period, leading to a loss of control during binges. It does not involve compensatory behaviors like bulimia.",
  selective_mutism:
    "Selective mutism is a childhood anxiety disorder characterized by a consistent inability to speak in certain social situations, such as school or public places, despite speaking in other settings.",
  reactive_attachment_disorder_rad:
    "Reactive attachment disorder (RAD) is a childhood mental health disorder characterized by a lack of emotional responsiveness and a difficulty forming meaningful relationships. It often results from early neglect or trauma.",
  separation_anxiety_disorder:
    "Separation anxiety disorder is a childhood mental health condition characterized by excessive fear or anxiety about separation from home or caregivers. It can lead to significant distress and impairment in daily life.",
  stereotypic_movement_disorder:
    "Stereotypic movement disorder is a childhood disorder characterized by repetitive, nonfunctional motor movements, such as hand waving or head banging, that interfere with daily activities or cause physical injury.",
  tourette_syndrome:
    "Tourette syndrome is a neurological disorder characterized by repetitive, involuntary movements and vocalizations called tics. It often starts in childhood and can vary in severity over time.",
  persistent_motor_or_vocal_tic_disorder:
    "Persistent motor or vocal tic disorder is a condition characterized by the presence of motor or vocal tics, which are repetitive, sudden, and nonrhythmic movements or sounds. The disorder lasts for more than one year.",
  trichotillomania:
    "Trichotillomania is a mental health disorder characterized by the recurrent urge to pull out one's hair, resulting in noticeable hair loss. The behavior is often driven by anxiety and relief is experienced after hair pulling.",
  excoriation_skin_picking_disorder:
    "Excoriation (skin-picking) disorder is a mental health condition characterized by recurrent picking at one's own skin, leading to tissue damage and significant distress. It is often driven by the urge to remove perceived imperfections.",
  acute_respiratory_distress_syndrome_ards:
    "Acute respiratory distress syndrome (ARDS) is a severe lung condition characterized by rapid onset of widespread inflammation in the lungs, leading to difficulty breathing, low oxygen levels, and organ failure. It can be life-threatening.",
  chronic_obstructive_pulmonary_disease_copd:
    "Chronic obstructive pulmonary disease (COPD) is a progressive lung disease that makes it difficult to breathe. It is often caused by long-term exposure to irritants like cigarette smoke and leads to symptoms such as coughing and shortness of breath.",
  asthma:
    "Asthma is a chronic respiratory condition characterized by inflammation of the airways, leading to wheezing, coughing, and difficulty breathing. It can be triggered by various factors, including allergies and respiratory infections.",
  pulmonary_fibrosis:
    "Pulmonary fibrosis is a lung disease characterized by the formation of scar tissue in the lungs, leading to reduced lung function and difficulty breathing. The cause is often unknown, but it can be related to environmental exposures.",
  bronchiectasis:
    "Bronchiectasis is a chronic lung condition characterized by damaged and widened airways, making it difficult to clear mucus from the lungs. It can result from infections, autoimmune conditions, or inhaling foreign objects.",
  pneumothorax:
    "Pneumothorax is a condition where air leaks into the space between the lung and the chest wall, causing the lung to collapse partially or completely. It can result in chest pain and difficulty breathing.",
  pleural_effusion:
    "Pleural effusion is the buildup of excess fluid between the layers of the pleura, the double membrane surrounding the lungs. It can compress the lungs, leading to breathing difficulties and chest pain.",
  obstructive_sleep_apnea:
    "Obstructive sleep apnea is a sleep disorder where breathing is briefly and repeatedly interrupted during sleep. It can lead to loud snoring, gasping for air, and daytime sleepiness.",
  narcolepsy:
    "Narcolepsy is a neurological disorder that affects the control of sleep and wakefulness. It can cause sudden attacks of sleep, muscle weakness, and hallucinations.",
  insomnia:
    "Insomnia is a common sleep disorder characterized by difficulty falling asleep, staying asleep, or both. It can lead to daytime fatigue, irritability, and impaired functioning.",
  restless_legs_syndrome:
    "Restless legs syndrome (RLS) is a neurological disorder characterized by uncomfortable sensations in the legs, leading to an irresistible urge to move them. Symptoms worsen during periods of rest or inactivity.",
  hyperlipidemia:
    "Hyperlipidemia is a medical condition characterized by abnormally high levels of lipids (fats) in the blood. These lipids include cholesterol and triglycerides. Hyperlipidemia increases the risk of developing atherosclerosis and other cardiovascular diseases. It can be caused by genetic factors, poor diet, lack of exercise, and certain medical conditions. Management often involves lifestyle changes, such as adopting a healthy diet, regular exercise, and in some cases, medication.",
  periodic_limb_movement_disorder:
    "Periodic limb movement disorder (PLMD) is a sleep disorder characterized by repetitive limb movements, usually involving the legs, during sleep. It can cause frequent awakenings and disrupt sleep.",
  rapid_eye_movement_sleep_behavior_disorder:
    "Rapid eye movement (REM) sleep behavior disorder is a sleep disorder where individuals physically act out their dreams during REM sleep. It can result in injuries to the person or their sleep partner.",
  circadian_rhythm_sleep_disorder:
    "Circadian rhythm sleep disorders are a group of sleep disorders characterized by disturbances in the sleep-wake cycle. This can lead to difficulties falling asleep, staying awake, or maintaining a regular sleep schedule.",
  non_24_hour_sleep_wake_disorder:
    "Non-24-hour sleep-wake disorder is a circadian rhythm sleep disorder where the sleep-wake cycle is not synchronized with the 24-hour day. People with this disorder often have difficulty falling asleep and waking up at desired times.",
  parasomnia:
    "Parasomnia is a category of sleep disorders that involve abnormal movements, behaviors, emotions, perceptions, and dreams that occur while falling asleep, sleeping, between sleep stages, or during arousal from sleep.",
  sleep_talking:
    "Sleep talking, also known as somniloquy, is a sleep disorder characterized by talking during sleep without the person being aware of it. The content of speech can range from nonsensical words to coherent conversations.",
  night_terror_disorder:
    "Night terror disorder, or sleep terrors, is a sleep disorder characterized by intense fear and agitation during sleep, often accompanied by screaming and thrashing. The person usually has no memory of the episode.",
  sleepwalking:
    "Sleepwalking, or somnambulism, is a sleep disorder that involves walking or performing other complex behaviors while still asleep. It can be dangerous as the person is not aware of their actions.",
  bedwetting:
    "Bedwetting, or nocturnal enuresis, is a common childhood condition where a child involuntarily urinates during sleep. It can be caused by various factors, including delayed development of bladder control.",
  anemia:
    "Anemia is a condition characterized by a deficiency of red blood cells or a lack of hemoglobin, leading to reduced oxygen-carrying capacity in the blood. It can cause fatigue, weakness, and paleness.",
  hemophilia:
    "Hemophilia is a genetic disorder that impairs the body's ability to form blood clots, leading to excessive bleeding and easy bruising. It is caused by a deficiency of certain clotting factors.",
  von_willebrand_disease:
    "Von Willebrand disease is a bleeding disorder caused by a deficiency or defect in von Willebrand factor, a protein that helps blood to clot. It can lead to prolonged bleeding after injuries or surgeries.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  deep_vein_thrombosis:
    "Deep vein thrombosis (DVT) is a blood clot that forms in a deep vein, usually in the legs. If the clot breaks loose and travels to the lungs, it can cause a life-threatening condition called pulmonary embolism.",
  pulmonary_embolism:
    "Pulmonary embolism (PE) is a sudden blockage in one of the pulmonary arteries in the lungs. It is often caused by blood clots that travel to the lungs from the legs or other parts of the body.",
  disseminated_intravascular_coagulation_dic:
    "Disseminated intravascular coagulation (DIC) is a serious disorder where the blood's clotting process is activated throughout the body, leading to excessive clotting and bleeding simultaneously. It can result from various underlying conditions.",
  sickle_cell_anemia:
    "Sickle cell anemia is a genetic blood disorder where red blood cells become rigid and sticky, leading to blockages in blood vessels and causing pain, organ damage, and anemia.",
  thalassemia:
    "Thalassemia is a genetic blood disorder that affects the production of hemoglobin, leading to anemia, fatigue, and other complications. The severity of thalassemia varies from mild to severe forms.",
  polycythemia_vera:
    "Polycythemia vera is a rare blood cancer where the bone marrow produces too many red blood cells. This can lead to thickened blood, increasing the risk of blood clots, stroke, and other complications.",
  aplastic_anemia:
    "Aplastic anemia is a rare but serious blood disorder where the bone marrow fails to produce enough blood cells, including red blood cells, white blood cells, and platelets. It can lead to fatigue, infections, and bleeding.",
  leukocytosis:
    "Leukocytosis is a condition characterized by a high white blood cell count in the blood. It can be caused by infections, inflammation, or certain medical conditions. Leukocytosis is the body's response to infections or diseases.",
  leukopenia:
    "Leukopenia is a condition characterized by a low white blood cell count in the blood. It can be caused by infections, bone marrow disorders, or certain medications, leading to an increased risk of infections.",
  lymphocytosis:
    "Lymphocytosis is an increase in the number of lymphocytes, a type of white blood cell, in the blood. It can be caused by infections, leukemia, or other immune system disorders.",
  lymphopenia:
    "Lymphopenia is a condition characterized by a low lymphocyte count in the blood. Lymphocytes play a key role in the immune system, and low levels can increase the risk of infections.",
  neutrophilia:
    "Neutrophilia is a condition characterized by a high neutrophil count in the blood. Neutrophils are a type of white blood cell that plays a key role in the immune response against infections.",
  neutropenia:
    "Neutropenia is a condition characterized by a low neutrophil count in the blood. Neutrophils are essential for fighting bacterial infections, and low levels can increase the risk of serious infections.",
  thrombocytosis:
    "Thrombocytosis is a condition characterized by a high platelet count in the blood. It can be caused by various conditions, including infections, inflammation, or bone marrow disorders.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  autism_spectrum_disorder:
    "Autism spectrum disorder (ASD) is a developmental disorder that affects communication, behavior, and social interaction. It includes a wide range of symptoms and severity, often appearing in early childhood.",
  attention_deficit_hyperactivity_disorder_adhd:
    "Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. It often begins in childhood and can persist into adolescence and adulthood.",
  bipolar_disorder:
    "Bipolar disorder, formerly known as manic depression, is a mental health condition characterized by extreme mood swings, including episodes of mania and depression. It can significantly impact daily functioning.",
  borderline_personality_disorder:
    "Borderline personality disorder (BPD) is a mental health condition characterized by unstable moods, behavior, and relationships. People with BPD often have a distorted self-image and struggle with impulsive actions.",
  conduct_disorder:
    "Conduct disorder is a childhood behavioral and emotional disorder characterized by aggressive, destructive, and deceitful behavior. It often leads to significant impairment in social, academic, and occupational functioning.",
  cyclothymic_disorder:
    "Cyclothymic disorder is a mood disorder characterized by chronic fluctuations in mood, involving periods of hypomania and mild depression. It is less severe than bipolar disorder but can still significantly impact daily life.",
  major_depressive_disorder:
    "Major depressive disorder (MDD) is a mental health condition characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities. It can interfere with daily functioning and lead to physical symptoms.",
  obsessive_compulsive_disorder:
    "Obsessive-compulsive disorder (OCD) is a mental health condition characterized by repetitive, intrusive thoughts (obsessions) and ritualistic behaviors or mental acts (compulsions). It can significantly impair daily functioning.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  panic_disorder:
    "Panic disorder is a mental health condition characterized by sudden and recurrent episodes of intense fear or panic attacks. These episodes may be accompanied by physical symptoms such as heart palpitations and shortness of breath.",
  persistent_depressive_disorder_dysthymia:
    "Persistent depressive disorder, also known as dysthymia, is a chronic form of depression characterized by a low mood that lasts for at least two years. It can lead to significant impairment in daily functioning.",
  post_traumatic_stress_disorder_ptsd:
    "Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. It is characterized by flashbacks, nightmares, and severe anxiety.",
  schizoaffective_disorder:
    "Schizoaffective disorder is a mental health condition that combines features of schizophrenia, such as hallucinations or delusions, with symptoms of a mood disorder, such as mania or depression.",
  schizophrenia:
    "Schizophrenia is a severe mental disorder characterized by distorted thinking and awareness, including hallucinations and delusions. It can significantly impair daily functioning and often requires lifelong treatment.",
  separation_anxiety_disorder:
    "Separation anxiety disorder is a childhood mental health condition characterized by excessive fear or anxiety about separation from home or caregivers. It can lead to significant distress and impairment in daily life.",
  social_anxiety_disorder_social_phobia:
    "Social anxiety disorder, also known as social phobia, is a mental health condition characterized by an intense fear of social situations and scrutiny by others. It can significantly impair social and occupational functioning.",
  antisocial_personality_disorder:
    "Antisocial personality disorder is a mental health condition characterized by a persistent pattern of disregard for the rights of others. People with this disorder often engage in manipulative and deceitful behaviors without remorse.",
  avoidant_personality_disorder:
    "Avoidant personality disorder is a mental health condition characterized by a pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation. It can significantly impact social and occupational functioning.",
  borderline_personality_disorder:
    "Borderline personality disorder (BPD) is a mental health condition characterized by unstable moods, behavior, and relationships. People with BPD often have a distorted self-image and struggle with impulsive actions.",
  dependent_personality_disorder:
    "Dependent personality disorder is a mental health condition characterized by a pervasive fear of separation and an excessive need to be taken care of. It can lead to submissive and clinging behavior.",
  histrionic_personality_disorder:
    "Histrionic personality disorder is a mental health condition characterized by a pattern of attention-seeking behavior, excessive emotionality, and an overwhelming need for approval and reassurance from others.",
  narcissistic_personality_disorder:
    "Narcissistic personality disorder is a mental health condition characterized by a long-term pattern of exaggerated self-importance, the need for excessive attention and admiration, and a lack of empathy for others.",
  obsessive_compulsive_personality_disorder:
    "Obsessive-compulsive personality disorder (OCPD) is a mental health condition characterized by a preoccupation with rules, orderliness, and control. People with OCPD may be perfectionistic and have difficulty relaxing.",
  paranoid_personality_disorder:
    "Paranoid personality disorder is a mental health condition characterized by a pervasive distrust and suspicion of others, even when there is no reason to be suspicious. People with this disorder often interpret others' actions as hostile.",
  schizoid_personality_disorder:
    "Schizoid personality disorder is a mental health condition characterized by a lack of interest in social relationships, a limited range of emotional expression, and a preference for solitary activities.",
  schizotypal_personality_disorder:
    "Schizotypal personality disorder is a mental health condition characterized by odd or eccentric behavior, unconventional beliefs, and difficulties in forming and maintaining relationships.",
  dissociative_amnesia:
    "Dissociative amnesia is a dissociative disorder characterized by the inability to recall important personal information, often related to a traumatic or stressful event, that cannot be attributed to a medical condition.",
  depersonalization_derealization_disorder:
    "Depersonalization-derealization disorder is a dissociative disorder characterized by persistent feelings of being detached from one's mental processes or body (depersonalization) or feeling detached from the surrounding environment (derealization).",
  dissociative_identity_disorder:
    "Dissociative identity disorder (DID) is a mental health condition characterized by the presence of two or more distinct personality states, each with its own pattern of perceiving and interacting with the world.",
  acute_stress_disorder:
    "Acute stress disorder is a mental health condition that can develop after experiencing or witnessing a traumatic event. It is similar to post-traumatic stress disorder (PTSD) but occurs within the first three days to four weeks after the trauma.",
  adjustment_disorders:
    "Adjustment disorders are a group of mental health conditions characterized by excessive, prolonged stress responses to a specific life event or change. These reactions can significantly impair daily functioning.",
  body_dysmorphic_disorder:
    "Body dysmorphic disorder (BDD) is a mental health condition characterized by obsessive preoccupation with perceived defects or flaws in physical appearance, which are not observable to others. It can lead to severe emotional distress.",
  enuresis:
    "Enuresis, or bedwetting, is a childhood disorder characterized by involuntary urination during sleep. It is more common in boys and can be caused by various factors, including delayed development of bladder control.",
  encopresis:
    "Encopresis is a childhood disorder characterized by the repeated passage of feces into inappropriate places, such as clothing or the floor. It is usually involuntary and may be caused by constipation or emotional factors.",
  feeding_and_eating_disorders_of_infancy_or_early_childhood:
    "Feeding and eating disorders of infancy or early childhood are a group of mental health conditions related to feeding and eating that occur during the early years of life. These conditions can affect growth and development.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  rumination_disorder:
    "Rumination disorder is a feeding or eating disorder characterized by the repeated regurgitation of food, which may be re-chewed, re-swallowed, or spit out. It is not due to a medical condition but can lead to malnutrition.",
  pica: "Pica is an eating disorder characterized by the persistent consumption of non-nutritive, non-food substances over a period of at least one month. It can occur in children, pregnant women, and individuals with developmental disorders.",
  avoidant_restrictive_food_intake_disorder:
    "Avoidant/restrictive food intake disorder (ARFID) is an eating disorder characterized by highly selective eating habits, avoidance of certain foods or textures, and sensory sensitivity. It can lead to nutritional deficiencies and impaired social functioning.",
  anorexia_nervosa:
    "Anorexia nervosa is an eating disorder characterized by an intense fear of gaining weight and a distorted body image, leading to self-imposed starvation and excessive weight loss. It can have severe physical and psychological consequences.",
  bulimia_nervosa:
    "Bulimia nervosa is an eating disorder characterized by recurrent episodes of binge eating, followed by compensatory behaviors such as self-induced vomiting, excessive exercise, or fasting. It can have serious health implications.",
  binge_eating_disorder:
    "Binge eating disorder is an eating disorder characterized by recurrent episodes of consuming large quantities of food in a short period, leading to a loss of control during binges. It does not involve compensatory behaviors like bulimia.",
  selective_mutism:
    "Selective mutism is a childhood anxiety disorder characterized by a consistent inability to speak in certain social situations, such as school or public places, despite speaking in other settings.",
  reactive_attachment_disorder_rad:
    "Reactive attachment disorder (RAD) is a childhood mental health disorder characterized by a lack of emotional responsiveness and a difficulty forming meaningful relationships. It often results from early neglect or trauma.",
  separation_anxiety_disorder:
    "Separation anxiety disorder is a childhood mental health condition characterized by excessive fear or anxiety about separation from home or caregivers. It can lead to significant distress and impairment in daily life.",
  stereotypic_movement_disorder:
    "Stereotypic movement disorder is a childhood disorder characterized by repetitive, nonfunctional motor movements, such as hand waving or head banging, that interfere with daily activities or cause physical injury.",
  tourette_syndrome:
    "Tourette syndrome is a neurological disorder characterized by repetitive, involuntary movements and vocalizations called tics. It often starts in childhood and can vary in severity over time.",
  persistent_motor_or_vocal_tic_disorder:
    "Persistent motor or vocal tic disorder is a condition characterized by the presence of motor or vocal tics, which are repetitive, sudden, and nonrhythmic movements or sounds. The disorder lasts for more than one year.",
  trichotillomania:
    "Trichotillomania is a mental health disorder characterized by the recurrent urge to pull out one's hair, resulting in noticeable hair loss. The behavior is often driven by anxiety and relief is experienced after hair pulling.",
  excoriation_skin_picking_disorder:
    "Excoriation (skin-picking) disorder is a mental health condition characterized by recurrent picking at one's own skin, leading to tissue damage and significant distress. It is often driven by the urge to remove perceived imperfections.",
  acute_respiratory_distress_syndrome_ards:
    "Acute respiratory distress syndrome (ARDS) is a severe lung condition characterized by rapid onset of widespread inflammation in the lungs, leading to difficulty breathing, low oxygen levels, and organ failure. It can be life-threatening.",
  chronic_obstructive_pulmonary_disease_copd:
    "Chronic obstructive pulmonary disease (COPD) is a progressive lung disease that makes it difficult to breathe. It is often caused by long-term exposure to irritants like cigarette smoke and leads to symptoms such as coughing and shortness of breath.",
  asthma:
    "Asthma is a chronic respiratory condition characterized by inflammation of the airways, leading to wheezing, coughing, and difficulty breathing. It can be triggered by various factors, including allergies and respiratory infections.",
  pulmonary_fibrosis:
    "Pulmonary fibrosis is a lung disease characterized by the formation of scar tissue in the lungs, leading to reduced lung function and difficulty breathing. The cause is often unknown, but it can be related to environmental exposures.",
  bronchiectasis:
    "Bronchiectasis is a chronic lung condition characterized by damaged and widened airways, making it difficult to clear mucus from the lungs. It can result from infections, autoimmune conditions, or inhaling foreign objects.",
  pneumothorax:
    "Pneumothorax is a condition where air leaks into the space between the lung and the chest wall, causing the lung to collapse partially or completely. It can result in chest pain and difficulty breathing.",
  pleural_effusion:
    "Pleural effusion is the buildup of excess fluid between the layers of the pleura, the double membrane surrounding the lungs. It can compress the lungs, leading to breathing difficulties and chest pain.",
  obstructive_sleep_apnea:
    "Obstructive sleep apnea is a sleep disorder where breathing is briefly and repeatedly interrupted during sleep. It can lead to loud snoring, gasping for air, and daytime sleepiness.",
  narcolepsy:
    "Narcolepsy is a neurological disorder that affects the control of sleep and wakefulness. It can cause sudden attacks of sleep, muscle weakness, and hallucinations.",
  insomnia:
    "Insomnia is a common sleep disorder characterized by difficulty falling asleep, staying asleep, or both. It can lead to daytime fatigue, irritability, and impaired functioning.",
  restless_legs_syndrome:
    "Restless legs syndrome (RLS) is a neurological disorder characterized by uncomfortable sensations in the legs, leading to an irresistible urge to move them. Symptoms worsen during periods of rest or inactivity.",
  periodic_limb_movement_disorder:
    "Periodic limb movement disorder (PLMD) is a sleep disorder characterized by repetitive limb movements, usually involving the legs, during sleep. It can cause frequent awakenings and disrupt sleep.",
  rapid_eye_movement_sleep_behavior_disorder:
    "Rapid eye movement (REM) sleep behavior disorder is a sleep disorder where individuals physically act out their dreams during REM sleep. It can result in injuries to the person or their sleep partner.",
  circadian_rhythm_sleep_disorder:
    "Circadian rhythm sleep disorders are a group of sleep disorders characterized by disturbances in the sleep-wake cycle. This can lead to difficulties falling asleep, staying awake, or maintaining a regular sleep schedule.",
  non_24_hour_sleep_wake_disorder:
    "Non-24-hour sleep-wake disorder is a circadian rhythm sleep disorder where the sleep-wake cycle is not synchronized with the 24-hour day. People with this disorder often have difficulty falling asleep and waking up at desired times.",
  parasomnia:
    "Parasomnia is a category of sleep disorders that involve abnormal movements, behaviors, emotions, perceptions, and dreams that occur while falling asleep, sleeping, between sleep stages, or during arousal from sleep.",
  sleep_talking:
    "Sleep talking, also known as somniloquy, is a sleep disorder characterized by talking during sleep without the person being aware of it. The content of speech can range from nonsensical words to coherent conversations.",
  night_terror_disorder:
    "Night terror disorder, or sleep terrors, is a sleep disorder characterized by intense fear and agitation during sleep, often accompanied by screaming and thrashing. The person usually has no memory of the episode.",
  sleepwalking:
    "Sleepwalking, or somnambulism, is a sleep disorder that involves walking or performing other complex behaviors while still asleep. It can be dangerous as the person is not aware of their actions.",
  bedwetting:
    "Bedwetting, or nocturnal enuresis, is a common childhood condition where a child involuntarily urinates during sleep. It can be caused by various factors, including delayed development of bladder control.",
  anemia:
    "Anemia is a condition characterized by a deficiency of red blood cells or a lack of hemoglobin, leading to reduced oxygen-carrying capacity in the blood. It can cause fatigue, weakness, and paleness.",
  hemophilia:
    "Hemophilia is a genetic disorder that impairs the body's ability to form blood clots, leading to excessive bleeding and easy bruising. It is caused by a deficiency of certain clotting factors.",
  von_willebrand_disease:
    "Von Willebrand disease is a bleeding disorder caused by a deficiency or defect in von Willebrand factor, a protein that helps blood to clot. It can lead to prolonged bleeding after injuries or surgeries.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  deep_vein_thrombosis:
    "Deep vein thrombosis (DVT) is a blood clot that forms in a deep vein, usually in the legs. If the clot breaks loose and travels to the lungs, it can cause a life-threatening condition called pulmonary embolism.",
  pulmonary_embolism:
    "Pulmonary embolism (PE) is a sudden blockage in one of the pulmonary arteries in the lungs. It is often caused by blood clots that travel to the lungs from the legs or other parts of the body.",
  disseminated_intravascular_coagulation_dic:
    "Disseminated intravascular coagulation (DIC) is a serious disorder where the blood's clotting process is activated throughout the body, leading to excessive clotting and bleeding simultaneously. It can result from various underlying conditions.",
  sickle_cell_anemia:
    "Sickle cell anemia is a genetic blood disorder where red blood cells become rigid and sticky, leading to blockages in blood vessels and causing pain, organ damage, and anemia.",
  thalassemia:
    "Thalassemia is a genetic blood disorder that affects the production of hemoglobin, leading to anemia, fatigue, and other complications. The severity of thalassemia varies from mild to severe forms.",
  polycythemia_vera:
    "Polycythemia vera is a rare blood cancer where the bone marrow produces too many red blood cells. This can lead to thickened blood, increasing the risk of blood clots, stroke, and other complications.",
  aplastic_anemia:
    "Aplastic anemia is a rare but serious blood disorder where the bone marrow fails to produce enough blood cells, including red blood cells, white blood cells, and platelets. It can lead to fatigue, infections, and bleeding.",
  leukocytosis:
    "Leukocytosis is a condition characterized by a high white blood cell count in the blood. It can be caused by infections, inflammation, or certain medical conditions. Leukocytosis is the body's response to infections or diseases.",
  leukopenia:
    "Leukopenia is a condition characterized by a low white blood cell count in the blood. It can be caused by infections, bone marrow disorders, or certain medications, leading to an increased risk of infections.",
  lymphocytosis:
    "Lymphocytosis is an increase in the number of lymphocytes, a type of white blood cell, in the blood. It can be caused by infections, leukemia, or other immune system disorders.",
  lymphopenia:
    "Lymphopenia is a condition characterized by a low lymphocyte count in the blood. Lymphocytes play a key role in the immune system, and low levels can increase the risk of infections.",
  neutrophilia:
    "Neutrophilia is a condition characterized by a high neutrophil count in the blood. Neutrophils are a type of white blood cell that plays a key role in the immune response against infections.",
  neutropenia:
    "Neutropenia is a condition characterized by a low neutrophil count in the blood. Neutrophils are essential for fighting bacterial infections, and low levels can increase the risk of serious infections.",
  thrombocytosis:
    "Thrombocytosis is a condition characterized by a high platelet count in the blood. It can be caused by various conditions, including infections, inflammation, or bone marrow disorders.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  autism_spectrum_disorder:
    "Autism spectrum disorder (ASD) is a developmental disorder that affects communication, behavior, and social interaction. It includes a wide range of symptoms and severity, often appearing in early childhood.",
  attention_deficit_hyperactivity_disorder_adhd:
    "Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. It often begins in childhood and can persist into adolescence and adulthood.",
  bipolar_disorder:
    "Bipolar disorder, formerly known as manic depression, is a mental health condition characterized by extreme mood swings, including episodes of mania and depression. It can significantly impact daily functioning.",
  borderline_personality_disorder:
    "Borderline personality disorder (BPD) is a mental health condition characterized by unstable moods, behavior, and relationships. People with BPD often have a distorted self-image and struggle with impulsive actions.",
  conduct_disorder:
    "Conduct disorder is a childhood behavioral and emotional disorder characterized by aggressive, destructive, and deceitful behavior. It often leads to significant impairment in social, academic, and occupational functioning.",
  cyclothymic_disorder:
    "Cyclothymic disorder is a mood disorder characterized by chronic fluctuations in mood, involving periods of hypomania and mild depression. It is less severe than bipolar disorder but can still significantly impact daily life.",
  major_depressive_disorder:
    "Major depressive disorder (MDD) is a mental health condition characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities. It can interfere with daily functioning and lead to physical symptoms.",
  obsessive_compulsive_disorder:
    "Obsessive-compulsive disorder (OCD) is a mental health condition characterized by repetitive, intrusive thoughts (obsessions) and ritualistic behaviors or mental acts (compulsions). It can significantly impair daily functioning.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  panic_disorder:
    "Panic disorder is a mental health condition characterized by sudden and recurrent episodes of intense fear or panic attacks. These episodes may be accompanied by physical symptoms such as heart palpitations and shortness of breath.",
  persistent_depressive_disorder_dysthymia:
    "Persistent depressive disorder, also known as dysthymia, is a chronic form of depression characterized by a low mood that lasts for at least two years. It can lead to significant impairment in daily functioning.",
  post_traumatic_stress_disorder_ptsd:
    "Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. It is characterized by flashbacks, nightmares, and severe anxiety.",
  schizoaffective_disorder:
    "Schizoaffective disorder is a mental health condition that combines features of schizophrenia, such as hallucinations or delusions, with symptoms of a mood disorder, such as mania or depression.",
  schizophrenia:
    "Schizophrenia is a severe mental disorder characterized by distorted thinking and awareness, including hallucinations and delusions. It can significantly impair daily functioning and often requires lifelong treatment.",
  separation_anxiety_disorder:
    "Separation anxiety disorder is a childhood mental health condition characterized by excessive fear or anxiety about separation from home or caregivers. It can lead to significant distress and impairment in daily life.",
  social_anxiety_disorder_social_phobia:
    "Social anxiety disorder, also known as social phobia, is a mental health condition characterized by an intense fear of social situations and scrutiny by others. It can significantly impair social and occupational functioning.",
  antisocial_personality_disorder:
    "Antisocial personality disorder is a mental health condition characterized by a persistent pattern of disregard for the rights of others. People with this disorder often engage in manipulative and deceitful behaviors without remorse.",
  avoidant_personality_disorder:
    "Avoidant personality disorder is a mental health condition characterized by a pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation. It can significantly impact social and occupational functioning.",
  borderline_personality_disorder:
    "Borderline personality disorder (BPD) is a mental health condition characterized by unstable moods, behavior, and relationships. People with BPD often have a distorted self-image and struggle with impulsive actions.",
  dependent_personality_disorder:
    "Dependent personality disorder is a mental health condition characterized by a pervasive fear of separation and an excessive need to be taken care of. It can lead to submissive and clinging behavior.",
  histrionic_personality_disorder:
    "Histrionic personality disorder is a mental health condition characterized by a pattern of attention-seeking behavior, excessive emotionality, and an overwhelming need for approval and reassurance from others.",
  narcissistic_personality_disorder:
    "Narcissistic personality disorder is a mental health condition characterized by a long-term pattern of exaggerated self-importance, the need for excessive attention and admiration, and a lack of empathy for others.",
  obsessive_compulsive_personality_disorder:
    "Obsessive-compulsive personality disorder (OCPD) is a mental health condition characterized by a preoccupation with rules, orderliness, and control. People with OCPD may be perfectionistic and have difficulty relaxing.",
  paranoid_personality_disorder:
    "Paranoid personality disorder is a mental health condition characterized by a pervasive distrust and suspicion of others, even when there is no reason to be suspicious. People with this disorder often interpret others' actions as hostile.",
  schizoid_personality_disorder:
    "Schizoid personality disorder is a mental health condition characterized by a lack of interest in social relationships, a limited range of emotional expression, and a preference for solitary activities.",
  schizotypal_personality_disorder:
    "Schizotypal personality disorder is a mental health condition characterized by odd or eccentric behavior, unconventional beliefs, and difficulties in forming and maintaining relationships.",
  dissociative_amnesia:
    "Dissociative amnesia is a dissociative disorder characterized by the inability to recall important personal information, often related to a traumatic or stressful event, that cannot be attributed to a medical condition.",
  depersonalization_derealization_disorder:
    "Depersonalization-derealization disorder is a dissociative disorder characterized by persistent feelings of being detached from one's mental processes or body (depersonalization) or feeling detached from the surrounding environment (derealization).",
  dissociative_identity_disorder:
    "Dissociative identity disorder (DID) is a mental health condition characterized by the presence of two or more distinct personality states, each with its own pattern of perceiving and interacting with the world.",
  acute_stress_disorder:
    "Acute stress disorder is a mental health condition that can develop after experiencing or witnessing a traumatic event. It is similar to post-traumatic stress disorder (PTSD) but occurs within the first three days to four weeks after the trauma.",
  adjustment_disorders:
    "Adjustment disorders are a group of mental health conditions characterized by excessive, prolonged stress responses to a specific life event or change. These reactions can significantly impair daily functioning.",
  body_dysmorphic_disorder:
    "Body dysmorphic disorder (BDD) is a mental health condition characterized by obsessive preoccupation with perceived defects or flaws in physical appearance, which are not observable to others. It can lead to severe emotional distress.",
  enuresis:
    "Enuresis, or bedwetting, is a childhood disorder characterized by involuntary urination during sleep. It is more common in boys and can be caused by various factors, including delayed development of bladder control.",
  encopresis:
    "Encopresis is a childhood disorder characterized by the repeated passage of feces into inappropriate places, such as clothing or the floor. It is usually involuntary and may be caused by constipation or emotional factors.",
  feeding_and_eating_disorders_of_infancy_or_early_childhood:
    "Feeding and eating disorders of infancy or early childhood are a group of mental health conditions related to feeding and eating that occur during the early years of life. These conditions can affect growth and development.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  rumination_disorder:
    "Rumination disorder is a feeding or eating disorder characterized by the repeated regurgitation of food, which may be re-chewed, re-swallowed, or spit out. It is not due to a medical condition but can lead to malnutrition.",
  pica: "Pica is an eating disorder characterized by the persistent consumption of non-nutritive, non-food substances over a period of at least one month. It can occur in children, pregnant women, and individuals with developmental disorders.",
  avoidant_restrictive_food_intake_disorder:
    "Avoidant/restrictive food intake disorder (ARFID) is an eating disorder characterized by highly selective eating habits, avoidance of certain foods or textures, and sensory sensitivity. It can lead to nutritional deficiencies and impaired social functioning.",
  anorexia_nervosa:
    "Anorexia nervosa is an eating disorder characterized by an intense fear of gaining weight and a distorted body image, leading to self-imposed starvation and excessive weight loss. It can have severe physical and psychological consequences.",
  bulimia_nervosa:
    "Bulimia nervosa is an eating disorder characterized by recurrent episodes of binge eating, followed by compensatory behaviors such as self-induced vomiting, excessive exercise, or fasting. It can have serious health implications.",
  binge_eating_disorder:
    "Binge eating disorder is an eating disorder characterized by recurrent episodes of consuming large quantities of food in a short period, leading to a loss of control during binges. It does not involve compensatory behaviors like bulimia.",
  selective_mutism:
    "Selective mutism is a childhood anxiety disorder characterized by a consistent inability to speak in certain social situations, such as school or public places, despite speaking in other settings.",
  reactive_attachment_disorder_rad:
    "Reactive attachment disorder (RAD) is a childhood mental health disorder characterized by a lack of emotional responsiveness and a difficulty forming meaningful relationships. It often results from early neglect or trauma.",
  separation_anxiety_disorder:
    "Separation anxiety disorder is a childhood mental health condition characterized by excessive fear or anxiety about separation from home or caregivers. It can lead to significant distress and impairment in daily life.",
  stereotypic_movement_disorder:
    "Stereotypic movement disorder is a childhood disorder characterized by repetitive, nonfunctional motor movements, such as hand waving or head banging, that interfere with daily activities or cause physical injury.",
  tourette_syndrome:
    "Tourette syndrome is a neurological disorder characterized by repetitive, involuntary movements and vocalizations called tics. It often starts in childhood and can vary in severity over time.",
  persistent_motor_or_vocal_tic_disorder:
    "Persistent motor or vocal tic disorder is a condition characterized by the presence of motor or vocal tics, which are repetitive, sudden, and nonrhythmic movements or sounds. The disorder lasts for more than one year.",
  trichotillomania:
    "Trichotillomania is a mental health disorder characterized by the recurrent urge to pull out one's hair, resulting in noticeable hair loss. The behavior is often driven by anxiety and relief is experienced after hair pulling.",
  excoriation_skin_picking_disorder:
    "Excoriation (skin-picking) disorder is a mental health condition characterized by recurrent picking at one's own skin, leading to tissue damage and significant distress. It is often driven by the urge to remove perceived imperfections.",
  acute_respiratory_distress_syndrome_ards:
    "Acute respiratory distress syndrome (ARDS) is a severe lung condition characterized by rapid onset of widespread inflammation in the lungs, leading to difficulty breathing, low oxygen levels, and organ failure. It can be life-threatening.",
  chronic_obstructive_pulmonary_disease_copd:
    "Chronic obstructive pulmonary disease (COPD) is a progressive lung disease that makes it difficult to breathe. It is often caused by long-term exposure to irritants like cigarette smoke and leads to symptoms such as coughing and shortness of breath.",
  asthma:
    "Asthma is a chronic respiratory condition characterized by inflammation of the airways, leading to wheezing, coughing, and difficulty breathing. It can be triggered by various factors, including allergies and respiratory infections.",
  pulmonary_fibrosis:
    "Pulmonary fibrosis is a lung disease characterized by the formation of scar tissue in the lungs, leading to reduced lung function and difficulty breathing. The cause is often unknown, but it can be related to environmental exposures.",
  bronchiectasis:
    "Bronchiectasis is a chronic lung condition characterized by damaged and widened airways, making it difficult to clear mucus from the lungs. It can result from infections, autoimmune conditions, or inhaling foreign objects.",
  pneumothorax:
    "Pneumothorax is a condition where air leaks into the space between the lung and the chest wall, causing the lung to collapse partially or completely. It can result in chest pain and difficulty breathing.",
  pleural_effusion:
    "Pleural effusion is the buildup of excess fluid between the layers of the pleura, the double membrane surrounding the lungs. It can compress the lungs, leading to breathing difficulties and chest pain.",
  obstructive_sleep_apnea:
    "Obstructive sleep apnea is a sleep disorder where breathing is briefly and repeatedly interrupted during sleep. It can lead to loud snoring, gasping for air, and daytime sleepiness.",
  narcolepsy:
    "Narcolepsy is a neurological disorder that affects the control of sleep and wakefulness. It can cause sudden attacks of sleep, muscle weakness, and hallucinations.",
  insomnia:
    "Insomnia is a common sleep disorder characterized by difficulty falling asleep, staying asleep, or both. It can lead to daytime fatigue, irritability, and impaired functioning.",
  restless_legs_syndrome:
    "Restless legs syndrome (RLS) is a neurological disorder characterized by uncomfortable sensations in the legs, leading to an irresistible urge to move them. Symptoms worsen during periods of rest or inactivity.",
  periodic_limb_movement_disorder:
    "Periodic limb movement disorder (PLMD) is a sleep disorder characterized by repetitive limb movements, usually involving the legs, during sleep. It can cause frequent awakenings and disrupt sleep.",
  rapid_eye_movement_sleep_behavior_disorder:
    "Rapid eye movement (REM) sleep behavior disorder is a sleep disorder where individuals physically act out their dreams during REM sleep. It can result in injuries to the person or their sleep partner.",
  circadian_rhythm_sleep_disorder:
    "Circadian rhythm sleep disorders are a group of sleep disorders characterized by disturbances in the sleep-wake cycle. This can lead to difficulties falling asleep, staying awake, or maintaining a regular sleep schedule.",
  non_24_hour_sleep_wake_disorder:
    "Non-24-hour sleep-wake disorder is a circadian rhythm sleep disorder where the sleep-wake cycle is not synchronized with the 24-hour day. People with this disorder often have difficulty falling asleep and waking up at desired times.",
  parasomnia:
    "Parasomnia is a category of sleep disorders that involve abnormal movements, behaviors, emotions, perceptions, and dreams that occur while falling asleep, sleeping, between sleep stages, or during arousal from sleep.",
  sleep_talking:
    "Sleep talking, also known as somniloquy, is a sleep disorder characterized by talking during sleep without the person being aware of it. The content of speech can range from nonsensical words to coherent conversations.",
  night_terror_disorder:
    "Night terror disorder, or sleep terrors, is a sleep disorder characterized by intense fear and agitation during sleep, often accompanied by screaming and thrashing. The person usually has no memory of the episode.",
  sleepwalking:
    "Sleepwalking, or somnambulism, is a sleep disorder that involves walking or performing other complex behaviors while still asleep. It can be dangerous as the person is not aware of their actions.",
  bedwetting:
    "Bedwetting, or nocturnal enuresis, is a common childhood condition where a child involuntarily urinates during sleep. It can be caused by various factors, including delayed development of bladder control.",
  anemia:
    "Anemia is a condition characterized by a deficiency of red blood cells or a lack of hemoglobin, leading to reduced oxygen-carrying capacity in the blood. It can cause fatigue, weakness, and paleness.",
  hemophilia:
    "Hemophilia is a genetic disorder that impairs the body's ability to form blood clots, leading to excessive bleeding and easy bruising. It is caused by a deficiency of certain clotting factors.",
  von_willebrand_disease:
    "Von Willebrand disease is a bleeding disorder caused by a deficiency or defect in von Willebrand factor, a protein that helps blood to clot. It can lead to prolonged bleeding after injuries or surgeries.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  deep_vein_thrombosis:
    "Deep vein thrombosis (DVT) is a blood clot that forms in a deep vein, usually in the legs. If the clot breaks loose and travels to the lungs, it can cause a life-threatening condition called pulmonary embolism.",
  pulmonary_embolism:
    "Pulmonary embolism (PE) is a sudden blockage in one of the pulmonary arteries in the lungs. It is often caused by blood clots that travel to the lungs from the legs or other parts of the body.",
  disseminated_intravascular_coagulation_dic:
    "Disseminated intravascular coagulation (DIC) is a serious disorder where the blood's clotting process is activated throughout the body, leading to excessive clotting and bleeding simultaneously. It can result from various underlying conditions.",
  sickle_cell_anemia:
    "Sickle cell anemia is a genetic blood disorder where red blood cells become rigid and sticky, leading to blockages in blood vessels and causing pain, organ damage, and anemia.",
  thalassemia:
    "Thalassemia is a genetic blood disorder that affects the production of hemoglobin, leading to anemia, fatigue, and other complications. The severity of thalassemia varies from mild to severe forms.",
  polycythemia_vera:
    "Polycythemia vera is a rare blood cancer where the bone marrow produces too many red blood cells. This can lead to thickened blood, increasing the risk of blood clots, stroke, and other complications.",
  aplastic_anemia:
    "Aplastic anemia is a rare but serious blood disorder where the bone marrow fails to produce enough blood cells, including red blood cells, white blood cells, and platelets. It can lead to fatigue, infections, and bleeding.",
  leukocytosis:
    "Leukocytosis is a condition characterized by a high white blood cell count in the blood. It can be caused by infections, inflammation, or certain medical conditions. Leukocytosis is the body's response to infections or diseases.",
  leukopenia:
    "Leukopenia is a condition characterized by a low white blood cell count in the blood. It can be caused by infections, bone marrow disorders, or certain medications, leading to an increased risk of infections.",
  lymphocytosis:
    "Lymphocytosis is an increase in the number of lymphocytes, a type of white blood cell, in the blood. It can be caused by infections, leukemia, or other immune system disorders.",
  lymphopenia:
    "Lymphopenia is a condition characterized by a low lymphocyte count in the blood. Lymphocytes play a key role in the immune system, and low levels can increase the risk of infections.",
  neutrophilia:
    "Neutrophilia is a condition characterized by a high neutrophil count in the blood. Neutrophils are a type of white blood cell that plays a key role in the immune response against infections.",
  neutropenia:
    "Neutropenia is a condition characterized by a low neutrophil count in the blood. Neutrophils are essential for fighting bacterial infections, and low levels can increase the risk of serious infections.",
  thrombocytosis:
    "Thrombocytosis is a condition characterized by a high platelet count in the blood. It can be caused by various conditions, including infections, inflammation, or bone marrow disorders.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  autism_spectrum_disorder:
    "Autism spectrum disorder (ASD) is a developmental disorder that affects communication, behavior, and social interaction. It includes a wide range of symptoms and severity, often appearing in early childhood.",
  attention_deficit_hyperactivity_disorder_adhd:
    "Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. It often begins in childhood and can persist into adolescence and adulthood.",
  bipolar_disorder:
    "Bipolar disorder, formerly known as manic depression, is a mental health condition characterized by extreme mood swings, including episodes of mania and depression. It can significantly impact daily functioning.",
  borderline_personality_disorder:
    "Borderline personality disorder (BPD) is a mental health condition characterized by unstable moods, behavior, and relationships. People with BPD often have a distorted self-image and struggle with impulsive actions.",
  conduct_disorder:
    "Conduct disorder is a childhood behavioral and emotional disorder characterized by aggressive, destructive, and deceitful behavior. It often leads to significant impairment in social, academic, and occupational functioning.",
  cyclothymic_disorder:
    "Cyclothymic disorder is a mood disorder characterized by chronic fluctuations in mood, involving periods of hypomania and mild depression. It is less severe than bipolar disorder but can still significantly impact daily life.",
  major_depressive_disorder:
    "Major depressive disorder (MDD) is a mental health condition characterized by persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities. It can interfere with daily functioning and lead to physical symptoms.",
  obsessive_compulsive_disorder:
    "Obsessive-compulsive disorder (OCD) is a mental health condition characterized by repetitive, intrusive thoughts (obsessions) and ritualistic behaviors or mental acts (compulsions). It can significantly impair daily functioning.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  panic_disorder:
    "Panic disorder is a mental health condition characterized by sudden and recurrent episodes of intense fear or panic attacks. These episodes may be accompanied by physical symptoms such as heart palpitations and shortness of breath.",
  persistent_depressive_disorder_dysthymia:
    "Persistent depressive disorder, also known as dysthymia, is a chronic form of depression characterized by a low mood that lasts for at least two years. It can lead to significant impairment in daily functioning.",
  post_traumatic_stress_disorder_ptsd:
    "Post-traumatic stress disorder (PTSD) is a mental health condition that can develop after experiencing or witnessing a traumatic event. It is characterized by flashbacks, nightmares, and severe anxiety.",
  schizoaffective_disorder:
    "Schizoaffective disorder is a mental health condition that combines features of schizophrenia, such as hallucinations or delusions, with symptoms of a mood disorder, such as mania or depression.",
  schizophrenia:
    "Schizophrenia is a severe mental disorder characterized by distorted thinking and awareness, including hallucinations and delusions. It can significantly impair daily functioning and often requires lifelong treatment.",
  separation_anxiety_disorder:
    "Separation anxiety disorder is a childhood mental health condition characterized by excessive fear or anxiety about separation from home or caregivers. It can lead to significant distress and impairment in daily life.",
  social_anxiety_disorder_social_phobia:
    "Social anxiety disorder, also known as social phobia, is a mental health condition characterized by an intense fear of social situations and scrutiny by others. It can significantly impair social and occupational functioning.",
  antisocial_personality_disorder:
    "Antisocial personality disorder is a mental health condition characterized by a persistent pattern of disregard for the rights of others. People with this disorder often engage in manipulative and deceitful behaviors without remorse.",
  avoidant_personality_disorder:
    "Avoidant personality disorder is a mental health condition characterized by a pattern of social inhibition, feelings of inadequacy, and hypersensitivity to negative evaluation. It can significantly impact social and occupational functioning.",
  borderline_personality_disorder:
    "Borderline personality disorder (BPD) is a mental health condition characterized by unstable moods, behavior, and relationships. People with BPD often have a distorted self-image and struggle with impulsive actions.",
  dependent_personality_disorder:
    "Dependent personality disorder is a mental health condition characterized by a pervasive fear of separation and an excessive need to be taken care of. It can lead to submissive and clinging behavior.",
  histrionic_personality_disorder:
    "Histrionic personality disorder is a mental health condition characterized by a pattern of attention-seeking behavior, excessive emotionality, and an overwhelming need for approval and reassurance from others.",
  narcissistic_personality_disorder:
    "Narcissistic personality disorder is a mental health condition characterized by a long-term pattern of exaggerated self-importance, the need for excessive attention and admiration, and a lack of empathy for others.",
  obsessive_compulsive_personality_disorder:
    "Obsessive-compulsive personality disorder (OCPD) is a mental health condition characterized by a preoccupation with rules, orderliness, and control. People with OCPD may be perfectionistic and have difficulty relaxing.",
  paranoid_personality_disorder:
    "Paranoid personality disorder is a mental health condition characterized by a pervasive distrust and suspicion of others, even when there is no reason to be suspicious. People with this disorder often interpret others' actions as hostile.",
  schizoid_personality_disorder:
    "Schizoid personality disorder is a mental health condition characterized by a lack of interest in social relationships, a limited range of emotional expression, and a preference for solitary activities.",
  kwashiorkor:
    "Kwashiorkor is a severe form of malnutrition, often seen in children, caused by a deficiency of protein in the diet. It is characterized by swelling (edema), especially in the belly, along with skin and hair changes. Children with kwashiorkor may experience stunted growth, weakened immune system, and overall developmental issues due to insufficient protein intake.",
  schizotypal_personality_disorder:
    "Schizotypal personality disorder is a mental health condition characterized by odd or eccentric behavior, unconventional beliefs, and difficulties in forming and maintaining relationships.",
  dissociative_amnesia:
    "Dissociative amnesia is a dissociative disorder characterized by the inability to recall important personal information, often related to a traumatic or stressful event, that cannot be attributed to a medical condition.",
  depersonalization_derealization_disorder:
    "Depersonalization-derealization disorder is a dissociative disorder characterized by persistent feelings of being detached from one's mental processes or body (depersonalization) or feeling detached from the surrounding environment (derealization).",
  dissociative_identity_disorder:
    "Dissociative identity disorder (DID) is a mental health condition characterized by the presence of two or more distinct personality states, each with its own pattern of perceiving and interacting with the world.",
  acute_stress_disorder:
    "Acute stress disorder is a mental health condition that can develop after experiencing or witnessing a traumatic event. It is similar to post-traumatic stress disorder (PTSD) but occurs within the first three days to four weeks after the trauma.",
  adjustment_disorders:
    "Adjustment disorders are a group of mental health conditions characterized by excessive, prolonged stress responses to a specific life event or change. These reactions can significantly impair daily functioning.",
  body_dysmorphic_disorder:
    "Body dysmorphic disorder (BDD) is a mental health condition characterized by obsessive preoccupation with perceived defects or flaws in physical appearance, which are not observable to others. It can lead to severe emotional distress.",
  enuresis:
    "Enuresis, or bedwetting, is a childhood disorder characterized by involuntary urination during sleep. It is more common in boys and can be caused by various factors, including delayed development of bladder control.",
  encopresis:
    "Encopresis is a childhood disorder characterized by the repeated passage of feces into inappropriate places, such as clothing or the floor. It is usually involuntary and may be caused by constipation or emotional factors.",
  feeding_and_eating_disorders_of_infancy_or_early_childhood:
    "Feeding and eating disorders of infancy or early childhood are a group of mental health conditions related to feeding and eating that occur during the early years of life. These conditions can affect growth and development.",
  oppositional_defiant_disorder:
    "Oppositional defiant disorder (ODD) is a childhood behavioral disorder characterized by a pattern of angry, defiant, and disobedient behavior toward authority figures. It often leads to significant impairment in social, academic, and occupational functioning.",
  rumination_disorder:
    "Rumination disorder is a feeding or eating disorder characterized by the repeated regurgitation of food, which may be re-chewed, re-swallowed, or spit out. It is not due to a medical condition but can lead to malnutrition.",
  pica: "Pica is an eating disorder characterized by the persistent consumption of non-nutritive, non-food substances over a period of at least one month. It can occur in children, pregnant women, and individuals with developmental disorders.",
  avoidant_restrictive_food_intake_disorder:
    "Avoidant/restrictive food intake disorder (ARFID) is an eating disorder characterized by highly selective eating habits, avoidance of certain foods or textures, and sensory sensitivity. It can lead to nutritional deficiencies and impaired social functioning.",
  anorexia_nervosa:
    "Anorexia nervosa is an eating disorder characterized by an intense fear of gaining weight and a distorted body image, leading to self-imposed starvation and excessive weight loss. It can have severe physical and psychological consequences.",
  anorexia:
    "Anorexia nervosa is an eating disorder characterized by an intense fear of gaining weight and a distorted body image, leading to self-imposed starvation and excessive weight loss. It can have severe physical and psychological consequences.",
  bulimia_nervosa:
    "Bulimia nervosa is an eating disorder characterized by recurrent episodes of binge eating, followed by compensatory behaviors such as self-induced vomiting, excessive exercise, or fasting. It can have serious health implications.",
  binge_eating_disorder:
    "Binge eating disorder is an eating disorder characterized by recurrent episodes of consuming large quantities of food in a short period, leading to a loss of control during binges. It does not involve compensatory behaviors like bulimia.",
  selective_mutism:
    "Selective mutism is a childhood anxiety disorder characterized by a consistent inability to speak in certain social situations, such as school or public places, despite speaking in other settings.",
  reactive_attachment_disorder_rad:
    "Reactive attachment disorder (RAD) is a childhood mental health disorder characterized by a lack of emotional responsiveness and a difficulty forming meaningful relationships. It often results from early neglect or trauma.",
  separation_anxiety_disorder:
    "Separation anxiety disorder is a childhood mental health condition characterized by excessive fear or anxiety about separation from home or caregivers. It can lead to significant distress and impairment in daily life.",
  stereotypic_movement_disorder:
    "Stereotypic movement disorder is a childhood disorder characterized by repetitive, nonfunctional motor movements, such as hand waving or head banging, that interfere with daily activities or cause physical injury.",
  tourette_syndrome:
    "Tourette syndrome is a neurological disorder characterized by repetitive, involuntary movements and vocalizations called tics. It often starts in childhood and can vary in severity over time.",
  persistent_motor_or_vocal_tic_disorder:
    "Persistent motor or vocal tic disorder is a condition characterized by the presence of motor or vocal tics, which are repetitive, sudden, and nonrhythmic movements or sounds. The disorder lasts for more than one year.",
  trichotillomania:
    "Trichotillomania is a mental health disorder characterized by the recurrent urge to pull out one's hair, resulting in noticeable hair loss. The behavior is often driven by anxiety and relief is experienced after hair pulling.",
  excoriation_skin_picking_disorder:
    "Excoriation (skin-picking) disorder is a mental health condition characterized by recurrent picking at one's own skin, leading to tissue damage and significant distress. It is often driven by the urge to remove perceived imperfections.",
  acute_respiratory_distress_syndrome_ards:
    "Acute respiratory distress syndrome (ARDS) is a severe lung condition characterized by rapid onset of widespread inflammation in the lungs, leading to difficulty breathing, low oxygen levels, and organ failure. It can be life-threatening.",
  chronic_obstructive_pulmonary_disease_copd:
    "Chronic obstructive pulmonary disease (COPD) is a progressive lung disease that makes it difficult to breathe. It is often caused by long-term exposure to irritants like cigarette smoke and leads to symptoms such as coughing and shortness of breath.",
  asthma:
    "Asthma is a chronic respiratory condition characterized by inflammation of the airways, leading to wheezing, coughing, and difficulty breathing. It can be triggered by various factors, including allergies and respiratory infections.",
  pulmonary_fibrosis:
    "Pulmonary fibrosis is a lung disease characterized by the formation of scar tissue in the lungs, leading to reduced lung function and difficulty breathing. The cause is often unknown, but it can be related to environmental exposures.",
  bronchiectasis:
    "Bronchiectasis is a chronic lung condition characterized by damaged and widened airways, making it difficult to clear mucus from the lungs. It can result from infections, autoimmune conditions, or inhaling foreign objects.",
  pneumothorax:
    "Pneumothorax is a condition where air leaks into the space between the lung and the chest wall, causing the lung to collapse partially or completely. It can result in chest pain and difficulty breathing.",
  pleural_effusion:
    "Pleural effusion is the buildup of excess fluid between the layers of the pleura, the double membrane surrounding the lungs. It can compress the lungs, leading to breathing difficulties and chest pain.",
  contact_dermatitis:
    "Contact dermatitis is a type of skin inflammation that occurs when the skin comes into direct contact with an irritant or allergen. Irritant contact dermatitis is caused by substances like detergents, acids, or solvents, irritating the skin. Allergic contact dermatitis, on the other hand, results from an allergic reaction to substances like certain metals, plants, or chemicals. Symptoms include redness, itching, swelling, and blisters in the affected area. Avoiding the trigger, keeping the skin clean and dry, and using topical treatments like corticosteroid creams are common approaches to manage contact dermatitis.",
  obstructive_sleep_apnea:
    "Obstructive sleep apnea is a sleep disorder where breathing is briefly and repeatedly interrupted during sleep. It can lead to loud snoring, gasping for air, and daytime sleepiness.",
  narcolepsy:
    "Narcolepsy is a neurological disorder that affects the control of sleep and wakefulness. It can cause sudden attacks of sleep, muscle weakness, and hallucinations.",
  insomnia:
    "Insomnia is a common sleep disorder characterized by difficulty falling asleep, staying asleep, or both. It can lead to daytime fatigue, irritability, and impaired functioning.",
  topical_steroid_withdrawal:
    "Topical steroid withdrawal (TSW) is a challenging skin condition that occurs when individuals who have been using topical steroids, such as corticosteroid creams or ointments, for an extended period suddenly stop using them. TSW is characterized by a severe and often painful flare-up of symptoms, including redness, burning, itching, and skin sensitivity. These symptoms can affect the areas where the steroids were applied and sometimes spread to other parts of the body. TSW occurs as the body adapts to the absence of steroids and can last for weeks to months. Management involves supportive care, moisturizing, and sometimes the use of non-steroidal treatments under medical supervision.",
  restless_legs_syndrome:
    "Restless legs syndrome (RLS) is a neurological disorder characterized by uncomfortable sensations in the legs, leading to an irresistible urge to move them. Symptoms worsen during periods of rest or inactivity.",
  periodic_limb_movement_disorder:
    "Periodic limb movement disorder (PLMD) is a sleep disorder characterized by repetitive limb movements, usually involving the legs, during sleep. It can cause frequent awakenings and disrupt sleep.",
  rapid_eye_movement_sleep_behavior_disorder:
    "Rapid eye movement (REM) sleep behavior disorder is a sleep disorder where individuals physically act out their dreams during REM sleep. It can result in injuries to the person or their sleep partner.",
  circadian_rhythm_sleep_disorder:
    "Circadian rhythm sleep disorders are a group of sleep disorders characterized by disturbances in the sleep-wake cycle. This can lead to difficulties falling asleep, staying awake, or maintaining a regular sleep schedule.",
  non_24_hour_sleep_wake_disorder:
    "Non-24-hour sleep-wake disorder is a circadian rhythm sleep disorder where the sleep-wake cycle is not synchronized with the 24-hour day. People with this disorder often have difficulty falling asleep and waking up at desired times.",
  parasomnia:
    "Parasomnia is a category of sleep disorders that involve abnormal movements, behaviors, emotions, perceptions, and dreams that occur while falling asleep, sleeping, between sleep stages, or during arousal from sleep.",
  sleep_talking:
    "Sleep talking, also known as somniloquy, is a sleep disorder characterized by talking during sleep without the person being aware of it. The content of speech can range from nonsensical words to coherent conversations.",
  night_terror_disorder:
    "Night terror disorder, or sleep terrors, is a sleep disorder characterized by intense fear and agitation during sleep, often accompanied by screaming and thrashing. The person usually has no memory of the episode.",
  sleepwalking:
    "Sleepwalking, or somnambulism, is a sleep disorder that involves walking or performing other complex behaviors while still asleep. It can be dangerous as the person is not aware of their actions.",
  bedwetting:
    "Bedwetting, or nocturnal enuresis, is a common childhood condition where a child involuntarily urinates during sleep. It can be caused by various factors, including delayed development of bladder control.",
  anemia:
    "Anemia is a condition characterized by a deficiency of red blood cells or a lack of hemoglobin, leading to reduced oxygen-carrying capacity in the blood. It can cause fatigue, weakness, and paleness.",
  hemophilia:
    "Hemophilia is a genetic disorder that impairs the body's ability to form blood clots, leading to excessive bleeding and easy bruising. It is caused by a deficiency of certain clotting factors.",
  von_willebrand_disease:
    "Von Willebrand disease is a bleeding disorder caused by a deficiency or defect in von Willebrand factor, a protein that helps blood to clot. It can lead to prolonged bleeding after injuries or surgeries.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  deep_vein_thrombosis:
    "Deep vein thrombosis (DVT) is a blood clot that forms in a deep vein, usually in the legs. If the clot breaks loose and travels to the lungs, it can cause a life-threatening condition called pulmonary embolism.",
  pulmonary_embolism:
    "Pulmonary embolism (PE) is a sudden blockage in one of the pulmonary arteries in the lungs. It is often caused by blood clots that travel to the lungs from the legs or other parts of the body.",
  disseminated_intravascular_coagulation_dic:
    "Disseminated intravascular coagulation (DIC) is a serious disorder where the blood's clotting process is activated throughout the body, leading to excessive clotting and bleeding simultaneously. It can result from various underlying conditions.",
  sickle_cell_anemia:
    "Sickle cell anemia is a genetic blood disorder where red blood cells become rigid and sticky, leading to blockages in blood vessels and causing pain, organ damage, and anemia.",
  thalassemia:
    "Thalassemia is a genetic blood disorder that affects the production of hemoglobin, leading to anemia, fatigue, and other complications. The severity of thalassemia varies from mild to severe forms.",
  polycythemia_vera:
    "Polycythemia vera is a rare blood cancer where the bone marrow produces too many red blood cells. This can lead to thickened blood, increasing the risk of blood clots, stroke, and other complications.",
  aplastic_anemia:
    "Aplastic anemia is a rare but serious blood disorder where the bone marrow fails to produce enough blood cells, including red blood cells, white blood cells, and platelets. It can lead to fatigue, infections, and bleeding.",
  leukocytosis:
    "Leukocytosis is a condition characterized by a high white blood cell count in the blood. It can be caused by infections, inflammation, or certain medical conditions. Leukocytosis is the body's response to infections or diseases.",
  leukopenia:
    "Leukopenia is a condition characterized by a low white blood cell count in the blood. It can be caused by infections, bone marrow disorders, or certain medications, leading to an increased risk of infections.",
  lymphocytosis:
    "Lymphocytosis is an increase in the number of lymphocytes, a type of white blood cell, in the blood. It can be caused by infections, leukemia, or other immune system disorders.",
  lymphopenia:
    "Lymphopenia is a condition characterized by a low lymphocyte count in the blood. Lymphocytes play a key role in the immune system, and low levels can increase the risk of infections.",
  neutrophilia:
    "Neutrophilia is a condition characterized by a high neutrophil count in the blood. Neutrophils are a type of white blood cell that plays a key role in the immune response against infections.",
  neutropenia:
    "Neutropenia is a condition characterized by a low neutrophil count in the blood. Neutrophils are essential for fighting bacterial infections, and low levels can increase the risk of serious infections.",
  thrombocytosis:
    "Thrombocytosis is a condition characterized by a high platelet count in the blood. It can be caused by various conditions, including infections, inflammation, or bone marrow disorders.",
  thrombocytopenia:
    "Thrombocytopenia is a condition characterized by a low platelet count in the blood. Platelets are essential for blood clotting, and low levels can result in easy bruising and prolonged bleeding.",
  autism_spectrum_disorder:
    "Autism spectrum disorder (ASD) is a developmental disorder that affects communication, behavior, and social interaction. It includes a wide range of symptoms and severity, often appearing in early childhood.",
  attention_deficit_hyperactivity_disorder_adhd:
    "Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity. It often begins in childhood and can persist into adolescence and adulthood.",
  bipolar_disorder:
    "Bipolar disorder, formerly known as manic depression, is a mental health condition characterized by extreme mood swings, including episodes of mania and depression. It can significantly impact daily functioning.",
};

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
