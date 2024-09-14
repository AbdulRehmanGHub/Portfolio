import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "../styles/Home.css";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 cursor-default"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Full Stack Developer with experience in building web
            applications using Modern Technologies.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="relative group">
          <img
            src={heroImage}
            alt="my profile img"
            className="rounded-2xl mx-auto w-1/3 md:w-full duration-700 hover:scale-105 hover:filter hover:grayscale"
          />
          {/* Star elements */}
          <div className="absolute top-0 left-0 w-5 h-5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-star1"></div>
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-star2"></div>

          {/* Glowing line elements */}
          <div className="absolute top-0 left-1/2 w-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 animate-line1"></div>
          <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-blue-500 opacity-0 group-hover:opacity-100 animate-line2"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
