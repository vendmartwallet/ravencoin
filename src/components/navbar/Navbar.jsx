import React from "react";
import Logo from "../../assets/ravelogo.png";
import { IoMenuSharp } from "react-icons/io5";


const Navbar = () => {
  

  return (
    <>
      <div className="navbar sticky top-0 z-50">
        <div className="navOrange bg-[#F15B21] h-8"></div>
        <div className="nav flex bg-white justify-between items-center px-6 lg:px-32 py-3 border-b">
          <div className="logo w-[60%] md:w-[35%] lg:w-[18%]">
            <img src={Logo} alt="" />
          </div>
          <div className="navs hidden lg:block">
            <ul className=" flex text-sm uppercase gap-6 font-semibold text-[#5A5A5A]">
              <li>Home</li>
              <li>Buy Ravencoin</li>
              <li>Wallets</li>
              <li>Whitepaper</li>
              <li>Community</li>
              <li>Pools</li>
              <li>Updates</li>
              <li>About</li>
              <li>Projects</li>
              <li>Ledger</li>
            </ul>
          </div>
          <div className="menu block lg:hidden">
            <IoMenuSharp size="35" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
