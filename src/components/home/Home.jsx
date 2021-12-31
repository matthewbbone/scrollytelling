import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../assets/photos/profile.jpg'
import styles from './Home.module.css'
import { Scrollama, Step } from 'react-scrollama';

const ScrollLayer = () => {

  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [stepProgress, setStepProgress] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepProgress= ({ data }) => {
    console.log(data)
    setStepProgress(data)
  }

  return (
    <div>
      <Scrollama onStepEnter={onStepEnter} progress onStepProgress={onStepProgress} debug>
        <Step data={0} key={0}>
          <div
            style={{
              margin: '50vh 0',
              border: '1px solid gray',
              opacity: currentStepIndex === 0 ? stepProgress : 0.2,
            }}
          >
            I'm a Scrollama Step of index 0
          </div>
        </Step>
        <Step data={1} key={1}>
          <div
            style={{
              margin: '50vh 0',
              border: '1px solid gray',
              opacity: currentStepIndex === 1 ? stepProgress : 0.2,
            }}
          >
            I'm a Scrollama Step of index 1
          </div>
        </Step>
        <Step data={2} key={2}>
          <div
            style={{
              margin: '50vh 0',
              border: '1px solid gray',
              opacity: currentStepIndex === 2 ? stepProgress : 0.2,
            }}
          >
            I'm a Scrollama Step of index 2
          </div>
        </Step>
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