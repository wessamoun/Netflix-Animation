"use client";

import Button from "@/components/Button";
import { signGoogle, signIn, signUp } from "@/firebase/config";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (email: string, password: string) => {
    try {
      const newUser = await signUp(email, password);

      if (!newUser) {
        toast.error("Sign up failed. Please try again.", {
          theme: "dark",
        });
        return;
      } else {
        toast.success("Account created successfully", {
          theme: "dark",
        });
      }
      setEmail("");
      setPassword("");

      const session = await signIn(email, password);
      if (!session) {
        toast.error("Sign in failed. Please try again.", {
          theme: "dark",
        });
      } else {
        router.push("/home");
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div className="bg-black h-screen flex flex-col">
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
      </header>
      <div className="flex-1 flex justify-center items-center">
        <form
          id="form"
          action=""
          className="max-w-[700px] w-full flex flex-col p-5 gap-8 "
        >
          <p className="text-white text-3xl">Sign Up</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="bg-[#333333] text-white border-none outline-none p-3 rounded-md w-full"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="bg-[#333333] text-white border-none outline-none p-3 rounded-md w-full"
          />
          <div
            className="flex justify-stretch"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(email, password);
            }}
          >
            <Button text="Sign Up" />
          </div>
          <div className="text-center text-white w-full flex justify-center flex-col items-center">
            <p>or</p>
            <div
              onClick={() => {
                signGoogle();
              }}
              className="flex gap-5 items-center mt-3 border w-fit py-2 px-4 rounded-full cursor-pointer hover:border-red-700 transition-all"
            >
              <FcGoogle /> Continue with Google
            </div>
          </div>
          <p className="text-white text-center">
            Already have an account?{" "}
            <Link
              href={"/start/signIn"}
              className="text-[#e10812] cursor-pointer"
            >
              {" "}
              Log in
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
