import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProfileInfoDropdown = ({ setShowQuiz, setShowProfileInfo }) => {
  return (
    <motion.div
      key="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className=" absolute top-[100px] right-[-35px] tab:w-[250.03px] tab:h-[314.97px]   lap:w-[308px] lap:h-[388px] bg-neutral-white border border-[rgba(0,0,0,0.1)] shadow-[0px 4px 22px rgba(0, 0, 0, 0.15)] rounded-[8px] p-0 "
    >
      <div className=" h-[57px] lap:h-[72px] w-full p-[24px] flex justify-between">
        <h3 className="text-bodyS lap:text-bodyL text-neutral-80 font-reg w-[63px] whitespace-nowrap">
          Hi Faith
        </h3>
        {false && (
          <Link to="/">
            {" "}
            <p className=" text-sub   lap:text-bodyS text-primary-40 font-reg w-[56px] whitespace-nowrap hover:text-primary-60 cursor-pointer">
              Sign Out
            </p>
          </Link>
        )}
        {true && (
          <Link to="/sign-in">
            <p className="text-bodyS text-primary-40 font-reg w-[56px] whitespace-nowrap hover:text-primary-60 cursor-pointer">
              Sign In
            </p>
          </Link>
        )}
      </div>
      <hr className="w-[100%]  h-0 border-1 border-neutral-20" />
      <div
        onClick={() => {
          setShowQuiz(true);
          setShowProfileInfo(false);
        }}
        className="lap:h-[76px] h-[61.7px] w-full flex pt-[12px] justify-center flex-col items-start px-[24px] cursor-pointer hover:bg-primary-10 pb-[8px]"
      >
        {" "}
        <div className="flex justify-start items-center gap-[8px]">
          <h4 className="text-neutral-80 text-sub lap:text-bodyN font-reg ">
            Take Out Quiz
          </h4>{" "}
          <div className="w-[8px] h-[8px] bg-primary-50 rounded full"></div>
        </div>
        <p className=" w-full text-neutral-30 text-[8.92px] leading-[13px]  lap:text-[11px] lap:leading-4 whitespace-nowrap mb-[16px]">
          This would help us recommend better books for you.
        </p>
      </div>
      <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20" />
      <Link to="/orders" onClick={() => setShowProfileInfo(false)}>
        <h3 className="text-neutral-80 text-sub lap:text-bodyN font-reg  px-[24px] py-[12px] lap:py-[16px]      lap:h-[56px] h-[48px]  cursor-pointer hover:bg-primary-10">
          My Orders
        </h3>
      </Link>
      <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20" />
      <Link to="/billing-address" onClick={() => setShowProfileInfo(false)}>
        <h3 className="text-neutral-80 text-sub lap:text-bodyN font-reg  px-[24px] py-[12px] lap:py-[16px]     lap:h-[56px] h-[48px]  cursor-pointer hover:bg-primary-10">
          Billing Address
        </h3>
      </Link>
      <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20" />
      <Link to="/coupon" onClick={() => setShowProfileInfo(false)}>
        <h3 className="text-neutral-80 text-sub lap:text-bodyN font-reg  px-[24px]  py-[12px] lap:py-[16px] lap:h-[56px] h-[48px]  cursor-pointer hover:bg-primary-10">
          Coupons & Vouchers
        </h3>
      </Link>
      <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20" />
      <h3 className="text-neutral-80 text-sub lap:text-bodyN font-reg  px-[24px] lap:h-[68px] h-[56px]  py-[12px] lap:py-[16px] rounded-br-[8px] rounded-bl-[8px] cursor-pointer hover:bg-primary-10">
        Support
      </h3>
    </motion.div>
  );
};

export default ProfileInfoDropdown;
