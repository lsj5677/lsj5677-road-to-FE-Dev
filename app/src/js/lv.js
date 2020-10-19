import './common';
const screenSize = {
  large: 1024,
  tablet: 768,
  small: 546,
};

let overlayEl;
let navEl;
let searchBtnEl;
let searchCloseBtnEl;
let searchForm;
let menuBtnEl;
let logoEl;

initEl();
initEvent();

function initEl() {
  overlayEl = document.querySelector('.overlay');
  navEl = document.querySelector('.navigation');
  searchBtnEl = document.querySelector('.header-icon-search');
  searchCloseBtnEl = document.querySelector('.close-button');
  searchForm = document.querySelector('.search-form-wrap');
  menuBtnEl = document.querySelector('.header-icon-menubar');
  logoEl = document.querySelector('.header-logo-items');
}

function initEvent() {
  menuBtnEl.addEventListener('click', showNav);
  searchBtnEl.addEventListener('click', showSearchWrap);
  searchCloseBtnEl.addEventListener('click', hideSearchWrap);
  window.addEventListener('scroll', handleLogo);
  resize();
}

function showNav() {
  menuBtnEl.classList.toggle('nav-close');
  navEl.classList.toggle('nav-show');
  overlayEl.classList.toggle('hidden');
}

function showSearchWrap() {
  searchForm.classList.add('serach-wrap-show');
}

function hideSearchWrap() {
  searchForm.classList.remove('serach-wrap-show');
}

const scrollMax = 95;
const scaleX = 3.5;
const scaleY = 3.5;
const translateY = 112;

function handleLogo() {
  let calcScaleX = scaleX - (scaleX / scrollMax * window.pageYOffset);
  let calcScaleY = scaleY - (scaleY / scrollMax * window.pageYOffset);
  let calcTranslateY = translateY - (translateY / scrollMax * window.pageYOffset);
  logoEl.style.transform = `matrix(${calcScaleX > 1 ? calcScaleX : 1}, 0,0,${calcScaleY > 1 ? calcScaleY : 1},0,${calcTranslateY > 0 ? calcTranslateY : 0})`;
}

function resize() {
  if (window.innerWidth <= screenSize.tablet) {
    logoEl.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
    logoEl.style.transition = `all .3s ease`;
    window.removeEventListener('scroll', handleLogo);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= screenSize.tablet) {
      logoEl.style.transform = `matrix(1, 0, 0, 1, 0, 0)`;
      logoEl.style.transition = `all .3s ease`;
      window.removeEventListener('scroll', handleLogo);

    } else {
      if (scrollY <= scrollMax || pageYOffset <= scrollMax) {
        logoEl.style.transform = `matrix(${scaleX},0,0,${scaleY},0,${translateY})`;
      }
      window.addEventListener('scroll', handleLogo);

    }
  });
}
