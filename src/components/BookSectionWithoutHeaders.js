import React, { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { availableBooksDummy } from "../dummyData";

const BookSectionWithoutHeaders = () => {
  const [bookIsFavorite, setBookIsFavorite] = useState([]);
  const [bookInShoppingBag, setBookInShoppingBag] = useState([]);

  const addBookAsFavorite = (book) => {
    if (bookIsFavorite.filter((item) => item.title === book.title).length > 0) {
      const favoritebooks = bookIsFavorite.filter((e) => {
        return e.title !== book.title;
      });

      setBookIsFavorite([...favoritebooks]);
    } else {
      setBookIsFavorite([...bookIsFavorite, book]);
    }
  };

  const addToShoppingBag = (book) => {
    if (
      bookInShoppingBag.filter((item) => item.title === book.title).length > 0
    ) {
      const bookTosell = bookInShoppingBag.filter((e) => {
        return e.title !== book.title;
      });

      setBookInShoppingBag([...bookTosell]);
    } else {
      setBookInShoppingBag([...bookInShoppingBag, book]);
    }
  };

  return (
    <div className="w-full max-w-[1440px] mt-[56px] pl-[181px] pr-[183px]">
      <div className="w-full h-[492px] mt-[32px] grid grid-cols-4 px-0  gap-[54.37px]  ">
        {availableBooksDummy?.map((book) => {
          return (
            <div key={book?.id} className="w-[228.05px] h-full">
              <div className="w-full h-[312.95px]  relative group  ">
                <div className="absolute w-full h-[65px]  opacity-0 flex justify-between items-end mx-auto group-hover:opacity-100  ">
                  <div
                    onClick={() => addBookAsFavorite(book)}
                    className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center ml-[14px]"
                  >
                    <AnimatePresence exitBeforeEnter>
                      {bookIsFavorite.filter(
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
                    onClick={() => addToShoppingBag(book)}
                    className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center mr-[14px]"
                  >
                    {bookInShoppingBag.filter(
                      (item) => item.title === book.title
                    ).length > 0 ? (
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
                  src={book.img}
                  alt="Book"
                />
              </div>
              <h3 className="text-h3 medium text-neutral-70 mt-[18px] truncate">
                {book.title}
              </h3>
              <p className="leading-8 text-[18px] text-primary-40">
                {book.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookSectionWithoutHeaders;
