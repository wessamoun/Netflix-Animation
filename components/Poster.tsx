"use client";

import { genres, movie } from "@/types/types";
import Image from "next/image";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { motion } from "framer-motion";

interface PosterProps {
  movie: movie;
  genres: genres[];
}

const Poster: React.FC<PosterProps> = ({ movie, genres }) => {
  const genresArray = genres.map((genre) => {
    return movie.genre_ids.includes(genre.id) ? genre.name : null;
  });
  const genresNames = genresArray.filter((genre) => genre !== null);

  if (movie.poster_path) {
    return (
      <Popup
        trigger={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
            className="text-white flex flex-col p-5"
          >
            <Image
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              width={1000}
              height={1000}
              className="button min-w-[200px] w-[200px] hover:scale-110 transition-all rounded-lg"
            />
          </motion.div>
        }
        modal
        nested
        className="!bg-slate-700 !animate-bounce !m-0"
      >
        <div className="bg-black text-white max-w-[800px] max-h-[800px] sm:max-h-[600px] m-2 flex flex-col justify-center rounded-3xl overflow-auto">
          <div className="relative overflow-hidden">
            <div className="h-full w-full bg-gradient-to-t from-black to-transparent absolute"></div>
            <Image
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              width={1000}
              height={1000}
              className="button transition-all rounded-lg "
            />
          </div>
          <div className="text relative h-[300px]">
            <div
              className={`pl-5 text-white ${
                movie.title.length > 40
                  ? "text-sm sm:text-2xl"
                  : "text-base sm:text-4xl"
              } font-bold -mt-6 pb-5 absolute`}
            >
              {movie.title}
            </div>
            <div className="genres flex gap-5 mt-6 px-5 flex-wrap">
              {genresNames.map((genre) => {
                return (
                  <div
                    key={genre}
                    className="bg-red-700 text-white text-sm sm:text-base rounded-full py-1 sm:py-2 px-2 sm:px-4 flex justify-center items-center "
                  >
                    {genre}
                  </div>
                );
              })}
            </div>
            <div className="desc py-3 px-5 overflow-auto">{movie.overview}</div>
            <div className="flex text-xs sm:text-base gap-2 sm:gap-5 px-5 py-3 ">
              <div>
                Rating: {movie.vote_average === 0 ? "N/A" : movie.vote_average}
              </div>
              <div>Release Date: {movie.release_date}</div>
            </div>
          </div>
        </div>
      </Popup>
    );
  }
};

export default Poster;
