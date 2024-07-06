import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className="bg-black mx-auto px-4 py-44">
        <div className="text-white text-center">
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold font-primary mb-5">
            Welcome to Our Blog!
          </h1>
          <p className="text-gray-100 lg:w-3/5 mx-auto font-primary mb-5 ">
            Start your Blog today and join a community of writers and readers
            who are passionate about sharing their stories and ideas. We offer
            everything you nedd to get started, from helpful tips and tutorials
          </p>
        </div>
        <div className="flex justify-center items-center bg-black">
          <button className="text-white font-medium  bg-black hover:text-orange-500 inline-flex items-center py-1 px-4">
            Learn More
            <span>
              <FaArrowRight className="mt-1 ml-2" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
