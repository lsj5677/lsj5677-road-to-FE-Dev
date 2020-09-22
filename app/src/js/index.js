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
    const hasCloseButton = headerNavigation.classList.contains('nav-on');

    if (!hasCloseButton) {
      header.style.zIndex = '0';
    } else {
      header.style.zIndex = '1';
    }
  }

  function contactOn() {
    const headerNavigation = document.querySelector('.header-contact-items');

    headerNavigation.classList.toggle('contact-on');
    contactIcon.classList.toggle(CLOSE);
    const hasCloseButton = contactIcon.classList.contains(CLOSE);

    if (!hasCloseButton) {
      header.style.background = 'none';
      header.style.zIndex = '0';
    } else {
      header.style.background = '#D7E9EE';
      header.style.zIndex = '1';
    }

  }

  const debounce = (func, wait = 20, immediate = true) => {
    let timeout;

    return function () {

      const context = this;
      const args = arguments;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }

      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);

    }
  }

  const mainConItem = document.querySelectorAll('.main-contents-items');

  function mainContentsEffect() {
    let pageY = pageYOffset / 6;
    mainConItem.forEach((item) => {
      item.style.transform = `translateY(-${pageY}px)`;
      item.style.transition = `transform .5s ease`;
    });
  }


  menuIcon.addEventListener('click', NavOn);
  contactIcon.addEventListener('click', contactOn);
  document.addEventListener('scroll', mainContentsEffect);

})();