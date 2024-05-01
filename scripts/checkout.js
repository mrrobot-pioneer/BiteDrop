// js for revealing the coupon code input

const clickLink = document.querySelector('.visible p');
const hidden = document.querySelector('.hidden');

clickLink.onclick = ()=>{
  hidden.classList.toggle("show");
}
