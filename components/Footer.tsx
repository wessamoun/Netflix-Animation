import React from "react";

const Footer = () => {
  return (
    <div className="text-white text-center flex flex-col justify-center items-center gap-2 pt-16 text-xs pb-5 bg-black">
      <div>© 2023 Wessam. All rights reserved.</div>

      <div>
        About this website: built with React & Next.js, TypeScript, Tailwind
        CSS, Framer Motion, TMDB API, and Vercel hosting.
      </div>
    </div>
  );
};

export default Footer;
