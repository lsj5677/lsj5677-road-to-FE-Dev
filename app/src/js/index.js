(() => {
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