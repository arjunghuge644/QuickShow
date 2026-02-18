import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import ReactPlayer from "react-player";
import BlurCircle from "./BlurCircle";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />
        <ReactPlayer
          url={currentTrailer.videoUrl}
          controls={true}
          className="mx-auto max-w-full"
          width="960px"
          height="540px"
        />
      </div>
      {/* Trailer Images */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {dummyTrailers.map((trailer, index) => (
          <img
            key={index}
            src={trailer.image}
            alt="trailer"
            onClick={() => setCurrentTrailer(trailer)}
            className="w-52 rounded-lg cursor-pointer hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
