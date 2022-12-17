//set variables
var searchBar = document.getElementById("searchBar");
var searchButton = document.getElementById("searchButton");

// API URL
//use variables to replace lat and lon coordinates as need-be
//  https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=555087710ae08746e0d97fc1d0675bcf

function getCoordinates() {
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
            var fiveDayAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=555087710ae08746e0d97fc1d0675bcf";
            fetch(fiveDayAPI)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    //log data for debug purposes
                    console.log(data);
                })
        });
}

//listen for button push
searchButton.addEventListener("click", getCoordinates);