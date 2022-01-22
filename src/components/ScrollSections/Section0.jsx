import React from 'react'
import Language from '../../assets/infographics/language.png'
import Fader from '../../common/utils/Fader'
import styles from './Sections.module.css'
import Pictogram from '../visualizations/Pictogram'
import Arabica from '../../assets/icons/arabica.png'
import Robusta from '../../assets/icons/robusta.png'

const groupDict = {
    "Robusta": {
        threshold: .34,
        color: 'rgb(189, 138, 102)',
        description: 'Represents 100 Q Robusta Graders',
        icon: Robusta
    },
    "Arabica": {
        threshold: 1,
        color: 'rgb(111,78,55)',
        description: 'Represents 100 Q Arabica Graders',
        icon: Arabica
    }
}

const Section = ({ active, progress }) => {

    return (
        <div>
            <div className={styles.container}>
                <img src={Language} style={{ opacity: `${Fader(active, progress, .2)}` }} className={styles.infographic} />
                <div className={styles.highlightedText} style={{ opacity: `${Fader(active, progress, .2)}` }}>
                    <p>
                        With over 7,000 Q Arabica and Q Robusta Graders worldwide – and counting – it is no surprise that the Q Program has been integrated into hundreds of companies around the world.
                    </p>
                    <Pictogram
                        progress={progress}
                        count={70}
                        groups={groupDict}
                        numRows={8}
                        width={400}
                        element={'section0'}>
                    </Pictogram>
                </div>
            </div>
        </div>
    )
}

export default Section