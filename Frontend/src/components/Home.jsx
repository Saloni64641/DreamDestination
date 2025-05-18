import React from "react";
import { NavLink } from "react-router-dom";
import Popular from "./Popular";
import Hotels from "./Hotels";
import Activities from "./Activities";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="w-full relative">
          <div>
            <img
              src="https://i.redd.it/f4uwvr6zgeg41.jpg"
              className="w-full object-cover h-[80vh]"
              alt=""
            />
          </div>
          <div className="bg-[rgba(16,24,40,0.6)] absolute top-0 w-full h-full z-10">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-5xl text-white font-bold">
                Welcome to Dream Destination Holidays
              </h1>
              <p className="text-white text-lg mt-4">
                Your dream vacation is just a click away!
              </p>
              <button className="mt-6 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 ease-in-out cursor-pointer">
                <NavLink to="/destination">Explore Now</NavLink>
              </button>
            </div>
          </div>
        </div>
        <Popular />
        <Hotels />
        <Activities />
      </div>
    </>
  );
};

export default Home;
