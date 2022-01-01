import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import ReactDOM from 'react-dom';
import styles from "./index.module.css"

class App extends Component {

  render() {
    return (
      <Router>
        <div className={styles.pageView}>
          <Home/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));