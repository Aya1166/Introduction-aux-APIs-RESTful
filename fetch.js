const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const CITY = "Sousse";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=fr`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log("Ville:", CITY);
    console.log("Description:", data.weather[0].description);
    console.log("Température:", data.main.temp, "°C");
    console.log("Humidité:", data.main.humidity, "%");
  })
  .catch(err => console.log(err));