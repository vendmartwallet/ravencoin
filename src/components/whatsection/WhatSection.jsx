import React from "react";
import BirdImg from "../../assets/bird.png";
import { IoIosCheckmark } from "react-icons/io";

const WhatSection = () => {
  const Details = (props) => {
    return (
      <>
        <div className=" flex items-center gap-2">
          <div>
            <IoIosCheckmark size="28" color="#F15B21" />
          </div>
          <div>{props.text}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className=" bg-[#F1F5F8] flex justify-between py-20 lg:py-0 lg:h-[70vh] px-4 lg:px-32">
        <div className="texts lg:w-[55%]">
          <div className=" lg:pt-20 pb-3 text-3xl font-normal">
            What Makes Ravencoin Different from Bitcoin?
          </div>

          <div>
            <Details text="Block reward of 5,000 RVN instead of 50 BTC." />
            <Details text="Block time of 1 minute instead of 10." />
            <Details text="Total coin supply of 21 billion instead of 21 million." />
            <Details text="A new mining algorithm, KAWPOW which allows for more decentralized mining." />
            <Details text="Addition of Asset & Sub-asset issuance, transfer, unique assets, and rewards." />
            <Details text="Future addition of messaging and voting." />
          </div>
        </div>
        <div className="secimg w-[45%] hidden lg:block"></div>
      </div>
    </>
  );
};

export default WhatSection;
