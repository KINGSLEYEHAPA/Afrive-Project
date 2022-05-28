import React from "react";
import bookFile from "../assets/BookPreview.jpg";

const RecommendedBooks = () => {
  return (
    <div className="w-screen max-w-[1440px] mx-auto">
      {" "}
      <div className="h-[552px] w-screen max-w-[74.45%] ml-[12.77%] mr-[12.76%] p-0 ">
        <div className="w-full h-[32px]  flex justify-between items-center">
          <h3 className="text-h3 font-reg text-neutral-80">
            For you: Recommended based on your likes
          </h3>
          <p className="mr-[9.17px]  text-neutral-30 text-bodyL hover:text-neutral-80 cursor-pointer">
            see more
          </p>
        </div>
        <div className="w-full h-[492px] mt-[32px] grid grid-cols-3 px-0  gap-[81.59px]  ">
          <div className="w-[303px] h-full">
            <img
              className="w-full h-[415.81px]  mb-[16.19px]"
              src={bookFile}
              alt="Book"
            />
            <h3 className="text-h3 medium text-neutral-70">Book Title</h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div className="w-[303px]">
            <img
              className="w-full h-[415.81px]  mb-[16.19px]"
              src={bookFile}
              alt="Book"
            />
            <h3 className="text-h3 medium text-neutral-70">Book Title</h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div className="w-[303px]">
            <img
              className="w-full h-[415.81px]  mb-[16.19px]"
              src={bookFile}
              alt="Book"
            />
            <h3 className="text-h3 medium text-neutral-70">Book Title</h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedBooks;
