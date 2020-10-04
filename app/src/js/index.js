$(function () {
  let $cursorX = 0;
  let $cursorY = 0;
  let $left = 0;
  let $top = 0;


  $(document).mousemove(e => {
    $cursorX = e.clientX;
    $cursorY = e.clientY;

  });

  setInterval(() => {
    $left += ($cursorX - $left) / 12;
    $top += ($cursorY - $top) / 12;
    $('.custom-cursor').css({ left: $left + 'px', top: $top + 'px' });
  }, 30);

  let moreShape = new TimelineMax({ paused: true })
    .to('.custom-cursor', 0.3, { scale: 2 })
    .to('.more-shape', 0.3, { opacity: 1 });

  $('.work-img-box').each(function (i, ele) {
    let workImgHoverTI = new TimelineMax({ paused: true });
    workImgHoverTI.to($(this).find('img'), 0.3, { opacity: 0.3 })
      .to($(this).find('span'), 0.3, { opacity: 1, y: '50px' });
    ele.animation = workImgHoverTI;
  });

  $('.work-img-box').hover(
    function () {
      this.animation.play();
      moreShape.play();
    },
    function () {
      this.animation.reverse();
      moreShape.reverse();
    }
  );

});

  // function scrollEffect() {
  //   const mainContainer = document.querySelector('.main-container');
  //   const pageY = pageYOffset / 6;
  //   console.log(1);
  //   mainContainer.style.transform = `translateY(-${pageY}px)`;
  //   mainContainer.style.transition = `transform .8s ease`;
  // }

  // document.addEventListener('scroll', scrollEffect);