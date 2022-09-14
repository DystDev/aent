import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './screens/Home';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Router>
        <Navbar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

const About = () => {
  return <h1>About me... shit idk</h1>;
};

export default App;
