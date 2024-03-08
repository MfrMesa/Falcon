//Remove items:

function removeItem(button) {
    const container = button.closest('.itemsContainer1, .itemsContainer2');
    if (container) {
        container.parentNode.removeChild(container);
        updateTotal();
    }
}

/////////////////////////////////////////////////////////////////////////////


//Click Toggle

document.addEventListener('DOMContentLoaded',() => {
    const miBoton = document.getElementById("toggleNav");
    const shoppingCart = document.querySelector(".shoppingCart");
    const shoppingCartContainer = document.querySelector(".shoppingCartContainer");

    miBoton.addEventListener('click',() => {
        miBoton.classList.toggle('clicked');
        
        shoppingCart.style.width = shoppingCart.style.width === "862px" ? "1060px" : "862px";
        shoppingCart.style.maxHeight =  shoppingCart.style.maxHeight === "407px" ? "366px" : "407px";
        shoppingCartContainer.style.width = shoppingCartContainer.style.width === "862px" ? "1060px" : "862px";
        shoppingCartContainer.style.marginLeft =  shoppingCartContainer.style.marginLeft === "1rem" ? "-12rem" : "1rem";
    });
});
