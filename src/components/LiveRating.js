import React, { useState } from "react";

import { BsStarFill, BsStar } from "react-icons/bs";
import uuid from "uuid-random";

const LiveRating = ({ setRateABook, rating, setRating }) => {
  const [hover, setHover] = useState(null);
  console.log(rating);
  const stars = [1, 2, 3, 4, 5];

  const randomNumber = Math.random() * 1000000 + uuid();

  return (
    <div className="w-[108px] h-[18px] flex gap-[14px] ">
      {stars.map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={randomNumber + "c" + index}>
            <input
              className="absolute top-6 hidden "
              type="radio"
              name="ratings"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                setRateABook(false);
              }}
            />
            <span
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              key={randomNumber + "c" + index}
              className={
                ratingValue <= (hover || rating)
                  ? "h-full text-accent-rating text-[15px]  transition-colors duration-200 cursor-pointer "
                  : "h-full text-neutral-white text-[15px]  transition-colors duration-200 cursor-pointer"
              }
            >
              {ratingValue <= (hover || rating) ? <BsStarFill /> : <BsStar />}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default LiveRating;
