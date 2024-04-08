"use strict";
const weatherBlock = document.querySelector('#weather');
const citySelect = document.querySelector('#citySelect');

async function loadWeather(city = 'Kyiv') {
    weatherBlock.innerHTML = `
    <div class="weather__loading">
        <img src="img/loading.gif" alt="Loading...">
    </div>`;

    const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=522f7ec766b55c89fccbc47a4e7a72c0`;
    try {
        const response = await fetch(server);
        const responseResult = await response.json();

        if (response.ok) {
            getWeather(responseResult);
        } else {
            weatherBlock.innerHTML = responseResult.message;
        }
    } catch (error) {
        weatherBlock.innerHTML = "Помилка при отриманні даних про погоду.";
    }
}

citySelect.addEventListener('change', function() {
    loadWeather(this.value);
});

loadWeather(citySelect.value);

function getWeather(data) {
    console.log(data);
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;
    const template = `
        <div class="weather__header">
            <div class="weather__main">
                <div class="weather__city">${location}</div>
                <div class="weather__status">${weatherStatus}</div>
            </div>
        </div>
        <div class="weather__icon">
            <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
        </div>
        <div class="weather__temp">${temp}</div>
        <div class="weather__feels-like">Feels like: ${feelsLike}</div>`;
    weatherBlock.innerHTML = template;
}

if (weatherBlock) {
    loadWeather();
}