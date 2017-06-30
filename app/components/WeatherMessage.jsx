var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <div className="text-center callout">
      <p className="lead">The temperature in <strong>{location}</strong> is: </p>
      <p><span className="stat">{temp} &deg;C</span></p>
    </div>
  )
}

module.exports = WeatherMessage;
