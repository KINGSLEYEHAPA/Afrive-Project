import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddCard = () => {
  return (
    <div className="  rounded-tr-[14px] rounded-tl-[14px]   mtab:rounded-tr-[0px] mtab:rounded-tl-[0px]  absolute mtab:static w-screen bottom-0 h-[313px]    mtab:w-[384px]  tab:w-[423px]   mtab:h-[289px]   lap:w-[505px]   lap:h-[350px] bg-neutral-white rounded-md pt-[24px]  mtab:pt-[28px] mtab:py-[40px]  px-[23px]  mtab:px-[36px] lap:p-[34px]">
      <div className=" hidden w-full lap:flex justify-end h-[12px]  mb-[12px]">
        <span className="w-[12px] h-[12px] text-neutral-30 text-[20px] font-medium cursor-pointer">
          <AiOutlineClose />
        </span>
      </div>
      <div className="flex items-center justify-between lap:block">
        <p className="font-medium text-neutral-70 text-bodyN  mb-[32px]    mtab:mb-[26px]   lap:mb-[22px]">
          Add a Payment
        </p>
        <span className=" mb-[32px]  mtab:mb-[26px]   lap:mb-[22px]   lap:hidden  w-[12px] h-[12px] text-neutral-30 text-[20px] font-medium cursor-pointer">
          <AiOutlineClose />
        </span>
      </div>
      <div className=" w-full mtab:w-[327px] tab:w-[350px]  lap:w-[424.71]  mtab:h-[171px]     lap:h-[207px]   ">
        <input
          type="number"
          placeholder="Card Number"
          className="  outline-none w-full h-[48px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyS text-neutral-30 active:ring-1 ring-[#FFA599]"
        />
        <div className="w-full flex justify-between gap-[14.56px] mt-[14px] mb-[32px]">
          <input
            type="text"
            placeholder="MM/YY"
            className="   outline-none w-[45%] mtab:w-[158px]  tab-w-[169px]    lap:w-[205.08px] h-[48px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyS text-neutral-30 active:ring-1 ring-[#FFA599]"
          />
          <input
            type="number"
            placeholder="CVV"
            className="  outline-none w-[45%] mtab:w-[158px]  tab-w-[169px]    lap:w-[205.08px] h-[48px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyS text-neutral-30 active:ring-1 ring-[#FFA599]"
          />
        </div>
        <button className="w-full h-[55px]  mtab:h-[47px]   lap:h-[65px] mtab:text-buttonL   lap:text-h4  medium bg-primary-50 text-neutral-white rounded-[4px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddCard;
