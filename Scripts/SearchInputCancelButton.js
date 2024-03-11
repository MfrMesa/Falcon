const searchInput = document.getElementById("NavBarSearchInput");
const cancelSearchButton = document.getElementById("NavBarSearchCancel");

cancelSearchButton.addEventListener("click", function() {
  searchInput.value = "";
});
