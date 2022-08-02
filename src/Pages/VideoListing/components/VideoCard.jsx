import React from "react";
import { useState } from "react";
import "./VideoCard.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useData} from "../../../context";
import { addToHistory } from "../../../utils/historyUtils";
import { watchLaterHandler } from "../../../utils";
import {
     addToVideoPlaylist,
     playlistHandler,
     removeVideoFromPlaylist
} from "../../../utils/playListUtils";

 const VideoCard = ({item, listId, isInPlaylistVideo}) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { modal, setModal, modalData, dispatch, setModalData, state } =
    useData();
  const [showModal, setShowModal] = useState();
  const [playlistName, setPlaylistName] = useState("");
  const isInWatchLater = state.watchlater.find(
    (element) => element._id === item._id
  );

  const createHandler = () => {
    playlistName && playlistHandler(dispatch, playlistName, token);
    setPlaylistName("");
  };

  const{_id,  thumbnail, title, channelname, channelimg, viewcount, releasedate} = item;

  const singleVideoPage = () => {
    navigate(`/singlevideo/${_id}`);
    token && addToHistory(item, token, dispatch)
  };
  const addToPlaylist = () => {
    if (token) {
      setModal(true);
      setModalData(item);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
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
           <div className="ellipse">
           <i 
           onClick={() => setShowModal(!showModal)}
           className="icon fas fa-ellipsis-v"></i>
           <div className={`modal ${showModal ? "modal-show" : "modal-hide"}`}>
            <p
              onClick={() => {
                isInPlaylistVideo
                  ? removeVideoFromPlaylist(dispatch, listId, item._id, token)
                  : addToPlaylist();
              }}
              className="modal-text"
            >
              <i className="fas fa-save"></i>
              {isInPlaylistVideo ? "Remove from Playlist" : "Save To Playlist"}
            </p>

            <p
              onClick={() =>
                watchLaterHandler(item, token, dispatch, isInWatchLater)
              }
              className="modal-text"
            >
              <i className="fas fa-clock"></i>
              {isInWatchLater
                ? "Remove from Watch Later"
                : "Add To Watch Later"}
            </p>
          </div>
        </div>
            <div className="author">{channelname}</div>
           <div className="views">{viewcount} .  
            <span>{releasedate}</span>
           </div>
           </div>
           </div>
         <div className={`modal-wrapper ${modal ? "modal-show" : "modal-hide"}`}>
        <div className="playlist-modal">
          <h4 className="playlist-text">
            Save To
            <i
              className="playlist-text playlist-close fas fa-times"
              aria-hidden="true"
              onClick={() => setModal(!modal)}
            />
          </h4>

          {state.playlists.length > 0 &&
            state.playlists.map((list) => {
              const inPlaylist = list.videos?.some(
                (list) => list._id === modalData._id
              );
              
              return (
                <div key={list._id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={inPlaylist}
                      onChange={(e) =>
                        e.target.checked
                          ? addToVideoPlaylist(
                              dispatch,
                              list._id,
                              modalData,
                              token
                            )
                          : removeVideoFromPlaylist(
                              dispatch,
                              list._id,
                              modalData._id,
                              token
                            )
                      }
                    />
                    <span className="playlist-title">{list.title}</span>
                  </label>
                </div>
              );
              
            })}
          <form>
            <label className="playlist-text">
              Name:
              <input
                type="text"
                className="playlist-input"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
              />
            </label>
            </form>
          <div>
            <button className="playlist-btn" onClick={() => createHandler()}>
              Create New Playlist
            </button>
          </div>
        </div>
        
      </div>
    
      
         
         </div>
          </>
       
    );
};
export { VideoCard }

        



  