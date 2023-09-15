import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ClubInfo from './pages/ClubInfo.js';
import Achievements from './pages/Achievements.js';
import TeamInfo from './pages/TeamInfo.js';
import Main from './pages/main.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/club" element={<ClubInfo/>}/>
        <Route exact path="/achiev" element={<Achievements/>}/>
        <Route exact path="/team" element={<TeamInfo/>}/>
        <Route exact path="/main" element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;