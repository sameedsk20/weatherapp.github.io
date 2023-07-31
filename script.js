const apiKey = "585fa47f53ffc7a58fcaea0796dfda96";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".searchBox input");
        const searchButton = document.querySelector(".searchBox button");

        const weatherIcon = document.querySelector(".weatherIcon");

        async function checkWeather(cityName) {
            const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
            
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                var data = await response.json();

            document.querySelector(".cityName").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".windFlow").innerHTML = data.wind.speed + "KPH";
        
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

            }

            
        }

        searchButton.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        })