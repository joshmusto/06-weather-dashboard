//set variables
var searchBar = document.getElementById("searchBar");
var searchButton = document.getElementById("searchButton");
var forecastCurrent = document.getElementById("forecastCurrent");
var forecastFiveDay = document.getElementById("forecastFiveDay");
var forecastDay1 = document.getElementById("forecastDay1");
var forecastDay2 = document.getElementById("forecastDay2");
var forecastDay3 = document.getElementById("forecastDay3");
var forecastDay4 = document.getElementById("forecastDay4");
var forecastDay5 = document.getElementById("forecastDay5");

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
                    //current day forecast
                    //log data for debug purposes
                    console.log(data);
                    //city name
                    var city = document.createElement("h2");
                    city.textContent = data.city.name + " (" + data.list[0].dt_txt.substring(5,10) + "-" + data.list[0].dt_txt.substring(0,4) + ")";
                    forecastCurrent.appendChild(city);
                    //create list for forecast data, then get data and append to list
                    var currentForecastList = document.createElement("ul");
                    forecastCurrent.appendChild(currentForecastList);
                    //temperature
                    var temp = document.createElement("li");
                    temp.textContent = "Temp: " + data.list[0].main.temp + " ℉";
                    currentForecastList.appendChild(temp);
                    //wind
                    var wind = document.createElement("li");
                    wind.textContent = "Wind: " + data.list[0].wind.speed + " mph";
                    currentForecastList.appendChild(wind);
                    //humidity
                    var humid = document.createElement("li");
                    humid.textContent = "Humidity: " + data.list[0].main.humidity + "%";
                    currentForecastList.appendChild(humid);
                    //make forecast visible when done
                    forecastCurrent.style.display = "block";

                    //day 1
                    //date
                    var date = document.createElement("h3");
                    date.textContent = data.list[8].dt_txt.substring(5,10) + "-" + data.list[8].dt_txt.substring(0,4);
                    forecastDay1.appendChild(date);
                    //create list for forecast data, then get data and append to list
                    var forecastDay1List = document.createElement("ul");
                    forecastDay1.appendChild(forecastDay1List);
                    //temperature
                    var temp = document.createElement("li");
                    temp.textContent = "Temp: " + data.list[8].main.temp + " ℉";
                    forecastDay1List.appendChild(temp);
                    //wind
                    var wind = document.createElement("li");
                    wind.textContent = "Wind: " + data.list[8].wind.speed + " mph";
                    forecastDay1List.appendChild(wind);
                    //humidity
                    var humid = document.createElement("li");
                    humid.textContent = "Humidity: " + data.list[8].main.humidity + "%";
                    forecastDay1List.appendChild(humid);
                    //make visible
                    forecastDay1.style.display = "inline-block";

                    //day 2
                    //date
                    var date = document.createElement("h3");
                    date.textContent = data.list[16].dt_txt.substring(5,10) + "-" + data.list[16].dt_txt.substring(0,4);
                    forecastDay2.appendChild(date);
                    //create list for forecast data, then get data and append to list
                    var forecastDay2List = document.createElement("ul");
                    forecastDay2.appendChild(forecastDay2List);
                    //temperature
                    var temp = document.createElement("li");
                    temp.textContent = "Temp: " + data.list[16].main.temp + " ℉";
                    forecastDay2List.appendChild(temp);
                    //wind
                    var wind = document.createElement("li");
                    wind.textContent = "Wind: " + data.list[16].wind.speed + " mph";
                    forecastDay2List.appendChild(wind);
                    //humidity
                    var humid = document.createElement("li");
                    humid.textContent = "Humidity: " + data.list[16].main.humidity + "%";
                    forecastDay2List.appendChild(humid);
                    //make visible
                    forecastDay2.style.display = "inline-block";

                    //day 3
                    //date
                    var date = document.createElement("h3");
                    date.textContent = data.list[24].dt_txt.substring(5,10) + "-" + data.list[24].dt_txt.substring(0,4);
                    forecastDay3.appendChild(date);
                    //create list for forecast data, then get data and append to list
                    var forecastDay3List = document.createElement("ul");
                    forecastDay3.appendChild(forecastDay3List);
                    //temperature
                    var temp = document.createElement("li");
                    temp.textContent = "Temp: " + data.list[24].main.temp + " ℉";
                    forecastDay3List.appendChild(temp);
                    //wind
                    var wind = document.createElement("li");
                    wind.textContent = "Wind: " + data.list[24].wind.speed + " mph";
                    forecastDay3List.appendChild(wind);
                    //humidity
                    var humid = document.createElement("li");
                    humid.textContent = "Humidity: " + data.list[24].main.humidity + "%";
                    forecastDay3List.appendChild(humid);
                    //make visible
                    forecastDay3.style.display = "inline-block";

                    //day 4
                    //date
                    var date = document.createElement("h3");
                    date.textContent = data.list[32].dt_txt.substring(5,10) + "-" + data.list[32].dt_txt.substring(0,4);
                    forecastDay4.appendChild(date);
                    //create list for forecast data, then get data and append to list
                    var forecastDay4List = document.createElement("ul");
                    forecastDay4.appendChild(forecastDay4List);
                    //temperature
                    var temp = document.createElement("li");
                    temp.textContent = "Temp: " + data.list[32].main.temp + " ℉";
                    forecastDay4List.appendChild(temp);
                    //wind
                    var wind = document.createElement("li");
                    wind.textContent = "Wind: " + data.list[32].wind.speed + " mph";
                    forecastDay4List.appendChild(wind);
                    //humidity
                    var humid = document.createElement("li");
                    humid.textContent = "Humidity: " + data.list[32].main.humidity + "%";
                    forecastDay4List.appendChild(humid);
                    //make visible
                    forecastDay4.style.display = "inline-block";

                    //day 5
                    //date
                    var date = document.createElement("h3");
                    date.textContent = data.list[39].dt_txt.substring(5,10) + "-" + data.list[39].dt_txt.substring(0,4);
                    forecastDay5.appendChild(date);
                    //create list for forecast data, then get data and append to list
                    var forecastDay5List = document.createElement("ul");
                    forecastDay5.appendChild(forecastDay5List);
                    //temperature
                    var temp = document.createElement("li");
                    temp.textContent = "Temp: " + data.list[39].main.temp + " ℉";
                    forecastDay5List.appendChild(temp);
                    //wind
                    var wind = document.createElement("li");
                    wind.textContent = "Wind: " + data.list[39].wind.speed + " mph";
                    forecastDay5List.appendChild(wind);
                    //humidity
                    var humid = document.createElement("li");
                    humid.textContent = "Humidity: " + data.list[39].main.humidity + "%";
                    forecastDay5List.appendChild(humid);
                    //make visible
                    forecastDay5.style.display = "inline-block";
                })
        });
}

//listen for button push
searchButton.addEventListener("click", getWeatherData);