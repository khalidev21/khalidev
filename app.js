
/*Menu*/ 
var btnMenu= document.getElementById("btn-menu");
var menu= document.getElementById("menu");
var menuHome=document.getElementById("menu-home");
var menuPortfolio=document.getElementById("menu-portfolio");
var menuContacto=document.getElementById("menu-contacto");
function menuOff(e){
        e.addEventListener("click",()=>{
        btnMenu.classList.remove("fa-times-circle");
        menu.classList.remove("efecto")
    })
}
btnMenu.addEventListener("click", ()=>{
    menu.classList.toggle("efecto")
    btnMenu.classList.toggle("fa-times-circle"); 
    menuOff(menuHome);
    menuOff(menuPortfolio);
    menuOff(menuContacto);

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
    
    }else{
        etxe.src="fotos/etxe-dark2.png";
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


/*HABILIDADES*/








