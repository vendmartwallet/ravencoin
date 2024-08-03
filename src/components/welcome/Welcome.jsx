import React from "react";
import Share from "../../assets/gold.svg";

const Welcome = () => {
  return (
    <>
      <div className="welcome flex flex-col items-center py-24 px-5  gap-8 bg-[#2E3E80]">
        <div className=" text-2xl lg:text-4xl font-semibold text-white">
          Welcome to Ravencoin
        </div>

        <div className=" text-white lg:w-[65%] text-center">
          Ravencoin is a protocol based on a fork of the Bitcoin code which adds
          features specifically focused on allowing tokens to be issued on the
          Ravencoin blockchain. These tokens can have whatever properties the
          issue of the token decides - so they can be limited in quantity, named
          and be issued as securities or as collectibles.
        </div>

        <div className=" text-white text-center">
          You can make your own security token within minutes and have it trade
          worldwide.
        </div>

        <div className=" border-[0.1px] border-[#4C60B1] lg:w-[65%]"></div>

        <div className=" flex flex-col items-center lg:flex lg:flex-row gap-16">
          <div className=" lg:mt-20">
            <img src={Share} alt="" width="150px" />
          </div>

          <div className=" flex  flex-col items-center lg:grid">
            <div className="catalouge flex flex-wrap justify-center gap-8 uppercase lg:text-base font-medium text-white">
              <div>Project Shares</div>
              <div>Virtual Goods</div>
              <div> Physical & Digital Assets</div>
              <div>Credit</div>
            </div>

            <div className=" text-white text-xl mt-8">
              Representing a share of a project
            </div>

            <div className=" lg:flex items-center pt-5 lg:justify-between text-white">
              <ul className=" flex flex-col gap-3">
                <li>Gold bar</li>
                <li>Silver coins</li>
                <li>Physical Euros</li>
              </ul>
              <ul className=" flex flex-col gap-3">
                <li>Land Deeds</li>
                <li>DC Comics Presents #26</li>
                <li>
                  Energy credits (Electricity, Wood, <br /> Gas, Oil, Wind)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
