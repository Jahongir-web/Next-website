let elMenuBtn = document.querySelector(`.header-site-nav__toggle-btn`);
let elMenu = document.querySelector(`.header-site-nav__menu-list`);
let elFooterDateSpan = document.querySelector(`.footer-site__span`);

elMenuBtn.addEventListener(`click`, function(){
  elMenuBtn.classList.toggle(`is-active`);
  elMenu.classList.toggle(`active`);
})

// Get the current year for the copyright
elFooterDateSpan.textContent = new Date().getFullYear();
