//set cityCountry to the inputted value

function weatherInputOf(cityCountry){
    if(typeof(cityCountry)=="string"){
        return cityCountry;
    } else if (typeof(cityCountry)=="number"){
        return "Error, that is a number";
    } else if (typeof(cityCountry)=="undefined"){
       alert("Nothing submitted"); 
    }
}