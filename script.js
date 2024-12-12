"use strict";
const weatherBlock = document.querySelector('#weather');
const cityInput = document.querySelector('#cityInput');

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
            weatherBlock.innerHTML = responseResult.message || "City not found";
        }
    } catch (error) {
        weatherBlock.innerHTML = "Error fetching weather data.";
    }
}

cityInput.addEventListener('change', function() {
    loadWeather(this.value);
});

loadWeather(cityInput.value);

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
        <div class="weather__temp">${temp}°C</div>
        <div class="weather__feels-like">Feels like: ${feelsLike}°C</div>`;
    weatherBlock.innerHTML = template;
}



/* _____________________________________________________________________________ */


const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

let btn = document.querySelector(".button");
let randomBtn = document.querySelector("#random-comment"); 
let nameInput = document.querySelector("#name-input");
let textArea = document.querySelector("#comment-text");
let commentsList = document.querySelector("#comments-list");
 
function generateRandomComment() {
    const names = ["Анастасія", "Олександр", "Іван", "Марія", "Петро"];
    const comments = [
        "Це чудово!",
        "Мені дуже подобається!",
        "Дякую за інформацію!",
        "Це не зовсім те, що я очікував.",
        "Я б хотів побачити більше таких матеріалів."
    ];

    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomComment = comments[Math.floor(Math.random() * comments.length)];

    return { name: randomName, comment: randomComment };
}

btn.addEventListener("click", function () {
    setTimeout(() => {
        let name = nameInput.value.trim(); 
        let comment = textArea.value.trim(); 
        if (name !== "" && comment !== "") {
            addComment(name, comment);
            nameInput.value = "";
            textArea.value = "";
        }
    }, 1000);
});



setTimeout(function () {
    const { name, comment } = generateRandomComment();
    addComment(name, comment);
}, 20000);

function addComment(name, comment) {
    let commentBlock = document.createElement('div');
    commentBlock.classList.add('comment-block'); 

    let nameElement = document.createElement('p');
    nameElement.textContent = `Ім'я: ${name}`;
    nameElement.style.color = "red";
 
    let commentArt = document.createElement('span');
    commentArt.textContent = `Коментар:`;
    commentArt.style.color = "red";

    let commentElement = document.createElement('p');
    commentElement.textContent = comment;

    commentBlock.appendChild(nameElement);
    commentBlock.appendChild(commentArt);
    commentBlock.appendChild(commentElement);
    commentsList.appendChild(commentBlock);
}




setTimeout(function () {
    const { name, comment } = generateRandomComment();
    addComment(name, comment);
}, 40000);

function addComment(name, comment) {
    let commentBlock = document.createElement('div');
    commentBlock.classList.add('comment-block'); 

    let nameElement = document.createElement('p');
    nameElement.textContent = `Ім'я: ${name}`;
    nameElement.style.color = "red";
 
    let commentArt = document.createElement('span');
    commentArt.textContent = `Коментар:`;
    commentArt.style.color = "red";

    let commentElement = document.createElement('p');
    commentElement.textContent = comment;

    commentBlock.appendChild(nameElement);
    commentBlock.appendChild(commentArt);
    commentBlock.appendChild(commentElement);
    commentsList.appendChild(commentBlock);
}



setTimeout(function () {
    const { name, comment } = generateRandomComment();
    addComment(name, comment);
}, 60000);

function addComment(name, comment) {
    let commentBlock = document.createElement('div');
    commentBlock.classList.add('comment-block'); 

    let nameElement = document.createElement('p');
    nameElement.textContent = `Ім'я: ${name}`;
    nameElement.style.color = "red";
 
    let commentArt = document.createElement('span');
    commentArt.textContent = `Коментар:`;
    commentArt.style.color = "red";

    let commentElement = document.createElement('p');
    commentElement.textContent = comment;

    commentBlock.appendChild(nameElement);
    commentBlock.appendChild(commentArt);
    commentBlock.appendChild(commentElement);
    commentsList.appendChild(commentBlock);
}



setTimeout(function () {
    const { name, comment } = generateRandomComment();
    addComment(name, comment);
}, 80000);

function addComment(name, comment) {
    let commentBlock = document.createElement('div');
    commentBlock.classList.add('comment-block'); 

    let nameElement = document.createElement('p');
    nameElement.textContent = `Ім'я: ${name}`;
    nameElement.style.color = "red";
 
    let commentArt = document.createElement('span');
    commentArt.textContent = `Коментар:`;
    commentArt.style.color = "red";

    let commentElement = document.createElement('p');
    commentElement.textContent = comment;

    commentBlock.appendChild(nameElement);
    commentBlock.appendChild(commentArt);
    commentBlock.appendChild(commentElement);
    commentsList.appendChild(commentBlock);
}



setTimeout(function () {
    const { name, comment } = generateRandomComment();
    addComment(name, comment);
}, 100000);

function addComment(name, comment) {
    let commentBlock = document.createElement('div');
    commentBlock.classList.add('comment-block'); 

    let nameElement = document.createElement('p');
    nameElement.textContent = `Ім'я: ${name}`;
    nameElement.style.color = "red";
 
    let commentArt = document.createElement('span');
    commentArt.textContent = `Коментар:`;
    commentArt.style.color = "red";

    let commentElement = document.createElement('p');
    commentElement.textContent = comment;

    commentBlock.appendChild(nameElement);
    commentBlock.appendChild(commentArt);
    commentBlock.appendChild(commentElement);
    commentsList.appendChild(commentBlock);
}



setTimeout(function () {
    const { name, comment } = generateRandomComment();
    addComment(name, comment);
}, 120000);

function addComment(name, comment) {
    let commentBlock = document.createElement('div');
    commentBlock.classList.add('comment-block'); 

    let nameElement = document.createElement('p');
    nameElement.textContent = `Ім'я: ${name}`;
    nameElement.style.color = "red";
 
    let commentArt = document.createElement('span');
    commentArt.textContent = `Коментар:`;
    commentArt.style.color = "red";

    let commentElement = document.createElement('p');
    commentElement.textContent = comment;

    commentBlock.appendChild(nameElement);
    commentBlock.appendChild(commentArt);
    commentBlock.appendChild(commentElement);
    commentsList.appendChild(commentBlock);
}
