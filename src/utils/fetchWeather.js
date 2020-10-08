const URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=3652462&cnt=17&units=metric&APPID=d6a8492b0d927353ebc1fb811d466922';
const fetchWeather = () => fetch(URL)
  .then(response => response.json())
  .then(result => result)
  .catch(err => {
    throw err;
  });

export default fetchWeather;
