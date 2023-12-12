import React from "react";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-[#e10812] rounded-lg p-3 text-white font-semibold text-sm hover:bg-red-800 transition-all cursor-pointer w-full">
      {text}
    </button>
  );
};

export default Button;
