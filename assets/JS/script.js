// DEPENDENCIES (DOM ELEMENTS)
//console.log("Hello")
// DATA / STATE

var searchBtn = $("#search-button") //document.getElementById("search-button")

searchBtn.on("click", searchCity)
//need to store searchCity history in local storage and display search history


// function createItem() {
// 	localStorage.setItem('nameOfItem', 'value'); 
// } 
// createItem() // Creates a item named 'nameOfItem' and stores a value of 'value'

// function getValue() {
// 	return localStorage.getItem('nameOfItem');  
// } // Gets the value of 'nameOfItem' and returns it
// console.log(getValue()); //'value';



// FUNCTIONS

function searchCity() {
var APIKey = "fe8de900e4d58555c4e94cd5616c4b3d";
var city = "Detroit";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
fetch(queryURL)
.then(function (res){
    return res.json()
})
.then(function (data){
    temperature.textContent = data.main.temp
    wind.textContent = data.wind.speed
    humidity.textContent = data.main.humidity
    console.log(data)
    fiveDayForecast(data.coord.lat, data.coord.lon)
})
}

function fiveDayForecast(lat,lon){
    console.log(lat, lon)
    var APIKey = "fe8de900e4d58555c4e94cd5616c4b3d";
    var city = "Detroit";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&units=imperial&appid="+APIKey+"";
    fetch(queryURL)
    .then(function (res){
    return res.json()
    })
    .then(function (data){
    
        for( i=0; i < data.list.length; i+=8 ){
            var daily = data.list[i]
            console.log(daily)
        var allDays = document.querySelectorAll(".fiveDay")
        allDays[i/8].textContent= daily.main.temp
    }
        
    })
}

// USER INTERACTIONS
// A user can click...
// a user can search for a city to determine a 5 day forecast for that location
    // once a user searches for a city it is stored in local storage 

// INITIALIZATION