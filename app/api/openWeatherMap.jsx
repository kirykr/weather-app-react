import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=3a1ee23519affdb6d9b806b559762f67';

module.exports = {
  getTemp:  location => {
    const encodedLocation = encodeURIComponent(location);
    const requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(response => {
      return response.data.main.temp;
    }).catch(function (error) {
      throw new Error(error);
    });
  }
};
