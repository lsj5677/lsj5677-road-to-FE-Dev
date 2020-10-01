const introTitle = document.querySelector(".intro-title h1");
introTitle.innerHTML = introTitle.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".letter",
    translateX: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 800,
    delay: function (e, i) {
      return 200 + 50 * i;
    }
  })
  .add({
    targets: ".letter",
    translateX: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 500,
    delay: function (e, i) {
      return 200 + 50 * i;
    }
  });

TweenMax.to(".intro", 2, {
  delay: 2,
  top: "-100%",
  ease: Expo.easeInOut
});



function scrollEffect() {
  const mainContainer = document.querySelector('.main-container');
  const pageY = pageYOffset / 6;
  console.log(1);
  mainContainer.style.transform = `translateY(-${pageY}px)`;
  mainContainer.style.transition = `transform .8s ease`;
}

document.addEventListener('scroll', scrollEffect);