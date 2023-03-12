import React from 'react';
import { useSelector } from 'react-redux';

const VideoDetail = () => {
  const video = useSelector((state) => state.youtube.selectedVideo);

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe src={videoUrl} title={video.snippet.title}></iframe>
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;






