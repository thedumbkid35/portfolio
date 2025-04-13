import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Project  from './pages/Projects';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/About' element = {<About />} />
          <Route path='/Contact' element = {<Contact />} />
          <Route path='/Projects' element = {<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
