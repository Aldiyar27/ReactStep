import logo from './logo.svg';
import './App.css';
import Home from './pages';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Book from './pages/book';
import Music from './pages/music';
import Cook from './pages/cook';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/cook" element={<Cook/>}/>
      </Routes>
    </Router>
  );
}

export default App;
