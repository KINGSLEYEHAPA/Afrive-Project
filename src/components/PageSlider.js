import React from "react";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import longway from "../assets/banner-unseen2.png";
import ridealong from "../assets/banner-ridingalong.png";
import Unseen from "../assets/banner-the-unseen.png";
import lootingMachine from "../assets/book-focus-looting.png";
import vagabonds from "../assets/book-focus-vagabonds.png";
import bookShowcase from "../assets/booky.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { buyBookNow } from "../features/books/bookSlice";

// Variants in framer-motion define visual states
// that a rendered motion component can be in at
// any given time.

const xOffset = 100;
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0,
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
  exit: (direction) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0,
  }),
};

const pages = [0, 1, 2, 3, 4];

const PageSlider = ({ currentPage, setPage, direction }) => {
  const availableBooks = useSelector((state) => state.books.booksFromServer);
  useEffect(() => {
    setInterval(() => {
      currentPage++;
    }, 1000);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const randomNumber = Math.floor(Math.random() * availableBooks?.data?.length);
  console.log(randomNumber, availableBooks?.data?.[randomNumber]);
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

  /* Add and remove pages from the array to checkout
	how the gestures and pagination animations are
	fully data and layout-driven. */
  const hasPaginated = useRef(false);

  const detectPaginationGesture = (e, { offset }) => {
    if (hasPaginated.current) return;
    let newPage = currentPage;
    const threshold = xOffset / 2;

    if (offset.x < -threshold) {
      // If user is dragging left, go forward a page
      newPage = currentPage + 1;
    } else if (offset.x > threshold) {
      // Else if the user is dragging right,
      // go backwards a page
      newPage = currentPage - 1;
    }

    if (newPage !== currentPage) {
      hasPaginated.current = true;
      // Wrap the page index to within the
      // permitted page range
      newPage = wrap(0, pages.length, newPage);
      setPage(newPage, offset.x < 0 ? 1 : -1);
    }
  };

  return (
    <div className="slider-container">
      <AnimatePresence
        // This will be used for components to resolve
        // exit variants. It's necessary as removed
        // components won't rerender with
        // the latest state (as they've been removed)
        custom={direction}
      >
        <motion.div
          key={currentPage}
          className="slide"
          data-page={currentPage}
          variants={variants}
          initial="enter"
          animate="active"
          exit="exit"
          drag="x"
          onDrag={detectPaginationGesture}
          onDragStart={() => (hasPaginated.current = false)}
          onDragEnd={() => (hasPaginated.current = true)}
          // Snap the component back to the center
          // if it hasn't paginated
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          // This will be used for components to resolve all
          // other variants, in this case initial and animate.
          custom={direction}
        >
          {currentPage === 2 && (
            <div className=" h-[238.86px] mtab:h-[339px] tab:h-[495px] w-screen max-w-[1440px] flex  justify-between ">
              <img
                className="w-full h-full z-[-1] absolute top-0 left-0"
                src={lootingMachine}
                alt="Hero"
              />

              <div className=" w-[178px] h-[240px] ml-[22px] mtab:ml-[73px] tab:ml-[86px] lap:ml-[183px] lap:mb-[159px] lap:mt-[96px] tab:mb-[139.50px] tab:mt-[139.50px] mtab:mb-[61.50px] mtab:mt-[61.50px] mb-[58.86px] mt-[49px]   ">
                <h3 className=" text-bodyS mtab:text-h3 text-neutral-white/80 font-reg mt-0">
                  Book Focus
                </h3>
                <Link
                  to={`/book/${availableBooks?.data?.[randomNumber].title}`}
                >
                  <h2 className=" text-bodyL mtab:text-h2 font-medium my-[6px]    mtab:mt-[16px] mtab:mb-[8px] text-neutral-white whitespace-nowrap">
                    {availableBooks?.data?.[randomNumber].title}
                  </h2>
                  <p className=" text-sub  mtab:text-bodyN whitespace-nowrap font-reg text-neutral-white">
                    {availableBooks?.data?.[randomNumber].author}
                  </p>
                </Link>
                <button
                  onClick={() => buyBook(availableBooks?.data?.[randomNumber])}
                  className=" absolute z-20 text-neutral-white   text-[12px] leading-[18px] mtab:text-buttonT font-medium mt-[48px]  desk:mt-[72px] bg-primary-40  w-[120px] h-[37px]   mtab:w-[178px] mtab:h-[48px] shadow-[0px 4px 26px rgba(0, 0, 0, 0.25)] rounded-[4px] cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          )}
          {currentPage === 3 && (
            <div className=" h-[238.86px] mtab:h-[339px] tab:h-[495px] w-screen max-w-[1440px] flex  justify-between ">
              <img
                className="w-full h-full z-[-1] absolute top-0 left-0"
                src={ridealong}
                alt="Hero"
              />

              <div className=" w-[178px] h-[240px] ml-[22px] mtab:ml-[73px] tab:ml-[86px] lap:ml-[183px] lap:mb-[159px] lap:mt-[96px] tab:mb-[139.50px] tab:mt-[139.50px] mtab:mb-[61.50px] mtab:mt-[61.50px] mb-[58.86px] mt-[49px]   ">
                <h3 className=" text-bodyS mtab:text-h3 text-neutral-white/80 font-reg mt-0">
                  Book Focus
                </h3>

                <Link
                  to={`/book/${availableBooks?.data?.[randomNumber].title}`}
                >
                  <h2 className=" text-bodyL mtab:text-h2 font-medium my-[6px]    mtab:mt-[16px] mtab:mb-[8px] text-neutral-white whitespace-nowrap">
                    {availableBooks?.data?.[randomNumber].title}
                  </h2>
                  <p className=" text-sub  mtab:text-bodyN whitespace-nowrap font-reg text-neutral-white">
                    {availableBooks?.data?.[randomNumber].author}
                  </p>
                </Link>
                <button
                  onClick={() => buyBook(availableBooks?.data?.[randomNumber])}
                  className=" absolute z-20 text-neutral-white   text-[12px] leading-[18px] mtab:text-buttonT font-medium mt-[48px]  desk:mt-[72px] bg-primary-40  w-[120px] h-[37px]   mtab:w-[178px] mtab:h-[48px] shadow-[0px 4px 26px rgba(0, 0, 0, 0.25)] rounded-[4px] cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          )}
          {currentPage === 4 && (
            <div className=" h-[238.86px] mtab:h-[339px] tab:h-[495px] w-screen max-w-[1440px] flex  justify-between ">
              <img
                className="w-full h-full z-[-1] absolute top-0 left-0"
                src={Unseen}
                alt="Hero"
              />

              <div className=" w-[178px] h-[240px] ml-[22px] mtab:ml-[73px] tab:ml-[86px] lap:ml-[183px] lap:mb-[159px] lap:mt-[96px] tab:mb-[139.50px] tab:mt-[139.50px] mtab:mb-[61.50px] mtab:mt-[61.50px] mb-[58.86px] mt-[49px]   ">
                <h3 className=" text-bodyS mtab:text-h3 text-neutral-white/80 font-reg mt-0">
                  Book Focus
                </h3>
                <Link
                  to={`/book/${availableBooks?.data?.[randomNumber].title}`}
                >
                  <h2 className=" text-bodyL mtab:text-h2 font-medium my-[6px]    mtab:mt-[16px] mtab:mb-[8px] text-neutral-white whitespace-nowrap">
                    {availableBooks?.data?.[randomNumber].title}
                  </h2>
                  <p className=" text-sub  mtab:text-bodyN whitespace-nowrap font-reg text-neutral-white">
                    {availableBooks?.data?.[randomNumber].author}
                  </p>
                </Link>
                <button
                  onClick={() => buyBook(availableBooks?.data?.[randomNumber])}
                  className=" absolute z-20 text-neutral-white   text-[12px] leading-[18px] mtab:text-buttonT font-medium mt-[48px]  desk:mt-[72px] bg-primary-40  w-[120px] h-[37px]   mtab:w-[178px] mtab:h-[48px] shadow-[0px 4px 26px rgba(0, 0, 0, 0.25)] rounded-[4px] cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          )}
          {currentPage === 1 && (
            <div className=" h-[238.86px] mtab:h-[339px] tab:h-[495px] w-screen max-w-[1440px] flex  justify-between ">
              <img
                className="w-full h-full z-[-1] absolute top-0 left-0"
                src={longway}
                alt="Hero"
              />
              <div className=" w-[178px] h-[240px] ml-[22px] mtab:ml-[73px] tab:ml-[86px] lap:ml-[183px] lap:mb-[159px] lap:mt-[96px] tab:mb-[139.50px] tab:mt-[139.50px] mtab:mb-[61.50px] mtab:mt-[61.50px] mb-[58.86px] mt-[49px]   ">
                <h3 className=" text-bodyS mtab:text-h3 text-neutral-white/80 font-reg mt-0">
                  Book Focus
                </h3>
                <Link
                  to={`/book/${availableBooks?.data?.[randomNumber].title}`}
                >
                  <h2 className=" text-bodyL mtab:text-h2 font-medium my-[6px]    mtab:mt-[16px] mtab:mb-[8px] text-neutral-white whitespace-nowrap">
                    {availableBooks?.data?.[randomNumber].title}
                  </h2>
                  <p className=" text-sub  mtab:text-bodyN whitespace-nowrap font-reg text-neutral-white">
                    {availableBooks?.data?.[randomNumber].author}
                  </p>
                </Link>
                <button
                  onClick={() => buyBook(availableBooks?.data?.[randomNumber])}
                  className=" absolute z-20 text-neutral-white   text-[12px] leading-[18px] mtab:text-buttonT font-medium mt-[48px]  desk:mt-[72px] bg-primary-40  w-[120px] h-[37px]   mtab:w-[178px] mtab:h-[48px] shadow-[0px 4px 26px rgba(0, 0, 0, 0.25)] rounded-[4px] cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          )}
          {currentPage === 0 && (
            <div className=" h-[238.86px] mtab:h-[339px] tab:h-[495px] w-screen max-w-[1440px] flex  justify-between ">
              <img
                className="w-full h-full z-[-1] absolute top-0 left-0"
                src={vagabonds}
                alt="Hero"
              />
              <div className=" w-[178px] h-[240px] ml-[22px] mtab:ml-[73px]  tab:ml-[86px] lap:ml-[183px] lap:mb-[159px] lap:mt-[96px] tab:mb-[139.50px] tab:mt-[139.50px] mtab:mb-[61.50px] mtab:mt-[61.50px] mb-[58.86px] mt-[49px]   ">
                <h3 className=" text-bodyS mtab:text-h3 text-neutral-white/80 font-reg mt-0">
                  Book Focus
                </h3>
                <Link
                  to={`/book/${availableBooks?.data?.[randomNumber].title}`}
                >
                  <h2 className=" text-bodyL mtab:text-h2 font-medium my-[6px]    mtab:mt-[16px] mtab:mb-[8px] text-neutral-white whitespace-nowrap">
                    {availableBooks?.data?.[randomNumber].title}
                  </h2>
                  <p className=" text-sub  mtab:text-bodyN whitespace-nowrap font-reg text-neutral-white">
                    {availableBooks?.data?.[randomNumber].author}
                  </p>
                </Link>
                <button
                  onClick={() => buyBook(availableBooks?.data?.[randomNumber])}
                  className=" absolute z-20 text-neutral-white   text-[12px] leading-[18px] mtab:text-buttonT font-medium mt-[48px]  desk:mt-[72px] bg-primary-40  w-[120px] h-[37px]   mtab:w-[178px] mtab:h-[48px] shadow-[0px 4px 26px rgba(0, 0, 0, 0.25)] rounded-[4px] cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
              {/* <div className=" w-[209px] h-[361.94px] mr-[352.63px] my-[66.45px]">
                <img
                  className="w-full h-full pointer-events-none"
                  src={bookShowcase}
                  alt="Hero Book"
                />
              </div> */}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageSlider;
