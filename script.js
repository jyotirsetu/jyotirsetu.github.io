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
        }, 2000);
      } else {
        errorMessage.style.display = 'block';
      }
    }).catch(error => {
      loading.style.display = 'none';
      submitButton.disabled = false;
      errorMessage.style.display = 'block';
    });
  });

  // Rotating Announcement Messages (NEW Code Added Here)
  const messages = [
    "🌟 Trusted Astrology Consultations | 30+ Years Experience | Save Your Future with JyotirSetu!",
    "🔮 Unlock Your Life Path | Career | Marriage | Health | Certified Astrologer Punita Sharma",
    "✨ Accurate Predictions | Career | Marriage Matching | Personalized Remedies at JyotirSetu"
  ];

  let currentMessage = 0;
  const announcement = document.getElementById('announcement-text');

  // Show animation when page loads
  if (announcement) {
    announcement.classList.remove('hidden');
    announcement.classList.add('show');

    // Rotate messages every 4 seconds
    setInterval(() => {
      currentMessage = (currentMessage + 1) % messages.length;
      announcement.style.opacity = 0;
      setTimeout(() => {
        announcement.textContent = messages[currentMessage];
        announcement.style.opacity = 1;
      }, 500);
    }, 4000);
  }
});
