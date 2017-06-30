var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a couple of examples to try:</p>
      <ol>
        <li><Link to="/?location=Manchester">Manchester, UK</Link></li>
        <li><Link to="/?location=Barcelona">Barcelona</Link></li>
      </ol>
    </div>
  )
};

module.exports = Examples;
