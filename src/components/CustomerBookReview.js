import React from "react";
import RatingStars from "./RatingStars";
import pen from "../assets/pen.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const ViewReview = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      exit={{ opacity: 0, transition: { duration: 1.2 } }}
      className="w-full h-[100px]  mt-[32px] flex gap-[20px] mb-[61px]"
    >
      <div className="flex justify-start items-start w-[201px] ">
        <h3 className="bodyL text-neutral-50 font-reg">{title}</h3>
      </div>
      <div className="w-[871px] h-[64px] ">
        <RatingStars />
        <p className="mt-[11.63px] text-[rgba(0,0,0,0.90)] text-buttonT2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat ac
          turpis id imperdiet ipsum tincidunt nunc ipsum. Ac vitae, imperdiet
          aliquam tortor. Porttitor sed at bibendum pellentesque.
        </p>
      </div>
    </motion.div>
  );
};

export const WriteReview = ({ setUserReview, setWriteAReview }) => {
  const [reviewInput, setReviewInput] = useState("");

  console.log(reviewInput);
  const pushReview = () => {
    setUserReview(reviewInput);
    setReviewInput("");
    setWriteAReview(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      exit={{ opacity: 0, transition: { duration: 1.2 } }}
      className="w-full h-full "
    >
      <div className="w-full h-[32px]  flex justify-start items-center">
        <h3 className="text-h3 font-reg text-neutral-80">Write a Review</h3>
      </div>
      <div className="w-full h-[188px] mt-[38.29px]">
        <textarea
          value={reviewInput}
          onChange={(e) => {
            setReviewInput(e.target.value);
          }}
          className="h-full w-full rounded-[8px] border border-primary-30 outline-none p-[24px] text-bodyS font-reg text-neutral-30 placeholder:text-bodyS placeholder:text-neutral-30 "
          type="text"
          placeholder="Type your review here"
        />
      </div>
      <div className="w-full h-[52px] flex justify-end items-center mt-[47.71px]">
        <div className="w-[402px] h-full p-0 space-x-[10px] ">
          <button
            onClick={() => setWriteAReview(false)}
            className="h-[52px] w-[196px] text-primary-40 rounded-[4px] border border-primary-40 "
          >
            Cancel
          </button>
          <button
            onClick={() => pushReview()}
            className="h-[52px] w-[196px] bg-primary-40 rounded-[4px] text-neutral-white"
          >
            Done
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CustomerBookReview = () => {
  const [writeAReview, setWriteAReview] = useState(false);
  const [userReview, setUserReview] = useState("");
  console.log(userReview);

  return (
    <div className="w-screen max-w-[1440px] mx-auto h-[468px] bg-primary-10 mt-[112.30px]  px-[182px] pt-[55.43px] pb-[98px] relative mb-[100px] ">
      <AnimatePresence>
        {!writeAReview && (
          <div className="w-full h-full">
            <div className="w-full h-[32px]  flex justify-between items-center">
              <h3 className="text-h3 font-reg text-neutral-80">
                Customers Reviews
              </h3>
              <p className=" text-neutral-30 text-bodyL hover:text-neutral-80 cursor-pointer">
                see more
              </p>
            </div>
            <div className=" overflow-hidden overflow-y-auto  scrollbar-hide w-full h-[348px] my-[20px]">
              <ViewReview title="Kingsley Ehapa" />
              <ViewReview title="Joshua Oyedepo" />
              <ViewReview title="Patrick Njoli" />
              <ViewReview title="Faith Obodo" />
            </div>
          </div>
        )}
        {!writeAReview && (
          <div
            onClick={() => setWriteAReview(true)}
            className="cursor-pointer w-[59px] h-[59px] rounded-full bg-primary-50 flex justify-center items-center absolute bottom-[41px] right-[182px]"
          >
            <img className="" src={pen} alt="Pen" />
          </div>
        )}
        {writeAReview && (
          <WriteReview
            setUserReview={setUserReview}
            setWriteAReview={setWriteAReview}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomerBookReview;
