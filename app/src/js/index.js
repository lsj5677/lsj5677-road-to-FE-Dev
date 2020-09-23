(() => {
  const mainContainer = document.querySelector('.main-container');

  function mainContainerScroll() {
    let pageY = pageYOffset / 6;

    mainContainer.style.transform = `translateY(-${pageY}px)`;
    mainContainer.style.transition = `transform .8s ease`;
  }


  document.addEventListener('scroll', mainContainerScroll);

})();