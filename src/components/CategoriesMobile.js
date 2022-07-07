import { m } from "framer-motion";
import { MdChevronLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CategoriesMobile = () => {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.books.bookCategories);
  return (
    <div className="w-full h-full mt-[68px] py-[17px] px-[22px] ">
      <div
        onClick={() => navigate(-1)}
        className="w-full  h-[96px] flex justify-start items-center gap-0  "
      >
        <span className="text-[18px]">
          <MdChevronLeft />
        </span>
        <p className="text-bodyS font-reg text-[#000000] cursor-pointer active:text-primary-50">
          Back
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[40px] mx-[60px]">
        {categories?.map((category) => {
          return (
            <Link to={`/category/${category?.name}`} key={category.id}>
              <p className="text-bodyL text-neutral-80">{category?.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesMobile;
