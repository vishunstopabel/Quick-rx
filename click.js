let current=true
butt= document.querySelector(".suggestions")
document.querySelector(".suggestionsi").addEventListener("focus",()=>{
   butt.style.display="block"
})
document.querySelector(".suggestionsi").addEventListener("blur",()=>{
    butt.style.display="none"
})


   
   



let newcurrent=true
document.querySelector("#burger").addEventListener("click",()=>{
    if(newcurrent==true){
        document.querySelector(".cover").style.display="block"
        document.querySelector(".navelements").style.display="flex"
        document.querySelector(".xyz").style.display="none"
        newcurrent=false
    }
    else{
        document.querySelector(".cover").style.display="none"
        document.querySelector(".navelements").style.display="none"
        document.querySelector(".xyz").style.display="block"
        newcurrent=true
    }
})