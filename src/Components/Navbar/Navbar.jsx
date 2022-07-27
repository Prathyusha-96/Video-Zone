import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../context";
import './Navbar.css';

export const Navbar = () => {
    const { token, logoutHandler } = useAuth();
    return(
   <>
    <nav className="navigation">
        <Link to="/">
        <h3 className="navigation-heading">Video-Zone</h3>
        </Link>
    <ul className="navbar-search">
    <input className="search-box" type="search" placeholder="Search" /><span className="search-icon">
   <i className="fas fa-search" aria-hidden="true"></i></span>
  </ul>
    <ul className="navbar-right">
    <div className="btn btn-primary">
 {token ? (
    <Link 
    onClick={(e) => logoutHandler(e)}
    className="text"
    to="/login" >
        Logout
    </Link>
 ) : (
    <Link className='text' to='/login'>
    Login
    
</Link>
 
 )}
 </div>
 
</ul>
</nav>
</>
    );
}
