import React from "react";
import AddCard from "./AddCard";
import AddLocation from "./AddLocation";

const OptionsModal = () => {
  return (
    <div className=" z-10 fixed top-0 bottom-0 w-screen max-w-[1440px]  mx-auto  bg-neutral-30/20 backdrop-blur-sm h-full flex items-center justify-center ">
      <div className="w-[505px] h-[350px] bg-neutral-white rounded-md p-[34px]">
        <AddLocation />
      </div>
    </div>
  );
};

export default OptionsModal;