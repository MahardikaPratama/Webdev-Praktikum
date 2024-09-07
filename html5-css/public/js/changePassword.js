document.getElementById("toggleNewPasswordCheckbox").addEventListener("change", function() {
    var newPasswordField = document.getElementById("new-password");
    if (this.checked) {
        newPasswordField.type = "text";
    } else {
        newPasswordField.type = "password";
    }
});

document.getElementById("toggleConfirmNewPasswordCheckbox").addEventListener("change", function() {
    var confirmNewPasswordField = document.getElementById("confirm-new-password");
    if (this.checked) {
        confirmNewPasswordField.type = "text";
    } else {
        confirmNewPasswordField.type = "password";
    }
});
