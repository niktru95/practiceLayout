//Погода
const cityName = "Москва";
const API_KEY = "4d5af87bcda16aa87221464394b5ab37";

const temperatureElement = document.querySelector(".weather__temperature");
const descriptionElement = document.querySelector(".weather__description");
const sealvlElement = document.querySelector(".weather__sealvl");
const nameCityElement = document.querySelector(".weather__city-name");

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
      console.log(`Произошла ошибка ${error}`);
      temperatureElement.textContent = "Город не найден";
      descriptionElement.textContent = "Нет данных";
      sealvlElement.textContent = "Нет данных по уровню моря";
    });
}

export default getWeather;