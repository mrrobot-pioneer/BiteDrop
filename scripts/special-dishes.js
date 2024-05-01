const menus = document.querySelectorAll('.menu');
menus.forEach(menu => {
  menu.classList.remove('active-menu')
});

const menuLink = document.getElementById('special-dishes-link');
menuLink.classList.add('active-menu');