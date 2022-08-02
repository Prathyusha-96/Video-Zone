import { Sidebar } from "../../Components";
import { useData } from "../../context";
import { PlaylistFolder } from "./component/PlaylistFolder";
import "./Playlist.css";

export const Playlist = () => {
  const { state } = useData();
  const isPlaylistFill = state.playlists.length > 0;

  return (
    <div>
      <div className="home-page">
        <Sidebar />
        <section className="videos-section">
        <div className="videos-container">
          {isPlaylistFill ? (
            state.playlists.map((element) => (
              <PlaylistFolder key={element._id} element={element} />
            ))
          ) : (
            <h3 className="text text-center">
              Looks like you haven't create playlist
            </h3>
          )}
        </div>
        </section>
      </div>
    </div>
  );
};