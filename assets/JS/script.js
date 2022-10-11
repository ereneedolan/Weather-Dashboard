// DEPENDENCIES (DOM ELEMENTS)

// DATA / STATE

var apiKey = "fe8de900e4d58555c4e94cd5616c4b3d";
var city = "";

// FUNCTIONS

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)

// USER INTERACTIONS
// A user can click...
// a user can search for a city to determine a 5 day forecast for that location
    // once a user searches for a city it is stored in local storage 

// INITIALIZATION