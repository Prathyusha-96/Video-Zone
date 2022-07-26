import "./App.css"
import MockAPI from "./Mockman/Mockman";
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./Components";
import { SingleVideo, VideoListing } from "./Pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/mockman" element={<MockAPI />} />
       <Route path="/Video" element={<VideoListing />} /> 
       <Route path="/singlevideo/:videoID" element={<SingleVideo />} />
       </Routes>
      </div>
      
  );
}

export default App;
