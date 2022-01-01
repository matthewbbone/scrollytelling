import React, { Component } from 'react'
import Together from '../../assets/infographics/together.png'
import TogetherPic from '../../assets/photos/together.jpg'
import Fader from '../../common/utils/Fader'
import styles from './Sections.module.css'

const Section = ({ active, progress }) => {

    return (
        <div className={styles.container}>
            <img src={Together} style={{ opacity: `${Fader(active, progress, .2)}` }}  className={styles.infographic}/>
            <div className={styles.highlightedText} style={{ opacity: `${Fader(active, progress, .2)}` }}>
                Coming together is a beginning; keeping together is progress; working together is success.
                -Henry Ford
            </div>
        </div>
    )
}

export default Section