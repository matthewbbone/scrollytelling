import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <header className="App-header"></header>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>}/>
          <Route path="/blogs" element={<div>Blogs</div>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
