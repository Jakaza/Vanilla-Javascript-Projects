
const searhForm = document.querySelector('.search-box');
const cityName = document.querySelector('#name');
const degress = document.querySelector('.s');
const currentDate = document.querySelector('#currentDate');
const temp = document.querySelector('#temp');
const humi = document.querySelector('#humi');
const weather = document.querySelector('#weather');
const tempRange = document.querySelector('#temprange');
const searchBtn = document.getElementById('search');


const weatherInfor = document.querySelector('.weather');
const loading = document.querySelector('.loading-container');


let httpSearch = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
let httpLocation = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

const apiKey = 'ac5587e23267ee787e4d451fefd6d82a';

searhForm.addEventListener('submit', function getWeather(el) {

    el.preventDefault();

})

function success(response) {

    let { latitude, longitude } = response.coords;

    getLocation(latitude, longitude);
}

function error(error) {

    console.log(error);
}

navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
})


async function getLocation(lat, lon) {

    try {

        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ac5587e23267ee787e4d451fefd6d82a`);

        let data = await response.json();

        console.log(data);

        display(data);
        loading.style.display = 'none';
        weatherInfor.style.display = 'block';

        // setTimeout(()=>{

        //    loading.style.display = 'none';
        //    weatherInfor.style.display = 'block';
        // }, 1000)

    } catch (error) {

        console.log(error);
    }

}

async function searchCity(city) {


    let http = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    let res = await fetch(http);
    let data = await res.json();

    display(data);

    loading.style.display = 'none';
    weatherInfor.style.display = 'block';

    console.log(data);
}


searchBtn.addEventListener('click', function () {

    city = cityName.value;

    if (city) {

        searchCity(city);
    }


})

// searchCity('Pretoria');














// window.addEventListener('DOMContentLoaded', getLocation);

function display(data) {

    let { humidity, pressure, temp_max, temp_min, feels_like } = data.main;
    let name = data.name;

    // let d = Date().split(" ");

    // currentDate.innerHTML = `${d[0]} , ${d[2]} ${d[0]} ${d[3]}`

    cityName.innerHTML = name;
    humi.innerHTML = humidity;
    temp.innerHTML = temp_max;
    degress.innerHTML = '<h1>' + degrees(data) + '</h1>';
    tempRange.innerHTML = Math.round(temp_max - temp_min);
    weather.innerHTML = data.weather[0].description;



}

function degrees(data) {
    return Math.floor(data.main.feels_like - 273.15);
}


