

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

// document.addEventListener('DOMContentLoaded', function() {
//     let btnMenus = document.querySelectorAll('.btn-menu');
//     let dropdownMenus = document.querySelectorAll('.dropdown-content');

//     function closeAllDropdowns() {
//         dropdownMenus.forEach(function(menu) {
//             menu.classList.remove('show');
//         });
//     }

//     function dropdownMenuHandler(event) {
//         let dropdownMenu = event.currentTarget.nextElementSibling;
//         dropdownMenu.classList.toggle('show');
//          event.stopPropagation();
//     }

//     btnMenus.forEach(function(btnMenu) {
//         btnMenu.addEventListener('click', dropdownMenuHandler);
//     });

//     window.addEventListener('click', function(event) {
//         let isClickInsideDropdown = false;

//         dropdownMenus.forEach(function(menu) {
//             if (menu.contains(event.target)) {
//                 isClickInsideDropdown = true;
//             }
//         });

//         if (!isClickInsideDropdown) {
//             closeAllDropdowns();
//         }
//     });
// });
