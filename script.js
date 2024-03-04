function quitarDisplayMenuAjuste(){
    let $display = document.getElementsByClassName("contenedorMenuAjustesDiv");
    $display=$display[0]
    if($display.style.display=="none"){
        $display.style.display="flex"; 
    }else{
        $display.style.display="none";
    }
}

setTimeout(()=>{
    let $clickMenuAjuste = document.getElementsByClassName("contenedorMenuAjustesDiv");
    $clickMenuAjuste= $clickMenuAjuste[0];
    $clickMenuAjuste.style.display="flex";
},1000);