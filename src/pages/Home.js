import React from "react";
import ReactPlayer from "react-player"


function Home () {
  return( 
  
  <>
  <h1>Projects</h1>

    <div className="reactplayer">
    <ReactPlayer
        url="https://vimeo.com/352786895"
        controls
      />
    </div>
    </>

)
};

export default Home;