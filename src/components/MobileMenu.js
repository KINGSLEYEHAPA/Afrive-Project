import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUserPreference } from "../features/books/bookSlice";
import { logout, reset } from "../features/user/userSlice";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ setOpenMobile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const onLogout = () => {
    dispatch(logout());
    dispatch(clearUserPreference());
    dispatch(reset());
    navigate("/");
    setOpenMobile(false);
  };
  return (
    <AnimatePresence>
      <div className="z-[10000] fixed mtab:hidden top-0 bottom-0 w-screen max-w-[1440px]  mx-auto  bg-[#e5e5e5]/30  shadow-[ 0px 4px 22px rgba(0, 0, 0, 0.15);]  h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.25 } }}
          exit={{ opacity: 0, transition: 1.25 }}
          className=" p-[22px] w-screen  h-[528px] mx-[23px]  mobx:mx-[80px] rounded-[16px] bg-neutral-white border border-[#e5e5e5] "
        >
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

            <Link to="/ebook-mobile">
              <p className="text-bodyN text-neutral-70 hover:text-primary-50">
                Your e-books
              </p>
            </Link>
            <Link to="/myorders-mobile">
              <p
                onClick={() => setOpenMobile(false)}
                className="text-bodyN text-neutral-70 hover:text-primary-50"
              >
                Your Orders
              </p>
            </Link>
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
            {user ? (
              <p
                onClick={onLogout}
                className="mt-[24px] text-bodyN text-neutral-70 hover:text-primary-50 font-medium"
              >
                Signout
              </p>
            ) : (
              <Link to="/api/v1/auth">
                <p
                  onClick={() => setOpenMobile(false)}
                  className="text-bodyN leading-[12px]  text-primary-40 font-reg w-[56px] whitespace-nowrap hover:text-primary-60 cursor-pointer"
                >
                  Sign In
                </p>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MobileMenu;
