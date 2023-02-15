import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    setVideos(json.items);
  };
  return <div>
    <VideoCard info={videos[0]} />
  </div>;
};

export default VideoContainer;
