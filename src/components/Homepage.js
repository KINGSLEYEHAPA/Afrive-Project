import React from "react";
import BookQuote from "./BookQuote";
import BookSection from "./BookSection";
import Footer from "./Footer";
import Header from "./Header";

import HeroSection from "./HeroSection";
import RecommendedBooks from "./RecommendedBooks";

const Homepage = () => {
  return (
    <div className="w-screen max-w-[1440px] mx-auto mt-[88px] ">
      <Header />
      <HeroSection />
      <RecommendedBooks />
      <BookSection bookSectionName="Popular Books" />
      <BookSection bookSectionName="BestSellers" />
      <BookSection bookSectionName="New Arrivals" />
      <BookSection bookSectionName="On Sale &#128293; " />
      <BookQuote />
      <Footer />
    </div>
  );
};

export default Homepage;
