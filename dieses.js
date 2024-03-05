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
select(select1)
select(select2)
select(select3)
select(select4)

function select(select){
arry.sort().forEach((a,index)=>{
  let option=document.createElement("option")
  // option.value=index
  option.innerHTML=a
  select.appendChild(option)
 
})}


form.addEventListener("submit",(e)=>{
  e.preventDefault();
  
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

//
function doctor(array){
  let testd=[]
  let finish=[]
// console.log(array)
  diseases.forEach((a)=>{
    for(i=0;i<array.length;i++){
        if(a.symptoms.includes(array[i])){
            testd.push(a.name)
        }
}

  })
  testd.sort()
  // console.log(testd)
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
    // console.log(a.name)
     if(array[0]==a.name){
      result.childNodes[1].innerHTML=`you may have ${a.name} and you can take`
      result.childNodes[3].innerHTML=` ${a.otcMedicine} medicine`
     }
  })

}
