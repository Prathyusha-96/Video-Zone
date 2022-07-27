import React from "react";
import "./VideoListing.css";
import { Sidebar } from "../../Components";
import { VideoCard } from "./components/VideoCard";
import { useData } from "../../context/data-context";

const VideoListing = () => {
    const { state } = useData();
    return(
        <main>
           <div className="home-page">
        <Sidebar />
            <section className="videos-section">
                <div className="video-categories">
                    <button className="btn btn-primary">All</button>
                    <button className="btn btn-primary">Movies</button>
                    <button className="btn btn-primary">TEDx Talks</button>
                    <button className="btn btn-primary">Music</button>
                    <button className="btn btn-primary">Food</button>
                </div>
            <div className="videos-container">
               {state.videos.map((item) => (
                <VideoCard item={item} key={item._id} />
               ))}
               </div>
               </section>
            </div>
            </main>
            );
    
}
export { VideoListing }