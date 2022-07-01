import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";

const BookCard = ({
  book,
  favoriteBooks,
  removeBookAsFavorite,
  addBookAsFavorite,
  removeItemFromBag,
  addItemToBag,
  booksInShoppingBag,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1 },
      }}
      exit={{
        opacity: 0,
        transition: { duration: 1 },
      }}
      className="w-[228.05px] h-[397.54px]"
    >
      <div className="w-full h-[312.95px]  relative group  ">
        <div className="absolute w-full h-[65px]  opacity-0 flex justify-between items-end mx-auto group-hover:opacity-100  ">
          <div className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center ml-[14px]">
            <AnimatePresence exitBeforeEnter>
              {favoriteBooks.filter((item) => item.title === book.title)
                .length > 0 ? (
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
                  onClick={() => removeBookAsFavorite(book)}
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
                  onClick={() => addBookAsFavorite(book)}
                  className="text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
                >
                  <MdOutlineFavoriteBorder />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center mr-[14px]">
            {booksInShoppingBag.filter((item) => item.title === book.title)
              .length > 0 ? (
              <span
                onClick={() => removeItemFromBag(book)}
                className="text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
              >
                {" "}
                <RiShoppingBag3Fill />
              </span>
            ) : (
              <span
                onClick={() => addItemToBag(book)}
                className="text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
              >
                {" "}
                <FiShoppingBag />
              </span>
            )}
          </div>
        </div>
        <div className="h-[40px] w-full bg-neutral-80/50 absolute bottom-0  opacity-0 flex justify-center items-center group-hover:opacity-100">
          <RatingStars book={book} />
        </div>
        <img
          className="w-full h-[312.95px]  mb-[18.19px]"
          src={book.img}
          alt="Book"
        />
      </div>
      <Link to={`/book/${book?.title}`}>
        <h3 className="text-h3 medium text-neutral-70 mt-[18px] truncate">
          {book.title}
        </h3>
      </Link>
      <p className="leading-8 text-[18px] text-primary-40">
        N{book.price.toLocaleString("en-US")}
      </p>
    </motion.div>
  );
};

export default BookCard;
