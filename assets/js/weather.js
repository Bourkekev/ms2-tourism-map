  
let xhr = new XMLHttpRequest();
// This number is Dublin ID
let city = 2072525;
let apiKey = "4adecede8cc646766529fd7932ba0555";
let weatherData;

xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`);
xhr.send();

// use this function to get the data out of onreadystate
function setWeatherData(jsonData) {
    weatherData = jsonData;
    console.log(weatherData);
    document.getElementById("weather-data").innerHTML = weatherData;
}
//onreadystatechange
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        setWeatherData(JSON.parse(this.responseText));
    }
};