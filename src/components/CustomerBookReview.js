import React, { useEffect, useRef } from "react";
import { UserStarRating } from "./RatingStars";
import { Link } from "react-router-dom";
import pen from "../assets/pen.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsStar, BsStarFill } from "react-icons/bs";
import { AnimateSharedLayout } from "framer-motion";
import LiveRating from "./LiveRating";
import {
  commentOnABook,
  getAllBooks,
  sendComment,
  updateComment,
} from "../features/books/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import * as timeago from "timeago.js";

export const ViewReview = ({ title, comment, userRating, index, date }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: index * 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="w-full  mtab:h-[129px]  tab:h-[117px] lap:h-[129px]   desk:h-[100px] mtab:mt-[24px] tab:mt-[40px]  desk:mt-[32px] flex gap-[20px]   mtab:mb-[24px]   tab:mb-[40px]    desk:mb-[61px]"
    >
      <div className="flex justify-start items-start  mtab:w-[134px] tab:w-[151px]  lap:w-[155px] desk:w-[201px] ">
        <h3 className=" capitalize mtab:text-bodyN   tab:text-bodyL desk:text-h4 text-neutral-50 font-reg">
          {title}
        </h3>
      </div>

      <div className=" mtab:mt-[5px]  desk:mt-[8px] mtab:w-[551.1px] tab:w-[649px]  lap:w-[777px] desk:w-[871px] mtab:h-[108px]  tab:h-[96px] lap:h-[108px]  desk:h-[72px] ">
        <div className="flex items-center gap-[40px]   ">
          {" "}
          <UserStarRating userRating={userRating} />{" "}
          <span className=" mtab:text-bodyS  lap:text-bodyS text-neutral-40 font-reg mr-[45px]">
            {timeago.format(new Date(date))}
          </span>
        </div>
        <p className="mt-[11.63px] text-[rgba(0,0,0,0.90)]       mtab:text-[14px] mtab:leading-[32px]   tab:text-[16px] tab:leading-[28px]      lap:text-buttonT2">
          {comment}
        </p>
      </div>
    </motion.div>
  );
};

export const WriteReview = ({ setUserReview, setWriteAReview }) => {
  const [reviewInput, setReviewInput] = useState("");

  const pushReview = () => {
    setUserReview(reviewInput);

    setWriteAReview(2);
    setReviewInput("");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      exit={{ opacity: 0, transition: { duration: 1.2 } }}
      className="w-full h-full"
    >
      <div className="w-full tab:h-[24px] lap:h-[32px]  flex justify-start items-center">
        <h3 className=" mtab:text-bodyN tab:text-bodyL lap:text-h4  desk:text-h3 font-reg text-neutral-80">
          Write a Review
        </h3>
      </div>
      <div className="w-full    h-[188px] mtab:mt-[40px]  tab:mt-[31px]   desk:mt-[38.29px]">
        <textarea
          value={reviewInput}
          onChange={(e) => {
            setReviewInput(e.target.value);
          }}
          className="h-full w-full rounded-[8px] border border-primary-30 outline-none p-[24px] text-bodyS font-reg text-neutral-70 placeholder:text-bodyS placeholder:text-neutral-30 "
          type="text"
          placeholder="Type your review here"
        />
      </div>
      <div className="w-full h-[52px] flex justify-end items-center mtab:mt-[24px]  lap:mt-[32px]      desk:mt-[47.71px]">
        <div className="w-[402px] h-full p-0 space-x-[10px] ">
          <button
            onClick={() => setWriteAReview(0)}
            className="h-[52px] w-[196px] text-primary-40 rounded-[4px] border border-primary-40   mtab:text-bodyL lap:text-buttonT"
          >
            Cancel
          </button>
          <button
            onClick={() => pushReview()}
            className="h-[52px] w-[196px] bg-primary-40 rounded-[4px] text-neutral-white   mtab:text-bodyL lap:text-buttonT "
          >
            Done
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const CustomerBookReview = ({ book }) => {
  const [writeAReview, setWriteAReview] = useState(0);
  const [userReview, setUserReview] = useState("");
  console.log(userReview);
  const [rateABook, setRateABook] = useState(false);
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();
  const [userCommentReviewId, setUserCommentReviewId] = useState(null);

  const { user } = useSelector((state) => state.user);

  // const bookForComment = {
  //   ...book,
  //   bookRating: {
  //     ...book?.bookRating,
  //     ratings: [
  //       ...book?.bookRating?.ratings,
  //       {
  //         name: "Kingsley John Boro Just Testing",
  //         comment: userReview,
  //         starRating: rating,
  //       },
  //     ],
  //   },
  // };

  const comment = {
    id: book?.id,
    commentData: {
      comment: userReview,
      rate: rating,
    },
  };

  const commentUpdate = {
    id: book?.id,
    commentData: {
      comment: userReview,
      rate: rating,
      review_id: userCommentReviewId,
    },
  };

  useEffect(() => {
    book?.bookRating?.ratings.map((item) => {
      if (item.name === user?.data?.firstname + " " + user?.data?.lastname) {
        setUserCommentReviewId(item.review_id);
      }
      return null;
    });
  }, []);

  useEffect(() => {
    handleReview();
  }, [userReview, rating]);

  const customerRatedBook = book?.bookRating?.ratings?.some((item, index) => {
    return item.name === user?.data?.firstname + " " + user?.data?.lastname;
  });

  const handleReview = () => {
    if (rating !== null && userReview !== "") {
      // dispatch(commentOnABook(bookForComment));

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

  const commentRef = useRef();

  const scrollToLastComment = () => {
    commentRef?.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // const closeRating = (e) => {
  //   e.preventDefault();
  //   if (e.target === e.currentTarget) {
  //     setRateABook(false);
  //   }
  // };

  return (
    <div className=" hidden mtab:block    w-screen max-w-[1440px] mx-auto h-[474px] lap:h-[499px] desk:h-[468px] bg-primary-10  px-[23px]  py-[31.43px]  mtab:px-[72px]   tab:px-[86px]    lap:px-[192px]     desk:px-[182px]   mtab:pt-[56px] mtab:pb-[72px]  desk:pt-[55.43px] desk:pb-[98px] relative    lap:mt-[120.27px] my-[32px]    mtab:mb-[48px]   mtab:mt-[163.96px]   tab:mb-[56px]   tab:mt-[142.27px] lap:mb-[47.37px]      desk:mb-[100px]  desk:mt-[112.30px] ">
      <AnimatePresence>
        {writeAReview === 0 && (
          <div>
            <div className="w-full h-full">
              <div className="w-full  tab:h-[24px]  lap:h-[32px]  flex justify-between items-center">
                <h3 className="  mtab:text-bodyN     tab:text-bodyL   lap:text-h3 font-reg text-neutral-80">
                  Customers Reviews
                </h3>
                <p
                  onClick={scrollToLastComment}
                  className="cursor-pointer text-neutral-30  mtab:text-bodyN    tab:text-bodyL hover:text-neutral-80"
                >
                  see more
                </p>
              </div>
              {book?.bookRating?.ratings.length === 0 && (
                <div className="mt-[72px] text-center text-neutral-30 text-bodyN">
                  There is no review yet for this book.
                </div>
              )}
              <div className=" overflow-hidden overflow-y-auto  scrollbar-hide w-full h-[348px] mtab:my-[-10px] tab:my-[20px] ">
                {book?.bookRating?.ratings?.map((rating, index) => {
                  return (
                    <ViewReview
                      key={index}
                      title={rating.name}
                      comment={rating.comment}
                      date={rating.date}
                      userRating={rating.startRating}
                      index={index}
                    />
                  );
                })}
                <div ref={commentRef}></div>
              </div>
            </div>

            <div className="w-full h-full">
              <div
                onClick={() =>
                  user !== null ? setRateABook(true) : setWriteAReview(3)
                }
                className={
                  rating === null
                    ? "cursor-pointer w-[59px] h-[59px] rounded-full bg-primary-50 flex justify-center items-center absolute bottom-[41px] mtab:right-[158px]    lap:right-[253px] text-neutral-white"
                    : "cursor-pointer w-[59px] h-[59px] rounded-full bg-primary-50 flex justify-center items-center absolute bottom-[41px] mtab:right-[158px]  lap:right-[253px] text-accent-rating"
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
                    className=" absolute cursor-pointer w-[177px] h-[59px] bottom-[41px] mtab:right-[158px]    lap:right-[253px] rounded-full bg-primary-50 flex justify-center items-center pr-[20px] "
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
                className="cursor-pointer w-[59px] h-[59px] rounded-full bg-primary-50 flex justify-center items-center absolute bottom-[41px]  mtab:right-[86.87px]    lap:right-[182px]"
              >
                <img className="" src={pen} alt="Pen" />
              </div>
            </div>
          </div>
        )}

        {writeAReview === 1 && (
          <WriteReview
            setUserReview={setUserReview}
            setWriteAReview={setWriteAReview}
            handleReview={handleReview}
          />
        )}
        {writeAReview === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            className="flex items-center justify-center w-full h-full "
          >
            <div className="w-[407px] h-[122px] flex flex-col items-center gap-[38px] mt-[38px] ">
              <h4 className="text-h4 font-reg text-primary-50 whitespace-nowrap">
                Your Review has been successfully submitted!{" "}
              </h4>
              <button
                onClick={() => {
                  setWriteAReview(0);
                  dispatch(getAllBooks());
                }}
                className="h-[52px] w-[196px] text-primary-50 rounded-[4px] border border-primary-40 "
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
            <div className="w-[407px] h-[122px] flex flex-col items-center gap-[38px] mt-[38px] ">
              <h4 className="text-h4 font-reg text-primary-50 whitespace-nowrap">
                Please{" "}
                <Link className="underline" to="/api/v1/auth">
                  signin
                </Link>{" "}
                or{" "}
                <Link className="underline" to="/api/v1/auth/signup">
                  signup
                </Link>{" "}
                to rate and comment on a book.
              </h4>
              <button
                onClick={() => setWriteAReview(0)}
                className="h-[52px] w-[196px] text-primary-50 rounded-[4px] border border-primary-40 "
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

export default CustomerBookReview;
