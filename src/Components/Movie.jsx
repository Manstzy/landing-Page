import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ items }) => {
  const [like, setLike] = useState(false);
  const saveShow = () => {
    setLike(!like)
  }
  return (
    <div className="md:w-[220px] lg:w-[240px] xl:w-[260px] p-2 inline-block relative">
      <img
        className="w-full h-auto object-cover"
        src={`https://image.tmdb.org/t/p/original/${items?.backdrop_path}`}
        alt={items?.title}
      />
      <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
        <p className="flex items-center justify-center h-full w-full">
          {items?.title}
        </p>
        <p onClick={saveShow}>
        {like ? (
        <FaHeart className="absolute top-4 left-4" size={20} />
        ) : (
        <FaRegHeart className="absolute top-4 left-4" size={20} />
        )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
