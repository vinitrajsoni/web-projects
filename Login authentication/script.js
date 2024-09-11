// Function to register a new user
function register() {
  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  if (username === "" || password === "") {
    document.getElementById("register-message").textContent =
      "Both fields are required!";
    return;
  }

  // Check if user already exists
  if (localStorage.getItem(username)) {
    document.getElementById("register-message").textContent =
      "Username already exists!";
  } else {
    // Save username and password to localStorage
    localStorage.setItem(username, password);
    document.getElementById("register-message").textContent =
      "Registration successful!";
  }
}

// Function to login a user
function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  if (username === "" || password === "") {
    document.getElementById("login-message").textContent =
      "Both fields are required!";
    return;
  }

  // Check if user exists and password matches
  const storedPassword = localStorage.getItem(username);
  if (storedPassword && storedPassword === password) {
    document.getElementById("login-message").textContent = "Login successful!";
    showSecuredPage(username);
  } else {
    document.getElementById("login-message").textContent =
      "Invalid username or password!";
  }
}

// Function to show secured page after successful login
function showSecuredPage(username) {
  document.getElementById("secured-username").textContent = username;
  document.getElementById("login-section").style.display = "none";
  document.getElementById("register-section").style.display = "none";
  document.getElementById("secured-section").style.display = "block";
}

// Function to log out and return to login page
function logout() {
  document.getElementById("secured-section").style.display = "none";
  document.getElementById("login-section").style.display = "block";
  document.getElementById("register-section").style.display = "block";
}
