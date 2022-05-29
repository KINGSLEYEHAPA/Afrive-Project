import React from "react";

const Search = () => {
  return (
    <div className="absolute top-[30px]   right-[164px] w-[467px] h-[36px] border  border-neutral-30 rounded-[120px] box-border bg-neutral-white border-[0.5px solid #C3C3C3] rounded-[120px]">
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0 w-[90px] h-full flex justify-center items-center gap-[12px] cursor-pointer">
          {" "}
          <p className="text-bodyS pl-[24px] whitespace-nowrap font-reg text-neutral-60">
            Search by
          </p>
          <p className="text-neutral-20">|</p>
        </div>
        <input
          type="text"
          placeholder="What would you like to read today?"
          className=" pl-[102px] pr-[24px] placeholder:pl-[8px] text-neutral-30 placeholder:text-sub placeholder:text-neutral-30 border-[0.5px solid #C3C3C3] rounded-[120px] w-full h-full bg-neutral-white outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
