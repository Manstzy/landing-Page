import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineChevronRight,
} from "react-icons/md";

const Row = ({ title, fetchUrl, rowID }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchUrl]);
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID)
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID)
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h1 className="font-bold text-white p-4">{title}</h1>
      <div className="flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white rounded-full cursor-pointer absolute z-10 opacity-50 hover:opacity-100 hidden group-hover:block"
          size={40}
        />
        <div id={"slider" + rowID}
          className="overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide w-full relative cursor-pointer"
        >
          {movies.map((items, id) => (
            <Movie items={items} key={id} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full cursor-pointer absolute right-0 opacity-50 hover:opacity-100 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
