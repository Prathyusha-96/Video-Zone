import { useNavigate } from 'react-router-dom';
import { useAuth, useData } from '../../../context';
import { removePlaylist } from '../../../utils/playListUtils';

export const PlaylistFolder = ({ element }) => {
  const navigate = useNavigate();
  const { _id, title, videos } = element;
  const { dispatch } = useData();
  const { token } = useAuth();

  const playlistVideoHandler = () => {
    navigate(`/playlist/${_id}`);
  };

  return (
    <>
      <div className='video-card playlist-card'>
        <div onClick={() => playlistVideoHandler()} className='video-header'>
          <img className='img-responsive' src={videos[0]?.thumbnail}  />
          <div className='playlist-card--number'>
            <p>{videos.length}</p>
          </div>
        </div>
        <header className='card-heading playlist-heading'>
          {title}
          <i
            onClick={() => removePlaylist(_id, token, dispatch)}
            className='playlist-delete--icon fas fa-trash-alt'
          ></i>
        </header>
      </div>
    </>
  );
};