import React from "react";
import { motion } from "framer-motion";
import bookSmall from "../assets/booksmall.png";

const EbookDropdown = () => {
  return (
    <motion.div
      key="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className=" absolute top-[100px] z-10 right-[-388px] w-[494px] h-[410px] bg-neutral-white border border-[rgba(0,0,0,0.1)] shadow-[0px 4px 8px rgba(0, 0, 0, 0.15)] rounded-[4px] px-[32px]   "
    >
      <div className="mt-[29px] mb-[26.55px] h-[354.45px]  overflow-hidden overflow-y-auto scrollbar-hide ">
        <div className="cursor-pointer ">
          <div className="w-[356px] h-[86.45px] flex items-center justify-start gap-[40px]">
            <img
              className="w-[63px] h-[86.45px]"
              src={bookSmall}
              alt="E-Book"
            />
            <div className=" h-[86.45px] mt-[28px]">
              {" "}
              <h3 className="whitespace-nowrap font-medium text-[black] text-bodyL">
                How to break a Sun
                <span className="ml-[20px] text-[rgba(0, 0, 0, 0.2)] text-bodyS font-reg">
                  PDF
                </span>
              </h3>{" "}
              <p className="whitespace-nowrap mt-[8px] font-reg text-[black] text-bodyS">
                Chimamanda Adichie
              </p>
            </div>
            <p className="w-[74px] h-[18px] font-red text-primary-30 text-bodyS">
              26/05/2022
            </p>
          </div>
          <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px] mb-[23px]" />
        </div>
        <div>
          <div className="w-[356px] h-[86.45px] flex items-center justify-start gap-[40px]">
            <img
              className="w-[63px] h-[86.45px]"
              src={bookSmall}
              alt="E-Book"
            />
            <div className=" h-[86.45px] mt-[28px]">
              {" "}
              <h3 className="whitespace-nowrap font-medium text-[black] text-bodyL">
                How to break a Sun
                <span className="ml-[20px] text-[rgba(0, 0, 0, 0.2)] text-bodyS font-reg">
                  PDF
                </span>
              </h3>{" "}
              <p className="whitespace-nowrap mt-[8px] font-reg text-[black] text-bodyS">
                Chimamanda Adichie
              </p>
            </div>
            <p className="w-[74px] h-[18px] font-red text-primary-30 text-bodyS">
              26/05/2022
            </p>
          </div>
          <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px]  mb-[23px]" />
        </div>
        <div>
          <div className="w-[356px] h-[86.45px] flex items-center justify-start gap-[40px]">
            <img
              className="w-[63px] h-[86.45px]"
              src={bookSmall}
              alt="E-Book"
            />
            <div className=" h-[86.45px] mt-[28px]">
              {" "}
              <h3 className="whitespace-nowrap font-medium text-[black] text-bodyL">
                How to break a Sun
                <span className="ml-[20px] text-[rgba(0, 0, 0, 0.2)] text-bodyS font-reg">
                  PDF
                </span>
              </h3>{" "}
              <p className="whitespace-nowrap mt-[8px] font-reg text-[black] text-bodyS">
                Chimamanda Adichie
              </p>
            </div>
            <p className="w-[74px] h-[18px] font-red text-primary-30 text-bodyS">
              26/05/2022
            </p>
          </div>
          <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px]  mb-[23px]" />
        </div>
        <div>
          <div className="w-[356px] h-[86.45px] flex items-center justify-start gap-[40px]">
            <img
              className="w-[63px] h-[86.45px]"
              src={bookSmall}
              alt="E-Book"
            />
            <div className=" h-[86.45px] mt-[28px]">
              {" "}
              <h3 className="whitespace-nowrap font-medium text-[black] text-bodyL">
                How to break a Sun
                <span className="ml-[20px] text-[rgba(0, 0, 0, 0.2)] text-bodyS font-reg">
                  PDF
                </span>
              </h3>{" "}
              <p className="whitespace-nowrap mt-[8px] font-reg text-[black] text-bodyS">
                Chimamanda Adichie
              </p>
            </div>
            <p className="w-[74px] h-[18px] font-red text-primary-30 text-bodyS">
              26/05/2022
            </p>
          </div>
          <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px]  mb-[23px]" />
        </div>
        <div>
          <div className="w-[356px] h-[86.45px] flex items-center justify-start gap-[40px]">
            <img
              className="w-[63px] h-[86.45px]"
              src={bookSmall}
              alt="E-Book"
            />
            <div className=" h-[86.45px] mt-[28px]">
              {" "}
              <h3 className="whitespace-nowrap font-medium text-[black] text-bodyL">
                How to break a Sun
                <span className="ml-[20px] text-[rgba(0, 0, 0, 0.2)] text-bodyS font-reg">
                  PDF
                </span>
              </h3>{" "}
              <p className="whitespace-nowrap mt-[8px] font-reg text-[black] text-bodyS">
                Chimamanda Adichie
              </p>
            </div>
            <p className="w-[74px] h-[18px] font-red text-primary-30 text-bodyS">
              26/05/2022
            </p>
          </div>
          <hr className="w-[80%] mx-auto  h-0 border-1 border-neutral-20 mt-[23.55px]  mb-[23px]" />
        </div>
      </div>
    </motion.div>
  );
};

export default EbookDropdown;
