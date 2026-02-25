//Слайдер
let currentSlide = 0;

const sliderElements = {
  slides: () => document.querySelectorAll(".slider__card"),
  dots: () => document.querySelectorAll(".slider__dot"),
  prevBtn: () => document.querySelector(".slider__button--prev"),
  nextBtn: ()=> document.querySelector(".slider__button--next"),
}

function showSlide(index) {
  sliderElements.slides().forEach((slide) => {
    slide.classList.remove("slider__card--active");
  });

  sliderElements.slides()[index].classList.add("slider__card--active");

  sliderElements.dots().forEach((dot) => {
    dot.classList.remove("slider__dot--active");
  });
  sliderElements.dots()[index].classList.add("slider__dot--active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= sliderElements.slides().length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = sliderElements.slides().length - 1;
  }
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

export { showSlide, prevSlide, goToSlide, nextSlide, sliderElements };
