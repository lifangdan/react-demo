import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";
import Home from './components/home';
import List from './components/list';
class App extends React.Component {
  render() {
    return (
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/list" style={{ padding: 5 }}>
            List
          </Link>
        </nav>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<List />} path="/list"></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;