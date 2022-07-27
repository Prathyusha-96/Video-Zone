import React from "react";
import {useParams} from "react-router-dom";
import { Sidebar } from "../../Components";
import { useData } from "../../context";
import "./SingleVideo.css";

const SingleVideo = () => {
    const { videoID } = useParams();
    const { state } = useData();
    const findVideo = state.videos?.find((element) => element.youtubeID === videoID);

    return (
        <>
        <div className='videoplayer'>
        <Sidebar />
        <div className='play-container'>
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${findVideo?.youtubeID}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen=''
          ></iframe>
          <div className="video-footer">
            <div className="footer-title">
            <div className="video-heading">{findVideo?.title}</div>
            
           <div className="video-numbers">
            <div className="video-viewcount">{findVideo?.viewcount} .
            <span>{findVideo?.releasedate}</span>
            </div>
            </div>
            <div className="footer-btn">
              <button className="btn btn-icon">
                <i className="fas fa-thumbs-up"></i> Like
              </button>
              <button className="btn btn-icon">
                <i className="fas fa-save"></i> Save
              </button>
              <button className="btn btn-icon">
                <i className="fas fa-clock"></i>Watch Later
              </button>
            </div>
            </div>
            <div>
            <h5 className="video-author">{findVideo?.channelname}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
        
   export { SingleVideo }