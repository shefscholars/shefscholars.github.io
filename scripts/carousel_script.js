const carousel = document.getElementById("carousel");
let currentIndex = 0;

function updateCarousel() {
  const totalItems = carousel.children.length;
  const itemWidth = carousel.children[0].offsetWidth;
  const offset = -currentIndex * itemWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

function scrollPrev() {
  const totalItems = carousel.children.length;
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function scrollNext() {
  const totalItems = carousel.children.length;
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

// Ensure the carousel adjusts on window resize
window.addEventListener("resize", updateCarousel);
