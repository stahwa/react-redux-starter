import React from 'react';
import { Link } from 'react-router-dom';
import './styles';

/**
 * Header component
 * @return {ReactElement}
 */
const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </header>
  );
};

export default Header;
