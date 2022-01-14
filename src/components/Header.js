import React from "react";
import logo from "../asset/Tochi.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 min-w-full">
          <div className="text-lg">
            <img src={logo} alt="" width="140px" />
          </div>

          <div className="hidden md:flex space-x-12 items-center">
            <a href="#home" className="text-selected-text">
              Home
            </a>
            <a href="#work" className="text-white">
              My Work
            </a>
            <a href="#client">Clients</a>
            <button className="px-6 py-2 bg-theme font-bold">
              <a href="#hire">Hire Me</a>
            </button>
          </div>
          <div className="md:hidden">
            <span className="material-icons text-4xl">menu</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
