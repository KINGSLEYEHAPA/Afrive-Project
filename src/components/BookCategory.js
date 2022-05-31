import React from "react";
import { MdChevronLeft } from "react-icons/md";
import BookQuote from "./BookQuote";
import BookSectionWithoutHeaders from "./BookSectionWithoutHeaders";
import { availableBooksDummy } from "../dummyData";
import { useParams } from "react-router-dom";

const BookCategory = () => {
  let params = useParams();

  const bookCategory = availableBooksDummy.filter((item) => {
    return item.category.includes(params.catName);
  });

  return (
    <div className="w-screen max-w-[1440px] min-h-screen  mx-auto mt-[100px]">
      <div className="w-full  h-[96px] flex justify-start items-center pl-[105px] gap-0  ">
        <span className="text-[25px]">
          <MdChevronLeft />
        </span>
        <p className="text-h4 font-reg text-[#000000] cursor-pointer">Back</p>
      </div>
      <div className="mt-0 h-[35px] w-full  flex justify-start items-center pl-[183px] gap-0 p-0 ">
        <p className="text-h4 font-reg text-neutral-30">Category-</p>
        <span className="text-h4 font-reg text-primary-50">
          {params.catName}
        </span>
      </div>
      <BookSectionWithoutHeaders booksToShow={bookCategory} />
      <BookQuote />
    </div>
  );
};

export default BookCategory;
