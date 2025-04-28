document.addEventListener('DOMContentLoaded', function() {
  // Form Submission Handling
  const form = document.getElementById('appointment-form');
  const loading = document.getElementById('loading');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  const submitButton = document.getElementById('submit-button');

  if (form) {  // Form safeguard
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
  }

  // Announcement Messages Rotator
  const messages = [
    "🌟 Accurate Predictions | Career | Marriage | Health | Certified Astrologer Punita Sharma",
    "🔮 30+ Years Expertise | Trusted by 10,000+ Clients | JyotirSetu",
    "✨ Unlock Your Destiny | Personalized Remedies | Transform Your Future Today!"
  ];
  
  const announcementText = document.getElementById('announcement-text');
  if (announcementText) { // Announcement bar safeguard
    let currentMessage = 0;

    function showNextMessage() {
      announcementText.style.opacity = 0;
      setTimeout(() => {
        announcementText.textContent = messages[currentMessage];
        announcementText.style.opacity = 1;
        currentMessage = (currentMessage + 1) % messages.length;
      }, 400);
    }

    showNextMessage();
    setInterval(showNextMessage, 4000);
  }
});
