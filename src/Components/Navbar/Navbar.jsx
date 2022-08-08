import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth, useData } from "../../context";
import './Navbar.css';

export const Navbar = () => {
    const { token, logoutHandler } = useAuth();
    const [input, setInput] = useState('');
    const { pathname } = useLocation();
    const { dispatch } = useData();
    const searchHandler = (e) => {
      if (e.key === 'Enter' || e.keyCode === 8 || e.target.value === '') {
        dispatch({
          type: 'SEARCH',
          payload: e.target.value,
        });
      }
    };
    return(
   <>
    <nav className="navigation">
        <Link to="/">
        <h3 className="navigation-heading">Video-Zone</h3>
        </Link>
       {pathname === '/' && (
             <ul className='navbar-search'>
            <input
              className='search-box'
              value={input}
              onKeyDown={(e) => searchHandler(e)}
              onChange={(e) => setInput(e.target.value)}
              type='search'
              placeholder='Search with name'
            />
            <span className="search-icon">
   <i className="fas fa-search" aria-hidden="true"></i></span>
         </ul>
        )}
         
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
