let terms_and_conditions=document.querySelector(".terms_and_condition")
let accept=document.querySelector(".accept")
let reload=document.querySelector(".reloadbox")
let navbar=document.querySelector(".navbar")
window.addEventListener("load",()=>{
    
    setTimeout(function (){
        reload.style.display="none"
    },1000)
    setTimeout(function active(){
        if(localStorage.getItem("terms","acpet")==null){
        terms_and_conditions.style.display="flex"
        navbar.style.display="none"}
        else return
    },5000)

})

window.addEventListener("offline",()=>{
    alert("no internet")
})
accept.addEventListener("click",()=>{
    terms_and_conditions.style.display="none"
    navbar.style.display="flex"
    localStorage.setItem("terms","acpet")
})


