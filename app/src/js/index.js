import $ from 'jquery';
// import 'gsap';
// import 'animejs';

$(function () {

  init();
  showHeader();
  scrollEffect();
  handleCursor();

  function init() {
    initElements();
    introTitleSplit();
    fadeInOutIntroText();
    slideUpBackground();
  }

  function handleCursor() {
    cursorXY();
    hoverEffect();
  }

  function showHeader() {
    slideRightNavigation();
    slideLeftContact();
  }

  function scrollEffect() {
    slowScroll();
    imgUpDown();
  }


  function cursorXY() {
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
    }, 10);


  }

  function hoverEffect() {
    let menuLinkCursorShape = new TimelineMax({ paused: true })
      .to('.custom-cursor', 0.3, { scale: 0.4, backgroundColor: '#fff' });

    $('.btn-icon, .footer-item').each((i, ele) => {
      let btnIconTl = new TimelineMax({ paused: true })
        .to($(ele), 0.3, { opacity: 0.6 });
      ele.animation = btnIconTl;
    });

    $('.btn-icon, .footer-item').hover(
      function () {
        this.animation.play();
        menuLinkCursorShape.play();
      },
      function () {
        this.animation.reverse();
        menuLinkCursorShape.reverse();
      }
    );

    let moreCursorShape = new TimelineMax({ paused: true })
      .to('.custom-cursor', 0.3, { scale: 2 })
      .to('.more-shape', 0.3, { opacity: 1 });
    $('.work-img-box').each((i, workImgBox) => {
      let workImgHoverTl = new TimelineMax({ paused: true })
        .to($(workImgBox), 0.3, { opacity: 0.5 })
        .to($(workImgBox).find('span'), 0.3, { opacity: 1 });

      workImgBox.animation = workImgHoverTl;
    });

    $('.work-img-box').hover(
      function () {
        this.animation.play();
        moreCursorShape.play();
      },
      function () {
        this.animation.reverse();
        moreCursorShape.reverse();
      }
    );

  }



  function splitText(text) {
    return text.split('').map(char => `<span>${char}</span>`).join('');
  }

  function introTitleSplit() {
    $('.intro h4').html(
      splitText($('.intro h4').text())
    );
  }

  function fadeInOutIntroText() {
    anime
      .timeline({ loop: false })
      .add({
        targets: ".intro h4 span",
        translateX: [-100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 300,
        delay: function (el, i) {
          return 200 + 50 * i;
        }
      })
      .add({
        targets: ".intro h4 span",
        translateX: [0, 100],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 500,
        delay: function (el, i) {
          return 200 + 50 * i;
        }
      });
  }
  function slideUpBackground() {
    TweenMax.to('.intro', 0.6, {
      delay: 2.5,
      top: '-100vh',
      ease: Expo.easeInOut
    });
  }

  let headerNavigation;
  let headerContact;
  let navIconBtn;
  let contactIconBtn;
  let mainContainer;
  let titleItems;
  let scrollImgContents;
  let CLOSE = 'close-btn';

  function initElements() {
    headerNavigation = $('.header-navigation');
    headerContact = $('.header-contact');
    navIconBtn = $('.nav-icon-btn');
    contactIconBtn = $('.contact-icon-btn');
    mainContainer = $('.main-container');
    titleItems = $('.title-item');
    scrollImgContents = $('.work-img-box a');
  }


  function slideRightNavigation() {
    navIconBtn.click(() => {
      headerNavigation.toggleClass('nav-on');
      navIconBtn.toggleClass(CLOSE);
    });
  }

  function slideLeftContact() {
    contactIconBtn.click(() => {
      headerContact.toggleClass('contact-on');
      contactIconBtn.toggleClass(CLOSE);
    });
  }

  function slowScroll() {
    $(window).scroll(() => {
      const pageY = pageYOffset / 20;
      mainContainer.css({ 'transform': 'translateY(-' + pageY + 'px)', 'transition': 'transform .8s ease' });
    });
  }

  function imgUpDown() {
    $(window).scroll(() => {
      scrollImgContents.each((i, scrollImgCon) => {
        const scrollImgBox = $(scrollImgCon).parent();
        const scrollImg = $(scrollImgCon).children().eq(0);
        const scrollAt = window.pageYOffset + window.innerHeight > scrollImgBox.offset().top;
        if (scrollAt) {
          const pointY = window.pageYOffset + window.innerHeight - scrollImgBox.offset().top;
          const calcPoint = 2 - (pointY + scrollImg.outerHeight() / 2) / scrollImg.outerHeight();

          $(scrollImgCon).css({ 'transform': 'translate3d(0,' + calcPoint * 20 + 'px, 0)' });
        }
      });
    });
  }
});
