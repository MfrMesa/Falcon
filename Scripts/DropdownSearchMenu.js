const searchField = document.getElementById('NavBarSearchInput');
const dropdown = document.querySelector('.dropdownSearch');
const dropdownCancelButton = document.getElementById('NavBarSearchCancel');

searchField.addEventListener('input', toggleDropdown);
searchField.addEventListener('focusout', hideDropdown);
searchField.addEventListener('focus', showDropdown);
dropdownCancelButton.addEventListener('click', hideDropdown);

function toggleDropdown() {
  dropdown.style.display = searchField.value ? 'block' : 'none';
}

function hideDropdown() {
  dropdown.style.display = 'none';
}

function showDropdown() {
  if (searchField.value && dropdown.style.display !== 'block') {
    dropdown.style.display = 'block';
  }
}


