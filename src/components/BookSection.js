import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addAFavoriteBook,
  removeFavoriteBook,
  addToBag,
  removeFromBag,
} from "../features/books/bookSlice";

import BookCard from "./BookCard";

const BookSection = ({ bookSectionName, emoji }) => {
  const favoriteBooks = useSelector((state) => state.books.likedBooks);
  const booksInShoppingBag = useSelector((state) => state.books.shoppingBag);
  const availableBooks = useSelector((state) => state.books.booksFromServer);
  const [searchWidth, setSearchWidth] = useState({ width: window.innerWidth });

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

  useEffect(() => {
    function handleResize() {
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      setSearchWidth({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const sectionReferenceStart =
    bookSectionName === "Popular Books" &&
    searchWidth.width <= 1366 &&
    searchWidth.width >= 540
      ? 2
      : bookSectionName === "Popular Books" &&
        searchWidth.width < 540 &&
        searchWidth.width >= 360
      ? 2
      : bookSectionName === "BestSellers" &&
        searchWidth.width <= 1366 &&
        searchWidth.width >= 540
      ? 4
      : bookSectionName === "BestSellers" &&
        searchWidth.width < 540 &&
        searchWidth.width >= 360
      ? 4
      : bookSectionName === "New Arrivals" &&
        searchWidth.width <= 1366 &&
        searchWidth.width >= 540
      ? 9
      : bookSectionName === "New Arrivals" &&
        searchWidth.width < 540 &&
        searchWidth.width >= 360
      ? 9
      : bookSectionName === "On Sale" &&
        searchWidth.width <= 1366 &&
        searchWidth.width >= 540
      ? 4
      : bookSectionName === "On Sale" &&
        searchWidth.width < 540 &&
        searchWidth.width >= 360
      ? 4
      : bookSectionName === "Similar Books" &&
        searchWidth.width <= 1366 &&
        searchWidth.width >= 540
      ? 16
      : bookSectionName === "Similar Books" &&
        searchWidth.width < 540 &&
        searchWidth.width >= 360
      ? 16
      : bookSectionName === "Similar Books"
      ? 0
      : bookSectionName === "Popular Books"
      ? 5
      : bookSectionName === "BestSellers"
      ? 1
      : bookSectionName === "New Arrivals"
      ? 3
      : bookSectionName === "On Sale"
      ? 10
      : 14;

  const sectionReferenceEnd =
    bookSectionName === "Popular Books" &&
    searchWidth.width <= 1366 &&
    searchWidth.width >= 540
      ? 5
      : bookSectionName === "Popular Books" &&
        searchWidth.width < 540 &&
        searchWidth.width >= 360
      ? 4
      : bookSectionName === "BestSellers" &&
        searchWidth.width <= 1366 &&
        searchWidth.width >= 540
      ? 7
      : bookSectionName === "BestSellers" &&
        searchWidth.width < 540 &&
        searchWidth.width >= 360
      ? 6
      : bookSectionName === "New Arrivals" &&
        searchWidth.width <= 1366 &&
        searchWidth.width >= 540
      ? 12
      : bookSectionName === "New Arrivals" &&
        searchWidth.width < 540 &&
        searchWidth.width >= 360
      ? 11
      : bookSectionName === "On Sale" &&
        searchWidth.width <= 1366 &&
        searchWidth.width >= 540
      ? 7
      : bookSectionName === "On Sale" &&
        searchWidth.width < 540 &&
        searchWidth.width >= 360
      ? 6
      : bookSectionName === "Similar Books" &&
        searchWidth.width <= 1366 &&
        searchWidth.width >= 540
      ? 19
      : bookSectionName === "Similar Books" &&
        searchWidth.width < 540 &&
        searchWidth.width >= 360
      ? 18
      : bookSectionName === "Similar Books"
      ? 4
      : bookSectionName === "Popular Books"
      ? 9
      : bookSectionName === "BestSellers"
      ? 5
      : bookSectionName === "New Arrivals"
      ? 7
      : bookSectionName === "On Sale"
      ? 14
      : 18;
  return (
    <div className="w-screen max-w-[1440px] mx-auto mb-[32.13px] mtab:mb-[40.15px] tab:mb-[55.51px] desk:mb-[56.51px] flex justify-center items-center">
      {" "}
      <div className="  h-[306.97px] mobx:h-[360px] mtab-h-[389.44px] tab:h-[460.75px] lap:h-[447.39px]  desk:h-[469.54px] w-screen  tab:mx-[86px]      ml-[12.63%] mr-[12.63%]    lap:ml-[12.63%] lap:mr-[12.63%] p-0 flex flex-col   ">
        <div className=" w-full h-[32px]  flex justify-between  items-center  ">
          <div className="flex items-center gap-[7px] translate-x-[-11%] mobx:translate-x-[-20%] moby:translate-x-[8%] mobm:translate-x-[-20%] mtab:translate-x-[-8%] tab:translate-x-[10%] ltab:translate-x-[20%] l2tab:translate-x-[45%] lap:translate-x-[0%]">
            <Link to={`/all-books/${bookSectionName}`}>
              <h3 className="  text-bodyS mtab:text-bodyL tab:text-h4 desk:text-h3 font-reg text-neutral-70">
                {bookSectionName}
              </h3>
            </Link>
            {bookSectionName === "On Sale" && (
              <img className="w-[20px] h-[20px]" src={emoji} alt="" />
            )}
          </div>
          <Link to={`/all-books/${bookSectionName}`}>
            <p className=" tab:translate-x-[-18%] ltab:translate-x-[-34%] l2tab:translate-x-[-70%] lap:translate-x-[0%]  text-neutral-30 hidden mtab:block  mtab:text-bodyN tab:text-bodyL hover:text-neutral-80 cursor-pointer">
              see more
            </p>
          </Link>
        </div>

        <div className="w-full  h-[272.97px] mtab:h-[333.44px] tab:h-[396.75px]   lap:h-[375.39px]  desk:h-[397.54px] mt-[32px] grid grid-cols-2  mobx:grid-cols-3  lap:grid-cols-4 px-0  gap-[54.37px] justify-items-center mt-[16px] mtab:mt-[32px] lap:mt-[40px]        ">
          {availableBooks?.data
            .slice(sectionReferenceStart, sectionReferenceEnd)
            .map((book) => {
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

{
  /* searchWidth.width <= 1366 && searchWidth.width >= 540
                ? 4
                : searchWidth.width < 540 && searchWidth.width >= 360
                ? 5
                : 3,
              7 */
}
