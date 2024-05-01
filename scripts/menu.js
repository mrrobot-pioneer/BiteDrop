// js for revealing and hiding the place order details when place order link is clicked

const link = document.querySelector('.place-order-link');
const placeOrderDetails = document.querySelector('.place-order-details');

link.onclick = ()=>{
  placeOrderDetails.classList.toggle('hidden');
}

const menus = document.querySelectorAll('.menu');
menus.forEach(menu => {
  menu.classList.remove('active-menu')
});

const menuLink = document.getElementById('menu-link');
menuLink.classList.add('active-menu');