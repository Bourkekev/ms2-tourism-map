const dublinCity = 2964574;
let city = "Dublin";
let countryCode = "IE";

const apiKey = "4adecede8cc646766529fd7932ba0555";
let tempUnits = "units=metric";
let cityInput = document.getElementById("city");
//set cityCountry to the inputted value
let cityCountry = document.getElementById("city").value;
// API url for Dublin by ID
// const baseURLByID = `http://api.openweathermap.org/data/2.5/weather?id=${dublinCity}&${tempUnits}&appid=${apiKey}`;
//API url forecast for Dublin by coordinates
const baseURLByCoords = `https://api.openweathermap.org/data/2.5/onecall?lat=53.350140&lon=-6.264155&${tempUnits}&exclude=minutely,hourly&appid=4adecede8cc646766529fd7932ba0555`;

let baseURL;

// Simulate button click on enter
cityInput.addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("get-weather").click();
    }
  });

// without type
function getData(callBack) {
    let xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callBack(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL);
    xhr.send();
}

// Write to DOM on click
function writeToDocument() {
    cityCountry = document.getElementById("city").value;
    // got the following regex to check if all numbers from https://www.w3resource.com/javascript/form/all-numbers.php
    const numbers = /^[0-9]+$/;
    if (cityCountry.match(numbers)){
        cityCountry = Number(cityCountry);
    }
    if(cityCountry == ""){
        alert("Nothing submitted");
    }
    else if(typeof(cityCountry)=="string"){
        baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityCountry}&${tempUnits}&appid=${apiKey}`;
        getData( function(data) {
            //console.dir(data);
            
            let cityEl = document.getElementById("dynamic-weather-data");
            let cityName = data.name;
            let cityWeath = data.weather[0].main;
            let weathIcon = data.weather[0].icon;
            let weathTemp = Math.round(data.main.temp);
            let feelsTemp = Math.round(data.main.feels_like);
            cityEl.innerHTML = `<div class="container">
                                    <div class="row">
                                        <div class="col city-name">Weather for ${cityName}</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-5 weather-icon">
                                            <img src="http://openweathermap.org/img/wn/${weathIcon}@2x.png" alt="weather icon" />
                                            <div class="weather-text">${cityWeath}</div>
                                        </div>
                                        <div class="col-7">
                                            <div class="temp">${weathTemp}&#8451;</div>
                                            <div class="feels-like">Feels like ${feelsTemp}&#8451;</div>
                                        </div>
                                    </div>
                                </div>`
        });
    } else if (typeof(cityCountry)=="number"){
        alert("That is a number, please type a city");
    } else if (typeof(cityCountry)=="undefined"){
       alert("Nothing submitted"); 
    }
}

// Get date and Dublin weather on page load
document.addEventListener("DOMContentLoaded", function() {
    displayDubWeath();
    displayDate();
 });
  
 function displayDubWeath() {
    let dubEl = document.getElementById("dublin-weather-data");
    let dubElFore = document.getElementById("dublin-forecast-data");
    //Set api url to city by coords
    baseURL = baseURLByCoords;
    getData( function(data) {
        
        let dubName = "Dublin";
        let dubWeath = data.current.weather[0].main;
        let dubIcon = data.current.weather[0].icon;
        let dubTemp = Math.round(data.current.temp);
        let feelsTemp = Math.round(data.current.feels_like);
        dubEl.innerHTML = `<div class="container">
                                <div class="row">
                                    <div class="col city-name">Weather for ${dubName}</div>
                                </div>
                                <div class="row">
                                    <div class="col-5 weather-icon">
                                        <img src="http://openweathermap.org/img/wn/${dubIcon}@2x.png" alt="weather icon" />
                                        <div class="weather-text">${dubWeath}</div>
                                    </div>
                                    <div class="col-7">
                                        <div class="temp">${dubTemp}&#8451;</div>
                                        <div class="feels-like">Feels like ${feelsTemp}&#8451;</div>
                                    </div>
                                </div>
                            </div>`
        //Forecast data 1 day. Need to skip over [0] as is also today
        let forecastWeath = data.daily[1].weather[0].main;
        let forecastIcon = data.daily[1].weather[0].icon;
        let forecastTemp = Math.round(data.daily[1].temp.day);
        //2 days
        let forecastWeath2 = data.daily[2].weather[0].main;
        let forecastIcon2 = data.daily[2].weather[0].icon;
        let forecastTemp2 = Math.round(data.daily[2].temp.day);
        //convert unix time to readable - reference https://coderrocketfuel.com/article/convert-a-unix-timestamp-to-a-date-in-vanilla-javascript
        const unixTimestamp = data.daily[2].dt;
        const milliseconds = unixTimestamp * 1000;
        const dateObject = new Date(milliseconds);
        const humanDateFormat = dateObject.toLocaleString("en-US", {weekday: "long"});

        dubElFore.innerHTML = `<div class="container">
                                <div class="row">
                                    <div class="col-4 forecast">
                                        <span>Tomorrow</span>
                                    </div>
                                    <div class="col-2 forecast-icon">
                                        <img src="http://openweathermap.org/img/wn/${forecastIcon}@2x.png" alt="weather icon" />
                                    </div>
                                    <div class="col-4 weather-text forecast">
                                        ${forecastWeath}
                                    </div>
                                    <div class="col-2">
                                        <div class="temp-forcast">${forecastTemp}&#8451;</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4 forecast">
                                        <span>${humanDateFormat}</span>
                                    </div>
                                    <div class="col-2 forecast-icon">
                                        <img src="http://openweathermap.org/img/wn/${forecastIcon2}@2x.png" alt="weather icon" />
                                    </div>
                                    <div class="col-4 weather-text forecast">
                                        ${forecastWeath2}
                                    </div>
                                    <div class="col-2">
                                        <div class="temp-forcast">${forecastTemp2}&#8451;</div>
                                    </div>
                                </div>
                            </div>`
    });
 }
 // get and format current date
 function displayDate(){
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateEl = document.getElementById("current-date");
    let now = new Date();
    let formatted_date = now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();
    dateEl.innerText = formatted_date;
 }

 /* jQuery */
 $(document).ready(function() {
      /* BS tooltip */
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
    //show more weather widget
    $(".more-weather-link").click(function() {
        $("#more-weather").toggle(500);
    });
    $(".less-weather-link").click(function() {
        $("#more-weather").toggle(500);
    });

    $('#open-notes').on('click', function(){
        $('#take-notes').toggleClass('opened');
    });
    
});