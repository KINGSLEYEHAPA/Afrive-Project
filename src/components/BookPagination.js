import { NavLink } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const BookPagination = ({
  totalBooks,
  booksPerPage,
  paginate,
  catName,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="w-full flex justify-center items-center mt-[86.51px]">
      <span
        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        className="text-neutral-black mx-[39px] text-[20px] cursor-pointer"
      >
        <MdChevronLeft />
      </span>
      <ul className="flex gap-[24px]">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number !== currentPage
                ? "text-bodyL text-neutral-black "
                : "text-bodyL text-primary-40 "
            }
          >
            <NavLink
              to={`/category/${catName}`}
              onClick={() => paginate(number)}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
      <span
        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        className="text-neutral-black mx-[39px] text-[20px] cursor-pointer"
      >
        <MdChevronRight />
      </span>
    </nav>
  );
};

export default BookPagination;
