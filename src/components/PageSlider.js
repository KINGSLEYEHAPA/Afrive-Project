import React from "react";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import hero from "../assets/bookban.jpg";
import book from "../assets/bookkid.jfif";
import herobook from "../assets/books.jpg";
import bookShowcase from "../assets/booky.jpg";

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

const pages = [0, 1, 2];

const PageSlider = ({ currentPage, setPage, direction }) => {
  useEffect(() => {
    setInterval(() => {
      currentPage++;
    }, 1000);
  }, []);

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
            <div
              className="h-[495px] w-full max-w-[1440px] bg-primary-10"
              //   style={{ background: `url(${hero})`, backgroundSize: "cover" }}
            >
              1
            </div>
          )}
          {currentPage === 1 && (
            <div
              className="h-[495px] w-full max-w-[1440px] bg-primary-50"
              //   style={{
              //     background: `url(${herobook})`,
              //     backgroundSize: "cover",
              //   }}
            >
              2
            </div>
          )}
          {currentPage === 0 && (
            <div
              className="h-[495px] w-full max-w-[1440px] flex  justify-between"
              //   style={{ background: `url(${book})`, backgroundSize: "cover" }}
            >
              <div className=" w-[178px] h-[240px] mt-[96px] ml-[183px] mb-[159px]">
                <h3 className="text-h3 text-neutral-white/80 font-reg mt-0">
                  Book Focus
                </h3>
                <h2 className="text-h2 font-medium mt-[16px] mb-[8px] text-neutral-white whitespace-nowrap">
                  An African Night Entertainment
                </h2>
                <p className="bodyN whitespace-nowrap font-reg text-neutral-white">
                  by Cyprian Ekwensi
                </p>
                <button className=" text-neutral-white text-buttonT font-medium mt-[72px] bg-primary-40 w-[178px] h-[48px] shadow-[0px 4px 26px rgba(0, 0, 0, 0.25)] rounded-[4px] cursor-pointer">
                  Buy Now
                </button>
              </div>
              <div className=" w-[209px] h-[361.94px] mr-[352.63px] my-[66.45px]">
                <img
                  className="w-full h-full pointer-events-none"
                  src={bookShowcase}
                  alt="Hero Book"
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageSlider;
