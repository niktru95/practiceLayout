import { nextSlide, prevSlide, goToSlide, showSlide, sliderElements } from "../utils/slider.js";
import getWeather from "../utils/weather.js";

document.addEventListener("DOMContentLoaded", function () {
  sliderElements.nextBtn()?.addEventListener("click", nextSlide);
  sliderElements.prevBtn()?.addEventListener("click", prevSlide);
  sliderElements.dots().forEach((dot, i) => dot.addEventListener("click", () => goToSlide(i)));
  showSlide(0);
  
  getWeather();
});