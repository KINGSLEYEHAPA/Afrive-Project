import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const MobileMenu = ({ setOpenMobile }) => {
  return (
    <div className="z-[10000] fixed mtab:hidden top-0 bottom-0 w-screen max-w-[1440px]  mx-auto  bg-[#e5e5e5]/30  shadow-[ 0px 4px 22px rgba(0, 0, 0, 0.15);]  h-full flex items-center justify-center">
      <div className=" p-[22px] w-screen  h-[528px] mx-[23px]  mobx:mx-[80px] rounded-[16px] bg-neutral-white border border-[rgba(144, 144, 144, 0.05);] ">
        <div className="flex justify-end items-center w-full h-[20px]">
          <span
            onClick={() => setOpenMobile(false)}
            className="w-[20px] h-[20px] text-[20px] text-neutral-30 cursor-pointer hover:text-neutral-black"
          >
            <AiOutlineClose />
          </span>
        </div>

        <div className="w-full h-[464px]  p-[14px] gap-[32px] flex flex-col items-center justify-center">
          <Link to="/mobile-category">
            <p
              onClick={() => setOpenMobile(false)}
              className="text-bodyN text-neutral-70 hover:text-primary-50"
            >
              Categories
            </p>
          </Link>
          <p className="text-bodyN text-neutral-70 hover:text-primary-50">
            Your e-books
          </p>
          <p className="text-bodyN text-neutral-70 hover:text-primary-50">
            Your Orders
          </p>
          <div className="flex items-center justify-center gap-[6px]">
            <p className="text-bodyN text-neutral-70 hover:text-primary-50">
              Take our Quiz
            </p>
            <span className=" w-[4.87px] h-[4.87px]  bg-primary-50 rounded-full"></span>
          </div>
          <p className="text-bodyN text-neutral-70 hover:text-primary-50">
            Billing/Payment
          </p>
          <p className="text-bodyN text-neutral-70 hover:text-primary-50">
            Coupons & Vouchers
          </p>
          <p className="text-bodyN text-neutral-70 hover:text-primary-50">
            Support
          </p>
          <p className="mt-[24px] text-bodyN text-neutral-70 hover:text-primary-50 font-medium">
            Signout
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
