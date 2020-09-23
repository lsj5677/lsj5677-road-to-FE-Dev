(() => {
  const header = document.querySelector('.header');
  const menuIcon = document.querySelector('.header-menu-icon');
  const contactIcon = document.querySelector('.header-contact-icon');
  const CLOSE = 'close-button';

  function NavOn() {
    const headerNavigation = document.querySelector('.header-navigation');
    const menuIconLine = document.querySelectorAll('.menu-icon-line');

    headerNavigation.classList.toggle('nav-on');
    menuIconLine.forEach((line) => line.classList.toggle(CLOSE));
  }

  function contactOn() {
    const headerNavigation = document.querySelector('.header-contact-items');

    headerNavigation.classList.toggle('contact-on');
    contactIcon.classList.toggle(CLOSE);
  }

  function mainContainerScroll() {
    const mainContainer = document.querySelector('.main-container');
    const pageY = pageYOffset / 6;

    mainContainer.style.transform = `translateY(-${pageY}px)`;
    mainContainer.style.transition = `transform .8s ease`;
  }

  menuIcon.addEventListener('click', NavOn);
  contactIcon.addEventListener('click', contactOn);
  document.addEventListener('scroll', mainContainerScroll);

})();