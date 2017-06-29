var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <p>The temperature in {location} is {temp} &deg;C</p>
    </div>
  )
}

module.exports = WeatherMessage;
