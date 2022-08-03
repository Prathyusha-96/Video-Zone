import "./App.css"
import MockAPI from "./Mockman/Mockman";
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./Components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { SingleVideo, 
  VideoListing, 
  Login, 
  Signup, 
  Like, 
  Watchlater, 
  Playlist,
  History  } from "./Pages";
import { useAuth } from "./context";
import { PlaylistVideo } from "./Pages/Playlist/component/PlaylistVideo";

function App() {
  const { token } = useAuth();
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Navbar />
      <Routes>
       <Route path="/mockman" element={<MockAPI />} />
       <Route path="/" element={<VideoListing />} /> 
       <Route path="/singlevideo/:videoID" element={<SingleVideo />} />
       <Route path="/like" element={token ? <Like /> : <Login />}></Route>
        <Route
          path="/watchlater"
          element={token ? <Watchlater /> : <Login />}
        ></Route>
        <Route
          path="/playlist"
          element={token ? <Playlist /> : <Login />}
        ></Route>
        <Route path="/playlist/:playlistId" element={<PlaylistVideo />}></Route>
        <Route
          path="/history"
          element={token ? <History /> : <Login />}
        ></Route>
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       </Routes>
      </div>
      
  );
}

export default App;
