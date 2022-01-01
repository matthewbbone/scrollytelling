import React from 'react'
import Language from '../../assets/infographics/language.png'
import Fader from '../../common/utils/Fader'
import styles from './Sections.module.css'
import Pictogram from '../visualizations/pictogram'

const Section = ({ active, progress }) => {

    return (
        <div>
            <div className={styles.container}>
                <img src={Language} style={{ opacity: `${Fader(active, progress, .2)}` }} className={styles.infographic} />
                <div className={styles.highlightedText} style={{ opacity: `${Fader(active, progress, .2)}` }}>
                    <p>
                        With over 7,000 Q Arabica and Q Robusta Graders worldwide – and counting – it is no surprise that the Q Program has been integrated into hundreds of companies around the world.
                    </p>
                    <Pictogram progress={progress}></Pictogram>
                </div>
            </div>
        </div>
    )
}

export default Section