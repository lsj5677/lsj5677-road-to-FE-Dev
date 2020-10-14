let priceInputEl;
let myLotteryItemsEl;
let luckyNumberItemsEl;
let purchaseBtnEl;
let confirmBtnEl;
let resultContentItemsEl;
let resetBtn;
let lotteryCon;
let myLotteryItemEl

const inputMaxLen = 5;

initEl();
initEvent();

function initEl() {
  priceInputEl = document.querySelector('.purchase-price-input');
  myLotteryItemsEl = document.querySelector('.my-lottery-items');
  luckyNumberItemsEl = document.querySelector('.lucky-number-items');
  purchaseBtnEl = document.querySelector('.purchase-btn');
  confirmBtnEl = document.querySelector('.confirm-btn');
  resultContentItemsEl = document.querySelector('.result-content-items');
  resetBtn = document.querySelector('.reset-btn');
  lotteryCon = document.querySelector('.lottery-contents');
  myLotteryItemEl = document.querySelectorAll('.my-lottery-item');
}

function initEvent() {
  purchaseLotteries();
  buyLotteries();
  createLotteryNumbers();
  createLotteries();
  confirmLotteries();
  // priceInputEl.onkeyup = numberMaxLenChk(priceInputEl);
  priceInputEl.addEventListener('keyup', (numberMaxLenChk(priceInputEl)));
  // reset();
}

const winningAmount = {
  win3: 500,
  win4: 50000,
  win5: 1500000,
  win6: 2000000000,
}

const lotteryPrice = 1000;
const lotteryNumberLimit = 45;
const lotteryMaxLen = 6;
const generateRandomNumber = (maxLen) => Math.floor(Math.random() * maxLen);
let myLotteries;

function numberMaxLenChk(el) {
  if (el.value.length > el.maxLength) {
    el.value = el.value.slice(0, el.maxLength);
    alert(`최대 ${el.maxLength}자리 까지 가능합니다.`);
    return false;
  }
}

function purchaseLotteries() {
  purchaseBtnEl.addEventListener('click', () => {
    buyLotteries(priceInputEl.value);
    bindLotteries(myLotteryItemsEl, myLotteries);
    purchaseBtnEl.disabled = true;
    purchaseBtnEl.classList.add('disabled');
  });
}

function confirmLotteries() {
  confirmBtnEl.addEventListener('click', () => {
    compareLotteries(myLotteries);
    confirmBtnEl.disabled = true;
    confirmBtnEl.classList.add('disabled');
  });
}

const bindLotteries = (el, lotteries) => {
  el.innerHTML = lotteries.map((lottery, i) => {
    return `<li class="my-lottery-item">${lottery.map(lotteryNumber => {
      return `<span class="lottery-number">${lotteryNumber}</span>`
    }).join('')}</li>`;
  }).join('');
}

function buyLotteries(inputPrice) {
  const boughtLotteryCnt = Math.floor(inputPrice / lotteryPrice);
  myLotteries = createLotteries(boughtLotteryCnt);
}

function createLotteryNumbers() {
  let lotteryNumbers = [];
  let numberRange = [];

  for (let i = 0; i < lotteryNumberLimit; i++) {
    numberRange.push(i + 1);
  }

  for (let i = 0; i < lotteryMaxLen; i++) {
    let pickedNumber = numberRange.splice(generateRandomNumber(numberRange.length), 1)[0];
    lotteryNumbers.push(pickedNumber);
  }

  return lotteryNumbers;
}

function createLotteries(boughtLotteryCnt) {
  let lotteries = [];
  for (let i = 0; i < boughtLotteryCnt; i++) {
    lotteries.push(createLotteryNumbers());
  }

  return lotteries;
}

const compareLotteries = (lotteries) => {
  const luckyLottery = createLotteryNumbers();

  bindLotteries(luckyNumberItemsEl, [luckyLottery]);

  const winsTotalCnt = Array.from(new Array(7)).map(() => 0);

  lotteries.forEach((lottery, i) => {
    let wins = 0;
    lottery.forEach((lotteryNumbers, j) => {
      if (luckyLottery.includes(lotteryNumbers)) {
        wins = wins + 1;
        const selectedLotteryEl = myLotteryItemsEl.children[i];
        const selectedLotteryNumberEl = selectedLotteryEl.children[j];

        selectedLotteryNumberEl.classList.add('wins');
      }
    });
    winsTotalCnt[wins] = winsTotalCnt[wins] + 1;
  });

  displayResult(winsTotalCnt);
}

const displayResult = (result) => {
  resultContentItemsEl.innerHTML = `
  <li class="wins-text-title">나의 당첨 통계</li>
  <li class="wins-text">0개 일치 (0원) - ${result[0]}개</li>
  <li class="wins-text">1개 일치 (0원) - ${result[1]}개</li>
  <li class="wins-text">2개 일치 (0원) - ${result[2]}개</li>
  <li class="wins-text">3개 일치 (${winningAmount.win3}원) - ${result[3]}개</li>
  <li class="wins-text">4개 일치 (${winningAmount.win4}원) - ${result[4]}개</li>
  <li class="wins-text">5개 일치 (${winningAmount.win5}원) - ${result[5]}개</li>
  <li class="wins-text">6개 일치 (${winningAmount.win6}원) - ${result[6]}개</li>
`;
}

function reset() {
  resetBtn.addEventListener('click', () => {
    priceInputEl.value = '';
    purchaseBtnEl.disabled = false;
    purchaseBtnEl.classList.remove('disabled');
    confirmBtnEl.disabled = false;
    confirmBtnEl.classList.remove('disabled');
    myLotteryItemEl.forEach((item) => item.remove());
    resultContentItemsEl.toggle();
    luckyNumberItemsEl.toggle();
  });
}