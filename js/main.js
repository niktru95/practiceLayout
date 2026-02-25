import { nextSlide, prevSlide, goToSlide, showSlide, sliderElements } from "../utils/slider.js";
import getWeather from "../utils/wheather.js";


document.addEventListener("DOMContentLoaded", function () {
  if (sliderElements.nextBtn()) {
    sliderElements.nextBtn().addEventListener("click", nextSlide);
  }

  if (sliderElements.prevBtn()) {
    sliderElements.prevBtn().addEventListener("click", prevSlide);
  }

  sliderElements.dots().forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
  });

  showSlide(0);
});

document.addEventListener("DOMContentLoaded", () => {
  getWeather();
});