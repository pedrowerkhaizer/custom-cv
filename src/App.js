import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import Embarque from './pages/Embarque';
//<Route path="/embarque" component={Embarque} />

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;