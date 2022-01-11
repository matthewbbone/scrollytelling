import React, { Component } from 'react'
import Services from '../../assets/infographics/services.png'
import Fader from '../../common/utils/Fader'
import styles from './Sections.module.css'

const Section = ({ active, progress }) => {

    return (
        <div className={styles.container}>
            <img src={Services} style={{ opacity: `${Fader(active, progress, .2)}` }} className={styles.infographic} />
            <div className={styles.highlightedText} style={{ opacity: `${Fader(active, progress, .2)}` }}>
                <p>
                    “The developing world is full of entrepreneurs and visionaries, who with access to education, equity and credit would play a key role in developing the economic situations in their countries.”
                    –Muhammad Yunus
                </p>
            </div>
        </div>
    )
}

export default Section