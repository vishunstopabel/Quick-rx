let form=document.querySelector("#form")
let reload=document.querySelector(".reloadbox")
let mainbox=document.querySelector(".mainbox")
let tmainbox=document.querySelector(".tmainbox")
let a=0
let arraynew=[]
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let iteam=document.querySelector("#inputiteam")
    let inamount=document.querySelector("#quntity")
   let outamount;
   if(inamount.value.includes("gram"||"Gram"||"GRAM")){
    outamount=inamount.value
   }
   else{
    outamount=`${inamount.value} gram`
   }
   reload.style.display="flex"
dispalydata(outamount,iteam.value)
})
function dispalydata(amount ,iteam){
let query = `${amount} ${iteam}`;
const apiKey = "K9TIaQuN97TAR43IZUY6/w==m5hzATYgNh2mtvtK";

fetch('https://api.api-ninjas.com/v1/nutrition?query=' + query, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(result => {
    console.log(result)
    reload.style.display="none"
    if(result.length!=0){
        a++
    dispalydataonpage(result)
    document.querySelector(".title").style.display="none"
mainbox.style.display="flex"
tmainbox.style.display="flex"
}
    else{
        alert("entre the proper value")
    }
})
.catch(error => {
    console.log(error)
alert("error")
});
}
window.addEventListener("offline",()=>{
    alert("no internet")
})

function dispalydataonpage(result){
    console.log(a)
    let new_box=document.createElement("div")
    new_box.className=`fs${a} box`
    new_box.innerHTML=` <div class="bigbox">

    <div class="change center">
        <div>Iteam ${result[0].name} <br><div class" large">Quantity ${result[0].serving_size_g}grams</div></div>
    </div>
    <div class="center">${result[0].calories}/2500 Calories</div>

</div>
<div class="smallbox center">
    <div class="center">${result[0].protein_g} grams Protein</div>
    <div class="center">${result[0].carbohydrates_total_g} grams Carbohydrates</div>
    <div class="center">${result[0].fiber_g} grams Fiber</div>
    <div class="center">${result[0].sugar_g} grams Sugar</div>
    <div class="center">${result[0].fat_total_g} grams Fats</div>
   
</div>`
mainbox.appendChild( new_box)
arraynew.push(result)
settotal(arraynew)
if(mainbox.scrollWidth >mainbox.clientWidth){
    document.querySelector(".bright").style.display="block"
    document.querySelector(".bleft").style.display="block"
    document.querySelector(".bright").innerHTML=">"
    document.querySelector(".bleft").innerHTML="<"

}
}
mainbox.addEventListener("overflow-x",function(){
    
})
document.querySelector(".bright").addEventListener("click",function(e){
mainbox.scrollBy(350,0)
})
document.querySelector(".bleft").addEventListener("click",function(e){
    mainbox.scrollBy(-350,0)
})


function settotal(result){
   
    let obj={}
let name=[]

let calories=0
let amount=0
let protein=0
let Carbohydrates=0
let suger=0
let fiber=0
let fat=0
    result.forEach(element => {
    name.push(element[0].name)
    calories=element[0].calories+calories
    amount=element[0].serving_size_g+amount
    protein=element[0].protein_g+protein
    Carbohydrates=element[0].carbohydrates_total_g+Carbohydrates
    suger=element[0].sugar_g+suger
    fiber=element[0].fiber_g+fiber
    fat=element[0].fat_total_g+fat

    });
obj.name=name
obj.tcalories=calories
obj.tamount=amount
obj.tprotein=protein
obj.tCarbohydrates=Carbohydrates
obj.tsuger=suger
obj.tfiber=fiber
obj.tfat=fat
    totaldisplay(obj)
}
function totaldisplay(obj){
    let iteam =document.querySelector(".iteams")
    iteam.innerHTML=""
let caloriesbar=document.querySelector(".caloriesbar")
if(window.innerWidth>1130){


if((obj.tcalories/2500)*300<300){
    caloriesbar.style.height=`${Math.round((obj.tcalories/2500)*300)}px`
}
else{
    caloriesbar.style.height=`300px`
    caloriesbar.style.backgroundColor="red"

}
}
else{
    document.querySelector(".wrap").style.height="100%"
    if((obj.tcalories/2500)*250<250){
        caloriesbar.style.height=`${Math.round((obj.tcalories/2500)*250)}px`
    }
    else{
        caloriesbar.style.height=`250px`
        caloriesbar.style.backgroundColor="red"
    
    }
}
document.querySelector(".calories").innerHTML=`Total calories <br> ${Math.round(obj.tcalories)}/2500`

obj.name.forEach((a)=>{
 let div=document.createElement("div")
    div.innerHTML=a
    iteam.appendChild(div)
 
})

let tsmallbox=document.querySelectorAll(".tsmallbox")
tsmallbox.forEach((a)=>{
       
        a.childNodes[1].innerHTML=`${Math.round(obj.tprotein)} Total grams Protein `
      
        a.childNodes[3].innerHTML=`${Math.round(obj.tCarbohydrates)} Total grams Carbohydrates`
      
        a.childNodes[5].innerHTML=`${Math.round(obj.tfiber)} Total grams Fiber`
      
        a.childNodes[7].innerHTML=`${Math.round(obj.tsuger)} Total grams Sugar`
      
        a.childNodes[9].innerHTML=`${Math.round(obj.tfat)} Total grams Fats `
        
       })
}