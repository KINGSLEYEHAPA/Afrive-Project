import { AnimatePresence } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import {
  removeFavoriteBook,
  addToBag,
  removeFromBag,
} from "../features/books/bookSlice";

import BookCard from "./BookCard";

const LikedbookSection = () => {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector((state) => state.books.likedBooks);
  const booksInShoppingBag = useSelector((state) => state.books.shoppingBag);
  console.log(booksInShoppingBag);

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
    <div className="w-full max-w-[1440px] mt-[56px] pl-[181px] pr-[183px] min-h-screen">
      <div className="w-full min-h-full mt-[32px] grid grid-cols-4 px-0  gap-[54.37px]  ">
        <AnimatePresence>
          {favoriteBooks?.map((book) => {
            return (
              <BookCard
                key={book.id}
                book={book}
                removeBookAsFavorite={removeBookAsFavorite}
                addItemToBag={addItemToBag}
                favoriteBooks={favoriteBooks}
                booksInShoppingBag={booksInShoppingBag}
                removeItemFromBag={removeItemFromBag}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LikedbookSection;
