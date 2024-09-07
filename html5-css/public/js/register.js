document.getElementById("togglePasswordCheckbox").addEventListener("change", function() {
    var passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});

document.getElementById("toggleConfirmPasswordCheckbox").addEventListener("change", function() {
    var confirmPasswordField = document.getElementById("confirm-password");
    confirmPasswordField.type = this.checked ? "text" : "password";
});
