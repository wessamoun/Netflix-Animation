"use client";
import { logOut } from "@/firebase/config";
import React from "react";
import Button from "./Button";

const LogOutButton = () => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        logOut();
      }}
    >
      <Button text="Log Out" />
    </div>
  );
};

export default LogOutButton;
