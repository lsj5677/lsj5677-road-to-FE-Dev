let moreNavBtnEl;
let moreNavEl;

initEl();
initEvent();

function initEl() {
  moreNavBtnEl = document.querySelector('.more-nav-btn');
  moreNavEl = document.querySelector('.more-nav');
}

function initEvent() {
  moreNavBtnEl.addEventListener('click', moreNavShow);
}
function moreNavShow() {
  moreNavBtnEl.classList.toggle('more-nav-on');
  moreNavEl.classList.toggle('more-nav-show');
}
