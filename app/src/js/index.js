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
  }, 10);

  let moreCursorShape = new TimelineMax({ paused: true })
    .to('.custom-cursor', 0.3, { scale: 2 })
    .to('.more-shape', 0.3, { opacity: 1 });

  let menuLinkCursorShape = new TimelineMax({ paused: true })
    .to('.custom-cursor', 0.3, { scale: 0.4, backgroundColor: '#fff' });

  $('.btn-icon, .footer-item').each(function (i, ele) {
    let btnIconTl = new TimelineMax({ paused: true });
    btnIconTl.to($(this), 0.3, { opacity: 0.6 });
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

  $('.work-img-box').each(function (i, ele) {
    let workImgHoverTl = new TimelineMax({ paused: true });
    workImgHoverTl.to($(this), 0.3, { opacity: 0.5 })
      .to($(this).find('span'), 0.3, { opacity: 1 });
    ele.animation = workImgHoverTl;
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

  $('.intro h4').html(
    $('.intro h4').html()
      .replace(/./g, '<span>$&</span>')
      .replace(/\s/g, '&nbsp;')
  );

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


  TweenMax.to('.intro', 0.6, {
    delay: 2.5,
    top: '-100vh',
    ease: Expo.easeInOut
  });

});

const headerNavigation = document.querySelector('.header-navigation');
const headerContact = document.querySelector('.header-contact');
const navIconBtn = document.querySelector('.nav-icon-btn');
const contactIconBtn = document.querySelector('.contact-icon-btn');
const CLOSE = 'close-btn';
const mainContainer = document.querySelector('.main-container');
const titleItems = document.querySelectorAll('.title-item');
const scrollImgContents = document.querySelectorAll('.work-img-box a');

function navOn() {
  headerNavigation.classList.toggle('nav-on');
  navIconBtn.classList.toggle(CLOSE);
}

function contactOn() {
  headerContact.classList.toggle('contact-on');
  contactIconBtn.classList.toggle(CLOSE);
}

function scrollEffect() {
  const pageY = pageYOffset / 20;
  mainContainer.style.transform = `translateY(-${pageY}px)`;
  mainContainer.style.transition = `transform .8s ease`;
}

const chkScroll = () => {
  scrollImgContents.forEach((scrollImgCon) => {
    const scrollImgBox = scrollImgCon.parentElement;
    const scrollImg = scrollImgCon.children[0];
    const scrollAt = window.pageYOffset + window.innerHeight > scrollImgBox.offsetTop;

    if (scrollAt) {
      const pointY = window.pageYOffset + window.innerHeight - scrollImgBox.offsetTop;
      const calcPoint = 2 - (pointY + scrollImg.clientHeight / 2) / scrollImg.clientHeight;

      scrollImgCon.style.transform = `translate3d(0, ${calcPoint * 30}px, 0)`;
    }
  });
}



navIconBtn.addEventListener('click', navOn);
contactIconBtn.addEventListener('click', contactOn);
document.addEventListener('scroll', scrollEffect);
window.addEventListener('scroll', chkScroll);
