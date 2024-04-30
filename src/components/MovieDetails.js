import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { closeDetail } from "../utils/selectedMovieSlice";
import { useMovieDetail } from "../hooks/useMovieDetail";
import { IMG_CDN_URL } from "../utils/constant";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { videos, videoDetails } = useMovieDetail();

  if (!videoDetails) return null;

  const {
    overview,
    title,
    poster_path,
    genres,
  } = videoDetails;
  return (
    <div className="flex xl:justify-center">
      
      <div className=" bg-slate-700  p-10 rounded-r-xl lg:w-3/5 sm:flex sm:justify-center">
        <div className="flex flex-col">
          <div>
            <h1 className="font-semibold text-white text-4xl mb-3 sm:text-5xl">
              {title}
            </h1>
          </div>
          <div className="flex flex-col-reverse sm:max-h-[500px] sm:items-center sm:flex-row">
            <div className="sm:basis-[26%] h-full basis-32">
              <img
                className="object-cover w-full h-48 sm:h-full"
                alt="poster"
                src={IMG_CDN_URL+ poster_path}
              />
            </div>
            <div className="sm:basis-[74%] px-1">
              {videos && (
                <div className="w-full">
                  <iframe
                    className="w-full aspect-video"
                    src={
                      "https://www.youtube-nocookie.com/embed/" +
                      videos.key +
                      "?si=WEeDnA5Aduu-Z2Al&amp;rel=0&autoplay=1"
                    }
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
          <div className="text-white font-semibold pt-2">
            <ul className="flex gap-5 ">
              {genres.map((gen) => (
                <li
                  key={gen.id}
                  className="border-2 border-gray-500 text-xs sm:text-base py-1 px-3 rounded-full "
                >
                  {gen.name}
                </li>
              ))}
            </ul>
            <p className="border-b-2 border-gray-600 py-2">{overview}</p>
          </div>
        </div>
        <button
        className="  pb-[32rem]"
        onClick={() => dispatch(closeDetail())}
      >
       ❌
      </button>

      </div>  
    </div>
    
  );
};

export default MovieDetails;