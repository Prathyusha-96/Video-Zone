import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css";

 const Sidebar = () => {
  return (
    <aside className='sidebar'>
    <ul className='sidebar-menu'>
      <Link to="/">
        < li className='sidebar-link text'>
        <i className="fas fa-home"></i>
          Home
        </li>
      </Link>
      <Link to="/playlists">
        <li className='sidebar-link text'>
          <i className="fas fa-play-circle"></i> Playlist
        </li>
      </Link>
      <Link to="/liked">
        <li className='sidebar-link text'>
          <i className='fas fa-thumbs-up'></i>Liked
        </li>
      </Link>
      <Link to="/watchlater">
        <li className='sidebar-link text'>
          <i className="fas fa-clock"></i>Watch Later
        </li>
      </Link>
      <Link to="/history">
        <li className='sidebar-link text'>
          <i className="fas fa-history"></i>History
        </li>
      </Link>
    </ul>
 
  </aside>
   
  );
};
export { Sidebar }