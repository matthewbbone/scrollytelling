import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import Blog from './components/blog/Blog'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import ReactDOM from 'react-dom';
import styles from "./index.module.css"

class App extends Component {

  render() {
    return (
      <Router>
        <NavBar />
        <div className={styles.pageView}>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Redirect to="/" />
        </div>
        <Footer />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));