import React from "react";
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import bookFile from "../assets/BookPreview.jpg";
import { AnimatePresence, motion } from "framer-motion";

const RecommendedBooks = () => {
  const [bookIsFavorite, setBookIsFavorite] = useState(false);

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
          <div className="w-[303px] h-full cursor-pointer">
            <div className="w-full h-[415.81px]  relative group  ">
              <div
                onClick={() => setBookIsFavorite(!bookIsFavorite)}
                className="absolute w-full h-[69px]  opacity-0 flex justify-between items-end mx-auto group-hover:opacity-100  "
              >
                <div className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center ml-[18px]">
                  <AnimatePresence exitBeforeEnter>
                    {bookIsFavorite ? (
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
                <div className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center mr-[18px]">
                  <span className="text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]">
                    {" "}
                    <FiShoppingBag />
                  </span>
                </div>
              </div>
              <img
                className="w-full h-[415.81px]  mb-[16.19px]"
                src={bookFile}
                alt="Book"
              />
            </div>
            <h3 className="text-h3 medium text-neutral-70">Book Title</h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div className="w-[303px]">
            <div className="w-full h-[415.81px]  relative">
              <img
                className="w-full h-[415.81px]  mb-[16.19px]"
                src={bookFile}
                alt="Book"
              />
            </div>
            <h3 className="text-h3 medium text-neutral-70">Book Title</h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div className="w-[303px]">
            <div className="w-full h-[415.81px] relative">
              <img
                className="w-full h-[415.81px]  mb-[16.19px]"
                src={bookFile}
                alt="Book"
              />
            </div>
            <h3 className="text-h3 medium text-neutral-70">Book Title</h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedBooks;
