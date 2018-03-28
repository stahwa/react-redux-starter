import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
 
class Header extends Component {

  render() {
    return (
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </header>
    )
  }
}

export default Header