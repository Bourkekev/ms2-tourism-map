let dublinCity = 2964574;
let city = "Dublin";
let countryCode = "IE";

const apiKey = "4adecede8cc646766529fd7932ba0555";
let tempUnits = "units=metric";
let cityInput = document.getElementById("city");
//set cityCountry to the inputted value
let cityCountry = document.getElementById("city").value;
// API url for Dublin by ID
const baseURLByID = `http://api.openweathermap.org/data/2.5/weather?id=${dublinCity}&${tempUnits}&appid=${apiKey}`;

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

    //xhr.open("GET", baseURL + type + "/");
    xhr.open("GET", baseURL);
    xhr.send();
}

// Test inputted value
function weatherInputOf(cityCountry){
    if(typeof(cityCountry)=="string"){
        return cityCountry;
    } else if (typeof(cityCountry)=="number"){
        alert("Error, that is a number");
    } else if (typeof(cityCountry)=="undefined"){
       alert("Nothing submitted"); 
    }
}

// Write to DOM on click
function writeToDocument() {
    cityCountry = document.getElementById("city").value;
    // got the following regex from https://www.w3resource.com/javascript/form/all-numbers.php
    const numbers = /^[0-9]+$/;
    if (cityCountry.match(numbers)){
        console.log("Is only numbers");
        cityCountry = Number(cityCountry);
    } else {
        console.log(typeof(cityCountry));
    }
    
    if(cityCountry == ""){
        alert("Nothing submitted");
    }
    else if(typeof(cityCountry)=="string"){
        baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityCountry}&${tempUnits}&appid=${apiKey}`;
        getData( function(data) {

            let weather = data.weather;
            weather.forEach(function(item){
                //document.getElementById("weather-data").innerHTML = "Weather for " + city + item.sys.country + ": " + item.main;

            });
            
            document.getElementById("dynamic-weather-data").innerHTML = "<p>Weather for " + data.name + ", " + data.sys.country + ": " + data.weather[0].main + "</p>";
            document.getElementById("dynamic-weather-data").innerHTML += "<p>Temperature is: " + data.main.temp + " Celcius</p>";
            
            //document.getElementById("weather-data").innerHTML = "Temperature is: " + data.main.temp;
            console.dir(data);
        });
    } else if (typeof(cityCountry)=="number"){
        alert("Error, that is a number");
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
    //Set api url to city by ID
    baseURL = baseURLByID;
    getData( function(data) {
        
        let dubName = data.name;
        let dubWeath = data.weather[0].main;
        //let dubIcon = data.weather[0].icon;
        let dubTemp = Math.round(data.main.temp);
        dubEl.innerHTML = `<div>Weather for ${dubName}</div>
                                <div>${dubWeath}</div>
                                <div>${dubTemp}&#8451;</div>`
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
// show more weather options
 function showMoreWeather(){
    let moreBtn = document.getElementById("more-weather");
    moreBtn.classList.toggle('hidden');
    moreBtn.classList.toggle('shown');
 }
 // show more weather options
 function showLessWeather(){
    let lessBtn = document.getElementById("more-weather");
    lessBtn.classList.toggle('hidden');
    lessBtn.classList.toggle('shown');
 }