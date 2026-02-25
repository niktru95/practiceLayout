//Слайдер
let currentSlide = 0;
const slides = document.querySelectorAll(".slider__card");
const dots = document.querySelectorAll(".slider__dot");

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("slider__card--active");
  });

  slides[index].classList.add("slider__card--active");

  dots.forEach((dot) => {
    dot.classList.remove("slider__dot--active");
  });
  dots[index].classList.add("slider__dot--active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

export { showSlide, prevSlide, goToSlide, nextSlide };
