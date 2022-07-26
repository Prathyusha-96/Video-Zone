import React from "react";
import "./VideoCard.css";
import { useNavigate } from "react-router-dom";


const VideoCard = ({item}) => {
  const navigate = useNavigate();
  const{youtubeID, thumbnail, title, channelname, channelimg, viewcount, releasedate} = item;

  const singleVideoPage = () => {
    navigate(`/singlevideo/${youtubeID}`)
  }
    return (
      <div className="video-card">
      <div className="video-header" onClick={() => singleVideoPage()} >
        <img
          src={thumbnail}
          className="img-responsive" />
      </div>
      <div className="video-body">
        <img
          src={channelimg}
          className="img-responsive img-circle video-body-img"
        ></img>
       <div>
          <h3 className="video-title">
           {title}</h3>
           <span>
           <i className='icon fas fa-ellipsis-v'></i>
           </span>
            <div className="author">{channelname}</div>
           <div className="views">{viewcount} .  
            <span>{releasedate}</span>
           </div>
         </div>
          </div>
          </div>
       
    );
};
export { VideoCard }

        



  