const toggleButton = document.getElementById("NotificationsDropdownPanelMarkAllAsRead");
const memberNotificationContainers = document.querySelectorAll(".memberNotificationContainer");
const memberNotificationContainerReads = document.querySelectorAll(".memberNotificationContainerRead");
const notificationsCircle = document.querySelector(".NavBarUtilitiesNotificationsCircle");

let isToggled = false;

toggleButton.addEventListener("click", () => {
  if (!isToggled) {
    memberNotificationContainers.forEach((container) => {
      container.style.display = "none";
    });

    memberNotificationContainerReads.forEach((container) => {
      container.style.display = "grid";
    });

    notificationsCircle.style.display = "none";

    isToggled = true;
  }
});