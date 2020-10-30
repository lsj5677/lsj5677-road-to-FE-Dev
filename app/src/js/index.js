import $ from 'jquery';
import gsap from 'gsap';
import anime from 'animejs';

const CLASSNAME_CLOSE_BTN = 'close-btn';

let body;
let section;
let headerNavigation;
let headerContact;
let navIconBtn;
let contactIconBtn;
let mainContainer;
let scrollImgContents;
let titleImg;
let titleImgBg;
let mainTitle;
let subTitle;
let titleDesc;
let titleKeyword;

const screenSize = {
  large: 1024,
  medium: 768,
  small: 546,
};

init();
showHeader();
scrollEffect();
handleCursor();
showMainContents();

function init() {
  initElements();
  fadeInOutText('.intro h4', '.intro h4 span');
  slideUpBackground();
}

function initElements() {
  body = $('body');
  section = $('.section');
  headerNavigation = $('.header-navigation');
  headerContact = $('.header-contact');
  navIconBtn = $('.nav-icon-btn');
  contactIconBtn = $('.contact-icon-btn');
  mainContainer = $('.main-container');
  scrollImgContents = $('.work-img-box a');
  titleImg = $('.title-image');
  titleImgBg = $('.title-image-bg');
  mainTitle = $('.main-title');
  subTitle = $('.sub-title');
  titleDesc = $('.title-desc');
  titleKeyword = $('.title-keyword');
}

function handleCursor() {
  if (window.innerWidth >= screenSize.medium) {
    cursorXY();
    hoverEffect();
  }
}

function showHeader() {
  slideRightNavigation();
  slideLeftContact();
}

function scrollEffect() {
  scrollChangeBgColors();
  scrollSlowly();
  upDownImg();
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
  let menuLinkCursorShape = new gsap.core.Timeline({ paused: true })
    .to('.custom-cursor', 0.3, { scale: 0.4, backgroundColor: '#fff' });

  $('.btn-icon, .footer-item').each((i, ele) => {
    let btnIconTl = new gsap.core.Timeline({ paused: true })
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

  let moreCursorShape = new gsap.core.Timeline({ paused: true })
    .to('.custom-cursor', 0.3, { scale: 2 })
    .to('.more-shape', 0.3, { opacity: 1 });
  $('.work-img-box').each((i, workImgBox) => {
    let workImgHoverTl = new gsap.core.Timeline({ paused: true })
      .to($(workImgBox), 0.3, { opacity: 1 })
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

function introTextSplit(el) {
  $(el).html(
    splitText($(el).text())
  );
}

function fadeInOutText(el, target) {
  introTextSplit(el);

  anime
    .timeline({ loop: false })
    .add({
      targets: target,
      scale: [4, 1],
      opacity: [0, 1],
      duration: 3000,
      easing: "easeOutExpo",
      delay: (ele, i) => i * 100
    })
}

function slideUpBackground() {
  gsap.core.Tween.to('.intro', 0.5, {
    delay: 2,
    top: '-100vh',
  });
}

function showMainContents() {
  setTimeout(() => {
    titleImg.fadeIn(600, () => {
      titleDesc.animate({ opacity: '1' }, 1000);
      titleImgBg.animate({ left: '6px' }, 1000);
      mainTitle.animate({ opacity: '1', left: 0 }, 800);
      subTitle.animate({ opacity: '1', left: 0 }, 1500);
      titleKeyword.animate({ opacity: '1' }, 2000);
    });
  }, 2000);
}

function removeBgColorClass(i, css) {
  return (css.match(/(^|\s)bg-color-\S+/g) || []).join(' ');
}

function scrollChangeBgColors() {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) { console.log('End of Window'); }

  const $window = $(window);
  $(window).scroll(() => {
    const scroll = $window.scrollTop() + ($window.height() / 4);

    section.each((i, sec) => {

      if ($(sec).position().top <= scroll && $(sec).position().top + $(sec).height() > scroll) {
        body.removeClass(removeBgColorClass);
        body.addClass(`bg-color-${$(sec).data('bg')}`);
      }
    });
  });
}

function slideRightNavigation() {
  navIconBtn.click(() => {
    headerNavigation.toggleClass('nav-on');
    navIconBtn.toggleClass(CLASSNAME_CLOSE_BTN);
  });
}

function slideLeftContact() {
  contactIconBtn.click(() => {
    headerContact.toggleClass('contact-on');
    contactIconBtn.toggleClass(CLASSNAME_CLOSE_BTN);
  });
}

function scrollSlowly() {
  $(window).scroll(() => {
    const pageY = pageYOffset / 20;
    mainContainer.css({ 'transform': 'translateY(-' + pageY + 'px)', 'transition': 'transform .8s ease' });
  });
}

function upDownImg() {
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

