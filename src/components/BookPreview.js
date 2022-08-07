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
  addToCart,
} from "../features/books/bookSlice";
import CustomerBookReview from "./CustomerBookReview";
import BookSection from "./BookSection";
import BookQuote from "./BookQuote";
import AnimatePages from "./AnimatePages";
import MobileReviews from "./MobileReviews";

const BookPreview = () => {
  const [bookInShoppingBag, setBookInShoppingBag] = useState([]);
  const [eBookPreview, setEBookPreview] = useState(false);
  const [format, setFormat] = useState(false);
  const [showFormat, setShowFormat] = useState(false);
  const availableBooks = useSelector((state) => state.books.booksFromServer);

  let params = useParams();
  let navigate = useNavigate();

  const selectedBook = availableBooks?.data?.find((item) => {
    return item.title === params.bookId;
  });

  const favoriteBooks = useSelector((state) => state.books.likedBooks);

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
      // dispatch(addToCart(ebook.id));
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
      // dispatch(addToCart(bookUpdate.id));
    }
  };

  return (
    <AnimatePages>
      <div
        className="w-screen max-w-[1440px]  mx-auto mt-[88px]  "
        id="book-preview"
      >
        <div
          onClick={() => navigate(-1)}
          className="w-full h-[64px] mtab:h-[96px] flex justify-start items-center pl-[22px] mtab:pl-[73.48px] tab:pl-[90px] lap:pl-[128px] desk:pl-[105px] gap-0  "
        >
          <span className="text-[25px]">
            <MdChevronLeft />
          </span>
          <p className=" text-bodyS mtab:text-bodyL  tab:text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="w-full h-[212.11px] mtab:h-[260px] tab:h-[344.73px] lap:h-[418.87px]    desk:h-[470.70px] flex justify-start items-center  px-[23px]  mobx:px-[40px] lap:pr-[244px]    mtab:pr-[75.82px]      mtab:pl-[71px]         tab:pr-[82.39px]       tab:pl-[88.46px]   desk:pr-[280px]       lap:pl-[190.56px]  desk:pl-[182px] gap-[20px] mobx:gap-[30px] mtab:gap-[40.20px] tab:gap-[64px] lap:gap-[87.50px] desk:gap-[98px]">
          <div className="h-full w-[155px] mtab:w-[190px] tab:w-[251.21px]  lap:w-[304.94px]   desk:w-[343px] ">
            <div className="w-full h-full">
              <div className="w-full h-full  relative group  ">
                <div className="absolute w-full     h-[56px]  mtab:h-[60px] lap:h-[65px]  desk:h-[91px]  opacity-0 flex justify-between items-center mx-auto group-hover:opacity-100  ">
                  <div className="  w-[38px] h-[38px] lap:w-[46px] lap:h-[46px] desk:w-[51px] desk:h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center ml-[14px] desk:ml-[20px]">
                    <AnimatePresence exitBeforeEnter>
                      {favoriteBooks.filter(
                        (item) => item.title === selectedBook?.title
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
                          className="text-[22px] desk:text-[25px] text-primary-70 border-[1.59277px solid #FFFFFF]"
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
                          className="text-[22px] desk:text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
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
          <div className=" w-[154px] mobx:w-[320px] mtab:w-[480.98px]] tab:w-[535.94px]  lap:w-[537px] h-full ">
            <div className=" h-[66px] mtab:h-[60px]  tab:h-[70px]  desk:h-[84px] w-full  flex flex-col items-start justify-center pt-6 mtab:pt-[12.29px] tab:pt-[2.32px]    mb-[16px] tab:mb-[20px] lap:pt-[1.29px] lap:mb-[14px] desk:pt-[62px] desk:mb-[18px] ">
              <div className="flex gap-[20px]">
                <h2
                  className=" text-bodyN mtab:text-bodyL tab:text-h4   lap:text-h3 font-medium text-neutral-80"
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
                      className="   hidden   mtab:flex items-center justify-center w-[100px] gap-[5px] h-[29.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] "
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
              <span className=" text-sub  mtab:text-bodyS     tab:text-bodyN  lap:text-bodyL text-neutral-30 font-reg">
                by{" "}
                <span className="    text-bodyS mtab:text-bodyN  tab:text-bodyL    lap:text-h4 text-neutral-40 font-reg ">
                  {selectedBook?.author}
                </span>
              </span>
            </div>
            <div className=" h-[64px]   mtab:h-[57px]     lap:h-[64px] w-full mb-[18.18px]">
              <p className=" text-sub mtab:text-[16px] mtab:leading-[28px]     lap:text-[18px] lap:leading-8 font-reg text-neutral-70 w-full">
                {selectedBook?.description.slice(0, 120)}
              </p>
            </div>
            <div className=" moby:mt-[-30px] mtab:mt-[25px] w-full flex justify-start items-center h-[24px] gap-[0] tab:gap-[25px]     desk:gap-[40px]">
              <RatingStars book={selectedBook} />
              {selectedBook?.bookRating?.ratings?.length !== 0 && (
                <p>({selectedBook?.bookRating?.ratings?.length})</p>
              )}
            </div>
            <div className="mt-[-14.57px] mtab:mt-[27.46px] tab:mt-[29.46px] lap:mt-[35.82px] desk:mt-[25px] flex w-full h-[32px] justify-start gap-[48px] items-center mb-[80px]">
              <p className="text-primary-50 text-bodyL  lap:text-h2 font-medium">
                N{selectedBook?.price.toLocaleString("en-US")}
              </p>
              <span className="  hidden  mtab:flex items-center justify-start mtab:text-bodyN text-neutral-60">
                Status: &nbsp;
                <span className="     hidden  mtab:flex  items-center justify-start mtab:text-bodyS neutral-40">
                  {selectedBook?.status}
                </span>
              </span>
              <AnimatePresence>
                {!eBookPreview && selectedBook?.eBook?.status && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    exit={{ opacity: 0 }}
                    onClick={() => setEBookPreview(true)}
                    className=" hidden   mtab:flex items-center justify-center w-[152px] h-[29.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] "
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
            <div className=" hidden w-full h-[52px] mtab:flex gap-[25px] justify-start items-center relative mt-[-45px] mtab:mt-[-55.29px]   tab:mt-[-44.79px] lap:mt[65px] desk:mt-[80px]    ">
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
                      className="w-[243px]  mtab:w-[248px] mtab:h-[44px]    lap:w-[318px]  desk:h-[156px] absolute space-y-[1px] top-0 left-0"
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
                            className="w-[243px]  mtab:w-[248px] mtab:h-[44px]    lap:w-[318px]  desk:h-[52px] rounded-[4px]  p-[10px] text-neutral-white text-buttonT2  bg-primary-50 border-2 border-primary-50"
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
                className=" w-[243px]  mtab:w-[248px] mtab:h-[44px]    lap:w-[318px] lap:h-[52px] rounded-[4px]  p-[10px] text-neutral-white  tab:text-bodyN desk:text-buttonT2  bg-primary-50 border-2 border-primary-50"
              >
                {eBookPreview ? "Buy e-book Now" : "Buy Now"}
              </button>
              <button
                onClick={() => {
                  eBookPreview ? automateFormat() : addItemToBag(selectedBook);
                }}
                className=" w-[67px]   mtab:w-[155px]  mtab:h-[44px]  lap:h-[52px] rounded-[4px] text-primary-50 p-[10px] bg-neutral-white tab:text-bodyN desk:text-buttonT2  border-2 border-primary-50"
              >
                Add to Bag
              </button>
            </div>
            <div className=" hidden mtab:flex mtab:mt-[12.73px]    lap:mt-[24px] w-[391px] h-[32px] justify-start items-center text-neutral-80 font-reg text-bodyN">
              <h3>Category: &nbsp;</h3>
              <p className="text-primary-30">
                {selectedBook?.category?.slice(0, 4).map((item) => {
                  return <span key={item}>{item},&nbsp;</span>;
                })}
              </p>
            </div>
          </div>
        </div>
        <div className=" text-sub px-[24px] mobx:px-[40px] mtab:hidden mt-[24px] w-[391px] h-[32px] flex justify-start items-center text-neutral-80 font-reg ">
          <h3>Category: &nbsp;</h3>
          <p className="text-primary-30">
            {selectedBook?.category?.slice(0, 4).map((item) => {
              return <span key={item}>{item},&nbsp;</span>;
            })}
          </p>
        </div>
        <hr className=" mtab:hidden w-[100%] mx-auto  h-0 border-1 border-neutral-20 mt-[15px] mb-[15px]" />
        {!eBookPreview && (
          <div className="flex justify-between px-[30px] mobx:px-[48px] mtab:hidden ">
            <span className=" flex   mtab:hidden items-center justify-start mtab:text-bodyN text-neutral-60">
              Status: &nbsp;
              <span className="  flex     mtab:hidden  items-center justify-start mtab:text-bodyS neutral-40">
                {selectedBook?.status}
              </span>
            </span>
            <span className="text-[#000000]/10">|</span>
            <div className="min-w-[35%]">
              {!eBookPreview && selectedBook?.eBook?.status && (
                <p
                  onClick={() => setEBookPreview(true)}
                  className="text-bodyS text-primary-40"
                >
                  E-book Available
                </p>
              )}
            </div>
          </div>
        )}
        {eBookPreview && (
          <div className="flex justify-between px-[30px] mobx:px-[48px] mtab:hidden ">
            <p className="text-bodyN text-[#000000]/50">E-book Version</p>
            <span className="text-[#000000]/10">|</span>
            <p
              onClick={() => {
                setEBookPreview(false);
                setShowFormat(false);
              }}
              className="text-bodyS text-primary-40"
            >
              Back to Hardcover
            </p>
          </div>
        )}
        <hr className=" mtab:hidden w-[100%] mx-auto  h-0 border-1 border-neutral-20 mt-[15px] mb-[15px]" />

        <div className=" flex w-full h-[44px] mtab:hidden gap-[20px] justify-center items-center relative my-[33px]     ">
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
                  className="w-[243px] mx-[10.50%] mobx:mx-[30%]   h-[132px] absolute space-y-[1px] top-0 left-0"
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
                        className="w-[243px]   h-[44px] rounded-[4px]  p-[10px] text-neutral-white text-buttonT2  bg-primary-50 border-2 border-primary-50"
                      >
                        {item}
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimateSharedLayout>
          </AnimatePresence>

          <button
            onClick={() => {
              eBookPreview ? setShowFormat(true) : buyBook(selectedBook);
            }}
            className=" w-[243px]  mtab:w-[248px] mtab:h-[44px]    lap:w-[318px] lap:h-[52px] rounded-[4px]  p-[10px] text-neutral-white  tab:text-bodyN desk:text-buttonT2  bg-primary-50 border-2 border-primary-50"
          >
            {eBookPreview ? "Buy e-book Now" : "Buy Now"}
          </button>
          <div
            onClick={() => {
              eBookPreview ? automateFormat() : addItemToBag(selectedBook);
            }}
            className=" w-[67px]   mtab:w-[155px]  mtab:h-[44px]  lap:h-[52px] rounded-[4px] text-primary-50 p-[10px] bg-neutral-white tab:text-bodyN desk:text-buttonT2  border-2 border-primary-50 flex justify-center items-center"
          >
            <span className="w-[15.51px] h-[17.23px]">
              {" "}
              <FiShoppingBag />
            </span>
          </div>
        </div>
        <hr className=" mtab:hidden w-[100%] mx-auto  h-0 border-1 border-primary-30 mt-[15px] " />

        <CustomerBookReview book={selectedBook} />
        <MobileReviews book={selectedBook} />
        <hr className=" mtab:hidden w-[100%] mx-auto  h-0 border-1 border-primary-30 mt-[15px] mb-[25px] " />
        <BookSection bookSectionName="Similar Books" />
        <BookSection bookSectionName="BestSellers" />
        <div className="w-full mt-[72.51px] flex justify-end items-center pr-[24px] mtab:pr-[71.14px] lap:pr-[117.23px] mb-[-19px]">
          <div className="  h-[96px] flex justify-start items-center gap-[5px]  ">
            <span className="text-[15px]   lap:text-[25px]">
              <FiArrowUpLeft />
            </span>

            <ALink
              to="book-preview"
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

export default BookPreview;
