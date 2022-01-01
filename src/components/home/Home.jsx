import React, { Component, useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Fader from '../../common/utils/Fader'
import { Directory, ImageDirectory} from '../ScrollSections/Directory'
import styles from './Home.module.css'

import LanguagePic from '../../assets/photos/language.jpg'

const ScrollLayer = () => {

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepProgress = ({ progress }) => {
    setStepProgress(progress)
  }

  return (
    <div className={styles.homePage} style={{ backgroundImage: `url(${ImageDirectory[currentStepIndex]})`}}>

      <div className={styles.infoFade}></div>

      <Scrollama onStepEnter={onStepEnter} progress onStepProgress={onStepProgress}>

        {
          Directory.map((Section, index) => {
            return (
              <Step data={index} key={index} className={styles.Step}>
                <div>
                  <Section
                    active={index == currentStepIndex}
                    progress={stepProgress}></Section>
                </div>
              </Step>
            )
          })
        }

      </Scrollama>
    </div>
  );
};

class HomePage extends Component {
  render() {
    return (
      <div>
        <ScrollLayer />
      </div>
    )
  }
}
export default HomePage;