//set cityCountry to the inputted value

function weatherInputOf(cityCountry){
    if(typeof(cityCountry)=="string"){
        return cityCountry;
    } else {
        return "Error";
    }
    
}