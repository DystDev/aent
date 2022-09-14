import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from './aent-c.png';

const Navbar = (props) => {
  const [searchQ, setSearchQ] = useState('');

  const handleChange = (e) => {
    setSearchQ(e.target.value);
    props.setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="Aent Logo" className="logo" />
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
      </div>
      <input
        type="text"
        className="searchBar"
        value={searchQ}
        onChange={handleChange}
        placeholder="Seart"
      ></input>
    </nav>
  );
};

export default Navbar;
