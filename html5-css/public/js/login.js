const loginButton2 = document.getElementById("loginButton");
const passwordToggle = document.getElementById("passwordToggle");

loginButton2.addEventListener("click", () => {
    window.location.href = "cmsDrama.html";
});

passwordToggle.addEventListener("click", () => {
    const passwordField = document.getElementById("password");
    passwordField.type = (passwordField.type === "password") ? "text" : "password";
});
