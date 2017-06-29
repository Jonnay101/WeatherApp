var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=20102f8212af0020a1ea3f62ddd62e13&units=metric';

module.exports = {
  getTemp: function (location) {
    // encode our location for use in address bar
    var encodedLocation = encodeURIComponent(location);
    // add our location to api url
    var requestedURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // return an axios GET function with promiseses
    return axios.get(requestedURL).then(function (res) {
      //debugger;
      if (res.data.cod && res.data.message) {
        throw new Error('Sorry, we are unable to retrieve the weather for you at this moment.');
      } else {
        return res.data.main.temp;
      }
    }).catch(function (err) {
      //debugger;
      throw new Error(err.response.data.message);
    });
  }
}
