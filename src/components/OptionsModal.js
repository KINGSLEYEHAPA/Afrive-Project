import React from "react";

const OptionsModal = ({ children }) => {
  return (
    <div className=" z-20 fixed top-0 bottom-0 w-screen max-w-[1440px]  mx-auto  bg-neutral-30/20 backdrop-blur-sm h-full flex items-center justify-center ">
      {children}
    </div>
  );
};

export default OptionsModal;
