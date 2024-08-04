import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Exchanges from "../../components/exchanges/Exchanges";
import Footer from "../../components/footer/Footer";
import BuyGuide from "../../components/buyguide/BuyGuide";

const Buy = () => {
  return (
    <>
      <div>
        <Navbar />
        <BuyGuide />
        <Exchanges />
        <Footer />
      </div>
    </>
  );
};

export default Buy;
