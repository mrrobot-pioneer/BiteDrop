// js for showing and hiding password

const passwordInput = document.querySelector(".password");
const showPasswordBtn = document.querySelector(".bxs-show");
const hidePasswordBtn = document.querySelector(".bxs-hide");

showPasswordBtn.addEventListener("click", (e) => {
  passwordInput.setAttribute("type", "text");
  e.target.style.display = "none"; //e.target is the button which has received the click i.e showPasswordBtn
  hidePasswordBtn.style.display = "block";
});

hidePasswordBtn.addEventListener("click", (e) => {
  passwordInput.setAttribute("type", "password");
  e.target.style.display = "none"; //e.target is the button which has received the click i.e hidePasswordBtn
  showPasswordBtn.style.display = "block";
});
