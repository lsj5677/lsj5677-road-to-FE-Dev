import './common';

let clockHoursEl;
let clockSecondsEl;
let hoursHandEl;
let minHandEl;
let secHandEl;
let currentDate;
let hours;
let min;
let sec;

const clockHourMax = 12;
const clockMinMax = 60;
const clockSecMax = 60;
const circleDegree = 360;
const degreeDistance = 6;

clockEl();
createEl();
setInterval(clockFn, 1000);

function clockEl() {
  clockHoursEl = document.querySelector('.clock-hours');
  clockSecondsEl = document.querySelector('.clock-seconds');
  hoursHandEl = document.querySelector('.hours-hand');
  minHandEl = document.querySelector('.min-hand');
  secHandEl = document.querySelector('.sec-hand');
}

function createEl() {
  createNumbers();
  createSecLines();
}

function clockFn() {
  currentDate = new Date();
  hours = currentDate.getHours();
  min = currentDate.getMinutes();
  sec = currentDate.getSeconds();

  hoursHandEl.style.transform = `rotate(${hours / clockHourMax * circleDegree}deg)`;
  minHandEl.style.transform = `rotate(${min / clockMinMax * circleDegree}deg)`;
  secHandEl.style.transform = `rotate(${sec / clockSecMax * circleDegree}deg)`;
}

function createNumbers() {
  for (let i = 1; i <= clockHourMax; i++) {
    let numEl = document.createElement('div');
    numEl.classList.add('num');
    numEl.style.transform = `rotate(${30 * i}deg)`;

    let numText = document.createElement('p');
    numText.textContent = i;
    numText.style.transform = `rotate(${-30 * i}deg)`;

    numEl.appendChild(numText);
    clockHoursEl.appendChild(numEl);
  }
}

function createSecLines() {
  for (let i = 0; i < clockSecMax; i++) {
    let secondLineDegree = degreeDistance * i;

    let secondLineEl = document.createElement('div');
    secondLineEl.classList.add('second-lines');
    secondLineEl.style.transform = `rotate(${secondLineDegree}deg)`;
    clockSecondsEl.appendChild(secondLineEl);

    if (secondLineDegree % 30 == 0) {
      secondLineEl.classList.add('second-multiples-ele');
    }
  }
}