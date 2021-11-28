import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className={styles.name}>Matthew B. Bone</div>
        <ul className={styles.headerButtons}>
          <li className={styles.navButton}><Link to="">Home</Link></li>
          <li className={styles.navButton}><Link to="/blog">Blog</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;