// JavaScript to toggle the visibility of the blue circle based on unread notifications
const hasUnreadNotifications = true; // Replace with logic to determine unread notifications
const notificationCircle = document.querySelector('.NavBarUtilitiesNotificationsCircle');
notificationCircle.style.display = hasUnreadNotifications ? 'block' : 'none';
