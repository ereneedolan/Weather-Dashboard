// DEPENDENCIES (DOM ELEMENTS)

// DATA / STATE

//moment.js format: moment().format('L');

var searchBtn = $("#search-button") //document.getElementById("search-button")

searchBtn.on("click", searchCity)
//need to store searchCity history in local storage and display search history


function createItem(city) {
    var cities = JSON.parse(localStorage.getItem("cities"))||[]
    cities.push(city)
	localStorage.setItem('cities', JSON.stringify(cities)); 
    var searchHistoryEl = $("#search-history")
        var historyItem = $("<button>").text(city).addClass("btn").on("click", function(event){
        currentDayForecast(event.target.textContent)    
        })
        searchHistoryEl.append(historyItem)
} 

function getValue() {
	var cities = JSON.parse(localStorage.getItem("cities"))||[]
    cities.forEach(function(city,i){
        var searchHistoryEl = $("#search-history")
        var historyItem = $("<button>").text(city).addClass("btn").on("click", function(event){
        currentDayForecast(event.target.textContent)    
        })
        searchHistoryEl.append(historyItem)
    })
} 
getValue()


// FUNCTIONS

function searchCity() {
    var city = $("#search-input").val(); 
    createItem(city)
    currentDayForecast(city)
}
function currentDayForecast(city){
    var APIKey = "fe8de900e4d58555c4e94cd5616c4b3d";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    fetch(queryURL)
    .then(function (res){
        return res.json()
    })
    .then(function (data){
        document.querySelector("#city-name").textContent = city
        temperature.textContent = data.main.temp
        wind.textContent = data.wind.speed
        humidity.textContent = data.main.humidity
        document.querySelector("#UV-index").textContent=0
        console.log(data)
        fiveDayForecast(data.coord.lat, data.coord.lon)
    })
}
function fiveDayForecast(lat,lon){
    console.log(lat, lon)
    var APIKey = "fe8de900e4d58555c4e94cd5616c4b3d";
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
        var iconurl = "http://openweathermap.org/img/w/" + daily.weather[0].icon + ".png";
        allDays[i/8].innerHTML = `
        <h3>${moment(daily.dt_txt).format('L')}</h3>
        <img src="${iconurl}"></img>
        <p>Temp: ${daily.main.temp}</p>
        <p>Wind: ${daily.wind.speed}</p>
        <p>Humidity: ${daily.main.humidity}</p>
        `
    }
        
    })
}

// USER INTERACTIONS
// A user can click...
// a user can search for a city to determine a 5 day forecast for that location
    // once a user searches for a city it is stored in local storage 

// INITIALIZATION