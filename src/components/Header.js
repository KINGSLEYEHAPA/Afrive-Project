import logo from "../assets/logo.png";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import CategoriesDropdown from "./CategoriesDropdown";
import { useState } from "react";
import ProfileInfoDropdown from "./ProfileInfoDropdown";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import EbookDropdown from "./EbookDropdown";
import Search from "./Search";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [showEbookMenu, setShowEbookMenu] = useState(false);
  return (
    <header className=" w-screen max-w-[1440px] h-[88px] bg-neutral-white mx-auto shadow-[0px 4px 4px rgba(0, 0, 0, 0.05)] fixed z-20 top-0 flex justify-between ">
      <div className=" w-[546px] pl-[99.69px] pr-[10]">
        <div className="w-full h-full px-0 py-0 flex items-center justify-start gap-[50.95px] relative">
          <img
            className="w-[30.36] h-[40.27] cursor-pointer"
            src={logo}
            alt="Afrive Logo"
          />
          <div className="flex h-full w-[358px]  gap-[56px] relative">
            <p className="text-bodyL text-neutral-80 w-[49px] h-[24px] reg cursor-pointer py-[32px]">
              Home
            </p>
            <p
              onMouseOver={() => {
                setShowCategories(!showCategories);
                setShowEbookMenu(false);
                setShowProfileInfo(false);
              }}
              className="text-bodyL text-neutral-80 w-[89px] h-[24px] reg cursor-pointer py-[32px]"
            >
              Categories
            </p>
            <p
              onMouseOver={() => {
                setShowEbookMenu(!showEbookMenu);
                setShowCategories(false);
                setShowProfileInfo(false);
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
      <div className=" mr-[183.17px] w-[185.83px] h-full flex gap-[38.55px] justify-center relative ">
        <AnimateSharedLayout>
          <Search />

          <div className="absolute top-7 right-12 w-[14px] h-[14px] rounded-full bg-primary-50">
            <span className=" cursor-pointer relative bottom-[5.2px] left-[5.2px] medium text-neutral-white text-[10px] leading-4">
              1
            </span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
            layoutId="outline"
            className="text-[20px]  text-neutral-80 border-[1.5px solid #202020] cursor-pointer pt-[35px] pb-[35px]"
          >
            {" "}
            <FiSearch />
          </motion.p>
        </AnimateSharedLayout>
        <p className="text-[20px]  text-neutral-80 border-[1.5px solid #202020] cursor-pointer pt-[35px] pb-[35px]">
          {" "}
          <MdOutlineFavoriteBorder />
        </p>
        <p className="text-[20px]  text-neutral-80 border-[1.5px solid #202020] cursor-pointer py-[35px] ">
          <FiShoppingBag />
        </p>

        <p
          onMouseOver={() => {
            setShowProfileInfo(!showProfileInfo);
            setShowEbookMenu(false);
            setShowCategories(false);
          }}
          className="text-[20px] h-[20px] text-neutral-80 border-[1.5px solid #202020] cursor-pointer mt-[35px] mb-[35px]"
        >
          <FaRegUser />
        </p>
        <AnimatePresence>
          {showProfileInfo && <ProfileInfoDropdown />}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
