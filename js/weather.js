document.addEventListener('DOMContentLoaded', () => {
  const weatherDiv = document.getElementById('weather');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=dbb0f69e074a9640566ab9d8f30a6259&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = Math.round(data.main.temp);
      const description = data.weather[0].description;
      weatherDiv.textContent = `Cancun: ${temp}°C, ${description}`;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      weatherDiv.textContent = 'Cancun: Weather unavailable';
    });
});