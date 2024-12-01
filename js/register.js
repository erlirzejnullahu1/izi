document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.querySelector(".login-form");
  const errorMessage = document.getElementById("error-message");
  const registerButton = document.querySelector(".login-btn");

  if (!registerForm || !errorMessage || !registerButton) {
    console.error("Required elements not found");
    return;
  }

  registerButton.onclick = function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    
    // Reset error message
    errorMessage.style.display = "none";

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Simplified password validation (at least 6 chars, 1 uppercase, 1 number)
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (!email || !password || !confirmPassword) {
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

    if (!hasUpperCase || !hasNumber) {
      errorMessage.textContent =
        "Password must contain at least one uppercase letter and one number";
      errorMessage.style.display = "block";
      return;
    }

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match";
      errorMessage.style.display = "block";
      return;
    }

    // If all validations pass, redirect to index.html
    window.location.href = "index.html";
  };
});
