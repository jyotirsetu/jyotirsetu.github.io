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
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
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
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
