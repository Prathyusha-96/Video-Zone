import "./App.css";
import MockAPI from "./Mockman/Mockman";
import { Routes, Route} from "react-router-dom";
import { Navbar } from "./Components/index";
import { VideoListing } from "./Pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/mockman" element={<MockAPI/>} />
       <Route path="/Video" element={<VideoListing/>} /> 
       </Routes>
      </div>
      
  );
}

export default App;
