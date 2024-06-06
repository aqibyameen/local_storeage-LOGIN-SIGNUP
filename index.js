function register() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  if (username && password) {
      if (localStorage.getItem(username)) {
          alert('Username already exists');
      } else {
          localStorage.setItem(username, password);
          alert('User registered successfully');
      }
  } else {
      alert('Please fill in all fields');
  }
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (username && password) {
      const storedPassword = localStorage.getItem(username);
      if (storedPassword && storedPassword === password) {
          alert('Login successful');
      } else {
          alert('Invalid username or password');
      }
  } else {
      alert('Please fill in all fields');
  }
}
