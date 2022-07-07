import React from "react";

const MobileMenu = () => {
  return (
    <div className="z-[10000] fixed mtab:hidden top-0 bottom-0 w-screen max-w-[1440px]  mx-auto  bg-[#e5e5e5]/30  shadow-[ 0px 4px 22px rgba(0, 0, 0, 0.15);]  h-full flex items-center justify-center">
      <div className=" w-screen  h-[528px] mx-[23px]  mobx:mx-[80px] rounded-[16px] bg-neutral-white border border-[rgba(144, 144, 144, 0.05);] "></div>
    </div>
  );
};

export default MobileMenu;
