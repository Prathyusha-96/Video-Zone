import "./VideoCard.css";


const VideoCard = () => {
    return (

<div className="video-card">
      <div className="video-header">
        <img
          src="https://i3.ytimg.com/vi/S9DnGzgyoX8/maxresdefault.jpg"
          className="img-responsive  grid-position"
        ></img>
      </div>
      <div className="video-body">
        <img
          src="https://i3.ytimg.com/vi/nlR_8ZRLOjI/maxresdefault.jpg"
          className="img-responsive img-circle video-body-img"
        ></img>
        <div >
          <h3 className="video-title">
           Home Decor || DIY Crafts </h3>
          <span className="author">Aloha Crafts</span>
          </div>
          </div>
    </div>
       
    );
};
export { VideoCard }