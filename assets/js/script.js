//set variables
var searchBar = document.getElementById("searchBar");
var searchButton = document.getElementById("searchButton");
var forecastCurrent = document.getElementById("forecastCurrent");
var forecastFiveDay = document.getElementById("forecastFiveDay");

// API URL
//use variables to replace lat and lon coordinates as need-be
//  https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=555087710ae08746e0d97fc1d0675bcf

function getWeatherData() {
    var geocodingAPI = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchBar.value + "&limit=1&appid=555087710ae08746e0d97fc1d0675bcf";
    fetch(geocodingAPI)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            //log data for debug purposes
            console.log(data);
            //get coordinates
            var lat = data[0].lat;
            var lon = data[0].lon;
            //get weather data with main API
            var fiveDayAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=555087710ae08746e0d97fc1d0675bcf";
            fetch(fiveDayAPI)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    //log data for debug purposes
                    console.log(data);
                    //city name
                    var city = document.createElement("h2");
                    city.textContent = data.city.name;
                    forecastCurrent.appendChild(city);
                    //create list for forecast data, then get data and append to list
                    var currentForecastList = document.createElement("ul");
                    forecastCurrent.appendChild(currentForecastList);
                    //temperature
                    var temp = document.createElement("li");
                    temp.textContent = data.list[3].main.temp + " ℉";
                    currentForecastList.appendChild(temp);
                    //wind
                    var wind = document.createElement("li");
                    wind.textContent = data.list[3].wind.speed + " mph";
                    currentForecastList.appendChild(wind);
                    //humidity
                    var humid = document.createElement("li");
                    humid.textContent = data.list[3].main.humidity + "%";
                    currentForecastList.appendChild(humid);
                })
        });
}

function createForecastList() {
    for (i=0; i<40; i+8) {
        //use i to determine if the data is written to the main forecast or 5 day forecast
        if (i < 40) {

            //get more relevant weather data from 12:00 PM for each day except Day 5, because the API doesn't return enough samples to get to noon of Day 5
            var sampleIndex = i+4;
        }
        else sampleIndex = i;
        //create list for forecast data, then get data and append to list
        var currentForecastList = document.createElement("ul");
        forecastCurrent.appendChild(currentForecastList);
        //temperature
        var temp = document.createElement("li");
        temp.textContent = data.list[sampleIndex].main.temp + " ℉";
        currentForecastList.appendChild(temp);
        //wind
        var wind = document.createElement("li");
        wind.textContent = data.list[sampleIndex].wind.speed + " mph";
        currentForecastList.appendChild(wind);
        //humidity
        var humid = document.createElement("li");
        humid.textContent = data.list[sampleIndex].main.humidity + "%";
        currentForecastList.appendChild(humid);
    }
    
}

//listen for button push
searchButton.addEventListener("click", getWeatherData);

getWeatherData();