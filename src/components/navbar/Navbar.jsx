import React, { useState } from "react";
import Logo from "../../assets/ravelogo.png";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!showModal);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className="navbar sticky top-0 z-50">
        <div className="navOrange bg-[#F15B21] h-8"></div>
        <div className="nav flex bg-white justify-between items-center px-6 lg:px-32 py-4 border-b">
          <div className="logo w-[60%] md:w-[35%] lg:w-[18%]">
            <img src={Logo} alt="" />
          </div>
          <div className="navs hidden lg:block">
            <ul className=" flex items-center text-sm uppercase gap-6 font-semibold text-[#5A5A5A]">
              <li className="hover:border-b-2 border-[#F15B21] hover:cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:border-b-2 border-[#F15B21] hover:cursor-pointer">
                <Link to="/buyRaven">Buy Ravencoin</Link>
              </li>
              <li className="hover:border-b-2 border-[#F15B21] hover:cursor-pointer">
                <Link to="/wallet">Wallets</Link>
              </li>
              <li className="hover:border-b-2 border-[#F15B21] hover:cursor-pointer">
                <Link to="/whitePaper">Whitepaper</Link>
              </li>
              <li className="hover:border-b-2 border-[#F15B21] hover:cursor-pointer">
                <Link to="/community">Community</Link>
              </li>
              <li className="hover:border-b-2 border-[#F15B21] hover:cursor-pointer">
                <Link to="/pools">Pools</Link>
              </li>
              <li className="hover:border-b-2 border-[#F15B21] hover:cursor-pointer">
                <Link to="/updates">Updates</Link>
              </li>
              <li className="hover:border-b-2 border-[#F15B21] hover:cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:border-b-2 border-[#F15B21] hover:cursor-pointer">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="hover:border-b-2 border-[#F15B21] hover:cursor-pointer">
                <Link to="/ledger">Ledger</Link>
              </li>
            </ul>
          </div>
          <div className="menu block lg:hidden" onClick={toggleNav}>
            <IoMenuSharp size="35" />
          </div>
        </div>

        {isNavOpen && (
          <div
            // data-aos="fade-up"
            // data-aos-duration="1000"
            className={`fixed sidebar bg-white px-3 lg:hidden overflow-scroll z-[99999] inset-y-0 left-0 w-64 transition-transform border-none duration-300 ease-in-out transform ${
              isNavOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className=" flex justify-between items-center pt-5">
              <div className="logo w-[60%] md:w-[35%] lg:w-[18%]">
                <img src={Logo} alt="" />
              </div>
              Ï
              <div>
                <button
                  onClick={closeNav}
                  className=" focus:outline-none rounded"
                >
                  <IoClose size="30" color="black" />
                </button>
              </div>
            </div>

            <div className="navs mt-4">
              <ul className=" flex flex-col text-base uppercase gap-2 font-semibold text-[#5A5A5A]">
                <li className=" hover:border-b-4 border-[#F15B21] pb-4 hover:cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:border-b-4 border-[#F15B21] pb-4 hover:cursor-pointer">
                  <Link to="/buyRaven">Buy Ravencoin</Link>
                </li>
                <li className="hover:border-b-4 border-[#F15B21] pb-4 hover:cursor-pointer">
                  <Link to="/wallet">Wallets</Link>
                </li>
                <li className="hover:border-b-4 border-[#F15B21] pb-4 hover:cursor-pointer">
                  <Link to="/whitePaper">Whitepaper</Link>
                </li>
                <li className="hover:border-b-4 border-[#F15B21] pb-4 hover:cursor-pointer">
                  <Link to="/community">Community</Link>
                </li>
                <li className="hover:border-b-4 border-[#F15B21] pb-4 hover:cursor-pointer">
                  <Link to="/pools">Pools</Link>
                </li>
                <li className="hover:border-b-4 border-[#F15B21] pb-4 hover:cursor-pointer">
                  <Link to="/updates">Updates</Link>
                </li>
                <li className="hover:border-b-4 border-[#F15B21] pb-4 hover:cursor-pointer">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:border-b-4 border-[#F15B21] pb-4 hover:cursor-pointer">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="hover:border-b-4 border-[#F15B21] pb-4 hover:cursor-pointer">
                  <Link to="/ledger">Ledger</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
