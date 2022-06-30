import React, { useRef, useState } from "react";
import { MdChevronLeft } from "react-icons/md";

import { FiShoppingBag, FiArrowUpLeft } from "react-icons/fi";
import { Link as ALink } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import RatingStars from "./RatingStars";
import { useSelector, useDispatch } from "react-redux";
import {
  addAFavoriteBook,
  removeFavoriteBook,
  addToBag,
  buyBookNow,
} from "../features/books/bookSlice";
import CustomerBookReview from "./CustomerBookReview";
import BookSection from "./BookSection";
import BookQuote from "./BookQuote";
import AnimatePages from "./AnimatePages";

const BookPreview = () => {
  const [bookInShoppingBag, setBookInShoppingBag] = useState([]);
  const [eBookPreview, setEBookPreview] = useState(false);
  const [format, setFormat] = useState(false);
  const [showFormat, setShowFormat] = useState(false);
  const availableBooks = useSelector((state) => state.books.booksInStock);
  console.log(availableBooks);

  let params = useParams();
  let navigate = useNavigate();

  const selectedBook = availableBooks.find((item) => {
    return item.title === params.bookId;
  });

  const favoriteBooks = useSelector((state) => state.books.likedBooks);
  console.log(favoriteBooks);
  const dispatch = useDispatch();

  const addBookAsFavorite = (book) => {
    dispatch(addAFavoriteBook(book));
  };

  const removeBookAsFavorite = (book) => {
    dispatch(removeFavoriteBook(book));
  };

  const buyEBook = (book, item) => {
    setShowFormat(false);

    const ebook = {
      ...book,
      eBook: {
        status: true,
        format: [item],
      },
    };

    dispatch(buyBookNow(ebook));
    navigate("/buynow");

    //   setBookInShoppingBag(book);
    //   navigate("/shopping-bag");
    //   dispatch(addToBag(book));
  };
  const buyBook = (book) => {
    const bookUpdate = {
      ...book,
      eBook: {
        status: false,
        format: [],
      },
    };
    dispatch(buyBookNow(bookUpdate));
    navigate("/buynow");
  };

  const automateFormat = () => {
    setShowFormat(true);
    setFormat(true);
  };

  // const buyBookOnformat = (book) => {
  //   if (eBookPreview) {
  //     dispatch(buyBookNow(book));
  //   }
  // };

  const addItemToBag = (book, item) => {
    if (eBookPreview && format) {
      const ebook = {
        ...book,
        eBook: { ...book.eBook, status: true, format: [item] },
      };

      dispatch(addToBag(ebook));
      setFormat(false);
      setShowFormat(false);
    } else {
      const bookUpdate = {
        ...book,
        eBook: {
          status: false,
          format: [],
        },
      };

      dispatch(addToBag(bookUpdate));
    }
  };
  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[88px] ">
        <div
          onClick={() => navigate(-1)}
          className="w-full  h-[96px] flex justify-start items-center pl-[105px] gap-0  "
        >
          <span className="text-[25px]">
            <MdChevronLeft />
          </span>
          <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="w-full h-[470.70px] flex justify-start items-center pr-[280px] pl-[182px] gap-[98px]">
          <div className="h-full w-[343px] ">
            <div className="w-full h-full">
              <div className="w-full h-full  relative group  ">
                <div className="absolute w-full h-[91px]  opacity-0 flex justify-between items-center mx-auto group-hover:opacity-100  ">
                  <div className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center ml-[20px]">
                    <AnimatePresence exitBeforeEnter>
                      {favoriteBooks.filter(
                        (item) => item.title === selectedBook.title
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
                          onClick={() => removeBookAsFavorite(selectedBook)}
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
                          onClick={() => addBookAsFavorite(selectedBook)}
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
              <div className="flex gap-[20px]">
                <h2
                  className="text-h3 font-medium text-neutral-80"
                  id="preview-title"
                >
                  {selectedBook?.title}
                </h2>

                <AnimatePresence>
                  {eBookPreview && (
                    <motion.div
                      onClick={() => {
                        setEBookPreview(false);
                        setShowFormat(false);
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 1 } }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center w-[100px] gap-[5px] h-[29.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] "
                    >
                      {" "}
                      <p className="w-[52px] h-[24px] text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                        {" "}
                        E-book{" "}
                      </p>
                      <span className="font-medium text-primary-50 text-[18px] cursor-pointer">
                        <AiOutlineClose />{" "}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="text-bodyL text-neutral-30 font-reg">
                by{" "}
                <span className="text-h4 text-neutral-40 font-reg ">
                  {selectedBook?.author}
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
              <RatingStars book={selectedBook} />
              <p>({selectedBook.bookRating?.ratings?.length})</p>
            </div>
            <div className="mt-[40px] flex w-full h-[32px] justify-start gap-[48px] items-center mb-[80px]">
              <p className="text-primary-50 text-h3 font-medium">
                N{selectedBook?.price}
              </p>
              <span className="text-bodyN text-neutral-60">
                Status: &nbsp;
                <span className="text-bodyS neutral-40">In stock</span>
              </span>
              <AnimatePresence>
                {!eBookPreview && selectedBook.eBook.status && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    exit={{ opacity: 0 }}
                    onClick={() => setEBookPreview(true)}
                    className="flex items-center justify-center w-[152px] h-[29.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] "
                  >
                    {" "}
                    <p className="w-[121px] h-[24px] text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                      {" "}
                      E-book Available
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-full h-[52px] flex gap-[25px] justify-start items-center relative">
              <AnimatePresence>
                <AnimateSharedLayout>
                  {showFormat && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{
                        height: [52, 104, 156],
                        transition: { duration: 1.5 },
                      }}
                      exit={{
                        height: [104, 52, 0],
                        transition: { duration: 1.5 },
                      }}
                      layoutId="outline"
                      className="w-[318px] h-[156px] absolute space-y-[1px] top-0 left-0"
                    >
                      {selectedBook.eBook.format.map((item) => {
                        return (
                          <motion.button
                            initial={{ height: 52 }}
                            animate={{
                              height: 52,
                              transition: { duration: 0 },
                            }}
                            layoutId="outline"
                            key={item}
                            onClick={() => {
                              eBookPreview &&
                                !format &&
                                buyEBook(selectedBook, item);
                              eBookPreview &&
                                format &&
                                addItemToBag(selectedBook, item);
                            }}
                            className="w-[318px] h-[52px] rounded-[4px]  p-[10px] text-neutral-white text-buttonT2  bg-primary-50 border-2 border-primary-50"
                          >
                            {item}
                          </motion.button>
                        );
                      })}
                      {/* <motion.button
                      initial={{ height: 52 }}
                      animate={{
                        height: 52,
                        transition: { duration: 0 },
                      }}
                      layoutId="outline"
                      className="w-[318px] h-[52px] rounded-[4px]  p-[10px] text-neutral-white text-buttonT2  bg-primary-50 border-2 border-primary-50"
                    >
                      EPUB
                    </motion.button>
                    <motion.button
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 52,
                        opacity: 1,
                        transition: { duration: 0.5, delay: 0.3 },
                      }}
                      layoutId="outline"
                      className="w-[318px] h-[52px] rounded-[4px]  p-[10px] text-neutral-white text-buttonT2  bg-primary-50 border-2 border-primary-50"
                    >
                      PDF
                    </motion.button>
                    <motion.button
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 52,
                        opacity: 1,

                        transition: { duration: 0.5, delay: 0.5 },
                      }}
                      layoutId="outline"
                      className="w-[318px] h-[52px] rounded-[4px]  p-[10px] text-neutral-white text-buttonT2  bg-primary-50 border-2 border-primary-50"
                    >
                      Mobi
                    </motion.button> */}
                    </motion.div>
                  )}
                </AnimateSharedLayout>
              </AnimatePresence>

              <button
                onClick={() => {
                  eBookPreview ? setShowFormat(true) : buyBook(selectedBook);
                }}
                className="w-[318px] h-[52px] rounded-[4px]  p-[10px] text-neutral-white text-buttonT2  bg-primary-50 border-2 border-primary-50"
              >
                {eBookPreview ? "Buy e-book Now" : "Buy Now"}
              </button>
              <button
                onClick={() => {
                  eBookPreview ? automateFormat() : addItemToBag(selectedBook);
                }}
                className="w-[155px] h-[52px] rounded-[4px] text-primary-50 p-[10px] bg-neutral-white text-buttonT2  border-2 border-primary-50"
              >
                Add to Bag
              </button>
            </div>
            <div className="mt-[24px] w-[391px] h-[32px] flex justify-start items-center text-neutral-80 font-reg text-bodyN">
              <h3>Category: &nbsp;</h3>
              <p className="text-primary-30">
                {selectedBook?.category.map((item) => {
                  return <span key={item}>{item},&nbsp;</span>;
                })}
              </p>
            </div>
          </div>
        </div>
        <CustomerBookReview book={selectedBook} />
        <BookSection bookSectionName="Similar Books" />
        <BookSection bookSectionName="Best Sellers" />
        <div className="w-full mt-[72.51px] flex justify-end items-center pr-[117.23px] mb-[-19px]">
          <div className="  h-[96px] flex justify-start items-center gap-[5px]  ">
            <span className="text-[25px]">
              <FiArrowUpLeft />
            </span>
            <ALink
              to="preview-title"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
            >
              <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
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

export default BookPreview;
