import './style.css'

let password = document.getElementById("user_password");
let confirmPassword = document.getElementById("confirm_password");
let textConfirmPassword = document.getElementById("textConfirmPassword");
let buttonConfirm = document.getElementById("buttonConfirm");
let blankPassword = document.getElementById("blankPassword");

confirmPassword.addEventListener("input", () => {
    if (password.value !== confirmPassword.value) {
        textConfirmPassword.classList.remove("hidden");
    } else {
        textConfirmPassword.classList.add("hidden");
    }
});


