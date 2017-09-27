
import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Nancy Velasquez</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><i className="fa fa-github" aria-hidden="true"><a href="github.com"></a></i></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar;