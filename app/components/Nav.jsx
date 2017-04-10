var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <div className = "top-bar">
      <div className="top-bar-title">
        <h1>Prompted.</h1>
      </div>
      <div className = "top-bar-right">
        <ul className = "menu">
          <li>
            <IndexLink to="/">
              Sign Up
            </IndexLink>
          </li>
          <li>
            <Link to="/login">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

module.exports = Nav;
