import React, { useEffect, useRef } from "react";
import { UserStarRating } from "./RatingStars";
import { Link } from "react-router-dom";
import pen from "../assets/pen.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsStar, BsStarFill } from "react-icons/bs";
import { AnimateSharedLayout } from "framer-motion";
import LiveRating from "./LiveRating";
import { Link as ALink } from "react-scroll";
import {
  commentOnABook,
  sendComment,
  updateComment,
} from "../features/books/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import * as timeago from "timeago.js";

const MobileReviews = ({ book }) => {
  const [writeAReview, setWriteAReview] = useState(0);
  const [userReview, setUserReview] = useState("");
  console.log(userReview);
  const [rateABook, setRateABook] = useState(false);
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();
  const [userCommentReviewId, setUserCommentReviewId] = useState(null);

  const { user } = useSelector((state) => state.user);
  const [reviewInput, setReviewInput] = useState("");

  const comment = {
    id: book.id,
    commentData: {
      comment: userReview,
      rate: rating,
    },
  };

  const commentUpdate = {
    id: book.id,
    commentData: {
      comment: userReview,
      rate: rating,
      review_id: userCommentReviewId,
    },
  };

  const commentRef = useRef();

  const scrollToLastComment = () => {
    commentRef?.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    handleReview();
  }, [userReview, rating]);

  useEffect(() => {
    book?.bookRating?.ratings.map((item) => {
      if (item.name === user?.data?.firstname + " " + user?.data?.lastname) {
        setUserCommentReviewId(item.review_id);
      }
      return null;
    });
  }, []);

  const customerRatedBook = book?.bookRating?.ratings?.some((item, index) => {
    return item.name === user?.data?.firstname + " " + user?.data?.lastname;
  });

  const handleReview = () => {
    if (rating !== null && userReview !== "") {
      // dispatch(commentOnABook(bookForComment));

      console.log(
        customerRatedBook,
        user.data.firstname,
        commentUpdate,
        comment
      );
      if (customerRatedBook) {
        dispatch(updateComment(commentUpdate));
        setRating(null);
        setUserReview("");
      } else {
        dispatch(sendComment(comment));
        setRating(null);
        setUserReview("");
      }
    }
  };

  const pushReview = () => {
    setUserReview(reviewInput);

    setWriteAReview(2);
    setReviewInput("");
  };
  return (
    <div className="   block mtab:hidden    h-[474px] mx-[23px] mobx:mx-[40px] my-[32px] relative">
      <AnimatePresence>
        {writeAReview === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
          >
            <div className="   flex justify-between items-center">
              <h3 className="text-bodyS font-reg text-neutral-80">
                Customers Reviews
              </h3>

              <p
                className="cursor-pointer text-neutral-30 text-bodyS hover:text-neutral-80"
                onClick={scrollToLastComment}
              >
                see more
              </p>
            </div>
            <div className="mt-[24px]   overflow-hidden overflow-y-auto  scrollbar-hide w-full h-[420px] my-[10px] ">
              {book?.bookRating?.ratings?.map((rating, index) => {
                return (
                  <div key={index} className="my-[24px]">
                    <div className="flex justify-between items-center gap-[12px]">
                      <h3 className="text-sub text-neutral-70">
                        {rating?.name}
                      </h3>
                      <UserStarRating userRating={rating?.startRating} />{" "}
                      <p className="ml-[25px] text-sub text-neutral-70">
                        {timeago.format(new Date(rating?.date))}
                      </p>{" "}
                    </div>
                    <p className="text-[14px] leading-[28px] text-neutral-50 mt-[14px]">
                      {rating?.comment}
                    </p>
                  </div>
                );
              })}
              <div ref={commentRef}></div>
            </div>

            <div className="w-full h-full">
              <div
                onClick={() =>
                  user !== null ? setRateABook(true) : setWriteAReview(3)
                }
                className={
                  rating === null
                    ? "cursor-pointer w-[48px] h-[48px] rounded-full bg-primary-50 flex justify-center items-center absolute bottom-[26px] right-[86px] text-neutral-white"
                    : "cursor-pointer w-[48px] h-[48px] rounded-full bg-primary-50 flex justify-center items-center absolute bottom-[26px] right-[86px] text-accent-rating"
                }
              >
                {rating === null ? <BsStar /> : <BsStarFill />}
              </div>
              <AnimateSharedLayout>
                {rateABook && (
                  <motion.div
                    initial={{ opacity: 0, width: 59 }}
                    animate={{
                      opacity: 1,
                      width: [100, 177],
                      transition: { duration: 1 },
                    }}
                    exit={{ opacity: 0, width: 59 }}
                    className=" absolute cursor-pointer w-[177px] h-[48px] bottom-[26px] right-[86px] rounded-full bg-primary-50 flex justify-center items-center pr-[20px] "
                  >
                    <LiveRating
                      rating={rating}
                      setRating={setRating}
                      setRateABook={setRateABook}
                    />
                  </motion.div>
                )}
              </AnimateSharedLayout>

              <div
                onClick={() =>
                  user !== null ? setWriteAReview(1) : setWriteAReview(3)
                }
                className="cursor-pointer w-[48px] h-[48px] rounded-full bg-primary-50 flex justify-center items-center absolute bottom-[26px] right-[25.13px]"
              >
                <img className="" src={pen} alt="Pen" />
              </div>
            </div>
          </motion.div>
        )}
        {writeAReview === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            className="w-full h-full"
          >
            <h3 className="text-bodyS font-reg text-neutral-80">
              Write a review
            </h3>
            <div className="w-full h-3/5 mt-[16px]">
              <textarea
                value={reviewInput}
                onChange={(e) => {
                  setReviewInput(e.target.value);
                }}
                className="h-full w-full  outline-none p-[24px] text-[14px] font-reg text-neutral-30 placeholder:text-[14px]  leading-[28px] placeholder:text-neutral-30 "
                type="text"
                placeholder="Type your review here..."
              />
            </div>
            <div className="  w-full h-[44px] flex justify-center items-center absolute bottom-[32px] ">
              <div className="w-full h-full p-0 flex justify-between items center">
                <button
                  onClick={() => setWriteAReview(0)}
                  className=" text-bodyN   h-[44px] w-[155px] text-primary-40 rounded-[4px] border border-primary-40 "
                >
                  Cancel
                </button>
                <button
                  onClick={() => pushReview()}
                  className="  text-bodyN   h-[44px] w-[153px] bg-primary-40 rounded-[4px] text-neutral-white"
                >
                  Done
                </button>
              </div>
            </div>
          </motion.div>
        )}
        {writeAReview === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            className="flex items-center justify-center w-full h-full "
          >
            <div className="w-full h-full flex flex-col justify-center items-center gap-[23px]  ">
              <h4 className="text-bodyS font-reg text-primary-50 whitespace-nowrap">
                Your Review has been successfully submitted!{" "}
              </h4>
              <button
                onClick={() => setWriteAReview(0)}
                className="h-[38px] w-[155px]  text-bodyS text-primary-50 rounded-[4px] border border-primary-40 "
              >
                Back to Reviews
              </button>
            </div>
          </motion.div>
        )}

        {writeAReview === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            className="flex items-center justify-center w-full h-full "
          >
            <div className="w-full h-full flex flex-col justify-center items-center gap-[23px]  ">
              <h4 className="text-bodyS font-reg text-primary-40 whitespace-nowrap">
                Please{" "}
                <Link className="underline" to="/api/v1/auth">
                  signin
                </Link>{" "}
                or{" "}
                <Link className="underline" to="/api/v1/auth/signup">
                  signup
                </Link>{" "}
                to be able to write a review.
              </h4>
              <button
                onClick={() => setWriteAReview(0)}
                className="h-[38px] w-[155px]  text-bodyS text-primary-50 rounded-[4px] border border-primary-40 "
              >
                Back to Reviews
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileReviews;
