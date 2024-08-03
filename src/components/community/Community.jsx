import React from "react";

const Community = () => {
  return (
    <>
      <div className="community flex flex-col gap-6 lg:flex-row items-start lg:items-center px-4 lg:px-32 text-white bg-[#F15B21] py-12">
        <div className=" flex flex-col lg:w-[75%] gap-3">
          <div className=" font-normal text-3xl">Get Involved Today!</div>
          <div className="text-lg leading-6">
            Become a part of the community and contribute to Ravencoin’s global
            decentralized network of miners, contributors, traders, and
            developers.
          </div>
        </div>

        <div className="btn">
          <button className=" border-2 rounded-md px-5 py-3 transition-all hover:bg-white hover:text-black">
            Join the Community
          </button>
        </div>
      </div>
    </>
  );
};

export default Community;
