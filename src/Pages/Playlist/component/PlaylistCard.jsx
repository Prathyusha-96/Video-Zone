import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../../context';
import { watchLaterHandler } from '../../../utils';
import { removeVideoFromPlaylist } from '../../../utils/playListUtils';

export default function PlaylistCard({ item, isInPlaylistVideo, listId }) {
  const { token } = useAuth();
  const { dispatch, state } = useData();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();
  const isInWatchLater = state.watchlater.find(
    (element) => element._id === item._id
  );
  const{_id,  thumbnail, title, channelname, channelimg, viewcount, releasedate} = item;


  const singleVideoPage = () => {
    navigate(`/singlevideo/${_id}`);
  };

  return (

      <div className='video-card'>
        <div className='video-header' onClick={() => singleVideoPage()}>
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
           <span className="ellipse">
           <i 
           onClick={() => setShowModal(!showModal)}
           className='icon fas fa-ellipsis-v'></i>
           <div className={`modal ${showModal ? 'modal-show' : 'modal-hide'}`}>
            <p
              onClick={() => {
                 removeVideoFromPlaylist(dispatch, listId, _id, token)
              }}
              className='modal-text'
            >
              <i className='fas fa-save'></i>
              {isInPlaylistVideo ? 'Remove from Playlist' : 'Save To Playlist'}
            </p>

            <p
              onClick={() =>
                watchLaterHandler(item, token, dispatch, isInWatchLater)
              }
              className='modal-text'
            >
              <i className='fas fa-clock'></i>
              {isInWatchLater
                ? 'Remove from Watch Later'
                : 'Add To Watch Later'}
            </p>
          </div>
        </span>
            <div className="author">{channelname}</div>
           <div className="views">{viewcount} .  
            <span>{releasedate}</span>
           </div>
         </div>
         </div>
    </div>
    
  );
}

      