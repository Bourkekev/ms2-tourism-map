//let city = 2964574;
let city = "Dublin";
let countryCode = "IE";
let cityCountry = "Dublin, IE"
const apiKey = "4adecede8cc646766529fd7932ba0555";
let tempUnits = "units=metric";
const baseURLByID = `http://api.openweathermap.org/data/2.5/weather?id=${city}&${tempUnits}&appid=${apiKey}`;
//const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&${tempUnits}&appid=${apiKey}`;
const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityCountry}&${tempUnits}&appid=${apiKey}`;

let input;

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

// without type
function writeToDocument() {
    getData( function(data) {

        let weather = data.weather;
        weather.forEach(function(item){
            //document.getElementById("weather-data").innerHTML = "Weather for " + city + item.sys.country + ": " + item.main;

        });
        //set cityCountry to the inputted value
        //= document.getElementById("city").select();
        cityCountry = document.getElementById("city").select();

        document.getElementById("weather-data").innerHTML = "<p>Weather for " + data.name + ", " + data.sys.country + ": " + data.weather[0].main + "</p>";
        document.getElementById("weather-data").innerHTML += "<p>Temperature is: " + data.main.temp + " Celcius</p>";
        
        //document.getElementById("weather-data").innerHTML = "Temperature is: " + data.main.temp;
        console.dir(data);
    });
}