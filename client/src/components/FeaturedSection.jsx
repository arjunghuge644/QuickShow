import React, { use } from "react";
import {useNavigate} from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import BlurCircle from "./BlurCircle";
import MovieCard from "./MovieCard";
import { dummyShowsData } from "../assets/assets.js";


const FeaturedSection = () => {
    const navigate=useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCircle top="0" right="-80px" />
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <button
          onClick={() => navigate("/movies")}
          className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer"
        >
          View All{" "}
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-6 mt-6">
        {dummyShowsData.slice(0, 4).map((show) => (
          <div key={show._id} className="w-full sm:w-[48%] lg:w-[23%]">
            <MovieCard movie={show} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm mb-5 bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default FeaturedSection;
