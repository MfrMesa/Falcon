function quitarDisplayMenuAjuste(){
    let $display = document.getElementsByClassName("contenedorMenuAjustesDiv");
    $display=$display[0]
    if($display.style.display=="none"){
        $display.style.display="flex";
        document.getElementsByClassName("container")[0].style="height:970px;overflow-y:hidden";
    }else{
        $display.style.display="none";
        document.getElementsByClassName("container")[0].style="height:auto;overflow-y:auto";
    }
}

setTimeout(()=>{
    let $clickMenuAjuste = document.getElementsByClassName("contenedorMenuAjustesDiv");
    $clickMenuAjuste= $clickMenuAjuste[0];
    $clickMenuAjuste.style.display="flex";
    document.getElementsByClassName("container")[0].style="height:970px;overflow-y:hidden";
},1000);

function almacenamientoDatosMenuAjustes(){
    let ls = localStorage;
    ColorSchemeLocalStorage(ls.getItem("dark"));
    
    NavigationPositionLocalStorage(ls.getItem("NavigationPosition"));
    VerticalNavbarStyleLocalStorage(ls.getItem("VerticalNavbarStyle"));
    
}

function NavigationPositionLocalStorage(valor) {
    if(valor=="checkboxTopNavigationPositionMenuAjustes"){
        document.getElementById("checkboxTopNavigationPositionMenuAjustes").checked=true;
    }else if(valor =="checkboxComboNavigationPositionMenuAjustes"){
        document.getElementById("checkboxComboNavigationPositionMenuAjustes").checked=true;
    }else{
        document.getElementById("checkboxVerticalNavigationPositionMenuAjustes").checked=true;
    }
}

function VerticalNavbarStyleLocalStorage(valor){
    
    if(valor=="radioInvertedVertical"){
        let $radioboton = document.getElementById("radioInvertedVertical");
        $radioboton.checked = true;
        let $img =document.getElementsByClassName("imgInvertedOptionVerticalNavbarmenuAjustes")[0];
        $img.style="border: 3px solid #00d27a;";
    }else if(valor=="radioCardVertical"){
        let $radioboton = document.getElementById("radioCardVertical");
        $radioboton.checked = true;
        let $img =document.getElementsByClassName("imgCardOptionVerticalNavbarMenuAjustes")[0];
        $img.style="border: 3px solid #00d27a;";

    }else if(valor=="radioVibrantVertical"){
        let $radioboton = document.getElementById("radioVibrantVertical");
        $radioboton.checked = true;
        let $img =document.getElementsByClassName("imgVibrantVerticalNavbarMenuAjustes")[0];
        $img.style="border: 3px solid #00d27a;";

    }else{
        let $radioboton = document.getElementById("radioTransparentVertical");
        $radioboton.checked = true;
        let $img =document.getElementsByClassName("TransparentOpcionVerticalNavbarStyleMenuAjustes")[0];
        $img.style="border: 3px solid #00d27a;";

    }
}

function ColorSchemeLocalStorage(valor){
    if(valor=="true"){
        let $radioboton = document.getElementById("checkboxDarkColorScheme");
        $radioboton.checked = true;
        let $img =document.getElementsByClassName("imgSegundaOpcionColorSchemeMenuAjustes")[0];
        $img.style="border: 3px solid #00d27a;";
    }else{
        let $radioboton = document.getElementById("checkboxLightColorScheme");
        $radioboton.checked = true;
        let $img =document.getElementsByClassName("imgPrimeraOpcionColorSchemeMenuAjustes")[0];
        $img.style="border: 3px solid #00d27a;";
    }
}


almacenamientoDatosMenuAjustes();

function cambioColorRadioColorScheme() {
    let botones = [document.getElementById("checkboxLightColorScheme")
    , document.getElementById("checkboxDarkColorScheme")];
    let imagenes = [document.getElementsByClassName("imgPrimeraOpcionColorSchemeMenuAjustes")[0]
    , document.getElementsByClassName("imgSegundaOpcionColorSchemeMenuAjustes")[0]];
    let num =-1;
    for(let i=0; i<botones.length;i++){
        if(botones[i].checked==true){
            num=i;
            cambiarColorBorder(imagenes[i], "#00d27a");
        }else{
            cambiarColorBorder(imagenes[i], "#d8e2ef");
        }
    }
    if(num==1){
        localStorage.setItem("dark","true");
        let $cambiomenuAjuste =document.getElementsByClassName("contenedorContenidoMenuAjuste")[0].style="background-color: #061325; color:white";
        
    }else{
        localStorage.removeItem("dark");
        let $cambiomenuAjuste =document.getElementsByClassName("contenedorContenidoMenuAjuste")[0].style="background-color: white; color:inherit";
    }
}


function cambioColorRadioVerticalNavbarStyle(){
    let botones = [document.getElementById("radioTransparentVertical")
    , document.getElementById("radioInvertedVertical")
    , document.getElementById("radioCardVertical")
    , document.getElementById("radioVibrantVertical")
    ];

    let imagenes =[
        document.getElementsByClassName("TransparentOpcionVerticalNavbarStyleMenuAjustes")[0],
        document.getElementsByClassName("imgInvertedOptionVerticalNavbarmenuAjustes")[0],
        document.getElementsByClassName("imgCardOptionVerticalNavbarMenuAjustes")[0],
        document.getElementsByClassName("imgVibrantVerticalNavbarMenuAjustes")[0]
    ];
    for(let i=0; i<botones.length;i++){
        if(botones[i].checked==true){
            cambiarColorBorder(imagenes[i], "#00d27a");
            localStorage.setItem("VerticalNavbarStyle", botones[i].id);

        }else{
            cambiarColorBorder(imagenes[i], "#d8e2ef");
        }
    }
    
}
//onclick="RadioNavigationPosition()"
function RadioNavigationPosition(){
    let radios = [
        document.getElementById("checkboxVerticalNavigationPositionMenuAjustes"),
        document.getElementById("checkboxTopNavigationPositionMenuAjustes"),
        document.getElementById("checkboxComboNavigationPositionMenuAjustes")
    ]

    for(let i=0; i<radios.length;i++){
        if(radios[i].checked==true){
            localStorage.setItem("NavigationPosition", radios[i].id);
        }
    }
}

function cambiarColorBorder (obj, color){
    obj.style="border: 3px solid "+color+";";
}