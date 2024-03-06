/* NavBar Button Animation */

const pulse1 = document.getElementById('SettingsPulse1');
const pulse2 = document.getElementById('SettingsPulse2');

function startAnimation(element, animationName) {
  element.style.animation = `${animationName} 2s infinite`;
}

pulse1.addEventListener('animationend', function() {
  setTimeout(function() {
    startAnimation(pulse2, 'pulse2');
  }, 0); // Delay starting pulse2 to ensure it starts after pulse1 finishes
});

pulse2.addEventListener('animationend', function() {
  setTimeout(function() {
    startAnimation(pulse1, 'pulse1');
  }, 0); // Delay starting pulse1 to ensure it starts after pulse2 finishes
});

startAnimation(pulse1, 'pulse1'); // Start the first animation initially

/* End of NavBar Button Animation */
