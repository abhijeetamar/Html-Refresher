// HERO IMAGE SLIDER
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("hero-img").src = images[index];
}, 3000);

// HAMBURGER MENU
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
