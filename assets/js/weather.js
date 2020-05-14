let city = 2072525;
const apiKey = "4adecede8cc646766529fd7932ba0555";
let tempUnits = "units=metric";
const baseURL = `http://api.openweathermap.org/data/2.5/weather?id=${city}&${tempUnits}&appid=${apiKey}`;


// function getData(type, callBack) {
//     let xhr = new XMLHttpRequest();
    
//     xhr.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             callBack(JSON.parse(this.responseText));
//         }
//     };

//     //xhr.open("GET", baseURL + type + "/");
//     xhr.open("GET", baseURL + "/");
//     xhr.send();
// }

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

// function writeToDocument() {
//     getData(type, function(data) {
//         document.getElementById("weather-data").innerHTML = data;
//     });
// }

// without type
function writeToDocument() {
    getData( function(data) {
        document.getElementById("weather-data").innerHTML = "Temperature is: " + data.main.temp;
        console.log(data.main.temp);
    });
}


//console.log(weatherData);