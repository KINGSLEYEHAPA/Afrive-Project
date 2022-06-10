import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddLocation = () => {
  return (
    <div className="w-[505px] h-[350px] bg-neutral-white rounded-md p-[34px]">
      <div className="w-full flex justify-end h-[12px]  mb-[12px]">
        <span className="w-[12px] h-[12px] text-neutral-30 text-[20px] font-medium cursor-pointer">
          <AiOutlineClose />
        </span>
      </div>
      <p className="font-medium text-neutral-70 text-bodyN mb-[22px]">
        Choose a Location
      </p>
      <div className="w-[424.71] h-[207px]  ">
        <input
          type="text"
          placeholder="House Address"
          className="  outline-none w-full h-[48px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyS text-neutral-30 active:ring-1 ring-[#FFA599]"
        />
        <div className="w-full flex justify-between gap-[14.56px] mt-[14px] mb-[32px]">
          <input
            type="text"
            placeholder="City"
            className="  outline-none w-[205.08px] h-[48px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyS text-neutral-30 active:ring-1 ring-[#FFA599]"
          />
          <input
            type="text"
            placeholder="State"
            className="  outline-none w-[205.08px] h-[48px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyS text-neutral-30 active:ring-1 ring-[#FFA599]"
          />
        </div>
        <button className="w-full h-[65px] text-h4 medium bg-primary-50 text-neutral-white rounded-[4px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddLocation;
