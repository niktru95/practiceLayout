import { nextSlide, prevSlide, goToSlide, showSlide } from "../utils/slider.js";
import getWeather from "../utils/wheather.js";

const prevBtn = document.querySelector(".slider__button--prev");
const nextBtn = document.querySelector(".slider__button--next");
const dots = document.querySelectorAll(".slider__dot");

document.addEventListener("DOMContentLoaded", function () {
  if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
  });

  showSlide(0);
});

document.addEventListener("DOMContentLoaded", () => {
  getWeather();
});