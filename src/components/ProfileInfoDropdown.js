import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { clearlogoutUserData, logout, reset } from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  clearLogoutData,
  clearUserPreference,
} from "../features/books/bookSlice";

const ProfileInfoDropdown = ({ setShowQuiz, setShowProfileInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const onLogout = () => {
    dispatch(clearlogoutUserData());
    dispatch(clearLogoutData());
    dispatch(logout());
    dispatch(clearUserPreference());
    dispatch(reset());
    navigate("/");
    setShowProfileInfo(false);
  };

  return (
    <motion.div
      key="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className=" absolute top-[100px] right-[-25px]    mtab:w-[187px] mtab:h-[236px]    tab:w-[250.03px] tab:h-[314.97px]   lap:w-[308px] lap:h-[388px] bg-neutral-white border border-[rgba(0,0,0,0.1)] shadow-[0px 4px 22px rgba(0, 0, 0, 0.15)] rounded-[8px] p-0 "
    >
      <div className=" h-[43.86px] tab:h-[57px] lap:h-[72px] w-full p-[16.50px] tab:p-[20px] lap:p-[24px] flex justify-between">
        <h3 className=" capitalize text-sub tab:text-bodyS lap:text-bodyL text-neutral-80 font-reg w-[63px] whitespace-nowrap">
          Hi {user ? user.data.firstname : "Guest"}
        </h3>
        {user ? (
          <p
            onClick={onLogout}
            className=" text-[9px] leading-[12px] tab:text-sub   lap:text-bodyS text-primary-40 font-reg w-[56px] whitespace-nowrap hover:text-primary-60 cursor-pointer"
          >
            Sign Out
          </p>
        ) : (
          <Link to="/api/v1/auth">
            <p
              onClick={() => setShowProfileInfo(false)}
              className="text-[9px] leading-[12px] tab:text-sub   lap:text-bodyS text-primary-40 font-reg w-[56px] whitespace-nowrap hover:text-primary-60 cursor-pointer"
            >
              Sign In
            </p>
          </Link>
        )}
      </div>
      <hr className="w-[100%]  h-0 border-1 border-neutral-20" />
      {/* <div
        onClick={() => {
          user ? setShowQuiz(true) : navigate("/api/v1/auth");
          setShowProfileInfo(false);
        }}
        className="lap:h-[76px] h-[46.29px] tab:h-[61.7px] w-full flex pt-[12px] justify-center flex-col items-start px-[24px] cursor-pointer hover:bg-primary-10 pb-[8px]"
      >
        {" "}
        <div className="flex justify-start items-center gap-[8px]">
          <h4 className="text-neutral-80 text-sub lap:text-bodyN font-reg ">
            Take Our Quiz
          </h4>{" "}
          <div className=" w-[4.87px] h-[4.87px] tab:w-[6.49px] tab:h-[6.49px]      lap:w-[8px] lap:h-[8px]  bg-primary-50 rounded full"></div>
        </div>
        <p className=" w-full text-neutral-30 text-[8.92px] leading-[13px]  lap:text-[11px] lap:leading-4 whitespace-nowrap mb-[16px] hidden tab:block">
          This would help us recommend better books for you.
        </p>
      </div> */}
      <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20" />

      <>
        <Link to="/orders" onClick={() => setShowProfileInfo(false)}>
          <h3 className="text-neutral-80 text-sub lap:text-bodyN font-reg  px-[24px] tab:py-[12px] lap:py-[16px]   py-[6px]  lap:h-[56px] tab:h-[48px] h-[32px] cursor-pointer hover:bg-primary-10">
            My Orders
          </h3>
        </Link>
        <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20" />
        <Link to="/billing-address" onClick={() => setShowProfileInfo(false)}>
          <h3 className="text-neutral-80 text-sub lap:text-bodyN font-reg px-[24px] tab:py-[12px] lap:py-[16px]   py-[6px]  lap:h-[56px] tab:h-[48px] h-[32px]  cursor-pointer hover:bg-primary-10">
            Billing Address/Profile
          </h3>
        </Link>

        <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20" />
        <Link to="/coupon" onClick={() => setShowProfileInfo(false)}>
          <h3 className="text-neutral-80 text-sub lap:text-bodyN font-reg  px-[24px] tab:py-[12px] lap:py-[16px]   py-[6px]  lap:h-[56px] tab:h-[48px] h-[32px] cursor-pointer hover:bg-primary-10">
            Coupons & Vouchers
          </h3>
        </Link>
      </>

      <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20" />
      <h3 className="text-neutral-80 text-sub lap:text-bodyN font-reg  px-[24px] lap:h-[68px] tab:h-[44px] h-[42px]  py-[12px] lap:py-[16px]   cursor-pointer hover:bg-primary-10">
        {/* rounded-br-[8px] rounded-bl-[8px] */}
        Support
      </h3>
    </motion.div>
  );
};

export default ProfileInfoDropdown;
