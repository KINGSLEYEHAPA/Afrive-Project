import React from "react";
import { MdChevronLeft } from "react-icons/md";
import BookSectionWithoutHeaders from "./BookSectionWithoutHeaders";

const LikedBooks = () => {
  return (
    <div className="w-screen max-w-[1440px] h-[80%] mx-auto ">
      <div className="w-full  h-[96px] flex justify-start items-center pl-[105px] gap-0  ">
        <span className="text-[25px]">
          <MdChevronLeft />
        </span>
        <p className="text-h4 font-reg text-[#000000] cursor-pointer">Back</p>
      </div>
      <div className="mt-0 h-[35px] w-full  flex justify-start items-center pl-[183px] gap-0 p-0 ">
        <p className="text-h4 font-reg text-neutral-40">Your Liked Books: </p>
        <span className="text-bodyN font-reg text-neutral-30">
          {" "}
          you can find the books you have liked here
        </span>
      </div>
      <BookSectionWithoutHeaders />
    </div>
  );
};

export default LikedBooks;
