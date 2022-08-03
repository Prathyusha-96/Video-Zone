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
        <main>
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
            </main>
            );

    
}
export { VideoListing }

 {/* <button className="btn btn-primary">All</button>
                    <button className="btn btn-primary">Movies</button>
                    <button className="btn btn-primary">TEDx Talks</button>
                    <button className="btn btn-primary">Music</button>
                    <button className="btn btn-primary">Food</button> */}