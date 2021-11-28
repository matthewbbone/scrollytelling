import React, { Component } from 'react';
import Profile from '../../assets/photos/profile.jpg'
import styles from './Home.module.css'
import { Bio1, Bio2, Bio3 } from './HomeData'

class HomePage extends Component {
  render() {
    return (
      <div>
        <img className={styles.profile} src={Profile} width="200px" height="200px"/>
        <p className={styles.bio}>
          {Bio1}
          <br/><br/>
          {Bio2}
          <br/><br/>
          {Bio3}
        </p>
      </div>
    )
  }
}
export default HomePage;