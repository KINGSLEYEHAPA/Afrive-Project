import { useSelector, useDispatch } from "react-redux";
import {
  addAFavoriteBook,
  removeFavoriteBook,
  addToBag,
  removeFromBag,
} from "../features/books/bookSlice";

import BookCard from "./BookCard";

const BookSection = ({ bookSectionName }) => {
  const favoriteBooks = useSelector((state) => state.books.likedBooks);
  const booksInShoppingBag = useSelector((state) => state.books.shoppingBag);
  const availableBooks = useSelector((state) => state.books.booksInStock);
  console.log(availableBooks);
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
          {availableBooks?.slice(4, 8).map((book) => {
            return (
              <BookCard
                key={book.id}
                book={book}
                addBookAsFavorite={addBookAsFavorite}
                removeBookAsFavorite={removeBookAsFavorite}
                addItemToBag={addItemToBag}
                favoriteBooks={favoriteBooks}
                booksInShoppingBag={booksInShoppingBag}
                removeItemFromBag={removeItemFromBag}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookSection;
