import React, { useState } from "react";
import bookFile from "../assets/BookPreview.jpg";
import bookShowcase from "../assets/booky.jpg";
import { FiShoppingBag } from "react-icons/fi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const BookSection = ({ bookSectionName }) => {
  const [bookIsFavorite, setBookIsFavorite] = useState(false);
  const [bookIsAddedToCart, setBookIsAddedToCart] = useState(false);



  
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
            <div className="w-full h-[312.95px]  relative group  ">
              <div className="absolute w-full h-[65px]  opacity-0 flex justify-between items-end mx-auto group-hover:opacity-100  ">
                <div
                  onClick={() => setBookIsFavorite(!bookIsFavorite)}
                  className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center ml-[14px]"
                >
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
                <div
                  onClick={() => setBookIsAddedToCart(!bookIsAddedToCart)}
                  className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center mr-[14px]"
                >
                  {bookIsAddedToCart ? (
                    <span className="text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]">
                      {" "}
                      <RiShoppingBag3Fill />
                    </span>
                  ) : (
                    <span className="text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]">
                      {" "}
                      <FiShoppingBag />
                    </span>
                  )}
                </div>
              </div>
              <img
                className="w-full h-[312.95px]  mb-[18.19px]"
                src={bookFile}
                alt="Book"
              />
            </div>
            <h3 className="text-h3 medium text-neutral-70 mt-[18px]">
              Book Title
            </h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div className="w-[228.05px] h-full">
            <img
              className="w-full h-[312.95px]  mb-[18.19px]"
              src={bookShowcase}
              alt="Book"
            />
            <h3 className="text-h3 medium text-neutral-70  mt-[18px]">
              Book Title
            </h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div className="w-[228.05px] h-full">
            <img
              className="w-full h-[312.95px]  mb-[18.19px]"
              src={bookFile}
              alt="Book"
            />
            <h3 className="text-h3 medium text-neutral-70  mt-[18px]">
              Book Title
            </h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
          <div className="w-[228.05px] h-full">
            <img
              className="w-full h-[312.95px]  mb-[18.19px]"
              src={bookFile}
              alt="Book"
            />
            <h3 className="text-h3 medium text-neutral-70  mt-[18px]">
              Book Title
            </h3>
            <p className="leading-8 text-[18px] text-primary-40">N3000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
