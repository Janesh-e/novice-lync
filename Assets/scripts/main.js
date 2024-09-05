function toggleEdit(id) {
  const input = document.getElementById(id);
  input.disabled = !input.disabled; // Toggle disabled state
  if (!input.disabled) {
    input.focus(); // Focus on the input when editing is enabled
  }
}

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Redirect to login.html
    window.location.href = "login.html";
  });

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Redirect to dashboard.html
    window.location.href = "dashboard.html";
  });
