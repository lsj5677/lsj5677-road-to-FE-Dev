(() => {
  const mainContainer = document.querySelector('.main-container');

  function mainContainerScroll() {
    let pageYOffset = pageYOffset / 6;

    mainContainer.style.transform = `translateY(-${pageYOffset}px)`;
    mainContainer.style.transition = `transform .8s ease`;
  }


  document.addEventListener('scroll', mainContainerScroll);

})();