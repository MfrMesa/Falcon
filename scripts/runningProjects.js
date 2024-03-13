document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById('select_runningProjects');
    const showAllProjectsBtn = document.getElementById('showAllProjectsBtn');


    selectElement.addEventListener('focus', function() {
        this.classList.add('select-focus');
    });

    selectElement.addEventListener('blur', function() {
        this.classList.remove('select-focus');
    });

    showAllProjectsBtn.addEventListener('click', function() {
        showAllProjectsBtn.classList.add('clicked');
    });

    document.addEventListener('click', function(event) {
        if (!showAllProjectsBtn.contains(event.target)) {
            showAllProjectsBtn.classList.remove('clicked');
        }
    });

});


   
