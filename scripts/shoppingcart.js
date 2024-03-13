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

document.addEventListener("DOMContentLoaded", () => {
    const miBoton = document.getElementById("toggleNavSidebar");
    const shoppingCart = document.querySelector(".shoppingCart");
    const shoppingCartContainer = document.querySelector(".shoppingCartContainer");

    miBoton.addEventListener("click", () => {
    miBoton.classList.toggle("clicked");
    const estiloCSScart = window.getComputedStyle(shoppingCart);
    const estiloCSScartContainer = window.getComputedStyle(shoppingCartContainer);

    shoppingCart.style.width =
        estiloCSScart.getPropertyValue("width") === "862px" ? "1060px" : "862px";

    shoppingCart.style.maxHeight =
        estiloCSScart.getPropertyValue("max-height") === "407px" ? "366px" : "407px";

    shoppingCartContainer.style.width =
        estiloCSScartContainer.getPropertyValue("width") === "862px" ? "1060px" : "862px";

    shoppingCartContainer.style.marginLeft =
        estiloCSScartContainer.getPropertyValue("margin-left") === "16px" ? "-11rem" : "1rem";

    });
});
