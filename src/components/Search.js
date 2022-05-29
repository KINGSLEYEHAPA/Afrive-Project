import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Search = () => {
  return (
    <motion.div
      initial={{ opacity: 1, width: 40 }}
      animate={{
        opacity: 1,
        width: 467,
        transition: { duration: 1.2, delay: 0.5 },
      }}
      exit={{ opacity: 0, width: 40, transition: { duration: 1.2 } }}
      layoutId="outline"
      className="absolute top-[28px]   right-[170px] w-[467px] h-[36px] border  border-neutral-30 rounded-[120px] box-border bg-neutral-white border-[0.5px solid #C3C3C3] rounded-[120px]"
    >
      <div className="relative h-full w-full">
        <AnimatePresence>
          {true && (
            <motion.div
              key="box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="absolute top-[45px] w-[174px] h-[118px] bg-neutral-white border border-neutral-20 shadow-[ 0px 4px 22px rgba(0, 0, 0, 0.15)] rounded-[8px]"
            >
              <div className="w-full h-[58px] flex justify-start items-center pl-[18px] text-bodyN text-neutral-80 font-reg">
                <p className="cursor-pointer">Categories</p>
              </div>
              <hr className="h-0 border-1 border-neutral-20 w-[80%] ml-[20%]" />
              <div className="w-full h-[58px] flex justify-start items-center  pl-[18px] text-bodyN text-neutral-80 font-reg">
                <p className="cursor-pointer">Authors</p>
              </div>
            </motion.div>
          )}
          {false && (
            <motion.div
              key="box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="absolute top-[45px] left-[95px] w-[372px] h-[150px] bg-neutral-white border border-neutral-20 shadow-[ 0px 4px 22px rgba(0, 0, 0, 0.15)] rounded-[8px] py-[20px]"
            >
              <div className="overflow-hidden h-full w-full overflow-y-auto scrollbar-hide ">
                <div>
                  <hr className="h-0 border-1 border-neutral-20 w-[100%]" />
                  <div className="w-full h-[58px] flex justify-start items-center px-[18px] text-bodyS text-neutral-80 font-reg">
                    <p className="cursor-pointer">Cslslkjdslkjdlsjk</p>
                  </div>
                  <hr className="h-0 border-1 border-neutral-20 w-[100%]" />
                </div>
                <div>
                  <div className="w-full h-[58px] flex justify-start items-center  px-[18px] text-bodyS text-neutral-80 font-reg">
                    <p className="cursor-pointer">Authors</p>
                  </div>
                  <hr className="h-0 border-1 border-neutral-20 w-[100%]" />
                </div>
                <div>
                  <div className="w-full h-[58px] flex justify-start items-center px-[18px] text-bodyS text-neutral-80 font-reg">
                    <p className="cursor-pointer">Categories</p>
                  </div>
                  <hr className="h-0 border-1 border-neutral-20 w-[100%]" />
                </div>
                <div>
                  <div className="w-full h-[58px] flex justify-start items-center px-[18px] text-bodyS text-neutral-80 font-reg">
                    <p className="cursor-pointer">Categories</p>
                  </div>
                  <hr className="h-0 border-1 border-neutral-20 w-[100%]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
          className=" pl-[102px] pr-[24px]  text-neutral-30 placeholder:text-sub placeholder:text-neutral-30 border-[0.5px solid #C3C3C3] rounded-[120px] w-full h-full bg-neutral-white outline-none text-bodyN"
        />
      </div>
    </motion.div>
  );
};

export default Search;
