import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="name">Matthew B. Bone</div>
        <ul className="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
          <li className="navButton"><Link to="/blog">Blog</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;