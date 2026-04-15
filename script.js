const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const emailIsValid = email.includes('@');
  const passwordIsValid = password.length >= 6;

  // Show or hide error messages
  if (emailIsValid) {
    emailError.style.display = 'none';
  } else {
    emailError.style.display = 'block';
  }

  if (passwordIsValid) {
    passwordError.style.display = 'none';
  } else {
    passwordError.style.display = 'block';
  }

  // If both are valid, show success
  if (emailIsValid && passwordIsValid) {
    successMsg.style.display = 'block';
  }
});