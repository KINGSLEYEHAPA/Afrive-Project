import React from "react";
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAFavoriteBook,
  removeFavoriteBook,
  addToBag,
  removeFromBag,
} from "../features/books/bookSlice";
import RatingStars from "./RatingStars";

const RecommendedBooks = () => {
  const favoriteBooks = useSelector((state) => state.books.likedBooks);
  const booksInShoppingBag = useSelector((state) => state.books.shoppingBag);
  const availableBooks = useSelector((state) => state.books.booksInStock);
  console.log(availableBooks);
  console.log(booksInShoppingBag);
  const dispatch = useDispatch();

  const addBookAsFavorite = (book) => {
    dispatch(addAFavoriteBook(book));
  };

  const removeBookAsFavorite = (book) => {
    dispatch(removeFavoriteBook(book));
  };

  const addItemToBag = (book) => {
    dispatch(addToBag(book));
  };

  const removeItemFromBag = (book) => {
    dispatch(removeFromBag(book));
  };

  return (
    <div className="w-screen   px-[6.13%] mobx:px-[10%] mtab:px-0   max-w-[1440px] mx-auto   desk:h-[552px]   ">
      {" "}
      <div className="  h-[309.97px] mtab:h-[389.04px] tab:h-[476.77px] lap:h-[532.52px] mx-[23px] mobx:mx-[72px] mtab:mx-[72px]  tab:mx-[86.44px] lap:mx-[193px]  desk:mx-[182px]     ">
        <div className="flex items-center justify-between w-full   ">
          <h3 className="font-medium text-bodyN tab:text-h3 text-neutral-80 whitespace-nowrap">
            For you: Recommended based on your likes
          </h3>
          <p className="hidden cursor-pointer mtab:block text-neutral-30 text-bodyL hover:text-neutral-80">
            see more
          </p>
        </div>
        <div className="w-full  h-[271.97px]  mtab:h-[333.04px] tab:h-[396.77px] lap:h-[453.32px] desk:h-[492px] mt-[72px] grid  grid-cols-2 mobx:grid-cols-3 justify-start px-0 tab:flex mobx:space-x-[32px] mtab:space-x-[14px] tab:space-x-[86.43px] lap:space-x-[76px] desk:space-x-[81.59px]  ">
          {availableBooks?.slice(6, 9).map((book) => {
            return (
              <div
                key={book.id}
                className="   w-[155px] mtab:w-[190px] tab:w-[226.06px]   lap:w-[276px]  desk:w-[303px] h-full cursor-pointer"
              >
                <div className="w-full  h-[212.11px] mtab:h-[260px] tab:h-[309.52px]     lap:h-[379px]   desk:h-[415.81px]  relative group  ">
                  <div className="absolute w-full h-[56px] mtab:h-[69px] lap:h-[62px] desk:h-[69px]  opacity-0 flex  justify-end lap:justify-between items-end mx-auto group-hover:opacity-100  ">
                    <div className=" hidden lap:flex lap:w-[47px] lap:h-[47px]  w-[51px] h-[51px]     desk:w-[51px] desk:h-[51px] rounded-full bg-neutral-70/80 cursor-pointer justify-center items-center ml-[14px] desk:ml-[18px]">
                      <AnimatePresence exitBeforeEnter>
                        {favoriteBooks.filter(
                          (item) => item.title === book.title
                        ).length > 0 ? (
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
                            onClick={() => removeBookAsFavorite(book)}
                            className=" text-[20px] desk:text-[25px] text-primary-70 border-[1.59277px solid #FFFFFF]"
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
                            onClick={() => addBookAsFavorite(book)}
                            className="text-[20px] desk:text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
                          >
                            <MdOutlineFavoriteBorder />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="lap:w-[47px] lap:h-[47px]  mtab:w-[51px] mtab:h-[51px] w-[42.4px] h-[41px]    desk:w-[51px] desk:h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center mr-[7px] mtab:mr-[10px] tab:mr-[14px] desk:mr-[18px]">
                      {booksInShoppingBag.filter(
                        (item) => item.title === book.title
                      ).length > 0 ? (
                        <span
                          onClick={() => removeItemFromBag(book)}
                          className=" text-[20px] desk:text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
                        >
                          {" "}
                          <RiShoppingBag3Fill />
                        </span>
                      ) : (
                        <span
                          onClick={() => addItemToBag(book)}
                          className=" text-[20px] desk:text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
                        >
                          {" "}
                          <FiShoppingBag />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className=" hidden lap:flex h-[56px]   lap:h-[50px] desk:h-[56px] w-full bg-neutral-80/50 absolute bottom-0  opacity-0  justify-center items-center group-hover:opacity-100">
                    <RatingStars book={book} />
                  </div>

                  <img
                    className="w-full h-[212.11px] mtab:h-[260px] tab:h-[309.52px]  lap:h-[379px] desk:h-[415.81px] mb-[11px] lap:mb-[16.19px]"
                    src={book?.img}
                    alt="Book"
                  />
                </div>
                <Link to={`/book/${book?.title}`}>
                  <h3 className=" text-[14.436px] leading-[23px] mtab:text-[17.69px] mtab:leading-[28px] tab:text-[21.127px] tab:leading-[34px] lap:text-h4  desk:text-h3 medium text-neutral-70 mt-[20px] truncate">
                    {book?.title}
                  </h3>
                </Link>
                <div className=" flex gap-[20px] mtab:gap-[22px] tab:gap-[30px] items-center">
                  <p className=" text-[14.436px] leading-[23px] mtab:text-[17.69px] mtab:leading-[28px]tab:text-[21.127px] tab:leading-[34px] desk:leading-8 lap:leading-6 lap:text-[18px] text-primary-40">
                    N{book?.price.toLocaleString("en-US")}
                  </p>
                  <span className="inline-block lap:hidden  mt-[5px] mtab:mt-0">
                    <RatingStars book={book} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendedBooks;
