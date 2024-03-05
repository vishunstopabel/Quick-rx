
const firstAid = {
    cutsAndScrapes: {
        description: "For minor cuts and scrapes.",
        treatment: "1. Clean the wound with soap and water. \n2. Apply an antiseptic cream or ointment. \n3. Cover the wound with a sterile bandage.",
    },
    burns: {
        description: "For minor burns.",
        treatment: "1. Cool the burn under cool (not cold) running water for at least 10 minutes. \n2. Cover the burn with a sterile gauze bandage.",
    },
    sprainsAndStrains: {
        description: "For sprains and strains.",
        treatment: "1. Rest the affected limb. \n2. Apply ice packs wrapped in a cloth for 15-20 minutes at a time. \n3. Elevate the limb above heart level if possible. \n4. Compress the area with an elastic bandage, but not too tightly.",
    },
    choking: {
        description: "For choking.",
        treatment: "1. Encourage the person to cough forcefully. \n2. Perform abdominal thrusts (Heimlich maneuver) if the person cannot cough, speak, or breathe. \n3. Call emergency services if the obstruction is not relieved.",
    },
    nosebleed: {
        description: "For a nosebleed.",
        treatment: "1. Have the person sit down and lean forward slightly. \n2. Pinch the nostrils together and breathe through the mouth. \n3. Apply ice or a cold compress to the bridge of the nose.",
    },
    beeSting: {
        description: "For a bee sting.",
        treatment: "1. Remove the stinger if visible using a scraping motion. \n2. Wash the area with soap and water. \n3. Apply a cold compress or ice pack to reduce swelling. \n4. Monitor for signs of allergic reaction.",
    },
    heatExhaustion: {
        description: "For heat exhaustion.",
        treatment: "1. Move the person to a cooler place. \n2. Have them lie down and elevate their feet. \n3. Remove any tight or unnecessary clothing. \n4. Apply cool, wet cloths to the body or have them take a cool shower.",
    },
    hypothermia: {
        description: "For hypothermia.",
        treatment: "1. Move the person to a warm place. \n2. Remove any wet clothing and replace with dry clothes or blankets. \n3. Wrap them in blankets or use a sleeping bag to warm the body. \n4. Provide warm, non-alcoholic, non-caffeinated beverages.",
    },
    allergicReaction: {
        description: "For an allergic reaction.",
        treatment: "1. Administer epinephrine if the person has it and knows how to use it. \n2. Call emergency services. \n3. Monitor the person's breathing and vital signs. \n4. If unconscious, place them in the recovery position.",
    },
    seizure: {
        description: "For a seizure.",
        treatment: "1. Protect the person from injury by removing nearby objects. \n2. Cushion their head with something soft. \n3. Do not restrain them. \n4. After the seizure, help them into a recovery position and stay with them until they are fully conscious.",
    },
    poisoning: {
        description: "For poisoning.",
        treatment: "1. Call emergency services immediately. \n2. If the person is conscious, try to determine what they ingested. \n3. Do not induce vomiting unless instructed by emergency services. \n4. Keep the person calm and monitor their breathing and vital signs.",
    },
    eyeInjury: {
        description: "For an eye injury.",
        treatment: "1. Do not rub the eye. \n2. Rinse the eye with clean water for at least 15 minutes. \n3. Cover the injured eye with a sterile dressing. \n4. Seek medical attention if there is severe pain, vision changes, or bleeding.",
    },
    headInjury: {
        description: "For a head injury.",
        treatment: "1. Keep the person still and calm. \n2. Apply a cold compress to the injury to reduce swelling. \n3. Monitor for signs of concussion, such as confusion or loss of consciousness. \n4. Seek medical attention if there is severe head pain, vomiting, or changes in behavior.",
    },
    animalBite: {
        description: "For an animal bite.",
        treatment: "1. Wash the wound thoroughly with soap and water. \n2. Apply an antibiotic ointment to reduce the risk of infection. \n3. Cover the wound with a clean bandage. \n4. Seek medical attention, especially if the bite is deep or from a wild animal.",
    },
    asthmaAttack: {
        description: "For an asthma attack.",
        treatment: "1. Help the person sit upright and take their medication (inhaler). \n2. Encourage slow, steady breaths. \n3. Stay calm and reassure the person. \n4. If symptoms worsen or don't improve after medication, seek emergency medical help.",
    },
    brokenBone: {
        description: "For a suspected broken bone.",
        treatment: "1. Keep the injured limb immobilized. \n2. Apply a cold compress to reduce swelling and pain. \n3. Support the injured area with a splint or sling. \n4. Seek medical attention as soon as possible.",
    },
    heartAttack: {
        description: "For a heart attack.",
        treatment: "1. Call emergency services immediately. \n2. Help the person sit or lie down in a comfortable position. \n3. Loosen tight clothing and reassure them. \n4. If trained, perform CPR if the person becomes unconscious and stops breathing.",
    },
    fainting: {
        description: "For fainting (syncope).",
        treatment: "1. Lay the person flat on their back. \n2. Elevate their legs above heart level if possible. \n3. Loosen tight clothing around the neck. \n4. Keep the person calm and stay with them until they fully recover.",
    },
    drugOverdose: {
        description: "For a drug overdose.",
        treatment: "1. Call emergency services immediately. \n2. Monitor the person's breathing and consciousness. \n3. If breathing stops, perform CPR. \n4. Do not leave the person alone until medical help arrives.",
    },
    diabeticEmergency: {
        description: "For a diabetic emergency (hypoglycemia or hyperglycemia).",
        treatment: "1. If the person is conscious and able to swallow, give them a fast-acting source of sugar (e.g., glucose tablets, juice). \n2. If the person is unconscious or unable to swallow, do not give them anything by mouth and call emergency services. \n3. Monitor their condition until help arrives.",
    },
    electricShock: {
        description: "For an electric shock.",
        treatment: "1. Ensure the area is safe from further electrical hazards. \n2. Do not touch the person if they are still in contact with the electrical source. \n3. Turn off the power source if possible. \n4. Check the person's breathing and pulse, and administer CPR if necessary.",
    },
    snakeBite: {
        description: "For a snake bite.",
        treatment: "1. Keep the person calm and still. \n2. Remove any tight clothing or jewelry from the affected area. \n3. Immobilize the bitten limb at or below heart level. \n4. Seek immediate medical attention.",
    },
    heatStroke: {
        description: "For heat stroke.",
        treatment: "1. Move the person to a cooler place and remove excess clothing. \n2. Apply cool water or ice packs to the body. \n3. Fan the person to promote sweating and evaporation. \n4. Seek emergency medical help.",
    },
    concussion: {
        description: "For a suspected concussion.",
        treatment: "1. Keep the person still and calm. \n2. Apply a cold compress to the injury to reduce swelling. \n3. Monitor for signs of concussion, such as confusion or loss of consciousness. \n4. Seek medical attention if symptoms persist or worsen.",
    },
    insectBite: {
        description: "For an insect bite (other than bee sting).",
        treatment: "1. Wash the affected area with soap and water. \n2. Apply a cold compress to reduce swelling and itching. \n3. Use antihistamine cream or take oral antihistamines to relieve itching. \n4. Monitor for signs of allergic reaction.",
    },
    dislocation: {
        description: "For a dislocated joint.",
        treatment: "1. Immobilize the injured limb in the position found. \n2. Apply a cold compress to reduce pain and swelling. \n3. Do not attempt to relocate the joint yourself. \n4. Seek medical attention immediately.",
    },
    dentalEmergency: {
        description: "For a dental emergency (e.g., knocked-out tooth).",
        treatment: "1. Handle the tooth by the crown, not the root. \n2. Rinse the tooth gently with water if it's dirty, but do not scrub. \n3. Try to reinsert the tooth into its socket if possible. \n4. If reinsertion is not possible, place the tooth in milk or saliva and seek dental care immediately.",
    },
    seizureInChild: {
        description: "For a seizure in a child.",
        treatment: "1. Ensure the child's safety by removing nearby objects. \n2. Lay the child on their side to prevent choking. \n3. Time the seizure duration. \n4. Stay with the child until the seizure ends and they fully recover.",
    },
    drowning: {
        description: "For drowning or near-drowning.",
        treatment: "1. Remove the person from the water immediately. \n2. Check for breathing and start CPR if necessary. \n3. Call emergency services. \n4. Monitor the person's breathing and vital signs until help arrives.",
    },
    allergicReactionInChild: {
        description: "For an allergic reaction in a child.",
        treatment: "1. Administer epinephrine if available and instructed by a doctor. \n2. Call emergency services. \n3. Monitor the child's breathing and administer CPR if necessary. \n4. Comfort and reassure the child.",
    },
    nearElectrocution: {
        description: "For a near-electrocution incident.",
        treatment: "1. Check for breathing and signs of circulation. \n2. Administer CPR if necessary. \n3. Call emergency services. \n4. Do not attempt to move the person unless they are in immediate danger.",
    },
    punctureWound: {
        description: "For a puncture wound.",
        treatment: "1. Clean the wound thoroughly with soap and water. \n2. Apply pressure to stop any bleeding. \n3. Do not attempt to remove any object lodged in the wound. \n4. Seek medical attention for further evaluation and treatment.",
    },
   
};
const box = document.querySelector(".box");
let input=document.querySelector("#input")
Object.keys(firstAid).forEach((a, index) => {
    let minibox = document.createElement("div");
    let drop = document.createElement("i");
    let p = document.createElement("p");
    p.id=a;
    let information=document.createElement("div")
    information.className=`info${index}`
    drop.className = `gg-chevron-right-r ${index}`;
    minibox.className = `minibox ${index} center`;
    p.innerHTML = a;
    box.appendChild(minibox);
    minibox.appendChild(p);
    minibox.appendChild(drop);
    minibox.appendChild(information)
});


Object.values(firstAid).forEach((a ,index)=>{
    let information=document.querySelector(`.info${index}`)
    console.log(information)
    information.innerHTML=a.treatment
 })

let rotate = document.getElementsByClassName("gg-chevron-right-r");
let current = true;
for (let i = 0; i < rotate.length; i++) {
    rotate[i].addEventListener("click", function () {
        let parent = rotate[i].parentElement;
     let element=parent.childNodes[1].className 
      let para= parent.childNodes[0].innerHTML
   
        if (current == true) {
            parent.childNodes[1].classList.add("rotate")
            parent.style.overflow="visible"
            parent.style.height="1.5%"
            current=false
        }
        else{
            parent.childNodes[1].classList.remove("rotate")
            parent.style.height="2.5rem"
            parent.style.overflow="hidden"
            current=true
        }
        
    });
}


const suggestions = document.querySelector("#suggestion");

input.addEventListener("input", (event) => {
    const inputValue = event.target.value.toLowerCase();
    if(inputValue!=''){
        suggestions.style.display="flex"
    const filteredSuggestions = Object.keys(firstAid).filter((key) => {
        return key.toLowerCase().startsWith(inputValue);
    });

    suggestions.innerHTML = ""; 

    filteredSuggestions.forEach((key) => {
        const anchor = document.createElement("a");
        anchor.href = `#${key}`;
        anchor.textContent = key;
        suggestions.appendChild(anchor);
    });}
    else{
        suggestions.style.display="none"
    }
});

input.addEventListener("focus", (e) => {
    e.target.style.display = "flex";
    box.style.opacity=0.3
});

input.addEventListener("blur", () => {
    setTimeout(()=>{
        suggestions.style.display = "none";
        box.style.opacity=1
    },1000)
   
});
