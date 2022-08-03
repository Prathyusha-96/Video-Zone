import React from "react";
import {useParams} from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "../../Components";
import { useAuth, useData } from "../../context";
import { likedHandler, watchLaterHandler } from "../../utils";
import "./SingleVideo.css";

const SingleVideo = () => {
    const { videoID } = useParams();
    const { state, dispatch } = useData();
    const { token } = useAuth();
    const [copy, setCopy] = useState();
    const video = state.videos?.find((element) => element._id === videoID);
    const isLiked = state.like.find((element) => element._id === video._id);
  const isInWatchLater = state.watchlater.find(
    (element) => element._id === video._id);

    const copyHandler = () => {
      navigator.clipboard.writeText(
        `https://video-zone-app.netlify.app//singlevideo/${videoID}`
      );
      setCopy(true);
    };
    return (
        <>
        <div className='videoplayer'>
        <Sidebar />
        <div className='play-container'>
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${video?.youtubeID}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen=''
          ></iframe>
          <div className="video-footer">
            <div className="footer-title">
            <div className="video-heading">{video?.title}</div>
            
           <div className="video-numbers">
            <div className="video-viewcount">{video?.viewcount} .
            <span>{video?.releasedate}</span>
            </div>
            </div>
            <div className="footer-btn">
              <button onClick={() => likedHandler(video, token, dispatch, isLiked)}
              className={
                isLiked
                  ? 'btn btn-action is-liked'
                  : 'btn btn-action btn-icon'
              }>
                <i className="fas fa-thumbs-up"></i>
                {isLiked ? "Liked" : "Like"} 
              </button>
              <button  onClick={() => copyHandler()}
               className={
                copy
                  ? 'btn btn-action is-liked'
                  : 'btn btn-icon btn-icon'
              }>
                <i className="fas fa-save"></i> 
                {copy ? 'Copied' : 'Copy Link'}
              </button>
              <button 
              onClick={() =>
                watchLaterHandler(video, token, dispatch, isInWatchLater)
              }
              className={
                isInWatchLater
                  ? 'btn btn-action isin-watchlater  '
                  : 'btn btn-action btn-icon'
              }
              >
                <i className="fas fa-clock"></i>Watch Later
              </button>
            </div>
            </div>
            <div className="video-content">
              <img className="avatar avatar-xs" 
              src={video?.channelimg} 
              alt="img" />
              <h5 className="video-author">{video?.channelname}</h5>
              </div>
            <p className="video-description">{video?.description}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};
        
   export { SingleVideo }