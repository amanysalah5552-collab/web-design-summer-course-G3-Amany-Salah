// Toggle the shopping-cart mini dropdown when the cart icon is clicked
const cartToggle = document.getElementById('cartToggle');
const cartDropdown = document.getElementById('cartDropdown');

cartToggle.addEventListener('click', function (e) {
  e.preventDefault();
  cartDropdown.classList.toggle('d-none');
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', function (e) {
  const clickedInsideCart = cartToggle.contains(e.target) || cartDropdown.contains(e.target);
  if (!clickedInsideCart) {
    cartDropdown.classList.add('d-none');
  }
});

// "Deals ends in" countdown timer
let countdown = { days: 16, hours: 21, minutes: 57, seconds: 23 };
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  if (countdown.seconds > 0) {
    countdown.seconds--;
  } else {
    countdown.seconds = 59;
    if (countdown.minutes > 0) {
      countdown.minutes--;
    } else {
      countdown.minutes = 59;
      if (countdown.hours > 0) {
        countdown.hours--;
      } else {
        countdown.hours = 23;
        if (countdown.days > 0) countdown.days--;
      }
    }
  }
  countdownEl.textContent =
    `${countdown.days}d : ${countdown.hours}h : ${countdown.minutes}m : ${countdown.seconds}s`;
}

setInterval(updateCountdown, 1000);