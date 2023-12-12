import movies from "@/api/api";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = async () => {
  const data = await movies();

  const movie =
    data.results[Math.floor(Math.random() * (data.results.length - 1))];
  return (
    <div className={`h-screen relative overflow-hidden`}>
      <div className="h-screen w-full bg-black bg-opacity-80 absolute -z-30"></div>
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
          <Link href={"/start/signIn"}>
            <Button text="Sign In" />
          </Link>
        </header>
        <main className="flex-1 flex flex-col justify-center items-start text-white p-5">
          <h2 className="font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[650px] !leading-normal">
            Unlimited movies, TV shows, and more
          </h2>
          <p className="text-slate-500 mb-3">Ready to watch?</p>
          <Link href={"/start/signUp"}>
            <Button text="Get Started" />
          </Link>
        </main>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
