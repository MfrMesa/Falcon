//Remove items:
function removeItem(button) {
    const container = button.closest('.itemsContainer1, .itemsContainer2');
    if (container) {
        container.parentNode.removeChild(container);
        updateTotal();
    }
}

//Click Toggle:
document.addEventListener('DOMContentLoaded',() => {
    const miBoton = document.getElementById("toggleNavSidebar");
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

/* Quantity Container Buttons */

const quantityInputs = document.querySelectorAll('.cartNumberofItems');
const totalQuantityElement = document.querySelector('#ShoppingCartItemQuantity');
const totalQuantityElementTOTAL = document.querySelector('#ShoppingCartItemQuantityTOTAL');
const totalPriceElement = document.querySelector('.totalTitlePrice');
const shoppingCartNotificationNumberElement = document.querySelector('.ShoppingCartNotificationNumber');

function updateQuantity() {
  let total = 0;
  let totalPrice = 0;
  quantityInputs.forEach(input => {
    total += parseInt(input.value, 10);
    const price = parseFloat(input.parentNode.parentNode.querySelector('.itemprice').textContent.replace('$', ''));
    totalPrice += price * parseInt(input.value, 10);
  });
    totalQuantityElement.textContent = total;
    totalQuantityElementTOTAL.textContent = total; // update the totalQuantityElementTOTAL element
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    shoppingCartNotificationNumberElement.textContent = total; // update the ShoppingCartNotificationNumber element


  // Update the placeholder of the cartNumberofItems elements
  quantityInputs.forEach(input => {
    input.placeholder = input.value;
  });
}

// Initialize the value attribute of the cartNumberofItems elements to the placeholder attribute value
quantityInputs.forEach(input => {
  input.value = input.placeholder;
});

document.querySelectorAll('.masButton, .menosButton').forEach(button => {
  button.addEventListener('click', () => {
    const input = button.parentNode.querySelector('.cartNumberofItems');
    const currentValue = parseInt(input.value, 10);
    if (button.classList.contains('masButton')) {
      input.value = currentValue + 1;
    } else if (currentValue > 0) {
      input.value = currentValue - 1;
    }
    updateQuantity();
  });
});

updateQuantity();