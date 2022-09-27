import React from "react";


            const src =
            "https://vimeo.com/showcase/9854085/video/352786895";
          
          const Video = () => {
            return (
              <video controls width="100%">
                <source src={src} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
              </video>
            );
          };
            
   

export default Video;

