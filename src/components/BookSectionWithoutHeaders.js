import { useSelector, useDispatch } from "react-redux";
import {
  addAFavoriteBook,
  removeFavoriteBook,
  addToBag,
  removeFromBag,
} from "../features/books/bookSlice";
import BookCard from "./BookCard";

const BookSectionWithoutHeaders = ({ booksToShow }) => {
  const favoriteBooks = useSelector((state) => state.books.likedBooks);
  const booksInShoppingBag = useSelector((state) => state.books.shoppingBag);
  console.log(booksInShoppingBag);
  console.log(favoriteBooks);
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
    <div className="w-full max-w-[1440px] mt-[20px] mtab:mt-[31.41px] tab:mt-[28px] lap:mt-[40px] desk:mt-[56px] desk:pl-[181px] px-[23px] mobx:px-[50px]    mtab:px-[71px] tab:px-[86px] lap:px-[173px] desk:pr-[183px] min-h-screen">
      <div className="w-full min-h-full mt-[32px] grid grid-cols-2  mobx:grid-cols-3  lap:grid-cols-4 px-0  gap-[54.37px] justify-items-center  ">
        {booksToShow?.map((book) => {
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
  );
};

export default BookSectionWithoutHeaders;
