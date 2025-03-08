import React from 'react';
import './Navbar.css';
import { HOME, PRODUCTS, CATALOGUES, WHO_ARE_WE, CONTACT_US } from '../../constants/Home_constants';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
        <a href={`/${HOME.value}`} className="navbar-logo">
          <img src={'http://sacisthagranite.com/sacistha-granite.png'} alt="logo" />
        </a>
        <div className="navbar-menu">
          <a href={`/${HOME.value}`}>{HOME.label}</a>
          <a href={`/${PRODUCTS.value}`}>{PRODUCTS.label}</a>
          <a href={`/${CATALOGUES.value}`}>{CATALOGUES.label}</a>
          <a href={`/${WHO_ARE_WE.value}`}>{WHO_ARE_WE.label}</a>
          <a href={`/${CONTACT_US.value}`}>{CONTACT_US.label}</a>
        </div>
    </nav>
  );
}

export default Navbar;
