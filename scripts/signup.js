// js for showing and hiding password

const passwordInput1 = document.querySelector(".password1");
const passwordInput2 = document.querySelector(".password2");

const showPasswordBtn1 = document.querySelector(".bxs-show-1");
const hidePasswordBtn1 = document.querySelector(".bxs-hide-1");

const showPasswordBtn2 = document.querySelector(".bxs-show-2");
const hidePasswordBtn2 = document.querySelector(".bxs-hide-2");

// function for showing the password
function showPassword(input, button, hidden) {
  button.addEventListener("click", (e) => {
    input.setAttribute("type", "text");
    e.target.style.display = "none"; //e.target is the button which has received the click
    hidden.style.display = "block";
  });
}

// function for hiding the password
function hidePassword(input, button, shown) {
  button.addEventListener("click", (e) => {
    input.setAttribute("type", "password");
    e.target.style.display = "none"; //e.target is the button which has received the click
    shown.style.display = "block";
  });
}

showPassword(passwordInput1, showPasswordBtn1, hidePasswordBtn1);
hidePassword(passwordInput1, hidePasswordBtn1, showPasswordBtn1);

showPassword(passwordInput2, showPasswordBtn2, hidePasswordBtn2);
hidePassword(passwordInput2, hidePasswordBtn2, showPasswordBtn2);
