const listMenu = document.querySelector('.header__menu');
const btnMenu = document.querySelector('.menu__button');
const btnClose = document.querySelector('.menu__button__close');


function showMenu(){
  listMenu.classList.add('active');

}
function hiddenMenu(){
  listMenu.classList.remove('active');

}


btnMenu.addEventListener('click', showMenu);
btnClose.addEventListener('click', hiddenMenu);
