import BookQuote from "./BookQuote";

import AnimatePages from "./AnimatePages";
import coupon from "../assets/coupon.jpg";
import { useState } from "react";

const Coupon = () => {
  const [couponAvailble, setCouponAvailable] = useState(0);
  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px] pt-[32px] mx-auto mt-[88px] flex justify-center flex-col items-center  h-[640px]  mtab:h-[840px]  ">
        <div className="w-full  h-[24px]   tab:h-[32px] flex justify-center items-center mt-[9.92px]">
          <h4 className=" text-bodyL  tab:text-h4 font-reg text-neutral-30 ">
            Coupons and Vouchers
          </h4>
        </div>

        {couponAvailble === 1 && (
          <div className="h-[80vh]    px-[46px]">
            <div className="mb-[16px] mt-[154px]     moby:my-[72px] w-full h-[96px]  text-center ">
              <p className="w-full h-[32px] text-bodyL  moby:text-h4 font-reg text-neutral-black whitespace-nowrap">
                You have been awarded a first timer coupon!
              </p>
              <p className="w-full h-[32px] text-bodyS  moby:text-h4 font-reg text-neutral-black       moby:whitespace-nowrap">
                It can be claimed by inputing the coupon code&nbsp;‘
                <span className="text-primary-50"> FIRSTTIME </span> ’&nbsp;in
                your shopping bag.
              </p>
            </div>
          </div>
        )}
        {couponAvailble === 0 && (
          <div className="px-[46px]">
            <div className="flex justify-center items-center mb-[16px] mt-[154px]     moby:my-[72px]  ">
              <p className="  w-[340px]    moby:w-[472px] h-[32px] text-bodyS  moby:text-h4 font-reg text-neutral-black">
                Hi! You have no Coupons or Vouchers available yet.
              </p>
            </div>
            <div className=" w-[340px]   moby:w-[489.96px]   h-[371.93px">
              <img className="w-full h-full" src={coupon} alt="Lost Route" />
            </div>
          </div>
        )}
      </div>
      <div className=" mt-[125px]  moby:mt-[400px] tab:mt-0 ">
        <BookQuote />
      </div>
    </AnimatePages>
  );
};

export default Coupon;
