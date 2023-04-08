// const url = 'https://api.openweathermap.org/data/2.5/';
// const key = 'e110a610c763b0d71025504ceb6f1592';

// const searchBar = document.getElementById('searchBar');
// // console.log(searchBar);

// const setQuery = (e) => {
//     // console.log(e.keyCode);
//     if(e.keyCode == 13){
//         getResult(searchBar.value);
//     }
// };

// const getResult = (cityName) => {
//     // console.log(cityName);

//     let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
//     // console.log(query);

//     fetch(query)
//     .then(res => {
//         return res.json()
//     })
//     .then(displayResult);
// };

// const displayResult = (result) => {
//     console.log(result);

//     let city = document.querySelector('.city');
//     city.innerText = `${result.name}, ${result.sys.country}`;

//     let temp = document.querySelector('.temp');
//     temp.innerText = `${Math.round(result.main.temp)}°C`;

//     let desc = document.querySelector('.desc');
//     desc.innerText = `${result.weather[0].description}`;

//     let minmax = document.querySelector('.minmax');
//     minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`; 
// }


// searchBar.addEventListener('keypress', setQuery);


const API_URL = 'https://api.openweathermap.org/data/2.5/';
const key = 'e110a610c763b0d71025504ceb6f1592';


const setQuery = (e) => {
    if(e.keyCode == 13){
        getResult(searchBar.value);
    }
}

const getResult = (cityName) => {
    // console.log(cityName);

    let query = `${API_URL}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;

    // console.log(query);

    fetch(query)
    .then(res => {
        return res.json();
    })
    .then(displayResult);
};


const displayResult = (result) => {
    console.log(result);

    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = `${result.weather[0].description}`;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);