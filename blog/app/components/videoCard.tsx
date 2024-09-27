import React from "react";

const VideoCard = ({ video }) => {
  const { title, platform, url } = video;
  const videoId = url.split("v=")[1];

  return (
    <div className="video-card">
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h3>{title}</h3>
      <p>{platform}</p>
    </div>
  );
};

export default VideoCard;
