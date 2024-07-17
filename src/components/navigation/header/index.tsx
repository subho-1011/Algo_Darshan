"use client";

import React from "react";
import { HeaderDropdown } from "./HeaderDropdown";

const Header = () => {
  return (
    <header className="flex bg-primary text-primary-foreground items-center justify-center h-[68px]">
      <div className="flex-grow flex justify-between items-center h-full max-w-7xl">
        <h1 className="flex h-full justify-center items-center text-3xl font-bold">
          Algo Darshan
        </h1>
        <div className="flex h-full justify-center items-center">
          <HeaderDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
