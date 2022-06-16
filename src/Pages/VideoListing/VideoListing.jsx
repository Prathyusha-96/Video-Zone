import "./VideoListing.css";
import { Sidebar } from "../../Components";
import { VideoCard } from "./components/VideoCard";

const VideoListing = () => {
    return(
        <>
           <div className="home-page">
        <Sidebar />
            <section className="videos-section">
                <div className="video-categories">
                    <button className="btn btn-primary">All</button>
                    <button className="btn btn-primary">Food</button>
                    <button className="btn btn-primary">Crafts</button>
                    <button className="btn btn-primary">Music</button>
                    <button className="btn btn-primary">Shows</button>
                </div>
            <div className="videos-container">
               <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
               </div>
               </section>
            </div>
            </>
            );
    
}
export { VideoListing }