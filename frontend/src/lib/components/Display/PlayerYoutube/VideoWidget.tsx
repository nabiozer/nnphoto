import React from 'react';
import ReactPlayer from 'react-player';

const VideoWidget = ({ url }:any) => {
  return (
    <div className="video-wrapper">
      <ReactPlayer
        url={url}
        width="100%"
        height="50vh"
      />
    </div>
  );
};

export default VideoWidget;