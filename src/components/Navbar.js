import { Link } from 'react-router-dom';
import '../App.css';
import Logo from './aent-c.png';

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
