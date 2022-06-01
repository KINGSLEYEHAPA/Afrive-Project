import React from "react";
import { MdChevronLeft } from "react-icons/md";
import BookQuote from "./BookQuote";
import BookSectionWithoutHeaders from "./BookSectionWithoutHeaders";
import { availableBooksDummy } from "../dummyData";
import { useNavigate } from "react-router-dom";
import LikedbookSection from "./LikedbookSection";
import { FiArrowUpLeft } from "react-icons/fi";
import { Link as ALink } from "react-scroll";

const LikedBooks = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen max-w-[1440px] min-h-screen  mx-auto mt-[100px] ">
      <div
        onClick={() => navigate(-1)}
        className="w-full  h-[96px] flex justify-start items-center pl-[105px] gap-0  "
      >
        <span className="text-[25px]">
          <MdChevronLeft />
        </span>
        <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
          Back
        </p>
      </div>
      <div className="mt-0 h-[35px] w-full  flex justify-start items-center pl-[183px] gap-0 p-0 ">
        <p className="text-h4 font-reg text-neutral-40" id="liked-books">
          Your Liked Books:&nbsp;
        </p>
        <span className="text-bodyN font-reg text-neutral-30">
          {" "}
          you can find the books you have liked here
        </span>
      </div>
      <LikedbookSection />
      <div className="w-full mt-[72.51px] flex justify-end items-center pr-[117.23px] mb-[-19px]">
        <div className="  h-[96px] flex justify-start items-center gap-[5px]  ">
          <span className="text-[25px]">
            <FiArrowUpLeft />
          </span>
          <ALink
            to="liked-books"
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
    </div>
  );
};

export default LikedBooks;
