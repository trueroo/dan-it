const headerMenuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".menu");

const showMenu = function () {
  menu.classList.toggle("menu--isActive")
}

headerMenuBtn.addEventListener('click', showMenu);
