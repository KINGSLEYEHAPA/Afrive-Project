import React, { useEffect } from "react";
import BookQuote from "./BookQuote";
import BookSection from "./BookSection";
import Footer from "./Footer";
import fire from "../assets/fire.png";

import HeroSection from "./HeroSection";
import RecommendedBooks from "./RecommendedBooks";
import { FiArrowUpLeft } from "react-icons/fi";
import { Link as ALink } from "react-scroll";
import AnimatePages from "./AnimatePages";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <AnimatePages>
      <div
        className="w-screen max-w-[1440px] mx-auto mt-[68px] mtab:mt-[88px] relative "
        id="home"
      >
        <HeroSection />
        {/* {user && <RecommendedBooks />} */}
        <BookSection bookSectionName="Popular Books" />
        <BookSection bookSectionName="BestSellers" />
        <BookSection bookSectionName="New Arrivals" />
        <BookSection bookSectionName="On Sale" emoji={fire} />
        <div className="w-full mt-[72.51px] flex justify-end items-center pr-[24px] mtab:pr-[71.14px] lap:pr-[117.23px] mb-[-19px]">
          <div className="  h-[96px] flex justify-start items-center gap-[5px]  ">
            <span className=" text-[15px]   lap:text-[25px]">
              <FiArrowUpLeft />
            </span>
            <ALink
              to="home"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
            >
              <p className=" text-sub mtab:text-bodyS   lap:text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
                Back to Top
              </p>
            </ALink>
          </div>
        </div>
        <BookQuote />
        <Footer />
      </div>
    </AnimatePages>
  );
};

export default Homepage;
