import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  return (
  <div className="flex flex-wrap">
    {videos.map((video)=>(
      <Link to={"/watch?v="+video.id}> <VideoCard info={video} key={video.id} /></Link>
    ))}
  </div>
  );
};

export default VideoContainer;
