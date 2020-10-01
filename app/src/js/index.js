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

const scrollImgBoxes = document.querySelectorAll('.scroll-img-box');
const chkScrollImg = () => {
  scrollImgBoxes.forEach((scrollImgBox) => {
    const scrollContentsItem = scrollImgBox.parentElement;
    const scrollImg = scrollImgBox.children[0].children[0];
    const scrollAt = window.scrollY + window.innerHeight > scrollContentsItem.offsetTop;

    if (scrollAt) {
      const pointY = window.scrollY + window.innerHeight - scrollContentsItem.offsetTop;
      const calcPoint = 2 - (pointY + scrollImg.clientHeight / 2) / scrollImg.clientHeight;

      scrollImgBox.style.transform = `translate3d(0, ${calcPoint * 90}px, 0)`;
    }
  });
}

window.addEventListener('scroll', chkScrollImg);