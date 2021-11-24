import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar'
import ReactDOM from 'react-dom';

class App extends Component {

  render() {
    console.log("rendering")
    return (
      <NavBar/>
      <Router>
        <Routes>
          <Route name="home" exact path="/" component={Home} />
        </Routes>
      </Router>
    )
  }
}
export default App;

ReactDOM.render(<App />, document.querySelector("#root"));