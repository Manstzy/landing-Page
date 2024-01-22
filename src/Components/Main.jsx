import axios from "axios";

import React, { useEffect, useState } from "react";
import requests from "../request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  // console.log(movies);
  const truncateString = (str , num) => {
    if (str?.length > num) {
      return str.slice(0 , num) + "..."
    } else {
      return str
    }
  }

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-[550px]">
        <div className="absolute w-full h-[550px] bg-gradient-to-tr from-black "></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute top-[20%] p-8">
        <h1 className="text-white font-bold md:text-4xl lg:text-5xl">
          {movie?.title}
        </h1>
        <div className="flex gap-4">
          <button className="mt-4 bg-gray-300 text-black flex items-center justify-center px-4 py-2">
            Play
          </button>
          <button className="mt-4 bg-black text-white border border-white flex items-center justify-center px-4 py-2">
            Watch Later
          </button>
        </div>
        <p className="mt-3 text-gray-300 text-sm">Released : {movie?.release_date}</p>
        <p className="md:max-w-[50%] lg:max-w-[30%]">{truncateString(movie?.overview , 150)}</p>
      </div>
    </div>
  );
};

export default Main;
