import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero py-28 flex flex-col px-6 items-center gap-16">
        <div className=" text-3xl text-center lg:w-[48%]">
          Ravencoin is a peer-to-peer blockchain, handling the efficient
          creation and transfer of assets from one party to another.
        </div>

        <div className=" flex gap-5 lg:gap-8">
          <button className=" text-base border-none hover:bg-[#b34114f0] transition-all rounded-md px-4 lg:px-8  py-4 text-white bg-[#F15B21]">
            Get Your Wallet
          </button>
          <button className=" border-2 text-base border-[#F15B21] transition-all hover:bg-[#F15B21] hover:text-white rounded-md  px-4 lg:px-8 py-4 bg-white">
            Buy Ravecoin
          </button>
        </div>

        <div className=" flex items-center gap-6">
          <span>
            <FaPlayCircle size="35" color="#2E3E80" />
          </span>
          <span className=" font-medium">What is Ravencoin?</span>
        </div>

        <div className=" flex flex-col gap-5 text-center text-lg text-[#2B7AE2] font-medium">
          <span>Ravencoin Wiki</span>
          <span>Ravencoin Foundation</span>
          <span>Ravencoin Dashboard</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
