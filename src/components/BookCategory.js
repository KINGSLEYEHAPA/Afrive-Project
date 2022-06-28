import React, { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import BookQuote from "./BookQuote";
import BookSectionWithoutHeaders from "./BookSectionWithoutHeaders";
import { availableBooksDummy } from "../dummyData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiArrowUpLeft } from "react-icons/fi";
import { Link as ALink } from "react-scroll";
import { useSelector } from "react-redux";
import AnimatePages from "./AnimatePages";
import BookPagination from "./BookPagination";
import Loading from "./Loading";

const BookCategory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(20);
  const loading = true;
  let params = useParams();
  const navigate = useNavigate();
  const availableBooks = useSelector((state) => state.books.booksInStock);
  console.log(availableBooks);

  const bookCategory = availableBooks.filter((item) => {
    return item.category.includes(params.catName);
  });

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = bookCategory.slice(indexOfFirstBook, indexOfLastBook);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return loading ? (
    <div className="flex justify-center items-center w-full">
      <Loading />
    </div>
  ) : (
    <AnimatePages>
      <div className="w-screen max-w-[1440px] min-h-screen  mx-auto mt-[88px]">
        <div
          onClick={() => navigate(-1)}
          className="w-full  h-[96px] flex justify-start items-center pl-[105px] gap-0  "
        >
          <span className="text-[25px]">
            <MdChevronLeft />
          </span>
          <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="mt-0 h-[35px] w-full  flex justify-start items-center pl-[183px] gap-0 p-0 ">
          <p className="text-h4 font-reg text-neutral-30" id="category-title">
            Category&nbsp;-&nbsp;
          </p>
          <span className="text-h4 font-reg text-primary-50">
            {params.catName}
          </span>
        </div>
        <BookSectionWithoutHeaders booksToShow={currentBooks} />

        <BookPagination
          booksPerPage={booksPerPage}
          totalBooks={bookCategory.length}
          paginate={paginate}
          catName={params.catName}
          currentPage={currentPage}
        />

        <div className="w-full mt-[72.51px] flex justify-end items-center pr-[117.23px] mb-[-19px]">
          <div className="  h-[96px] flex justify-start items-center gap-[5px]  ">
            <span className="text-[25px]">
              <FiArrowUpLeft />
            </span>
            <ALink
              to="category-title"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
            >
              <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
                Back to Top
              </p>
            </ALink>
          </div>
        </div>
        <BookQuote />
      </div>
    </AnimatePages>
  );
};

export default BookCategory;
