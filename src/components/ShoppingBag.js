import React from "react";
import { useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";

const ShoppingBag = () => {
  let navigate = useNavigate();

  return (
    <div className="w-screen max-w-[1440px]  mx-auto mt-[100px] ">
      <div
        onClick={() => navigate(-1)}
        className="w-full  h-[96px] flex justify-start items-center pl-[105px] gap-0  "
      >
        <span className="text-[25px]">
          <MdChevronLeft />
        </span>
        <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
          Back
        </p>
      </div>
      <div className="w-full h-[32px] flex justify-center items-center mt-[9.92px]">
        <h4 className="text-h4 font-reg text-neutral-30 ">Your Shopping Bag</h4>
      </div>
      <div className="w-full h-[753.86px] flex items-start justify-start gap-0 relative mt-[72px]">
        <div className="w-1/2 h-full "> </div>
        <hr className="w-0 h-[753.86px] border border-primary-10 absolute rotate-180 left-[50%]    " />
        <div className="w-1/2 h-[329px]"> </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
