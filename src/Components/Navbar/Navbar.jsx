import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return(
   <nav>
    <div className="left-nav">
        <Link to="/video">
            Video-Zone
        </Link>
     </div>
     <ul className="navbar-search">
    <input className="search-box" type="search" placeholder="Search" /><span className="search-icon">
   <i className="fas fa-search" aria-hidden="true"></i></span>
  </ul>
    <ul className="right-nav">
        <li>
    <Link  to="/Login" className="btn btn-primary">
    Login
 </Link>
 </li>
</ul>
</nav>
    );
}
