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
  const loading = document.getElementById('loading');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  const submitButton = document.getElementById('submit-button');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    loading.style.display = 'block';
    submitButton.disabled = true;
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      loading.style.display = 'none';
      submitButton.disabled = false;

      if (response.ok) {
        successMessage.style.display = 'block';
        form.reset();
        setTimeout(() => {
          window.location.href = "thankyou.html"; 
        }, 2000); // 2 seconds baad thank you page pe redirect
      } else {
        errorMessage.style.display = 'block';
      }
    }).catch(error => {
      loading.style.display = 'none';
      submitButton.disabled = false;
      errorMessage.style.display = 'block';
    });
  });
});
