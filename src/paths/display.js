const view = (() => {
function setsearchOutput(weatherData) {
  if(!weatherData) return;

}

constsearchOutput = document.getElementById("searchOutput");
searchOutput.classList.add('active');

const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const possibility = document.getElementById("possibility");
const humidity = document.getElementById("humidity");

city.textContent = `${weatherData.city}`;
temperature.textContent = `${weatherData.temperature}`;
