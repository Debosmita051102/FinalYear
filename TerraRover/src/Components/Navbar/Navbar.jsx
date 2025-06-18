import React from 'react';
import { useLocation } from 'react-router-dom'; // Importing to detect current route
import { Link } from 'react-router-dom';
import { NavbarContainer, NavLink, HamburgerMenu } from './Navbar.styled';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <HamburgerMenu onClick={toggleMenu}>
        ☰
      </HamburgerMenu>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink
          to="/"
          isActive={location.pathname === '/'}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/images"
          isActive={location.pathname === '/images'}
          onClick={() => setIsOpen(false)}
        >
          Live-feed Images
        </NavLink>
        <NavLink
          to="/sensor1"
          isActive={location.pathname === '/sensor1'}
          onClick={() => setIsOpen(false)}
        >
          Temp-Humidity
        </NavLink>
        <NavLink
          to="/sensor2"
          isActive={location.pathname === '/sensor2'}
          onClick={() => setIsOpen(false)}
        >
          Water Level
        </NavLink>
        <NavLink
          to="/sensor3"
          isActive={location.pathname === '/sensor3'}
          onClick={() => setIsOpen(false)}
        >
          Atmospheric pressure
        </NavLink>
        
        <NavLink
          to="/ml1"
          isActive={location.pathname === '/ml1'}
          onClick={() => setIsOpen(false)}
        >
          Seepage Analysis
        </NavLink>
        <NavLink
          to="/ml2"
          isActive={location.pathname === '/ml2'}
          onClick={() => setIsOpen(false)}
        >
          Crack Detection
        </NavLink>
        <NavLink
          to="/sensor6"
          isActive={location.pathname === '/sensor6'}
          onClick={() => setIsOpen(false)}
        >
          Light Conditions
        </NavLink>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
