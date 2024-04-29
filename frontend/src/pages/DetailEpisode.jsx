import React, { useState, useEffect } from "react";
import { useMovieDetail } from "../services/movie/useMovieDetail";
import { formatDate } from "../utils/functions";

const DetailEpisode = () => {
  const { data, isLoading } = useMovieDetail();
  return (
    <div className="grid grid-cols-4 gap-2">
      <main className="lg:col-span-3 col-span-4 flex flex-col gap-4">
        <header className="bg-slate-100 p-4 rounded-lg">
          <h3>{`${data?.title} Episode ${data.episode}`}</h3>
          <p className="text-sm">{`Added on ${formatDate(
            data?.created_at
          )}`}</p>
        </header>
        <section className="video-stream bg-slate-100 p-4 rounded-lg h-[450px]">
          <iframe
            src={data?.video}
            frameborder="0"
            allowfullscreen="true"
            className="w-full h-full rounded-lg"
          ></iframe>
        </section>
        <section className="bg-slate-100 p-4 rounded-lg">
          <h1 className="mb-4">Notes</h1>
          <div className="flex flex-wrap gap-4">
            {data?.notes?.map((note) => (
              <p className="p-4 rounded-md bg-slate-200">{note.note}</p>
            ))}
          </div>
        </section>
        <section className="bg-slate-100 p-4 rounded-lg">
          <h1 className="mb-4">Image Preview</h1>
          <section className="columns-1 lg:columns-3 gap-4 [&>img:not(:first-child)]:mt-4 ">
            {data?.images?.map((image) => (
              <img
                src={image.image}
                alt={data?.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            ))}
          </section>
        </section>
      </main>
      <aside className="hidden lg:flex col-span-1 bg-slate-100 p-4 pb-20 rounded-md self-start">
        Blm tau mo dibikin apa
      </aside>
    </div>
  );
};

export default DetailEpisode;
