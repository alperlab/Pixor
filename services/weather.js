console.log("Weather service loaded");

async function loadWeather() {

    try {

        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=41.01&longitude=28.97&current=temperature_2m"
        );

        const data = await response.json();

        const temp = Math.round(data.current.temperature_2m);

        const weatherBox = document.getElementById("weatherTemp");

        if (weatherBox) {

            weatherBox.innerHTML = temp + "°C";

        }

    } catch (err) {

        console.error(err);

    }

}

loadWeather();

setInterval(loadWeather,600000);
