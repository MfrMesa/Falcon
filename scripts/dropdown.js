

// Función para manejar el menú desplegable
function dropdownMenu() {
    var fondoMenu= document.querySelector(".btn-menu");
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show");
    fondoMenu.classList.toggle("btn-menu-focus");
    fondoMenu.classList.toggle("no-hover");
    
}



// Evento para cerrar el menú al hacer clic en cualquier parte de la ventana

window.addEventListener("click", function(event) {
    let dropdownMenu = document.getElementById("dropdownMenu");
    let btnMenu = document.querySelector('.btn-menu');
    if (dropdownMenu.classList.contains('show') && !btnMenu.contains(event.target) ){

        dropdownMenu.classList.remove('show');
        btnMenu.classList.remove("btn-menu-focus");
        btnMenu.classList.remove("no-hover");
    }
})

