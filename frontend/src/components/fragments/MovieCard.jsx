import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, key }) => {
  return (
    <Link
      to={movie.excerpt}
      className="bg-white h-[200px] rounded-lg shadow-lg relative overflow-hidden "
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover hover:scale-105 hover:brightness-50 duration-300"
      />
      <div className="absolute bottom-0 p-4">
        <h1 className="text-base text-white">{movie.title}</h1>
      </div>
    </Link>
  );
};

export default MovieCard;
