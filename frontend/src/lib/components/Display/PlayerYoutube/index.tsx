import React from 'react';
import VideoWidget from './VideoWidget';


const PlayerYoutube = ({selectedVideo}:any) => {


  return (
    <div className="video-page">
      <VideoWidget url={selectedVideo} />
    </div>
  );
};

export default PlayerYoutube;