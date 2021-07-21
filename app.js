
/*Menu*/ 
var btnMenu= document.getElementById("btn-menu");
var menu= document.getElementById("menu");

btnMenu.addEventListener("click", ()=>{
    menu.classList.toggle("efecto")
    btnMenu.classList.toggle("fa-times");
    
    
})
/*modo dark*/
var body= document.getElementById("body");
var btnModo=document.getElementById("btn-modo");
var etxe=document.getElementById("etxe");
var coding= document.getElementById("coding");
var codingDark= document.getElementById("coding-dark");


btnModo.addEventListener("click", ()=>{
    body.classList.toggle("darkmode");
    if(body.className==""){

    
    etxe.src ="fotos/etxe2.png";
    coding.style.opacity="1"
    codingDark.style.opacity="0"
    coding.style.transition="all 1s ease"
    
    }else{
        etxe.src="fotos/etxe-dark2.png";
        codingDark.style.opacity="1"
        codingDark.style.transition="all 1s ease"
        coding.style.opacity="0"
    
    }


});

/*tarjetas*/
var biografia=document.getElementById("biografia");
var biografiaA= document.getElementById("biografia-a");
var habilidades=document.getElementById("habilidades");
var habilidadesA= document.getElementById("habilidades-a");
var aficiones=document.getElementById("aficiones");
var aficionesA= document.getElementById("aficiones-a");

biografiaA.addEventListener("click", ()=>{
    biografia.style.zIndex="3";
    biografia.classList.toggle("js-scale")
    aficiones.style.zIndex="1";
    habilidades.style.zIndex="2";
    
})


habilidadesA.addEventListener("click", ()=>{
    habilidades.style.zIndex="3";
    habilidades.classList.toggle("js-scale");
    biografia.style.zIndex="2";
    aficiones.style.zIndex="1";
   
    
});

aficionesA.addEventListener("click", ()=>{
    aficiones.style.zIndex="3";
    aficiones.classList.toggle("js-scale")
    biografia.style.zIndex="1";
    habilidades.style.zIndex="2";
    
})

/*galeria*/

var btnIlustracion=document.getElementById("btn-ilustracion");
var btnFotografia= document.getElementById("btn-fotografia");
var ilustracion=document.getElementById("galeria-ilustracion");
var fotografia=document.getElementById("galeria-fotografia");

btnFotografia.addEventListener("click", ()=>{
    ilustracion.style.display = "none";
    fotografia.style.display = "grid";
    
})
btnIlustracion.addEventListener("click", ()=>{
    ilustracion.style.display = "grid";
    fotografia.style.display = "none";
})

/*HABILIDADES*/








