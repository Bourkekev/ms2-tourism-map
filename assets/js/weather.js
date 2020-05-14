//let city = 2964574;
let city = "Dublin";
let countryCode = "IE";
//let cityCountry = "Dublin, IE";
const apiKey = "4adecede8cc646766529fd7932ba0555";
let tempUnits = "units=metric";
let cityInput = document.getElementById("city");
//set cityCountry to the inputted value
let cityCountry = document.getElementById("city").value;

const baseURLByID = `http://api.openweathermap.org/data/2.5/weather?id=${city}&${tempUnits}&appid=${apiKey}`;
//const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&${tempUnits}&appid=${apiKey}`;
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

// Write to DOM (without type)
function writeToDocument() {
    cityCountry = document.getElementById("city").value;
    baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityCountry}&${tempUnits}&appid=${apiKey}`;
    console.log(cityCountry);
    getData( function(data) {

        let weather = data.weather;
        weather.forEach(function(item){
            //document.getElementById("weather-data").innerHTML = "Weather for " + city + item.sys.country + ": " + item.main;

        });
        
        document.getElementById("weather-data").innerHTML = "<p>Weather for " + data.name + ", " + data.sys.country + ": " + data.weather[0].main + "</p>";
        document.getElementById("weather-data").innerHTML += "<p>Temperature is: " + data.main.temp + " Celcius</p>";
        
        //document.getElementById("weather-data").innerHTML = "Temperature is: " + data.main.temp;
        console.dir(data);
    });
}