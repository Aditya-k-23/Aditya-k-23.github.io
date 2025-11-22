import React from "react";

interface VideoCardProps {
  video: {
    id: number;
    title: string;
    platform: string;
    url: string;
  };
}

const VideoCard = ({ video }: VideoCardProps) => {
  const { title, platform, url } = video;
  const videoId = url.split("v=")[1]?.split("&")[0];

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
      <h3 className="video-card-title">{title}</h3>
      <p className="video-card-platform">{platform}</p>
    </div>
  );
};

export default VideoCard;
