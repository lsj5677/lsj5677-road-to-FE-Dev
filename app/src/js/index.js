const headerNavigation = document.querySelector('.header-navigation');
const headerContact = document.querySelector('.header-contact');
const navIconBtn = document.querySelector('.nav-icon-btn');
const contactIconBtn = document.querySelector('.contact-icon-btn');
const CLOSE = 'close-btn';

function navOn() {
  headerNavigation.classList.toggle('nav-on');
  navIconBtn.classList.toggle(CLOSE);
}

function contactOn() {
  headerContact.classList.toggle('contact-on');
  contactIconBtn.classList.toggle(CLOSE);
}

navIconBtn.addEventListener('click', navOn);
contactIconBtn.addEventListener('click', contactOn);