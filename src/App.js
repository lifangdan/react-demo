import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import Home from './components/home';
import List from './components/list';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<List />} path="/list"></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;