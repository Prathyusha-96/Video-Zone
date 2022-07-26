import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return(
   <>
    <nav className="navigation">
        <Link to="/video">
        <h3 className="navigation-heading">Video-Zone</h3>
        </Link>
    <ul className="navbar-search">
    <input className="search-box" type="search" placeholder="Search" /><span className="search-icon">
   <i className="fas fa-search" aria-hidden="true"></i></span>
  </ul>
    <ul className="navbar-right">
    <div className="btn btn-primary">
 <Link  to="/Login">
    Login
 </Link>
 </div>
 
</ul>
</nav>
</>
    );
}
