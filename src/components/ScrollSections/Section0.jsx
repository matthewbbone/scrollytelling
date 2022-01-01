import React, { Component } from 'react'
import CQILogo from '../../assets/icons/logo.png'
import Language from '../../assets/infographics/language.png'
import LanguagePic from '../../assets/photos/language.jpg'
import Fader from '../../common/utils/Fader'
import styles from './Sections.module.css'

const Section = ({ active, progress }) => {

    return (
        <div>
            <div className={styles.container}>
                <img src={Language} style={{ opacity: `${Fader(active, progress, .2)}` }} className={styles.infographic} />
                <div className={styles.highlightedText} style={{ opacity: `${Fader(active, progress, .2)}` }}>
                    With over 7,000 Q Arabica and Q Robusta Graders worldwide – and counting – it is no surprise that the Q Program has been integrated into hundreds of companies around the world.
                </div>
            </div>
        </div>
    )
}

export default Section