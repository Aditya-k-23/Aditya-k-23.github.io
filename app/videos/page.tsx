"use client";

import React, { useEffect, useState } from "react";
import videosJSON from "../../lib/videos.json";
import VideoCard from "../components/videoCard";

const fetchVideos = async () => {
  return videosJSON["videos"];
};

const VideosPage = () => {
  const [videos, setVideos] = useState<
    { id: number; title: string; platform: string; url: string }[]
  >([]);

  useEffect(() => {
    const getVideos = async () => {
      const videosData = await fetchVideos();
      setVideos(videosData);
    };

    getVideos();
  }, []);

  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center">
        Videos & Talks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
