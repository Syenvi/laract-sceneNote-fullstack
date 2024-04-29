// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMovieDetail } from "../services/movie/useMovieDetail";
import {
  FetchDailymotionVideoThumbnail,
  GetUrlFromVideo,
  formatDate,
} from "../utils/functions";
import { useEffect, useState } from "react";

const DetailMovie = () => {
  const { data, isLoading } = useMovieDetail();
  const { movie, episodes } = data;
  const [thumbnails, setThumbnails] = useState([]);
  useEffect(() => {
    const fetchThumbnails = async () => {
      const thumbnailsArray = await Promise.all(
        episodes?.map(async (item) => {
          const getUrl = await GetUrlFromVideo(item.video);
          const { thumbnail } = await FetchDailymotionVideoThumbnail(
            getUrl.finalUrl
          );
          return thumbnail;
        })
      );
      setThumbnails(thumbnailsArray);
    };

    fetchThumbnails();
  }, [episodes]);

  return (
    <div className="">
      <header className="w-full relative z-0">
        <img
          src={movie?.thumbnail}
          alt=""
          className="w-full h-[300px] object-cover rounded-lg brightness-50"
        />
        <div className="absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h1 className="text-white">{movie?.title}</h1>
        </div>
      </header>
      <main className="w-3/4 rounded-lg bg-white mt-[-100px] relative z-10 max-w-screen-lg mx-auto grid grid-cols-3">
        <section className="col-span-2 flex flex-col  m-4">
          {episodes?.length >= 0 &&
            thumbnails?.map((thumbnail, index) => (
              <Link
                key={index}
                to={`/${movie.excerpt}/episode/${episodes[index].episode}`}
                className="items-center gap-4 hover:bg-slate-100 border-t-2 flex duration-300 cursor-pointer"
              >
                <img
                  src={thumbnail}
                  alt=""
                  className="w-[100px] h-[100px] object-cover"
                />
                <h3 className="text-sm text-black flex-[2]">
                  Episode {episodes[index].episode}
                </h3>
                <p className="text-xs text-black flex-1">
                  {formatDate(episodes[index].created_at)}
                </p>
              </Link>
            ))}
          {episodes?.length == 0 && "Nothing Episode List"}
        </section>
        <aside className="col-span-1 text-sm text-black border-l-2 p-4">
          Ni juga belum tahu mo diisi apaan
        </aside>
      </main>
    </div>
  );
};

export default DetailMovie;
