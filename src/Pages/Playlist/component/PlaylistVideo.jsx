import React from 'react';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../../../Components';
import { useData } from '../../../context';
import PlaylistCard from './PlaylistCard';

export const PlaylistVideo = () => {
  const { playlistId } = useParams();
  const { state } = useData();
  const isInPlaylistVideo = state.playlists.find(
    (element) => element._id === playlistId
  );
  const { videos } = isInPlaylistVideo;

  return (
    <div>
      <div className='home-page'>
        <Sidebar />
      <section className='videos-section'>
        <div className='videos-container'>
          {videos.length > 0 ? (
            videos.map((item) => (
              <PlaylistCard
                item={item}
                listId={playlistId}
                isInPlaylistVideo={isInPlaylistVideo}
                key={item._id}
              />
            ))
          ) : (
            <h1 className='text text-center'>
              Looks like you haven't Added anything yet.
            </h1>
          )}
        </div>
        </section>
      </div>
    </div>
  );
};