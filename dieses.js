const diseases = [
  {
    name: "Common Cold",
    symptoms: ["Runny or stuffy nose", "Sore throat", "Cough", "Sneezing", "Fatigue","fever"],
    otcMedicine: ["Acetaminophen", "Ibuprofen", "Decongestants", "Antihistamines"],
  },
  {
    name: "Flu (Influenza)",
    symptoms: ["Fever", "Body aches", "Chills", "Cough", "Sore throat"],
    otcMedicine: ["Acetaminophen", "Ibuprofen", "Decongestants", "Antihistamines"],
  },
  {
    name: "Allergies",
    symptoms: ["Sneezing", "Runny or stuffy nose", "Watery or itchy eyes", "Coughing"],
    otcMedicine: ["Antihistamines", "Decongestants", "Nasal corticosteroids"],
  },
  {
    name: "Acid Reflux (GERD)",
    symptoms: ["Heartburn", "Regurgitation", "Difficulty swallowing", "Chest pain"],
    otcMedicine: ["Antacids", "H2 receptor antagonists", "Proton pump inhibitors"],
  },
  {
    name: "Headache",
    symptoms: ["Head pain", "Pressure or tightness in the head", "Sensitivity to light or sound"],
    otcMedicine: ["Acetaminophen", "Ibuprofen", "Aspirin"],
  },
  {
    name: "Sinusitis",
    symptoms: ["Facial pain or pressure", "Nasal congestion", "Postnasal drip", "Cough"],
    otcMedicine: ["Decongestants", "Saline nasal spray", "Pain relievers"],
  },
  {
    name: "Urinary Tract Infection (UTI)",
    symptoms: ["Frequent urination", "Burning sensation during urination", "Cloudy or bloody urine"],
    otcMedicine: ["Analgesics", "Antibacterial urinary pain relievers"],
  },
  {
    name: "Indigestion",
    symptoms: ["Bloating", "Nausea", "Feeling full quickly", "Burning sensation in the upper abdomen"],
    otcMedicine: ["Antacids", "H2 receptor antagonists", "Proton pump inhibitors"],
  },
  {
    name: "Diarrhea",
    symptoms: ["Frequent loose, watery stools", "Abdominal cramps", "Nausea", "Bloating"],
    otcMedicine: ["Anti-diarrheal medications", "Oral rehydration solutions"],
  },
  {
    name: "Athlete's Foot",
    symptoms: ["Itching", "Burning", "Cracked, blistered, or peeling areas of skin", "Redness"],
    otcMedicine: ["Antifungal creams", "Powders", "Sprays"],
  },
  {
      name: "Heartburn",
      symptoms: ["Burning sensation in the chest", "Acidic taste in the mouth", "Difficulty swallowing"],
      otcMedicine: ["Antacids", "H2 receptor antagonists", "Proton pump inhibitors"],
    },
    {
      name: "Migraine",
      symptoms: ["Intense headache", "Nausea or vomiting", "Sensitivity to light and sound"],
      otcMedicine: ["Pain relievers (e.g., ibuprofen, aspirin, acetaminophen)", "Triptans", "Caffeine"],
    },
    {
      name: "Asthma",
      symptoms: ["Shortness of breath", "Wheezing", "Chest tightness", "Coughing"],
      otcMedicine: ["Bronchodilators (e.g., albuterol)", "Inhaled corticosteroids", "Antihistamines"],
    },
    {
      name: "Constipation",
      symptoms: ["Difficulty passing stool", "Infrequent bowel movements", "Hard or lumpy stools"],
      otcMedicine: ["Fiber supplements", "Stool softeners", "Laxatives"],
    },
    {
      name: "Sunburn",
      symptoms: ["Red, painful skin", "Swelling", "Blisters", "Peeling"],
      otcMedicine: ["Aloe vera gel", "Topical hydrocortisone cream", "Pain relievers (e.g., ibuprofen, acetaminophen)"],
    },
    {
      name: "Gastroenteritis (Stomach Flu)",
      symptoms: ["Nausea", "Vomiting", "Diarrhea", "Abdominal cramps"],
      otcMedicine: ["Oral rehydration solutions", "Anti-nausea medications", "Antidiarrheal medications"],
    },
    {
      name: "Ear Infection (Otitis Media)",
      symptoms: ["Ear pain", "Fluid drainage from the ear", "Difficulty hearing"],
      otcMedicine: ["Pain relievers (e.g., acetaminophen, ibuprofen)", "Ear drops (for pain relief)"],
    },
    {
      name: "Pink Eye (Conjunctivitis)",
      symptoms: ["Redness in the white of the eye", "Increased tear production", "Itchy or burning eyes"],
      otcMedicine: ["Artificial tears", "Antihistamine eye drops", "Antibiotic eye drops (for bacterial conjunctivitis)"],
    },
    {
      name: "Eczema",
      symptoms: ["Dry, itchy, or red skin", "Skin inflammation", "Rough or scaly patches"],
      otcMedicine: ["Moisturizers", "Topical corticosteroids", "Antihistamines (for itching)"],
    },
    {
      name: "High Blood Pressure (Hypertension)",
      symptoms: ["Often asymptomatic", "Headaches", "Shortness of breath", "Nosebleeds"],
      otcMedicine: ["Prescription medications (not typically treated with OTC drugs)"],
    },
    {
      name: "Diabetes",
      symptoms: ["Increased thirst", "Frequent urination", "Extreme hunger", "Fatigue", "Blurred vision"],
      otcMedicine: ["Insulin (for type 1 diabetes)", "Oral medications (for type 2 diabetes)", "Blood sugar monitoring supplies"],
    },
    {
      name: "Hypothyroidism",
      symptoms: ["Fatigue", "Weight gain", "Dry skin", "Constipation", "Cold intolerance"],
      otcMedicine: ["Thyroid hormone replacement medications"],
    },
    {
      name: "Osteoarthritis",
      symptoms: ["Joint pain", "Stiffness", "Swelling", "Decreased range of motion"],
      otcMedicine: ["Acetaminophen", "Nonsteroidal anti-inflammatory drugs (NSAIDs)", "Topical pain relievers"],
    },
    {
      name: "Anxiety",
      symptoms: ["Excessive worry or fear", "Restlessness", "Difficulty concentrating", "Muscle tension", "Irritability"],
      otcMedicine: ["Herbal supplements (e.g., kava, valerian root)", "Lifestyle changes (e.g., exercise, relaxation techniques)"],
    },
    {
      name: "Depression",
      symptoms: ["Persistent sadness", "Loss of interest or pleasure in activities", "Changes in appetite or weight", "Fatigue", "Feelings of worthlessness or guilt"],
      otcMedicine: ["Herbal supplements (e.g., St. John's wort)", "Lifestyle changes (e.g., exercise, therapy)"],
    },
    {
      name: "Gastritis",
      symptoms: ["Stomach pain", "Nausea", "Vomiting", "Indigestion", "Loss of appetite"],
      otcMedicine: ["Antacids", "H2 receptor antagonists", "Proton pump inhibitors"],
    },
    {
      name: "Gout",
      symptoms: ["Sudden, severe joint pain", "Swelling", "Redness", "Warmth", "Limited range of motion"],
      otcMedicine: ["Nonsteroidal anti-inflammatory drugs (NSAIDs)", "Colchicine", "Corticosteroids"],
    },
    {
      name: "Obesity",
      symptoms: ["Excessive body fat", "Increased risk of other health problems", "Difficulty with physical activity"],
      otcMedicine: ["Lifestyle changes (e.g., diet, exercise)", "Weight loss supplements"],
    },
    {
      name: "Hyperthyroidism",
      symptoms: ["Weight loss", "Increased appetite", "Rapid heartbeat", "Nervousness", "Heat intolerance"],
      otcMedicine: ["Thyroid-blocking medications", "Beta-blockers (for symptom relief)"],
    },
    {
      name: "Insomnia",
      symptoms: ["Difficulty falling asleep", "Difficulty staying asleep", "Waking up too early", "Daytime fatigue"],
      otcMedicine: ["Sleep aids (e.g., diphenhydramine, doxylamine)", "Melatonin supplements", "Lifestyle changes (e.g., sleep hygiene)"],
    },
    {
      name: "Hypothyroidism",
      symptoms: ["Fatigue", "Weight gain", "Dry skin", "Constipation", "Cold intolerance"],
      otcMedicine: ["Thyroid supplements (e.g., levothyroxine) - typically requires prescription"],
    },
    {
      name: "Hyperthyroidism",
      symptoms: ["Weight loss", "Rapid heartbeat", "Excessive sweating", "Nervousness", "Heat intolerance"],
      otcMedicine: ["Beta blockers (e.g., propranolol) - to manage symptoms like rapid heartbeat and nervousness"],
    },
    {
      name: "Celiac Disease",
      symptoms: ["Abdominal pain", "Bloating", "Diarrhea", "Fatigue", "Weight loss"],
      otcMedicine: ["Gluten-free diet - primary treatment, no specific OTC medication"],
    },
    {
      name: "Lactose Intolerance",
      symptoms: ["Abdominal pain", "Bloating", "Gas", "Diarrhea", "Nausea"],
      otcMedicine: ["Lactase enzyme supplements - to aid digestion of lactose-containing foods"],
    },
    {
      name: "Hypertension (High Blood Pressure)",
      symptoms: ["Often asymptomatic", "Headaches", "Shortness of breath", "Nosebleeds"],
      otcMedicine: ["Prescription medications (not typically treated with OTC drugs)"],
    },
    {
      name: "Osteoporosis",
      symptoms: ["Bone fractures (especially in the spine, hip, or wrist)", "Loss of height over time", "Back pain"],
      otcMedicine: ["Calcium supplements", "Vitamin D supplements", "Bisphosphonates (prescription medication)"],
    },
    {
      name: "Rheumatoid Arthritis",
      symptoms: ["Joint pain and swelling", "Stiffness, especially in the morning", "Fatigue", "Fever"],
      otcMedicine: ["Nonsteroidal anti-inflammatory drugs (NSAIDs)", "Pain relievers (e.g., acetaminophen, ibuprofen)"],
    },
    {
      name: "Fibromyalgia",
      symptoms: ["Widespread muscle pain", "Fatigue", "Sleep disturbances", "Memory and mood issues"],
      otcMedicine: ["Pain relievers (e.g., acetaminophen, ibuprofen)", "Antidepressants", "Antiseizure drugs (e.g., pregabalin)"],
    },
    {
      name: "Peptic Ulcer Disease",
      symptoms: ["Burning stomach pain", "Heartburn", "Nausea", "Bloating", "Vomiting"],
      otcMedicine: ["Antacids", "H2 receptor antagonists", "Proton pump inhibitors"],
    },
    {
      name: "Psoriasis",
      symptoms: ["Red patches of skin covered with silvery scales", "Dry, cracked skin that may bleed", "Itching or burning sensation"],
      otcMedicine: ["Moisturizers", "Topical corticosteroids", "Coal tar products"],
    }
];

let select1=document.querySelector("#symptoms1")
let select2=document.querySelector("#symptoms2")
let select3=document.querySelector("#symptoms3")
let select4=document.querySelector("#symptoms4")
let form =document.querySelector("#form")
let result=document.querySelector(".result")

let arry=new Array()
diseases.forEach((a)=>{
for(let i=0;i<4;i++){
if( !arry.includes(a.symptoms[i])){
arry.push(a.symptoms[i])

}}
})
console.log(arry.length)
select(select1,arry)
select(select2,arry)
select(select3,arry)
select(select4,arry)

function select(select,array){
array.sort().forEach((a,index)=>{
let option=document.createElement("option")
// option.value=index
option.innerHTML=a
select.appendChild(option)

})}


form.addEventListener("submit",(e)=>{
e.preventDefault();
document.querySelector(".result").style.display="flex"
let Array=[]
Array[0]=select1.value
Array[1]=select2.value
Array[2]=select3.value
Array[3]=select4.value

let arry1= removeduplicat(Array)
if(arry1.length<=2){
  alert("entre atleast 3 inputs")
}
else{
  document.querySelector(".tresult").style.display="none"
  doctor(arry1)
}

})



function removeduplicat(Array){
let array=[]
Array.forEach((a)=>{
  if(!array.includes(a)){
    array.push(a)
  }
})
array.sort()
if( array.includes("")){
array.shift(5)
}

    return array;
}


function doctor(array){
let testd=[]
let finish=[]
diseases.forEach((a)=>{
  for(i=0;i<array.length;i++){
      if(a.symptoms.includes(array[i])){
          testd.push(a.name)
      }
}

})
testd.sort()
for(i=0;i<testd.length;i++){
if(testd[i]==testd[i+1]){
  if(!finish.includes(testd[i])){
    finish.push(testd[i])
  }
  }
 
}
if(finish.length<=0){
result.childNodes[1].innerHTML="Can not find the diseas name you can select other options or better to consult the doctor "
}
else{
console.log(finish.length)
displaydisese(finish)

}
}

function displaydisese(array) {
diseases.forEach((a)=>{
   if(array[0]==a.name){
    result.childNodes[1].innerHTML=`you may have ${a.name} and you can take`
    result.childNodes[3].innerHTML=` ${a.otcMedicine} medicine`
   }
})

}
const commontabelets={
paracetamol: {
  name: "Paracetamol",
  description: "Analgesic (pain reliever) and antipyretic (fever reducer)",
  uses: ["Fever", "Headache", "Muscle pain", "Minor aches and pains"],
},
ibuprofen: {
  name: "Ibuprofen",
  description: "Nonsteroidal anti-inflammatory drug (NSAID)",
  uses: ["Fever", "Pain", "Inflammation", "Menstrual cramps"],
},
aspirin: {
  name: "Aspirin",
  description: "Nonsteroidal anti-inflammatory drug (NSAID) and antiplatelet",
  uses: ["Pain", "Fever", "Inflammation", "Heart attack prevention"],
},
cetirizine: {
  name: "Cetirizine",
  description: "Antihistamine",
  uses: ["Allergy symptoms", "Hay fever", "Hives", "Itchy skin"],
},
omeprazole: {
  name: "Omeprazole",
  description: "Proton pump inhibitor (PPI)",
  uses: ["Heartburn", "Acid reflux", "Gastric ulcers", "Gastroesophageal reflux disease (GERD)"],
},
loratadine: {
  name: "Loratadine",
  description: "Antihistamine",
  uses: ["Allergy symptoms", "Hay fever", "Itchy eyes", "Runny nose"],
},
simvastatin: {
  name: "Simvastatin",
  description: "Statins (cholesterol-lowering medication)",
  uses: ["High cholesterol", "Prevention of cardiovascular diseases"],
},
metformin: {
  name: "Metformin",
  description: "Oral antidiabetic medication (biguanide)",
  uses: ["Type 2 diabetes", "Insulin resistance", "Polycystic ovary syndrome (PCOS)"],
},
naproxen: {
  name: "Naproxen",
  description: "Nonsteroidal anti-inflammatory drug (NSAID)",
  uses: ["Pain relief", "Inflammation", "Fever", "Menstrual cramps"],
},
amoxicillin: {
  name: "Amoxicillin",
  description: "Antibiotic (penicillin)",
  uses: ["Bacterial infections", "Ear infections", "Respiratory tract infections", "Urinary tract infections"],
},
ranitidine: {
  name: "Ranitidine",
  description: "H2 blocker (histamine-2 receptor antagonist)",
  uses: ["Heartburn", "Acid reflux", "Gastric ulcers", "Gastroesophageal reflux disease (GERD)"],
},
metoprolol: {
  name: "Metoprolol",
  description: "Beta blocker",
  uses: ["Hypertension", "Angina", "Heart failure", "Prevention of heart attacks"],
},
ciprofloxacin: {
  name: "Ciprofloxacin",
  description: "Antibiotic (fluoroquinolone)",
  uses: ["Bacterial infections", "Urinary tract infections", "Respiratory tract infections", "Skin infections"],
},
sertraline: {
  name: "Sertraline",
  description: "Selective serotonin reuptake inhibitor (SSRI) antidepressant",
  uses: ["Depression", "Anxiety disorders", "Obsessive-compulsive disorder (OCD)", "Post-traumatic stress disorder (PTSD)"],
},
atorvastatin: {
  name: "Atorvastatin",
  description: "Statins (cholesterol-lowering medication)",
  uses: ["High cholesterol", "Prevention of cardiovascular diseases"],
},
levothyroxine: {
  name: "Levothyroxine",
  description: "Synthetic thyroid hormone",
  uses: ["Hypothyroidism", "Thyroid cancer", "Goiter"],
},
prednisone: {
  name: "Prednisone",
  description: "Corticosteroid",
  uses: ["Inflammatory conditions", "Allergic reactions", "Autoimmune disorders", "Asthma exacerbations"],
},
metronidazole: {
  name: "Metronidazole",
  description: "Antibiotic (nitroimidazole)",
  uses: ["Bacterial infections", "Protozoal infections", "Dental infections", "Helicobacter pylori eradication"],
},
albuterol: {
  name: "Albuterol",
  description: "Short-acting beta agonist (SABA) bronchodilator",
  uses: ["Asthma", "Chronic obstructive pulmonary disease (COPD)", "Bronchospasm"],
},
lisinopril: {
  name: "Lisinopril",
  description: "Angiotensin-converting enzyme (ACE) inhibitor",
  uses: ["Hypertension", "Heart failure", "Kidney protection in diabetes"],
},
diphenhydramine: {
  name: "Diphenhydramine",
  description: "Antihistamine",
  uses: ["Allergy symptoms", "Motion sickness", "Insomnia", "Itchy skin"],
},
furosemide: {
  name: "Furosemide",
  description: "Loop diuretic",
  uses: ["Edema", "Hypertension", "Congestive heart failure", "Kidney disorders"],
},
clopidogrel: {
  name: "Clopidogrel",
  description: "Antiplatelet agent",
  uses: ["Prevention of blood clots", "Reducing the risk of heart attack or stroke"],
},
fluoxetine: {
  name: "Fluoxetine",
  description: "Selective serotonin reuptake inhibitor (SSRI) antidepressant",
  uses: ["Depression", "Anxiety disorders", "Bulimia nervosa", "Obsessive-compulsive disorder (OCD)"],
},
}
let single_symptom=document.querySelector("#single_symptom")
let single_select=document.querySelector("#single_select")
let monosym=[]
Object.values(commontabelets).forEach((w)=>{
         w.uses.forEach((e)=>{
          monosym.push(e)
         })
});

let newmonosym=[]

monosym.forEach((e)=>{
  if(!newmonosym.includes(e)){
    newmonosym.push(e)
  }
})
let dispaly_single_dieses=[]
let dispaly_single_discription=[]
select(single_select,newmonosym)
single_symptom.addEventListener("submit",(e)=>{
  e.preventDefault()
  result.childNodes[1].innerHTML="you can take "
  result.childNodes[3].innerHTML="discription"
  document.querySelector(".result").style.display="flex"
  let singlesym=single_select.value
  Object.values(commontabelets).map((e)=>{
    if(e.uses.includes(singlesym)){
        dispaly_single_dieses.push(e.name)
       if(!dispaly_single_discription.includes(e.description)) dispaly_single_discription.push(e.description)
        
    }
  })
  for(let i=0;i<1;i++){
    result.childNodes[1].innerHTML=` you can take ${dispaly_single_dieses[i]}  and  ${dispaly_single_dieses[i+1]||""}`
  }
  for(let i=0;i<1;i++){
    result.childNodes[3].innerHTML=` discription  <br/>${dispaly_single_dieses[i]} and ${dispaly_single_dieses[i+1]||" "}`
  }
   dispaly_single_dieses=[]
   dispaly_single_discription=[]
})


