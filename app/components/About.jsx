var React = require('react');
//var {Link} = require('react-router');

var About = (props) => {
  return (
    <div className="" style={{paddingTop: '1rem'}}>
      <h1 className="text-center">About</h1>
      <p className="text-center">This is a 'magical' weather app... <br/> Enter a city and we'll give you the current temperature! </p>
      <div className="callout text-center lead" style={{border: 'none'}}>
        BOOM!
      </div>
      <h4 className="subheader text-center">What did we use???</h4>
      <ul className="no-bullet text-center">
        <li><a href="https://facebook.github.io/react/">React</a> - JavaScript framework</li>
        <li><a href="http://openweathermap.org/">Open Weather Map</a> - Weather API</li>
        <li><a href="http://foundation.zurb.com/sites.html">Foundation 6</a> - CSS framework</li>
      </ul>
      <h5 className="text-center subheader">Wanna have a peek inside this marvel of the modern world?</h5>
      <div className="text-center">
        <a className="button expanded alert" href="https://github.com/Jonnay101/WeatherApp" target="_blank">Here's where the magic happens!</a>
      </div>
    </div>
  )
}

module.exports = About;
