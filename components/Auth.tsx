"use client";

import { auth } from "@/firebase/config";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

interface AuthProps {
  children: React.ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children }) => {
  const useR = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const check = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user.uid));
        router.push("/home");
      } else {
        dispatch(setUser(null));
        router.push("/start");
      }
    });
    return check;
  }, [dispatch, useR]);

  return <div>{children}</div>;
};

export default Auth;
