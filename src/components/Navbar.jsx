import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = ({ handleChange, handleSubmit, searchTerm }) => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link to="/">
          <img src={logo} alt="logo" width={150} height={50} />
        </Link>
      </p>

      <button type="button" className="cart-icon">
        <AiOutlineShopping color="black" />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default Navbar;
