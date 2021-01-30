elMenuBtn = document.querySelector(`.header-site-nav__toggle-btn`);
elMenu = document.querySelector(`.header-site-nav__menu-list`);


elMenuBtn.addEventListener(`click`, function(){
  elMenuBtn.classList.toggle(`is-active`);
  elMenu.classList.toggle(`active`);
})