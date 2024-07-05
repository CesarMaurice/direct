const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Simulate login (replace with actual authentication logic)
  const User Name = document.getElementById('cesar').value;
  const Phone = document.getElementById('699878108').value;
  const Password = document.getElementById('Password').value;
  if (!User Name || !Phone || !Password) {
    errorMessage.textContent = 'please enter your username, phone and password';
    return;
  }

  if (User Name === 'user' && Password === 'password' && matricule === '699878108') {
    loginForm.style.display = 'none';
    dashboard.style.display = 'block';
  } else {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.textContent = 'Invalid username or password';
  }
});

function logout() {
  loginForm.style.display = 'block';
  dashboard.style.display = 'none';
}