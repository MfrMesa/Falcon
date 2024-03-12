const NavBarSearchInput = document.getElementById("NavBarSearchInput");
const NavBarSearchCancel = document.getElementById("NavBarSearchCancel");

NavBarSearchInput.addEventListener("input", function() {
  if (NavBarSearchInput.value.length > 0) {
    NavBarSearchCancel.style.display = "block";
  } else {
    NavBarSearchCancel.style.display = "none";
  }
});

NavBarSearchCancel.addEventListener("click", function() {
  NavBarSearchInput.value = "";
  NavBarSearchCancel.style.display = "none";
});

const searchInput = document.getElementById("NavBarSearchInput");
const cancelSearchButton = document.getElementById("NavBarSearchCancel");

cancelSearchButton.addEventListener("click", function() {
  searchInput.value = "";
});
