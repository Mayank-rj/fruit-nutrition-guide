import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink exact="true" to="/">Home</NavLink>
        <NavLink exact="true" to="/details">Details</NavLink>
      </nav>
    </>
  )
}
