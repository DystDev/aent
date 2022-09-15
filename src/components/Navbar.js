import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from './aent-c.png';
import {
  createTheme,
  FormControlLabel,
  FormGroup,
  Switch,
  ThemeProvider,
  Typography
} from '@mui/material';

const Navbar = (props) => {
  const [searchQ, setSearchQ] = useState('');

  const handleChange = (e) => {
    setSearchQ(e.target.value);
    props.setSearchTerm(e.target.value);
  };

  const jTheme = createTheme({
    typography: {
      fontFamily: 'Jost'
    }
  });

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
      <ThemeProvider theme={jTheme}>
        <FormGroup className="uppercaseSwitch">
          <FormControlLabel
            control={<Switch color="default" />}
            label={<Typography>Uppercase</Typography>}
          />
        </FormGroup>
      </ThemeProvider>
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
