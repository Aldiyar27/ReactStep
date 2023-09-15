import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Clock from './pages/Clock.js';
import Movie from './pages/Movie.js';
import Personal from './pages/Personal.js';
import Pet from './pages/Pet.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/clock" element={<Clock/>}/>
        <Route exact path="/movie" element={<Movie/>}/>
        <Route exact path="/personal" element={<Personal/>}/>
        <Route exact path="/pet" element={<Pet/>}/>
      </Routes>
    </Router>
  );
}

export default App;