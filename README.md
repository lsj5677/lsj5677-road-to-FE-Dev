<p align="center">
  <img src="./app/src/img/readme_title.png" alt="readme title image" />
</p>

## # About

> ### [Road to FrontEnd Developer]
>개인 포트폴리오 프로젝트명으로 디자인으로 시작해 UI Developer가 되기 위해 노력한다는 뜻을 담고있습니다. 

![screenshot](./app/src/img/title-screenshot.gif)




#### :memo: Design

---

소통과 창의성이란 뜻을 담고있는 파란색과 성장을 뜻하는 초록색의 배경색 그리고 포인트 컬러로 호기심을 뜻하는 노란색을 사용했습니다. 또한 일러스트를 사용함으로써 밝고 펑키한 느낌을 주었습니다.

#### :memo: Effect

***



스크롤이 내려갈 때마다 배경색이 바뀌는 효과를 주었고, 브라우저의 문서 위치 Y값을 반환하는 pageYOffset(IE호환)과 transition을 사용하여 스크롤이 부드럽게 내려가듯 연출하였습니다. Image Contents들 경우 이미지는 background로 고정되어 있고 가장 최상의 태그가 스크롤에 따라 움직이며 overflow: hidden을 주어 마치 이미지가 올라가고 내려가는 듯한 느낌으로 작업했습니다.

## # Demo
>[Road to FE Developer](https://sjroad.netlify.app/)

## # Page Contents
|Page Link|Description|
|:-----:|------|
|[LV Redesign](https://sjroad.netlify.app/lv.html)| Louis Vuitton Redesign과 함께 html / scss / javascript를 사용하여 작업|
|[Lottery Game](https://sjroad.netlify.app/lottery.html)|Vanilla JavaScript를 사용하여 구매 - 발권 - 당첨통계를 구현|
|[Clock](https://sjroad.netlify.app/clock.html)|Date()를 사용하여 실시간 시간을 받아오고 해당 시간을 이용하여 UI 구현|
|[Landing Page](https://sjroad.netlify.app/landing.html)|랜딩페이지 레이아웃 구현|

## # Stack
### Skills
- HTML ` + HTML5`
- CSS Preprocess ` + SCSS`
- JavaScript ` + ES6`
- jQuery ` + gsap animejs`
---
### UI library
- gsap `TweenMax`
- animejs
---
### Ecosystem
- Webpack
- Package manager `  npm`
- Version Control `  git`
- Hosting ` netlify`
---
### Tools
- Code Editor ` Visual Studio`
- Design Tools `  Photoshop illustrator`

## # Installation
- `npm i` | npm 기반으로 작업이 되었기 때문에 최초 실행 시 install
- `npm run dev` | 실시간 코드 테스트를 위해 로컬에서 실행할 경우 `Project is running at http://localhost:9000/`
- `npm run build` | 배포할 경우

## # Function
##### :memo: 마우스커서 핸들링을 위한 함수
```javascript
function handleCursor() {
  cursorXY();
  hoverEffect();
}
```
##### :memo: menu 및 contact 버튼을 눌렀을 때 실행되는 함수
```javascript
function showHeader() {
  slideRightNavigation();
  slideLeftContact();
}
```
##### :memo: 스크롤 시 실행되는 이벤트들을 모아놓은 함수
```javascript
function scrollEffect() {
  scrollChangeBgColor();
  scrollSlowly();
  upDownImg();
}
```


## # Licence
> MIT
