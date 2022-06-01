import React from "react";
import BookQuote from "./BookQuote";
import BookSection from "./BookSection";
import Footer from "./Footer";
import Header from "./Header";

import HeroSection from "./HeroSection";
import RecommendedBooks from "./RecommendedBooks";
import { FiArrowUpLeft } from "react-icons/fi";
import { Link as ALink } from "react-scroll";

const Homepage = () => {
  return (
    <div className="w-screen max-w-[1440px] mx-auto mt-[88px]  " id="home">
      <Header />
      <HeroSection />
      <RecommendedBooks />
      <BookSection bookSectionName="Popular Books" />
      <BookSection bookSectionName="BestSellers" />
      <BookSection bookSectionName="New Arrivals" />
      <BookSection bookSectionName="On Sale &#128293; " />
      <div className="w-full mt-[72.51px] flex justify-end items-center pr-[117.23px] mb-[-19px]">
        <div className="  h-[96px] flex justify-start items-center gap-[5px]  ">
          <span className="text-[25px]">
            <FiArrowUpLeft />
          </span>
          <ALink
            to="home"
            spy={true}
            smooth={true}
            offset={-120}
            duration={1000}
          >
            <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
              Back to Top
            </p>
          </ALink>
        </div>
      </div>
      <BookQuote />
      <Footer />
    </div>
  );
};

export default Homepage;
