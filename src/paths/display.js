const view = (() => {
  function setSearchOutput(weatherData) {
    if (!weatherData) return;

    const setSearchOutput = document.getElementById("SearchOutput");
    setSearchOutput.classList.add("active");

    const city = document.getElementById("city");
    const temperature = document.getElementById("temperature");
    const possibility = document.getElementById("possibility");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    cityName.textContent = `${weatherData.cityName}`;
    temperature.textContent = `${weatherData.temperature} °C`;
    possibility.textContent = `Fells like: ${weatherData.possibility} °C`;
    humidity.textContent = `Humidity: ${weatherData.humidity} %`;
    wind.textContent = `Wind: ${weatherData.windSpeed} km/h`;
  }

  return { setSearchOutput };
})();

export default display;
