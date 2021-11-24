import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import ReactDOM from 'react-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" component={<div>Home</div>} />
          <Route path="/first" component={<div>Comp 1</div>} />
          <Route path="/second" component={<div>Comp 2</div>} />
        </Routes>
        <Footer />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));