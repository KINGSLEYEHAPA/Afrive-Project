import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const RatingStars = () => {
  return (
    <div className="w-[108px] h-[18px] flex gap-[14px]">
      <span className="h-full text-accent-rating text-[15px] ">
        <BsStarFill />
      </span>
      <span className="h-full text-accent-rating text-[15px]">
        <BsStarFill />
      </span>
      <span className="h-full text-accent-rating text-[15px]">
        <BsStarFill />
      </span>
      <span className="h-full text-accent-rating text-[15px]">
        <BsStarFill />
      </span>
      <span className="h-full text-accent-rating text-[15px]">
        <BsStar />
      </span>
    </div>
  );
};

export default RatingStars;
