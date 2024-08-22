"use client";

import { useRouter } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import Particles from "@/components/magicui/particles";
import { MY_GITHUB_URL, PORTFOLIO_URL } from "@/constants";
import { getGithubProfileImageUrl } from "@/services/github";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getGithubProfileImageUrl().then((res) => {
      if (res) {
        setImageUrl(res);
      }
    });
  }, []);

  return (
    <header className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <span className="w-full whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        <div className="flex w-full bg-primary text-primary-foreground items-center justify-center h-[68px]">
          <div className="flex-grow flex justify-between items-center h-full max-w-7xl">
            <div
              className="z-50 flex h-full justify-center items-center text-3xl font-bold tracking-wide hover:cursor-pointer cursor-pointer"
              onClick={() => router.push("/")}
            >
              Algo Darshan
            </div>
            <div className="flex h-full justify-center items-center gap-3">
              <Avatar
                className="z-50 border border-gray-700 ring-2 ring-gray-400 bg-white cursor-pointer"
                onClick={() => router.push(PORTFOLIO_URL)}
              >
                <AvatarImage src={imageUrl} />
                <AvatarFallback>
                  <RxAvatar />
                </AvatarFallback>
              </Avatar>
              <Avatar
                className="z-50 border border-gray-700 ring-2 ring-gray-400 bg-white hover:cursor-pointer"
                onClick={() => router.push(MY_GITHUB_URL)}
              >
                <AvatarFallback>
                  <FaGithub fill="black" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </span>
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#ffffff"}
        refresh
      />
    </header>
  );
};

export default Header;
