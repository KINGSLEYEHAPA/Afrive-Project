import React, { useState } from "react";
import { MdChevronLeft } from "react-icons/md";

import { FiShoppingBag } from "react-icons/fi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { availableBooksDummy } from "../dummyData";

const BookPreview = () => {
  const [bookIsFavorite, setBookIsFavorite] = useState();
  const [bookInShoppingBag, setBookInShoppingBag] = useState();

  const addBookAsFavorite = () => {};

  const addToShoppingBag = (book) => {};
  return (
    <div className="w-screen max-w-[1440px]  mx-auto mt-[100px]">
      <div className="w-full  h-[96px] flex justify-start items-center pl-[105px] gap-0  ">
        <span className="text-[25px]">
          <MdChevronLeft />
        </span>
        <p className="text-h4 font-reg text-[#000000] cursor-pointer">Back</p>
      </div>
      <div className="w-full h-[470.70px] bg-primary-30 flex justify-start items-center pr-[280px] pl-[182px] gap-[98px]">
        <div className="h-full w-[343px] bg-primary-70">
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
                src={availableBooksDummy[0]?.img}
                alt="Book"
              />
            </div>
          </div>
        </div>
        <div className="w-[537px] h-full bg-neutral-50"></div>
      </div>
    </div>
  );
};

export default BookPreview;
