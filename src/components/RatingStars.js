import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const RatingStars = ({ book }) => {
  const stars = [1, 2, 3, 4, 5];

  const averageRating = Math.round(book?.bookRating?.averageRating);
  const ratingDiff = 5 - averageRating;

  return (
    <div className="w-[108px] h-[18px] flex gap-[14px]">
      {stars.slice(0, averageRating).map((star) => {
        return (
          <span key={star} className="h-full text-accent-rating text-[15px] ">
            <BsStarFill />
          </span>
        );
      })}

      {stars.slice(0, ratingDiff).map((star) => {
        return (
          <span key={star} className="h-full text-accent-rating text-[15px] ">
            <BsStar />
          </span>
        );
      })}
    </div>
  );
};

export default RatingStars;
