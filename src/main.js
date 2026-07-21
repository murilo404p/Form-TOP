import './style.css'

let password = document.getElementById("user_password");
let confirmPassword = document.getElementById("confirm_password");
let textConfirmPassword = document.getElementById("textConfirmPassword");

confirmPassword.addEventListener("input", () => {
    if (password.value !== confirmPassword.value) {
        ;
    } else {
        textConfirmPassword.classList.add = ("hidden");
    }
});

