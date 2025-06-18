import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;

  .nav-links {
    display: flex;
    gap: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    .nav-links {
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0;
      background-color: #333;
      display: none;
    }

    .nav-links.open {
      display: flex;
    }
  }
`;

export const NavLink = styled(Link)`
  color: ${(props) => (props.isActive ? 'blue' : 'white')};
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s, border-bottom 0.3s;

  &:hover {
    color: blue; /* Changes to blue on hover */
    border-bottom: 2px solid white; /* Adds a white underline on hover */
  }

  &:visited {
    color: ${(props) => (props.isActive ? 'sky' : 'white')};
  }

  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')}; /* Bold styling for active link */
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;
