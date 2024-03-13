// Sample JavaScript to update the number in the span ".ShoppingCartNotificationNumber"

document.addEventListener('DOMContentLoaded', function() {
    const cartItemCount = 0; // Example: Replace with the actual count of items in the cart
    const notificationNumber = document.querySelector('.ShoppingCartNotificationNumber');
    notificationNumber.textContent = cartItemCount.toString();
});