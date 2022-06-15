import logo from "../assets/logo.png";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import CategoriesDropdown from "./CategoriesDropdown";
import ProfileInfoDropdown from "./ProfileInfoDropdown";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { RiShoppingBag3Fill } from "react-icons/ri";
import EbookDropdown from "./EbookDropdown";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import OptionsModal from "./OptionsModal";
import Quiz from "./Quiz";
import { useState } from "react";

const Header = ({
  showCategories,
  setShowCategories,
  showEbookMenu,
  setShowEbookMenu,
  showSearch,
  setShowSearch,
  showProfileInfo,
  setShowProfileInfo,
}) => {
  const shoppingBag = useSelector((state) => state.books.shoppingBag);
  const [showQuiz, setShowQuiz] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  return (
    <header className="w-screen max-w-[1440px] h-[88px] bg-neutral-white mx-auto shadow-[0px 4px 4px rgba(0, 0, 0, 0.05)] fixed z-20 top-0 flex justify-between border-b border-neutral-20  ">
      {/* 
mob:w-[375px] mtab:w-[860px]  tab:w-[1024px]  lap:w-[1366px]  desk:w-[1440px] */}
      {showQuiz && (
        <OptionsModal>
          <Quiz setShowQuiz={setShowQuiz} />
        </OptionsModal>
      )}

      <div className=" w-[546px] pl-[99.69px] pr-[10]">
        <div className="w-full h-full px-0 py-0 flex items-center justify-start gap-[50.95px] relative">
          <Link to="/">
            {" "}
            <img
              className="w-[30.36] h-[40.27] cursor-pointer"
              src={logo}
              alt="Afrive Logo"
            />
          </Link>
          <div className="flex h-full w-[358px]  gap-[56px] relative">
            <Link to="/">
              <p className="text-bodyL text-neutral-80 w-[49px] h-[24px] reg cursor-pointer py-[32px]">
                Home
              </p>
            </Link>
            <p
              onClick={(e) => {
                setShowCategories(!showCategories);
                setShowEbookMenu(false);
                setShowProfileInfo(false);
                setShowSearch(false);
              }}
              className="text-bodyL text-neutral-80 w-[89px] h-[24px] reg cursor-pointer py-[32px]"
            >
              Categories
            </p>
            <p
              onClick={() => {
                setShowEbookMenu(!showEbookMenu);
                setShowCategories(false);
                setShowProfileInfo(false);
                setShowSearch(false);
              }}
              className="text-bodyL text-neutral-80 w-[107px] h-[24px] reg cursor-pointer py-[32px] whitespace-nowrap"
            >
              Your e-books
            </p>
            <AnimatePresence>
              {showCategories && (
                <CategoriesDropdown setShowCategories={setShowCategories} />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showEbookMenu && <EbookDropdown />}
            </AnimatePresence>
          </div>
          <div className=" absolute top-[41.50px] left-[443.31px] w-[7px] h-[7px] bg-primary-50  rounded-full"></div>
        </div>
      </div>
      <div className=" mtab:mr-[72.1px]   tab-mr-[86.10px]  lap:mr-[123.17px]  desk:mr-[183.17px] w-[185.83px] h-full flex gap-[38.55px] justify-center relative ">
        <AnimateSharedLayout>
          {showSearch && (
            <Search setShowSearch={setShowSearch} showSearch={showSearch} />
          )}
        </AnimateSharedLayout>

        <div className="absolute top-7 right-12 w-[14px] h-[14px] rounded-full bg-primary-50">
          <span
            className={
              shoppingBag.length >= 10
                ? " cursor-pointer relative bottom-[5.8px] left-[2.2px] medium text-neutral-white text-[10px] leading-4"
                : " cursor-pointer relative bottom-[5.8px] left-[4.5px] medium text-neutral-white text-[10px] leading-4"
            }
          >
            {shoppingBag.length}
          </span>
        </div>
        <motion.p
          onClick={() => {
            setShowSearch(!showSearch);
            setShowEbookMenu(false);
            setShowCategories(false);
            setShowProfileInfo(false);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          layoutId="outline"
          className="   text-[20px]  text-neutral-80 border-[1.5px solid #202020] cursor-pointer pt-[35px] pb-[35px]"
        >
          {!showSearch && <FiSearch />}
        </motion.p>

        <Link to="/liked-books">
          {path === "/liked-books" ? (
            <p className="text-[20px]  text-primary-70 border-[1.5px solid #202020] cursor-pointer pt-[35px] pb-[35px]">
              {" "}
              <MdFavorite />
            </p>
          ) : (
            <p className="text-[20px]  text-neutral-80 border-[1.5px solid #202020] cursor-pointer pt-[35px] pb-[35px]">
              {" "}
              <MdOutlineFavoriteBorder />
            </p>
          )}
        </Link>

        <Link to="/shopping-bag">
          {path === "/shopping-bag" ? (
            <p className="text-[20px]  text-neutral-80 border-[1.5px solid #202020] cursor-pointer py-[35px] ">
              <RiShoppingBag3Fill />
            </p>
          ) : (
            <p className="text-[20px]  text-neutral-80 border-[1.5px solid #202020] cursor-pointer py-[35px] ">
              <FiShoppingBag />
            </p>
          )}
        </Link>

        <p
          onClick={() => {
            setShowProfileInfo(!showProfileInfo);
            setShowSearch(false);
            setShowEbookMenu(false);
            setShowCategories(false);
          }}
          className="text-[20px] h-[20px] text-neutral-80 border-[1.5px solid #202020] cursor-pointer mt-[35px] mb-[35px]"
        >
          <FaRegUser />
        </p>
        <AnimatePresence>
          {showProfileInfo && (
            <ProfileInfoDropdown
              setShowQuiz={setShowQuiz}
              setShowProfileInfo={setShowProfileInfo}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
