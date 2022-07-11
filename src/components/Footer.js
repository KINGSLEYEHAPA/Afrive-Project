import React from "react";

const Footer = () => {
  return (
    <div className="w-screen max-w-[1440px] h-[294px] mtab:h-[330px] tab:h-[452px] lap:h-[452px] desk:h-[481px] ">
      <div className="h-[326px] w-full flex justify-center items-center ">
        <div className=" w-[333px] h-[131px] mtab:h-[143px] mtab:w-[544.94px] tab:h-[155px]   lap:h-[159px] tab:w-[725.56px] flex flex-col items-center justify-start text-center">
          <p className="text-bodyS mtab:text-bodyN    tab:text-bodyL font-reg text-neutral-70">
            Join our community{" "}
          </p>
          <p className=" text-[12px] leading-[20px]   mtab:text-bodyN font-reg text-neutral-40 mt-[8px]">
            If you join, you would be one of the first to get book updates, and
            you would get to meet fellow book lovers like you.
          </p>
          <div className="tab:h-[55px] h-[41px]  tab:w-[445px] flex justify-center items-center mt-[22px] p-0 gap-0">
            <input
              className=" h-[41px]  tab:h-[55px] w-3/4 border-2 border-neutral-30 px-7 rounded-tl-[8px] rounded-bl-[8px] placeholder:w-[102px]    tab:placeholder:w-[122px]     placeholder:h-[16px]  tab:placeholder:h-[18px]  placeholder:text-sub tab:placeholder:text-bodyS placeholder:text-neutral-30  "
              type="text"
              placeholder="What's your email?"
            />
            <button className="h-full w-[99px] bg-neutral-80 bodyN text-neutral-white rounded-tr-[8px] rounded-br-[8px] relative right-[2px]  ">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="  h-[91px] tab:h-[155px]  w-full bg-neutral-60 flex justify-center items-center">
        <div className=" text-[12px] leading-5   w-[324px] h-[42px] mtab:w-[609px] translate-x-[11%]  mobx:translate-x-[-15%] mtab:translate-x-0   tab:w-[762px] mtab:h-[24px] mtab:mx-[125px] lap:mx-[339px] mtab:my-[33.5px]  mx-[25px] tab:mt-[63.65px] tab:mb-[67.35px] ">
          <p className="   mobx:whitespace-nowrap text-neutral-white mtab:text-bodyN  tab:text-[20px] tab:leading-6 font-reg ">
            Are you an Author? Submit your work for listing consideration to
            listings@afrive.com{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
