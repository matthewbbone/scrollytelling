import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import BlogRouter from './components/blog/BlogRouter'
import BlogPost from './components/blog/BlogPost'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import ReactDOM from 'react-dom';
import styles from "./index.css"

class App extends Component {

  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={BlogRouter} />
        </div>
        <Footer />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));