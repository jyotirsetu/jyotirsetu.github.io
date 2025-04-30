// Announcement Rotator
document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "🌟 Trusted Astrology Consultations",
    "🔮 30+ Years Experience",
    "✨ Save Your Future with JyotirSetu"
  ];
  let index = 0;
  const textElement = document.getElementById('announcement-text');

  function rotateMessage() {
    textElement.style.opacity = 0;
    setTimeout(() => {
      textElement.innerText = messages[index];
      textElement.style.opacity = 1;
      index = (index + 1) % messages.length;
    }, 400);
  }

  rotateMessage();
  setInterval(rotateMessage, 4000);
});

// Appointment Form Submission
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('appointment-form');
  const loading = document.getElementById('loading');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  const submitButton = document.getElementById('submit-button');

  if (form) {
    form.addEventListener('submit', function (event) {
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
});
