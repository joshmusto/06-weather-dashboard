//set variables
var searchBar = document.getElementById("searchBar");
var searchButton = document.getElementById("searchButton");
var forecastCurrent = document.getElementById("forecastCurrent");
var searchHistorySection = document.getElementById("searchHistory");
var forecastFiveDay = document.getElementById("forecastFiveDay");
var forecastDay1 = document.getElementById("forecastDay1");
var forecastDay2 = document.getElementById("forecastDay2");
var forecastDay3 = document.getElementById("forecastDay3");
var forecastDay4 = document.getElementById("forecastDay4");
var forecastDay5 = document.getElementById("forecastDay5");


// API URL
//use variables to replace lat and lon coordinates as need-be
//  https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=555087710ae08746e0d97fc1d0675bcf

//set variable for city search with global scope so it can be set by search bar and search history buttons
var searchCity = null;
//functioning for retrieiving and printing forecasts
function getWeatherData() {
    var geocodingAPI = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchCity + "&limit=1&appid=555087710ae08746e0d97fc1d0675bcf";
    fetch(geocodingAPI)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            if (data[0]!=undefined) {
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
                        //delete old forecast
                        forecastCurrent.innerHTML = "";
                        //city name
                        var city = document.createElement("h2");
                        city.textContent = data.city.name + " (" + data.list[0].dt_txt.substring(5,10) + "-" + data.list[0].dt_txt.substring(0,4) + ")";
                        forecastCurrent.appendChild(city);
                        //icon
                        var iconCurrent = document.createElement("img");
                        //get weather id from API
                        iconCurrent.src = "http://openweathermap.org/img/wn/" + getWeatherIcon(data, 0) + ".png";
                        forecastCurrent.appendChild(iconCurrent);
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
                        //delete old forecast
                        forecastDay1.innerHTML = "";
                        //date
                        var date = document.createElement("h3");
                        date.textContent = data.list[8].dt_txt.substring(5,10) + "-" + data.list[8].dt_txt.substring(0,4);
                        forecastDay1.appendChild(date);
                        //icon
                        var iconCurrent = document.createElement("img");
                        //get weather id from API
                        iconCurrent.src = "http://openweathermap.org/img/wn/" + getWeatherIcon(data, 8) + ".png";
                        forecastDay1.appendChild(iconCurrent);
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
                        //delete old forecast
                        forecastDay2.innerHTML = "";
                        //date
                        var date = document.createElement("h3");
                        date.textContent = data.list[16].dt_txt.substring(5,10) + "-" + data.list[16].dt_txt.substring(0,4);
                        forecastDay2.appendChild(date);
                        //icon
                        var iconCurrent = document.createElement("img");
                        //get weather id from API
                        iconCurrent.src = "http://openweathermap.org/img/wn/" + getWeatherIcon(data, 16) + ".png";
                        forecastDay2.appendChild(iconCurrent);
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
                        //delete old forecast
                        forecastDay3.innerHTML = "";
                        //date
                        var date = document.createElement("h3");
                        date.textContent = data.list[24].dt_txt.substring(5,10) + "-" + data.list[24].dt_txt.substring(0,4);
                        forecastDay3.appendChild(date);
                        //icon
                        var iconCurrent = document.createElement("img");
                        //get weather id from API
                        iconCurrent.src = "http://openweathermap.org/img/wn/" + getWeatherIcon(data, 24) + ".png";
                        forecastDay3.appendChild(iconCurrent);
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
                        //delete old forecast
                        forecastDay4.innerHTML = "";
                        //date
                        var date = document.createElement("h3");
                        date.textContent = data.list[32].dt_txt.substring(5,10) + "-" + data.list[32].dt_txt.substring(0,4);
                        forecastDay4.appendChild(date);
                        //icon
                        var iconCurrent = document.createElement("img");
                        //get weather id from API
                        iconCurrent.src = "http://openweathermap.org/img/wn/" + getWeatherIcon(data, 32) + ".png";
                        forecastDay4.appendChild(iconCurrent);
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
                        //delete old forecast
                        forecastDay5.innerHTML = "";
                        //date
                        var date = document.createElement("h3");
                        date.textContent = data.list[39].dt_txt.substring(5,10) + "-" + data.list[39].dt_txt.substring(0,4);
                        forecastDay5.appendChild(date);
                        //icon
                        var iconCurrent = document.createElement("img");
                        //get weather id from API
                        iconCurrent.src = "http://openweathermap.org/img/wn/" + getWeatherIcon(data, 39) + ".png";
                        forecastDay5.appendChild(iconCurrent);
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

                        //add city to search history if it isn't already there
                        if (!searchHistory.includes(data.city.name)) {
                            searchHistory.unshift(data.city.name);
                            if (searchHistory.length > 4) {
                                searchHistory.pop();
                            };
                        }

                        //print search history to page
                        printHistory();
                        //update searchHistory on local storage
                        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
                    })
            }
            else {
                //delete old forecast
                forecastCurrent.innerHTML = "";
                forecastDay1.style.display = "none";
                forecastDay2.style.display = "none";
                forecastDay3.style.display = "none";
                forecastDay4.style.display = "none";
                forecastDay5.style.display = "none";
                //print error message
                var errorMessage = document.createElement("h3");
                errorMessage.textContent = "City not found. Please try again.";
                forecastCurrent.appendChild(errorMessage);
                forecastCurrent.style.display = "block";
            }
        });
}

//function for selecting weather icon
function getWeatherIcon(data, x) {
    //check the time
    var iconTime = data.list[x].sys.pod;
    //check the weather
    var iconCode = "01";
    var dataIconID = data.list[x].weather[0].id;
    if (dataIconID >= 200) {
        if (dataIconID >= 300) {
            if (dataIconID >= 400) {
                if (dataIconID >= 500) {
                    if (dataIconID >= 600) {
                        if (dataIconID >= 700) {
                            if (dataIconID >= 801) {
                                iconCode = "02";
                            }
                            else if (dataIconID == 800) iconCode="01";
                        }
                        else iconCode = "50";
                    }
                    else iconCode = "13";
                }
                else iconCode = "10";
            }
            else iconCode = "09";
        }
        else iconCode = "11";
    }
    console.log(iconCode + iconTime);
    return(iconCode + iconTime);
}

//listen for search button push
searchButton.addEventListener("click", function() {
    searchCity = searchBar.value;
    getWeatherData();
});

//function for printing search history
function printHistory() {
    //clear old history
    searchHistorySection.innerHTML = "";
    //print new history
    //item 1
    var history1 = document.createElement("button");
    history1.setAttribute("id", "historyButton1");
    history1.textContent = searchHistory[0];
    searchHistorySection.appendChild(history1);
    //item 2
    if (searchHistory.length>1){
        var history2 = document.createElement("button");
        history2.setAttribute("id", "historyButton2");
        history2.textContent = searchHistory[1];
        searchHistorySection.appendChild(history2);
        if (searchHistory.length>2){
            //item 3
            var history3 = document.createElement("button");
            history3.setAttribute("id", "historyButton3");
            history3.textContent = searchHistory[2];
            searchHistorySection.appendChild(history3);
            if (searchHistory.length>3){
                //item 4
                var history4 = document.createElement("button");
                history4.setAttribute("id", "historyButton4");
                history4.textContent = searchHistory[3];
                searchHistorySection.appendChild(history4);
            }
        }
    }
    setHistoryButtonId();
    setHistoryButtonListeners();
}

//get search history from local storage
var searchHistory = [];
if (localStorage.getItem("searchHistory") !== null) {
    searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    printHistory();
}

//set varialbes for search history buttons, do it here, after loading search history, because otherwise the buttons don't exist yet so these variables are marked as null
function setHistoryButtonId() {
    window.historyButton1 = document.getElementById("historyButton1");
    window.historyButton2 = document.getElementById("historyButton2");
    window.historyButton3 = document.getElementById("historyButton3");
    window.historyButton4 = document.getElementById("historyButton4");
}

//listen for history button push, needs to be in a function so it can be called again to "reset"  the event listeners to make the buttons work infinitely
function setHistoryButtonListeners() {
    historyButton1.addEventListener("click", function() {
        searchCity = historyButton1.textContent;
        searchBar.value = historyButton1.textContent;
        getWeatherData();
    });
    historyButton2.addEventListener("click", function() {
        searchCity = historyButton2.textContent;
        searchBar.value = historyButton2.textContent;
        getWeatherData();
    });
    historyButton3.addEventListener("click", function() {
        searchCity = historyButton3.textContent;
        searchBar.value = historyButton3.textContent;
        getWeatherData();
    });
    historyButton4.addEventListener("click", function() {
        searchCity = historyButton4.textContent;
        searchBar.value = historyButton4.textContent;
        getWeatherData();
    });
}