import React, { useEffect } from "react";
import { UserStarRating } from "./RatingStars";
import { Link } from "react-router-dom";
import pen from "../assets/pen.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsStar, BsStarFill } from "react-icons/bs";
import { AnimateSharedLayout } from "framer-motion";
import LiveRating from "./LiveRating";
import { commentOnABook, sendComment } from "../features/books/bookSlice";
import { useDispatch, useSelector } from "react-redux";

export const ViewReview = ({ title, comment, userRating, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, delay: index * 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="w-full h-[100px]  mt-[32px] flex gap-[20px] mb-[61px]"
    >
      <div className="flex justify-start items-start w-[201px] ">
        <h3 className="bodyL text-neutral-50 font-reg">{title}</h3>
      </div>
      <div className="w-[871px] h-[64px] ">
        <UserStarRating userRating={userRating} />
        <p className="mt-[11.63px] text-[rgba(0,0,0,0.90)] text-buttonT2">
          {comment}
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
            onClick={() => setWriteAReview(0)}
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

const CustomerBookReview = ({ book }) => {
  const [writeAReview, setWriteAReview] = useState(0);
  const [userReview, setUserReview] = useState("");
  console.log(userReview);
  const [rateABook, setRateABook] = useState(false);
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();

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
    id: book.id,
    commentData: {
      comment: userReview,
      rate: rating,
    },
  };

  useEffect(() => {
    handleReview();
  }, [userReview, rating]);

  const handleReview = () => {
    if (rating !== null && userReview !== "") {
      // dispatch(commentOnABook(bookForComment));
      dispatch(sendComment(comment));
      setRating(null);
      setUserReview("");
    }
  };

  return (
    <div className="w-screen max-w-[1440px] mx-auto h-[468px] bg-primary-10 mt-[112.30px]  px-[182px] pt-[55.43px] pb-[98px] relative mb-[100px] ">
      <AnimatePresence>
        {writeAReview === 0 && (
          <div>
            <div className="w-full h-full">
              <div className="w-full h-[32px]  flex justify-between items-center">
                <h3 className="text-h3 font-reg text-neutral-80">
                  Customers Reviews
                </h3>
                <p className="cursor-pointer text-neutral-30 text-bodyL hover:text-neutral-80">
                  see more
                </p>
              </div>
              <div className=" overflow-hidden overflow-y-auto  scrollbar-hide w-full h-[348px] my-[20px] ">
                {book?.bookRating?.ratings?.map((rating, index) => {
                  return (
                    <ViewReview
                      key={index}
                      title={rating.name}
                      comment={rating.comment}
                      userRating={rating.startRating}
                      index={index}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-full h-full">
              <div
                onClick={() =>
                  user !== null ? setRateABook(true) : setWriteAReview(3)
                }
                className={
                  rating === null
                    ? "cursor-pointer w-[59px] h-[59px] rounded-full bg-primary-50 flex justify-center items-center absolute bottom-[41px] right-[253px] text-neutral-white"
                    : "cursor-pointer w-[59px] h-[59px] rounded-full bg-primary-50 flex justify-center items-center absolute bottom-[41px] right-[253px] text-accent-rating"
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
                    className=" absolute cursor-pointer w-[177px] h-[59px] bottom-[41px] right-[253px] rounded-full bg-primary-50 flex justify-center items-center pr-[20px] "
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
                className="cursor-pointer w-[59px] h-[59px] rounded-full bg-primary-50 flex justify-center items-center absolute bottom-[41px] right-[182px]"
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
                onClick={() => setWriteAReview(0)}
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
