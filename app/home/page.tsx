import {
  Trending,
  action,
  adventure,
  comedy,
  documentary,
  family,
  genres,
  history,
  mystery,
  popular,
  top_rated,
  upComing,
} from "@/api/api";
import Footer from "@/components/Footer";
import LogOutButton from "@/components/LogOutButton";
import Section from "@/components/Section";
import { movie } from "@/types/types";
import Image from "next/image";
import React from "react";

const Home = async () => {
  const comingData = await upComing();
  const trendingData = await Trending();
  const popularData = await popular();
  const top_ratedData = await top_rated();
  const actionData = await action();
  const adventureData = await adventure();
  const comedyData = await comedy();
  const familyData = await family();
  const documentaryData = await documentary();
  const historyData = await history();
  const mysteryData = await mystery();
  const genresData = await genres();

  const upComingMovies = comingData.filter((movie: movie) =>
    movie.genre_ids.includes(16)
  );

  let movie =
    upComingMovies[Math.floor(Math.random() * (upComingMovies.length - 1))];

  const trendingMovies = trendingData.filter((movie: movie) =>
    movie.genre_ids.includes(16)
  );
  const popularMovies = popularData.filter((movie: movie) =>
    movie.genre_ids.includes(16)
  );
  const top_ratedMovies = top_ratedData.filter((movie: movie) =>
    movie.genre_ids.includes(16)
  );

  return (
    <div>
      <div className={`h-screen relative overflow-hidden`}>
        <div className="h-screen w-full bg-gradient-to-t from-black to-transparent absolute -z-30"></div>
        <div className="min-w-[1000px] absolute overflow-hidden h-screen w-full -z-40 ">
          <Image
            className="h-screen absolute -z-40   flex justify-center items-center"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="image"
            width="5000"
            height="5000"
          />
        </div>
        <div className="h-full flex flex-col">
          <header className="flex justify-between items-center p-5">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={"/logo.png"}
                alt="image"
                width="1000"
                height="1000"
                className="w-28"
              />
              <p className="text-[#e10812] -m-2 font-semibold">Animation</p>
            </div>
            <LogOutButton />
          </header>
          <main className="flex-1 flex flex-col justify-center items-start text-white p-5">
            <h2 className="font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[650px] !leading-normal overflow-ellipsis overflow-hidden line-clamp-2">
              {movie.title}
            </h2>
            <p className="text-white opacity-70 mb-3 max-w-[600px] overflow-ellipsis overflow-hidden line-clamp-3">
              {movie.overview}
            </p>
          </main>
        </div>
      </div>
      <div className="sections bg-black p-5 text-white flex flex-col justify-center items-center w-full">
        <Section
          genres={genresData.genres}
          movie={upComingMovies}
          title="Upcoming"
        />
        <Section
          genres={genresData.genres}
          movie={trendingMovies}
          title="Trending"
        />
        <Section
          genres={genresData.genres}
          movie={popularMovies}
          title="Popular"
        />
        <Section
          genres={genresData.genres}
          movie={top_ratedMovies}
          title="Top Rated"
        />
        <Section genres={genresData.genres} movie={actionData} title="Action" />
        <Section
          genres={genresData.genres}
          movie={adventureData}
          title="Adventure"
        />
        <Section genres={genresData.genres} movie={comedyData} title="Comedy" />
        <Section genres={genresData.genres} movie={familyData} title="Family" />
        <Section
          genres={genresData.genres}
          movie={mysteryData}
          title="Mystery"
        />
        <Section
          genres={genresData.genres}
          movie={documentaryData}
          title="Documentary"
        />
        <Section
          genres={genresData.genres}
          movie={historyData}
          title="History"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
