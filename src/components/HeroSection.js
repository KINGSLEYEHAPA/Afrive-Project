import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import PageSlider from "./PageSlider";
import "../index.css";

const Pagination = ({ currentPage, setPage }) => {
  // Wrap all the pagination Indicators
  // with AnimateSharedPresence
  // so we can detect when Indicators
  // with a layoutId are removed/added
  return (
    <AnimateSharedLayout>
      <div className="Indicators">
        {pages.map((page) => (
          <Indicator
            key={page}
            onClick={() => setPage(page)}
            isSelected={page === currentPage}
          />
        ))}
      </div>
    </AnimateSharedLayout>
  );
};

const Indicator = ({ isSelected, onClick }) => {
  return (
    <div className="Indicator-container" onClick={onClick}>
      <div className="Indicator">
        {isSelected && (
          // By setting layoutId, when this component
          // is removed and a new one is added elsewhere,
          // the new component will animate out from the old one.
          <motion.div className="Indicator-highlight" layoutId="highlight" />
        )}
      </div>
    </div>
  );
};

const pages = [0, 1, 2];

const HeroSection = () => {
  /* We keep track of the pagination direction as well as
   * current page, this way we can dynamically generate different
   * animations depending on the direction of travel */
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);

  function setPage(newPage, newDirection) {
    if (!newDirection) newDirection = newPage - currentPage;
    setCurrentPage([newPage, newDirection]);
  }

  return (
    <div className="">
      <PageSlider
        currentPage={currentPage}
        direction={direction}
        setPage={setPage}
      />
      <div className="relative bottom-32">
        {" "}
        <Pagination currentPage={currentPage} setPage={setPage} />
      </div>
    </div>
  );
};

export default HeroSection;
