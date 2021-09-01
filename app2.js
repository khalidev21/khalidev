var body= document.getElementById("body");
var btnModo=document.getElementById("btn-modo");



btnModo.addEventListener("click", ()=>{
    body.classList.toggle("darkmode");
});