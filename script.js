// Announcement Rotator
document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "🌟 Trusted Astrology Consultations – Unlock your destiny with expert guidance!",
    "🔮 30+ Years of Experience – Wisdom that lights your path to success!",
    "✨ Save Your Future with JyotirSetu – Navigate life’s uncertainties with confidence!",
    "🕉️ Personalized Predictions & Remedies – Discover tailored solutions for your journey!",
    "🌕 Vedic Astrology at Its Best – Time-tested insights for a better tomorrow!",
    "🔥 Achieve Clarity & Success – Find answers with Punita Sharma’s expert astrology!"
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

// Burger Menu for Mobile Navigation and Smooth Scroll
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 110, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
        nav.classList.remove("active"); // Close menu on mobile after click
      }
    });
  });
});

// Banner Slider for Multiple Banners (Images or Videos)
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.hero-banner-slide');
  if (slides.length > 1) {
    let current = 0;
    function showSlide(idx) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
      });
    }
    showSlide(current);
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 4000);
  }
});

// Appointment Form Submission (Web3Forms AJAX)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const result = document.getElementById("result");
  if (form && result) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);
      var object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      var json = JSON.stringify(object);
      result.innerHTML = "Please wait...";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
            result.style.color = "#2ecc71";
          } else {
            result.innerHTML = json.message;
            result.style.color = "#e74c3c";
          }
        })
        .catch((error) => {
          result.innerHTML = "Something went wrong!";
          result.style.color = "#e74c3c";
        })
        .then(function () {
          form.reset();
          setTimeout(() => {
            result.innerHTML = "";
          }, 5000);
        });
    });
  }
});
