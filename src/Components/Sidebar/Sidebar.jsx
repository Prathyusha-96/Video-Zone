import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css";

 const Sidebar = () => {
  return (
    <div className='sidebar'>
    <ul className='sidebar-menu'>
      <Link to="/">
        < li className='sidebar-link text'>
        <i className="icon fas fa-home"></i> Home
        </li>
      </Link>
      <Link to="/playlists">
        <li className='sidebar-link text'>
          <i className="icon fas fa-play-circle"></i> Playlist
        </li>
      </Link>
      <Link to="/like">
        <li className='sidebar-link text'>
          <i className='icon fas fa-thumbs-up'></i>  Liked
        </li>
      </Link>
      <Link to="/watchlater">
        <li className='sidebar-link text'>
          <i className="icon fas fa-clock"></i>  Watch Later
        </li>
      </Link>
      <Link to="/history">
        <li className='sidebar-link text'>
          <i className="icon fas fa-history"></i>  History
        </li>
      </Link>
    </ul>

  </div>

  );
};
export { Sidebar }