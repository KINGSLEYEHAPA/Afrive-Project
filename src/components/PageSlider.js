import React from "react";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import longway from "../assets/book-focus-longway.png";
import lootingMachine from "../assets/book-focus-looting.png";
import vagabonds from "../assets/book-focus-vagabonds.png";
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
              className="h-[339px] tab:h-[495px] w-screen max-w-[1440px] flex  justify-between "
              // style={{
              //   background: `url(${lootingMachine})`,
              //   backgroundSize: "cover",
              // }}
            >
              <img
                className="w-full h-full z-[-1] absolute top-0 left-0"
                src={lootingMachine}
                alt="Hero"
              />
              <div className=" w-[178px] h-[240px] mt-[96px] ml-[73px] tab:ml-[86px] lap:ml-[183px] mb-[159px]">
                <h3 className="text-h3 text-neutral-white/80 font-reg mt-0">
                  Book Focus
                </h3>
                <h2 className="text-h2 font-medium mt-[16px] mb-[8px] text-neutral-white whitespace-nowrap">
                  The Looting Machine
                </h2>
                <p className="bodyN whitespace-nowrap font-reg text-neutral-white">
                  by Tom Burtis
                </p>
                <button className=" text-neutral-white text-buttonT font-medium mt-[72px] bg-primary-40 w-[178px] h-[48px] shadow-[0px 4px 26px rgba(0, 0, 0, 0.25)] rounded-[4px] cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          )}
          {currentPage === 1 && (
            <div
              className="h-[339px] tab:h-[495px] w-screen max-w-[1440px] flex  justify-between "
              // style={{
              //   background: `url(${longway})`,
              //   backgroundSize: "cover",
              // }}
            >
              <img
                className="w-full h-full z-[-1] absolute top-0 left-0"
                src={longway}
                alt="Hero"
              />
              <div className=" w-[178px] h-[240px] mt-[96px] ml-[73px] tab:ml-[86px] lap:ml-[183px] mb-[159px]">
                <h3 className="text-h3 text-neutral-white/80 font-reg mt-0">
                  Book Focus
                </h3>
                <h2 className="text-h2 font-medium mt-[16px] mb-[8px] text-neutral-white whitespace-nowrap">
                  Long Way to Freedom
                </h2>
                <p className="bodyN whitespace-nowrap font-reg text-neutral-white">
                  by Nelson Mandela
                </p>
                <button className=" text-neutral-white text-buttonT font-medium mt-[72px] bg-primary-40 w-[178px] h-[48px] shadow-[0px 4px 26px rgba(0, 0, 0, 0.25)] rounded-[4px] cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          )}
          {currentPage === 0 && (
            <div
              className="h-[339px] tab:h-[495px] w-screen max-w-[1440px] flex  justify-between "
              // style={{
              //   background: `url(${vagabonds})`,
              //   // backgroundSize: "contain",
              //   width: "100%",
              //   height: "100%",
              //   // objectFit: "contain",
              // }}

              // w-[860px] tab:w-[1024px] lap:w-[1366px] desk:w-[1440px]
            >
              <img
                className="w-full h-full z-[-1] absolute top-0 left-0"
                src={vagabonds}
                alt="Hero"
              />
              <div className=" w-[178px] h-[240px] mt-[96px] ml-[73px] tab:ml-[86px] lap:ml-[183px] mb-[159px]">
                <h3 className="text-h3 text-neutral-white/80 font-reg mt-0">
                  Book Focus
                </h3>
                <h2 className="text-h2 font-medium mt-[16px] mb-[8px] text-neutral-white whitespace-nowrap">
                  Vagabonds
                </h2>
                <p className="bodyN whitespace-nowrap font-reg text-neutral-white">
                  by Eloghosa Osunde
                </p>
                <button className=" text-neutral-white text-buttonT font-medium mt-[72px] bg-primary-40 w-[178px] h-[48px] shadow-[0px 4px 26px rgba(0, 0, 0, 0.25)] rounded-[4px] cursor-pointer">
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
