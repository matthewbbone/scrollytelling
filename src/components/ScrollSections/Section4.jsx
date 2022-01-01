import React, { Component } from 'react'
import Market from '../../assets/infographics/market.png'
import MarketPic from '../../assets/photos/market.jpg'
import Fader from '../../common/utils/Fader'
import styles from './Sections.module.css'

const Section = ({ active, progress }) => {

    return (
        <div className={styles.container} style={{marginBottom: '200px'}}>
            <img src={Market} style={{ opacity: `${Fader(active, progress, .2)}` }}  className={styles.infographic}/>
            <div className={styles.highlightedText} style={{ opacity: `${Fader(active, progress, .2)}` }}>
                Our job is to connect to people, to interact with them in a way that leaves them better than we found them, more able to get where they’d like to go.
                -Seth Godin
            </div>
        </div>
    )
}

export default Section