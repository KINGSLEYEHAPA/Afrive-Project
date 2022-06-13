import BookQuote from "./BookQuote";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AnimatePages from "./AnimatePages";
import coupon from "../assets/coupon.jpg";
import { useState } from "react";

const Coupon = () => {
  const navigate = useNavigate();
  const [couponAvailble, setCouponAvailable] = useState(0);
  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px] pt-[32px] mx-auto mt-[88px] flex justify-center flex-col items-center  ">
        <div
          onClick={() => navigate(-1)}
          className="w-full  h-[32px] flex justify-start items-center pl-[105px] gap-0  "
        >
          <span className="text-[25px]">
            <MdChevronLeft />
          </span>
          <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="w-full h-[32px] flex justify-center items-center mt-[2px]">
          <h4 className="text-h4 font-reg text-neutral-30 ">
            Coupons and Vouchers
          </h4>
        </div>
        {couponAvailble === 1 && (
          <div className="h-[80vh]">
            <div className=" my-[72px] w-full h-[96px] space-y-[32px] text-center ">
              <p className="w-full h-[32px] text-h4 font-reg text-neutral-black whitespace-nowrap">
                You have been awarded a first timer coupon!
              </p>
              <p className="w-full h-[32px] text-h4 font-reg text-neutral-black whitespace-nowrap">
                It can be claimed by inputing the coupon code&nbsp;‘
                <span className="text-primary-50"> FIRSTTIME </span> ’&nbsp;in
                your shopping bag.
              </p>
            </div>
          </div>
        )}
        {couponAvailble === 0 && (
          <div>
            <div className="text-center my-[72px] ">
              <p className="w-[472px] h-[32px] text-h4 font-reg text-neutral-black">
                Hi! You have no Coupons or Vouchers available yet.
              </p>
            </div>
            <div className=" w-[489.96px] h-[371.93px">
              <img className="w-full h-full" src={coupon} alt="Lost Route" />
            </div>
          </div>
        )}
      </div>
      <BookQuote />
    </AnimatePages>
  );
};

export default Coupon;
