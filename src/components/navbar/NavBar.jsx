import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <header styles={styles}>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;