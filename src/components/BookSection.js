import React from "react";
import bookFile from "../assets/BookPreview.jpg";
import bookShowcase from "../assets/booky.jpg";

const BookSection = ({ bookSectionName }) => {
  return (
    <div className="w-screen max-w-[1440px] mx-auto mt-[56px]">
      {" "}
      <div className="h-[438.49px] w-screen max-w-[74.45%] ml-[12.63%] mr-[12.63%] p-0 ">
        <div className="w-full h-[32px]  flex justify-between items-center">
          <h3 className="text-h3 font-reg text-neutral-70">
            {bookSectionName}
          </h3>
          <p className="mr-[9.17px]  text-neutral-30 text-bodyL hover:text-neutral-80 cursor-pointer">
            see more
          </p>
        </div>
        <div className="w-full h-[492px] mt-[32px] grid grid-cols-4 px-0  gap-[54.37px]  ">
          <div className="w-[228.05px] h-full">
            <img
              className="w-full h-[312.95px]  mb-[18.19px]"
              src={bookFile}
              alt="Book"
            />
            <h3 className="text-h3 medium text-neutral-70">Book Title</h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div className="w-[228.05px] h-full">
            <img
              className="w-full h-[312.95px]  mb-[18.19px]"
              src={bookShowcase}
              alt="Book"
            />
            <h3 className="text-h3 medium text-neutral-70">Book Title</h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div className="w-[228.05px] h-full">
            <img
              className="w-full h-[312.95px]  mb-[18.19px]"
              src={bookFile}
              alt="Book"
            />
            <h3 className="text-h3 medium text-neutral-70">Book Title</h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div className="w-[228.05px] h-full">
            <img
              className="w-full h-[312.95px]  mb-[18.19px]"
              src={bookFile}
              alt="Book"
            />
            <h3 className="text-h3 medium text-neutral-70">Book Title</h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
