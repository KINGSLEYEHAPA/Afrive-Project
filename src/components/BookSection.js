import { FiShoppingBag } from "react-icons/fi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { availableBooksDummy } from "../dummyData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAFavoriteBook,
  removeFavoriteBook,
  addToBag,
  removeFromBag,
} from "../features/books/bookSlice";
import RatingStars from "./RatingStars";

const BookSection = ({ bookSectionName }) => {
  const favoriteBooks = useSelector((state) => state.books.likedBooks);
  const booksInShoppingBag = useSelector((state) => state.books.shoppingBag);
  console.log(booksInShoppingBag);
  const dispatch = useDispatch();

  const addBookAsFavorite = (book) => {
    dispatch(addAFavoriteBook(book));
  };

  const removeBookAsFavorite = (book) => {
    dispatch(removeFavoriteBook(book));
  };
  const addItemToBag = (book) => {
    dispatch(addToBag(book));
  };

  const removeItemFromBag = (book) => {
    dispatch(removeFromBag(book));
  };

  return (
    <div className="w-screen max-w-[1440px] mx-auto mt-[56px]">
      {" "}
      <div className="h-[438.49px] w-screen max-w-[74.45%] ml-[12.63%] mr-[12.63%] p-0 ">
        <div className="w-full h-[32px]  flex justify-between items-center">
          <h3 className="text-h3 font-reg text-neutral-70">
            {bookSectionName}
          </h3>
          <p className="mr-[9.17px]  text-neutral-30 text-bodyL hover:text-neutral-80 cursor-pointer">
            see more
          </p>
        </div>
        <div className="w-full min-h-[397.54px] mt-[32px] grid grid-cols-4 px-0  gap-[54.37px]  ">
          {availableBooksDummy?.slice(4, 8).map((book) => {
            return (
              <div key={book?.id} className="w-[228.05px] h-[397.54px]">
                <div className="w-full h-[312.95px]  relative group  ">
                  <div className="absolute w-full h-[65px]  opacity-0 flex justify-between items-end mx-auto group-hover:opacity-100  ">
                    <div className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center ml-[14px]">
                      <AnimatePresence exitBeforeEnter>
                        {favoriteBooks.filter(
                          (item) => item.title === book.title
                        ).length > 0 ? (
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
                      {booksInShoppingBag.filter(
                        (item) => item.title === book.title
                      ).length > 0 ? (
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
                  {book.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookSection;
