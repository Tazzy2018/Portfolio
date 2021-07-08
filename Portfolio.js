let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');
let bod = document.querySelector('.top-section');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('isactive');
  menu.classList.toggle('active');

});