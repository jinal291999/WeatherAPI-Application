window.onload = function () {
    var out_location = document.getElementById("location");
    var out_temp = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");
    var button_1 = document.getElementById("Toronto");
    var button_2 = document.getElementById("Etobicoke");
    var icon = document.getElementById("icon");
    var country = document.getElementById("country");
    button_1.onclick = function () {
        get_weather("Toronto");
    };
    button_2.onclick = function () {
        get_weather("Etobicoke");
    };


    function get_weather(city) {
        // Created a variable for my API key
        const myAPIkey = "6c43fa34e8e41d24ba6839420e3f649a";

        // Created a variable for the desired URL, Concatenate in API KEY var
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + myAPIkey + "&units=metric";

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {

                if (xhr.status === 200) {
                    // Get data from our API & assign it to a variable
                    const data = xhr.response;
                    console.log(data);
                    // output API Data to HTML through DOM
                    out_location.innerHTML = data.name;
                    out_temp.innerHTML = data.main.temp + " &deg;C";
                    out_conditions.innerHTML = data.weather[0].main;
                    icon.innerHTML = '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png" alt=""></img>';
                    country.innerHTML = data.sys.country;
                    var output = document.getElementById("output");
                    output.style.display = "block";

                } else {
                    out_location.innerHTML = "API call was unsuccessful";
                    console.log(xhr.status);
                }
            }
        }

        // Provide url and specify response type
        xhr.open('GET', url, true);
        xhr.responseType = "json"
        xhr.send(null);
    }


}