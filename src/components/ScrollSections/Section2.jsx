import React, { Component } from 'react'
import Network from '../../assets/infographics/network.png'
import NetworkPic from '../../assets/photos/network.jpg'
import Fader from '../../common/utils/Fader'
import styles from './Sections.module.css'

const Section = ({ active, progress }) => {

    return (
        <div className={styles.container}>
            <img src={Network} style={{ opacity: `${Fader(active, progress, .2)}` }} className={styles.infographic} />
            <div className={styles.highlightedText} style={{ opacity: `${Fader(active, progress, .2)}` }}>
                Our most important role is finding the best talent to tackle coffee quality challenges in the value chain.
            </div>
        </div>
    )
}

export default Section