/* NavBar Button Animation */

const pulse1 = document.getElementById('SettingsPulse1');
const pulse2 = document.getElementById('SettingsPulse2');

function startAnimation(element, animationName) {
  element.style.animation = `${animationName} 2s infinite`;
}

pulse1.addEventListener('animationend', function() {
  setTimeout(function() {
    startAnimation(pulse2, 'pulse2');
  }, 0);
});

pulse2.addEventListener('animationend', function() {
  setTimeout(function() {
    startAnimation(pulse1, 'pulse1');
  }, 0);
});

startAnimation(pulse1, 'pulse1');

/* End of NavBar Button Animation */
