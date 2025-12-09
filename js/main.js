
//Слайдер
let currentSlide = 0;
const slides = document.querySelectorAll(".news-card");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[index].classList.add("active");
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

document.addEventListener("DOMContentLoaded", function () {
  nextBtn.addEventListener("click", nextSlide);

  prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
  });

  showSlide(0);
});

//Погода

const cityName = "Москва";
const API_KEY = "4d5af87bcda16aa87221464394b5ab37";

const temperatureElement = document.querySelector(".temperature");
const descriptionElement = document.querySelector(".description");
const sealvlElement = document.querySelector(".sealvl");
const nameCityElement = document.querySelector(".city-name");

function getWeather() {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=ru`;
  temperatureElement.textContent = "Загрузка...";
  descriptionElement.textContent = "";
  sealvlElement.textContent = "";

fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      temperatureElement.textContent = Math.round(data.main.temp) + "°C";
      descriptionElement.textContent = data.weather[0].description;
      const sealvl = data.main.sea_level;
      sealvlElement.textContent = `Уровень моря: ${sealvl} м`;
      const nameCity = data.name;
      nameCityElement.textContent = `Погода в городе ${nameCity}`;
    })
    .catch((error) => {
      console.log(`Произошла ошибка ${error}`)
      temperatureElement.textContent = "Город не найден";
      descriptionElement.textContent = "Нет данных";
      sealvlElement.textContent = "Нет данных по уровню моря";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  getWeather();
});