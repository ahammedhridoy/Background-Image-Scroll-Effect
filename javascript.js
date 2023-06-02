const bgImg = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

const updateImage = () => {
  bgImg.style.opacity = 1 - window.pageYOffset / 900;
  bgImg.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
};
