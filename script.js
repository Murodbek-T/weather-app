const apiKey = "043d4513bdd680c5cf157127026cef95";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";

const search = document.querySelector(".searchbox input");
const btn = document.querySelector(".searchbox button");

async function showWeather(city) {
  const response = await fetch(apiURL + apiKey + `&q=${city}`);
  var data = await response.json();

  document.querySelector(".name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity-text").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind-text").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clear") {
    document.querySelector("#pic").src = `images/Sun.png`;
  } else if (data.weather[0].main == "Clouds") {
    document.querySelector("#pic").src = `images/Cloudy.png`;
  } else if (data.weather[0].main == "Rain") {
    document.querySelector("#pic").src = `images/Rain.png`;
  } else if (data.weather[0].main == "Snow") {
    document.querySelector("#pic").src = `images/Snow.png`;
  } else if (data.weather[0].main == "Foggy") {
    document.querySelector("#pic").src = `images/Fog.png`;
  }
}

btn.addEventListener("click", () => {
  if (search.value == "") {
    alert("Please, enter city name!");
  } else {
    showWeather(search.value);
    search.value = "";
  }
});
