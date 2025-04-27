// Countdown Timer Setup
const launchDate = new Date('June 16, 2025 00:00:00').getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = "We Have Launched!";
  }
}, 1000);

// Appointment Form Submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('appointment-form');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
        alert("Thank you " + name + "! Your appointment request has been sent.\nWe'll contact you shortly.");
        
        // Reset the form
        form.reset();
      } else {
        alert("Please fill all the fields.");
      }
    });
  }
});
