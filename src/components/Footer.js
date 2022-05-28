import React from "react";

const Footer = () => {
  return (
    <div className="w-screen max-w-[1440px] h-[481px] ">
      <div className="h-[326px] w-full flex justify-center items-center ">
        <div className="h-[159px] w-[725.56px] flex flex-col items-center justify-start text-center">
          <p className="bodyL font-reg text-neutral-70">Join our community </p>
          <p className="bodyN font-reg text-neutral-40 mt-[8px]">
            If you join, you would be one of the first to get book updates, and
            you would get to meet fellow book lovers like you.
          </p>
          <div className="h-[55px] w-[445px] flex justify-center items-center mt-[22px] p-0 gap-0">
            <input
              className="h-[55px] w-3/4 border-2 border-neutral-30 px-7 rounded-tl-[8px] rounded-bl-[8px] placeholder:w-[122px] placeholder:h-[18px] placeholder:text-bodyS placeholder:text-neutral-30  "
              type="text"
              placeholder="What's your email?"
            />
            <button className="h-full w-[99px] bg-neutral-80 bodyN text-neutral-white rounded-tr-[8px] rounded-br-[8px] relative right-[2px]  ">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="h-[155px] w-full bg-neutral-60 flex justify-center items-center">
        <div className="w-[762px] h-[24px] mx-[339px] mt-[63.65px] mb-[67.35px] ">
          <p className="whitespace-nowrap text-neutral-white text-[20px] leading-6 font-reg ">
            Are you an Author? Submit your work for listing consideration to
            listings@afrive.com{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
