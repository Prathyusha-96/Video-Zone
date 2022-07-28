import "./App.css"
import MockAPI from "./Mockman/Mockman";
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./Components";
import { SingleVideo, VideoListing, Login, Signup, Like, Watchlater } from "./Pages";
import { useAuth } from "./context";

function App() {
  const { token } = useAuth();
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/mockman" element={<MockAPI />} />
       <Route path="/" element={<VideoListing />} /> 
       <Route path="/singlevideo/:videoID" element={<SingleVideo />} />
       <Route path='/like' element={token ? <Like /> : <Login />}></Route>
        <Route
          path='/watchlater'
          element={token ? <Watchlater /> : <Login />}
        ></Route>
       
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       </Routes>
      </div>
      
  );
}

export default App;
