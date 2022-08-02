import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../context';
import { deleteVideoHistory } from '../../utils/historyUtils';

export const HistoryCard = ({ item }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState();
  const { dispatch } = useData();
  const { token } = useAuth();

  const{_id,  thumbnail, title, channelname, channelimg, viewcount, releasedate} = item;

  const singleVideoPage = () => {
    navigate(`/singlevideo/${_id}`);
  };

  return (
   
      <div className='video-card'>
        <div className='video-header' onClick={() => singleVideoPage()}>
          <img className='img-responsive' src={thumbnail} alt='img' />
        </div>
        <div className="video-body">
        <img
          src={channelimg}
          className="img-responsive img-circle video-body-img"
        ></img>
        <div>
          <h3 className="video-title">
           {title}</h3>
           <div className="ellipse">
           <i 
           onClick={() => setShowModal(!showModal)}
           className='icon fas fa-ellipsis-v'></i>
           <div className={`modal ${showModal ? 'modal-show' : 'modal-hide'}`}>
            <p
              onClick={() => deleteVideoHistory(_id, token, dispatch)}
              className='modal-text'
            >
              <i className='fas fa-trash'></i>
              Remove from History
            </p>
          </div>
        </div>

        <div className="author">{channelname}</div>
           <div className="views">{viewcount} .  
            <span>{releasedate}</span>
           </div>
           </div>
           </div>
      </div>
    
  );
};