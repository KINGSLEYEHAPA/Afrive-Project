import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import uuid from "uuid-random";

export const UserStarRating = ({ userRating }) => {
  const stars = [1, 2, 3, 4, 5];

  const ratingDiff = 5 - userRating;

  const randomNumber = Math.random() * 1000000 + uuid();
  const SecondRandomNumber = Math.random() * 1000 + uuid();

  return (
    <div className="w-[108px] h-[18px] flex gap-[14px]">
      {stars.slice(0, userRating).map((star, index) => {
        return (
          <span
            key={randomNumber + "a" + index}
            className="h-full text-accent-rating text-[15px] "
          >
            <BsStarFill />
          </span>
        );
      })}

      {stars.slice(0, ratingDiff).map((star, index) => {
        return (
          <span
            key={SecondRandomNumber + "b" + index}
            className="h-full text-accent-rating text-[15px] "
          >
            <BsStar />
          </span>
        );
      })}
    </div>
  );
};

export const LiveRating = ({ setRateABook }) => {
  const stars = [1, 2, 3, 4, 5];

  const randomNumber = Math.random() * 1000000 + uuid();
  const SecondRandomNumber = Math.random() * 1000 + uuid();
  return (
    <div className="w-[108px] h-[18px] flex gap-[14px]">
      {stars.map((star, index) => {
        return (
          <span
            key={randomNumber + "c" + index}
            className="h-full text-neutral-white text-[15px] "
          >
            <BsStar />
          </span>
        );
      })}
    </div>
  );
};

const RatingStars = ({ book }) => {
  const stars = [1, 2, 3, 4, 5];

  const averageRating = Math.round(book?.bookRating?.averageRating);
  const ratingDiff = 5 - averageRating;

  const randomNumber = Math.random() * 1000000 + uuid();
  const SecondRandomNumber = Math.random() * 1000 + uuid();

  return (
    <div className="w-[108px] h-[18px] flex gap-[14px]">
      {stars.slice(0, averageRating).map((star, index) => {
        return (
          <span
            key={randomNumber + "a" + index}
            className="h-full text-accent-rating text-[15px] "
          >
            <BsStarFill />
          </span>
        );
      })}

      {stars.slice(0, ratingDiff).map((star, index) => {
        return (
          <span
            key={SecondRandomNumber + "b" + index}
            className="h-full text-accent-rating text-[15px] "
          >
            <BsStar />
          </span>
        );
      })}
    </div>
  );
};

export default RatingStars;
