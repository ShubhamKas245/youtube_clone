import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-60 shadow-lg">
      <img className="rounded-lg" alt="thumbnails" src={thumbnails?.medium?.url} />
      <ul className="p-2" >
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideo=({info})=>{
  return(
   <div className="m-1 p-1 border border-red-900">
    <VideoCard info={info} />
   </div>
  )
}

export default VideoCard;

