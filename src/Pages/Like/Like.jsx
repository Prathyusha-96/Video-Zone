import React from "react";
import { Sidebar } from "../../Components";
import { useData } from "../../context";
import { VideoCard } from "../VideoListing/components/VideoCard";

export const Like = () => {
  const { state } = useData();
  return (
    <div>
      <div className="home-page">
        <Sidebar />
        <section className="videos-section">
        <div className="videos-container">
          {state.like.length > 0 ? (
            state.like.map((item) => <VideoCard item={item} key={item._id} />)
          ) : (
            <h1 className="text text-center">
              No Liked Videos.
            </h1>
          )}
        </div>
        </section>
      </div>
    </div>
  );
};