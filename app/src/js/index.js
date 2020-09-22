(() => {

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

  document.addEventListener('scroll', mainContentsEffect);
})();