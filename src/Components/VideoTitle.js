import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-4 px-14 text-xl rounded-lg hover:bg-white/80 cursor-pointer">
          Play
        </button>
        <button className="bg-gray-500/50 py-4 px-12 text-xl rounded-lg mx-2 cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
