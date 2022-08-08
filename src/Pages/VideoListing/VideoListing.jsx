import React from "react";
import "./VideoListing.css";
import { Sidebar } from "../../Components";
import { VideoCard } from "./components/VideoCard";
import { useData } from "../../context/data-context";
import { searchVideos,sortVideosCategory } from "../../Services/Services";

const VideoListing = () => {
    const { state, dispatch } = useData();
    const sortCategory = (catName) => {
        dispatch({
          type: 'SORT_BY',
          payload: catName,
        });
      };
      const searchByName = searchVideos([...state.videos], state.search);
      const sortByCategory = sortVideosCategory(searchByName, state.sortBy);
    return(
        <>
           <div className="home-page">
        <Sidebar />
            <section className="videos-section">
                <div className="video-categories">
                {state.categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => sortCategory(cat.categoryName)}
                className='btn btn-primary'
              >
                {cat.categoryName}
              </button>
            ))}
             </div>
     <div className="videos-container">
               {sortByCategory.map((item) => (
                <VideoCard item={item} key={item._id} />
               ))}
               </div>
               </section>
            </div>
            </>
            );

    
}
export { VideoListing }

 