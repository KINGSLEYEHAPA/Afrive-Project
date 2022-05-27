import logo from "../assets/logo.png";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Header = () => {
  return (
    <header className=" w-screen max-w-[1440px] h-[88px] bg-neutral-white mx-auto shadow-[0px 4px 4px rgba(0, 0, 0, 0.05)] fixed top-0 flex justify-between ">
      <div className=" w-[546px] pl-[99.69px] pr-[10]">
        <div className="w-full h-full px-0 py-0 flex items-center justify-start gap-[50.95px] relative">
          <img
            className="w-[30.36] h-[40.27] cursor-pointer"
            src={logo}
            alt="Afrive Logo"
          />
          <div className="flex h-full w-[358px]  gap-[56px]">
            <p className="text-bodyL text-neutral-80 w-[49px] h-[24px] reg cursor-pointer py-[32px]">
              Home
            </p>
            <p className="text-bodyL text-neutral-80 w-[89px] h-[24px] reg cursor-pointer py-[32px]">
              Categories
            </p>
            <p className="text-bodyL text-neutral-80 w-[107px] h-[24px] reg cursor-pointer py-[32px] whitespace-nowrap">
              Your e-books
            </p>
          </div>
          <div className=" absolute top-[41.50px] left-[443.31px] w-[7px] h-[7px] bg-primary-50  rounded-full"></div>
        </div>
      </div>
      <div className=" mr-[183.17px] w-[185.83px] h-full flex gap-[38.55px] justify-center ">
        <p className="w-[16px] h-[16px] text-neutral-80 border-[1.5px solid #202020] cursor-pointer pt-[35px] pb-[35px]">
          {" "}
          <FiSearch />
        </p>
        <p className="w-[20.90px] h-[18.23px] text-neutral-80 border-[1.5px solid #202020] cursor-pointer pt-[35px] pb-[34.77px]">
          {" "}
          <MdOutlineFavoriteBorder />
        </p>
        <p className="w-[18px] h-[20px] text-neutral-80 border-[1.5px solid #202020] cursor-pointer py-[34px] ">
          <FiShoppingBag />
        </p>
        <p className="w-[16.67px] h-[20px] text-neutral-80 border-[1.5px solid #202020] cursor-pointer pt-[35.12px] pb-[35px]">
          <FaRegUser />
        </p>
      </div>
    </header>
  );
};

export default Header;
