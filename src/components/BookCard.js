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
      className="  w-[155px] h-[272.97px] mtab:w-[190px] mtab:h-[333.44px] tab:w-[214px] tab:h-[396.75px]  lap:w-[214px] lap:h-[375.39px]  desk:w-[228.05px] desk:h-[397.54px]"
    >
      <div className="w-full h-[212.11px]   mtab:h-[260px] tab:h-[293px]   lap:h-[292px]    desk:h-[312.95px]  relative group  ">
        <div className="absolute w-full h-[50px]  mtab:h-[54px] lap:h-[60px] desk:h-[65px]  opacity-0 flex justify-between items-end mx-auto group-hover:opacity-100  ">
          <div className=" hidden lap:flex  w-[42px] h-[42px]  mtab:w-[51px] mtab:h-[51px] lap:w-[47px] lap:h-[47px] desk:w-[51px] desk:h-[51px] rounded-full bg-neutral-70/80 cursor-pointer justify-center items-center ml-[14px] desk:ml-[18px]">
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
                  className="text-[20px] desk:text-[25px] text-primary-70 border-[1.59277px solid #FFFFFF]"
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
                  className="text-[20px] desk:text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
                >
                  <MdOutlineFavoriteBorder />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className=" w-[42px] h-[42px]  mtab:w-[51px] mtab:h-[51px] lap:w-[47px] lap:h-[47px] desk:w-[51px] desk:h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center mr-[14px]">
            {booksInShoppingBag.filter((item) => item.title === book.title)
              .length > 0 ? (
              <span
                onClick={() => removeItemFromBag(book)}
                className="text-[20px] desk:text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
              >
                {" "}
                <RiShoppingBag3Fill />
              </span>
            ) : (
              <span
                onClick={() => addItemToBag(book)}
                className="text-[20px] desk:text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
              >
                {" "}
                <FiShoppingBag />
              </span>
            )}
          </div>
        </div>
        <div className=" hidden lap:flex   lap:h-[37.52px] desk:h-[40px]       w-full bg-neutral-80/50 absolute bottom-0  opacity-0 justify-center items-center group-hover:opacity-100">
          <RatingStars book={book} />
        </div>
        <img
          className="w-full h-[212.11px]   mtab:h-[260px] tab:h-[293px]   lap:h-[292px]    desk:h-[312.95px]  mb-[18.19px]"
          src={book.img}
          alt="Book"
        />
      </div>
      <Link to={`/book/${book?.title}`}>
        <h3 className="text-[14.436px] leading-[23px] mtab:text-[17.69px] mtab:leading-[28px] tab:text-[21.127px] tab:leading-[34px] lap:text-h4  desk:text-h3 medium text-neutral-70 mt-[18px] truncate">
          {book.title}
        </h3>
      </Link>
      <div className=" flex gap-[20px] mtab:gap-[22px] tab:gap-[30px] items-center">
        <p className=" text-[14.436px] leading-[23px] mtab:text-[17.69px] mtab:leading-[28px]tab:text-[21.127px] tab:leading-[34px] desk:leading-8 lap:leading-6 lap:text-[18px] text-primary-40">
          N{book?.price.toLocaleString("en-US")}
        </p>
        <span className="inline-block lap:hidden  mt-[5px] mtab:mt-0">
          <RatingStars book={book} />
        </span>
      </div>
    </motion.div>
  );
};

export default BookCard;
