import React from "react";
import Logo from "../../assets/logofooter.png";

const Footer = () => {
  return (
    <footer className="bg-[#0C0F26] text-white py-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 gap-8 lg:flex justify-between items-start">
          <div className="flex items-center">
            <img src={Logo} alt="Ravencoin Logo" className="h-12 mr-3" />
          </div>
          <div className="grid grid-cols-1 gap-8 lg:flex lg:gap-24">
            <div>
              <h5 className="font-semibold mb-4">NAVIGATION</h5>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Wallet
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    How to Buy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    White Paper
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">DEVELOPERS</h5>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Block Explorer
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Block Explorer 2
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Asset Explorer 1
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Asset Explorer 2
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Halving
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Node Map
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Mining Pools
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">COMMUNITY</h5>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Ravencoin Meetups
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Bitcoin Talk
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Discord
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Telegram
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Reddit
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-gray-400">
                    Medium
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>
            &copy; Ravencoin 2024 Ravencoin Released under the{" "}
            <a href="#" className="hover:text-gray-400">
              MIT license
            </a>{" "}
            /{" "}
            <a href="#" className="hover:text-gray-400">
              Attributions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
