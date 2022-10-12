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
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
.then(function (res){
    return res.json()
})
.then(function (data){
    temperature.text.content = data.content
    wind.text.content = data.content
    humidity.text.content = data.content
    //console.log(data)
})
}

function fiveDayForecast(data){
    var APIKey = "fe8de900e4d58555c4e94cd5616c4b3d";
    var city = "Detroit";
    var queryURL = "api.openweathermap.org/data/2.5/forecast?lat="+lat+"lon="+lon+"&appid=" + APIKey;
    fetch(queryURL)
    .then(function (res){
    return res.json()
    })
    .then(function (data){
        temperature.text.content = data.content
        wind.text.content = data.content
        humidity.text.content = data.content
  
    })
}

// USER INTERACTIONS
// A user can click...
// a user can search for a city to determine a 5 day forecast for that location
    // once a user searches for a city it is stored in local storage 

// INITIALIZATION