import React from "react";
import { MdChevronLeft } from "react-icons/md";
import BookQuote from "./BookQuote";
import BookSectionWithoutHeaders from "./BookSectionWithoutHeaders";
import { availableBooksDummy } from "../dummyData";
import { useNavigate } from "react-router-dom";
import LikedbookSection from "./LikedbookSection";

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
        <p className="text-h4 font-reg text-neutral-40">
          Your Liked Books:&nbsp;
        </p>
        <span className="text-bodyN font-reg text-neutral-30">
          {" "}
          you can find the books you have liked here
        </span>
      </div>
      <LikedbookSection />
      <BookQuote />
    </div>
  );
};

export default LikedBooks;
