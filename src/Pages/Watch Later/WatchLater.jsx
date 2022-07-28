import React from "react";
import { Sidebar } from "../../Components";
import { useData } from "../../context";
import { VideoCard } from "../VideoListing/components/VideoCard";

export const Watchlater = () => {
  const { state } = useData();
  return (
    <div>
      <div className="home-page">
        <Sidebar />
        <section className="videos-section">
        <div className="videos-container">
          {state.watchlater.length > 0 ? (
            state.watchlater.map((item) => (
              <VideoCard item={item} key={item._id} />
            ))
          ) : (
            <h1 className="text text-center">
              No Videos in WatchLater
            </h1>
          )}
        </div>
        </section>
      </div>
    </div>
  );
};