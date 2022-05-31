import React, { useState } from "react";
import { MdChevronLeft } from "react-icons/md";

import { FiShoppingBag } from "react-icons/fi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { availableBooksDummy } from "../dummyData";
import { useNavigate, useParams } from "react-router-dom";
import RatingStars from "./RatingStars";

const BookPreview = () => {
  const [bookIsFavorite, setBookIsFavorite] = useState();
  const [bookInShoppingBag, setBookInShoppingBag] = useState();

  let params = useParams();
  let navigate = useNavigate();

  const selectedBook = availableBooksDummy.find((item) => {
    return item.title === params.bookId;
  });

  const addBookAsFavorite = () => {};

  const addToShoppingBag = (book) => {};
  return (
    <div className="w-screen max-w-[1440px]  mx-auto mt-[100px]">
      <div
        onClick={() => navigate(-1)}
        className="w-full  h-[96px] flex justify-start items-center pl-[105px] gap-0  "
      >
        <span className="text-[25px]">
          <MdChevronLeft />
        </span>
        <p className="text-h4 font-reg text-[#000000] cursor-pointer">Back</p>
      </div>
      <div className="w-full h-[470.70px] flex justify-start items-center pr-[280px] pl-[182px] gap-[98px]">
        <div className="h-full w-[343px] ">
          <div className="w-full h-full">
            <div className="w-full h-full  relative group  ">
              <div className="absolute w-full h-[91px]  opacity-0 flex justify-between items-center mx-auto group-hover:opacity-100  ">
                <div
                  onClick={() => addBookAsFavorite()}
                  className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center ml-[20px]"
                >
                  <AnimatePresence exitBeforeEnter>
                    {true ? (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 1 },
                        }}
                        exit={{
                          scale: 0,
                          opacity: 0,
                          transition: { duration: 1 },
                        }}
                        className="text-[25px] text-primary-70 border-[1.59277px solid #FFFFFF]"
                      >
                        <MdFavorite />
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 1 },
                        }}
                        exit={{
                          scale: 0,
                          opacity: 0,
                          transition: { duration: 1 },
                        }}
                        className="text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
                      >
                        <MdOutlineFavoriteBorder />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <img
                className="w-full h-full  mb-[18.19px]"
                src={selectedBook?.img}
                alt="Book"
              />
            </div>
          </div>
        </div>
        <div className="w-[537px] h-full ">
          <div className="h-[84px] w-full  flex flex-col items-start justify-center pt-10 mb-[18px] ">
            <h2 className="text-h3 font-medium text-neutral-80">Book Title</h2>
            <span className="text-bodyL text-neutral-30 font-reg">
              by{" "}
              <span className="text-h4 text-neutral-40 font-reg ">
                Author Name
              </span>
            </span>
          </div>
          <div className="h-[64px] w-full mb-[18.18px]">
            <p className="text-[16px] leading-8 font-reg text-neutral-70 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              sem at elit hac placerat mauris ut.
            </p>
          </div>
          <div className=" w-full flex justify-start items-center h-[24px] gap-[40px]">
            <RatingStars />
            <p>(23)</p>
          </div>
          <div className="mt-[40px] flex w-full h-[32px] justify-between items-center">
            <p className="text-primary-50 text-h3 font-medium">N3000</p>
            <span className="text-bodyN text-neutral-60">
              Status:<span className="text-bodyS neutral-40">In stock</span>
            </span>
            <div className="flex items-center justify-center w-[152px] h-[29.78px] rounded-[14px] border-2 border-2-[#feeae7]  bg-primary-10 px-[7.28px] ">
              {" "}
              <p className="w-[121px] h-[24px] text-primary-50  text-[16px] leading-6 whitespace-nowrap ">
                {" "}
                E-book Available
              </p>
            </div>
          </div>
          <div>
            <button>Buy Now</button>
            <button>Add to Bag</button>
          </div>
          <div>
            <h3>Category:</h3>
            <p>Action & Adventure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
