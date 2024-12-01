document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const errorMessage = document.getElementById("error-message");
  const loginButton = document.querySelector(".login-btn");

  if (!loginForm || !errorMessage || !loginButton) {
    console.error("Required elements not found");
    return;
  }

  loginButton.onclick = function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Reset error message
    errorMessage.style.display = "none";

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      errorMessage.textContent = "Please fill in all fields";
      errorMessage.style.display = "block";
      return;
    }

    if (!emailRegex.test(email)) {
      errorMessage.textContent = "Please enter a valid email address";
      errorMessage.style.display = "block";
      return;
    }

    if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters long";
      errorMessage.style.display = "block";
      return;
    }

    // If all validations pass, redirect to index.html
    window.location.href = "index.html";
  };
});
