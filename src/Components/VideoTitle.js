import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black py-1 px-3 md:py-4 md:px-14 text-xl rounded-lg hover:bg-white/80 cursor-pointer">
          Play
        </button>
        <button className="bg-gray-500/50 py-4 px-12 text-xl rounded-lg mx-2 cursor-pointer hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
