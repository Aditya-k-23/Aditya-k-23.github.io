"use client";

import React, { useEffect, useState } from "react";
import { fetchVideos } from "../../lib/fetchVideos";
import VideoCard from "../components/videoCard";

const VideosPage = () => {
  const [videos, setVideos] = useState<
    { id: number; title: string; platform: string; url: string }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page

  useEffect(() => {
    const getVideos = async () => {
      const videosData = await fetchVideos();
      setVideos(videosData);
    };

    getVideos();
  }, []);

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = videos.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(videos.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className="page-title">My Videos</h1>
      <div className="video-grid">
        {currentItems.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
