import React from "react";
import Header from "./Header";

import HeroSection from "./HeroSection";

const Homepage = () => {
  return (
    <div className="w-screen max-w-[1440px] mx-auto mt-[88px] ">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Homepage;
