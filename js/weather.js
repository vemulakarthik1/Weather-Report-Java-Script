if("geolocation" in Navigator) {
    navigator.geolocation.getCurrentPosition(function(position){
        loadweather(position.coords.latitude + ',' + position.coords.latitude);

    });

} else{
    loadweather("Texas, US", "");
}

$(document).ready(function() {
    setInterval(getweather, 10000);
});

function loadweather(location, woeid) {
    $.simpleweather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather){
            city = weather.city;
            temp = weather.temp+'&deg;';
            wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
            wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
            humidity = weather.humidity + '%';
            
            $(".location").text(city);
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);
        },
        
        error: function(error) {
            $(".error").html('<p>' + error + '</p>');
        }
    });
}