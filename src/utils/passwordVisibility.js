export function PasswordVisibility () {
  const passwordInput = document.getElementById('password');
  const passwordConfirmationInput = document.getElementById('password_confirmation');
  if (passwordConfirmationInput !== null) {
    if (passwordInput.type === "password") {
      passwordInput.type = 'text';
      passwordConfirmationInput.type = 'text';
    }
    else {
      passwordInput.type = 'password';
      passwordConfirmationInput.type = 'password';
    }
  }
  else {
    if (passwordInput.type === "password") {
      passwordInput.type = 'text';
    }
    else {
      passwordInput.type = 'password';
    }
  }
  

};