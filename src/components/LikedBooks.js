import React from "react";
import { MdChevronLeft } from "react-icons/md";
import BookQuote from "./BookQuote";
import BookSectionWithoutHeaders from "./BookSectionWithoutHeaders";
import { useNavigate } from "react-router-dom";
import LikedbookSection from "./LikedbookSection";
import { FiArrowUpLeft } from "react-icons/fi";
import { Link as ALink } from "react-scroll";
import AnimatePages from "./AnimatePages";
import { useSelector } from "react-redux";

const LikedBooks = () => {
  const navigate = useNavigate();
  const favoriteBooks = useSelector((state) => state.books.likedBooks);

  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px] min-h-screen  mx-auto mt-[88px] ">
        <div
          onClick={() => navigate(-1)}
          className="w-full h-[24px] mtab:h-[96px] flex justify-start items-center pl-[22px] mtab:pl-[73.48px] tab:pl-[90px] lap:pl-[128px] desk:pl-[105px] gap-0 "
        >
          <span className="text-[25px]">
            <MdChevronLeft />
          </span>
          <p className="text-bodyS mtab:text-bodyL  tab:text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="mt-[12px] mtab:mt-0 h-[35px] w-full  flex  flex-col gap-[4px]   mobx:flex-row   mobx:justify-start mobx:items-center pl-[28px] mtab:pl-[71.68px]   tab:pl-[86.28px] lap:pl-[172.28px] desk:pl-[183px] mtab:gap-0 p-0">
          <p
            className="text-bodyN  mtab:text-h4 font-reg text-neutral-40"
            id="liked-books"
          >
            Your Liked Books:&nbsp;
          </p>
          <span className=" text-bodyS  mtab:text-bodyN font-reg text-neutral-30">
            {" "}
            you can find the books you have liked here
          </span>
        </div>
        {favoriteBooks.length === 0 && (
          <div className=" flex justify-center items-center translate-x-[-5%] text-bodyN tab:text-bodyL font-reg text-neutral-30     w-full  h-[80vh] mtab:pl-[72px] tab:pl-[86px] lap:pl-[193px]  desk:pl-[181px] mtab:pr-[24px] tab:pr-[50px]  lap:pr-[40px] desk:pr-[10px]  ">
            You have no Favorite Book.
          </div>
        )}
        <LikedbookSection />
        <div className="w-full mt-[72.51px] flex justify-end items-center pr-[24px] mtab:pr-[71.14px] lap:pr-[117.23px] mb-[-19px]">
          <div className="  h-[96px] flex justify-start items-center gap-[5px]  ">
            <span className="text-[15px]   lap:text-[25px]">
              <FiArrowUpLeft />
            </span>

            <ALink
              to="liked-books"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
            >
              <p className="text-sub mtab:text-bodyS   lap:text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
                Back to Top
              </p>
            </ALink>
          </div>
        </div>
        <BookQuote />
      </div>
    </AnimatePages>
  );
};

export default LikedBooks;
