// Get elements
const registerButton = document.getElementById("registerButton");
const passwordToggle = document.getElementById("passwordToggle");
const confirmPasswordToggle = document.getElementById("confirmPasswordToggle");

// Register button click event
registerButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    window.location.href = "cmsDrama.html";
});

// Toggle password visibility
if (passwordToggle) {
    passwordToggle.addEventListener("click", () => {
        const passwordField = document.getElementById("password");
        passwordField.type = (passwordField.type === "password") ? "text" : "password";
    });
}

// Toggle confirm password visibility
if (confirmPasswordToggle) {
    confirmPasswordToggle.addEventListener("click", () => {
        const confirmPasswordField = document.getElementById("confirm-password");
        confirmPasswordField.type = (confirmPasswordField.type === "password") ? "text" : "password";
    });
}
