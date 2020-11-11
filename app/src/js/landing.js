import './common';
import $ from 'jquery';

const screenSize = {
  large: 1024,
  tablet: 768,
  small: 575,
};
const scrollMax = 95;

let headerEl;
let headerMoBtnEl;
let headerNavEl;

init();
function init() {
  initEl();
  scrollHeader();
  showMoHeader();
}

function initEl() {
  headerEl = $('.header');
  headerMoBtnEl = $('.header-mo-btn');
  headerNavEl = $('.header-nav');
}

function scrollHeader() {
  $(window).scroll(() => {
    if (scrollMax < pageYOffset) {
      headerEl.addClass('header-bg-on');
    } else {
      headerEl.removeClass('header-bg-on');
    }
  });
}

function showMoHeader() {
  headerMoBtnEl.click(() => {
    headerMoBtnEl.toggleClass('close');
    headerNavEl.toggleClass('header-show');
  });
}