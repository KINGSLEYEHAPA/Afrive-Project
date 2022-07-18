import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addDeliveryLocation } from "../features/user/userSlice";
import { motion } from "framer-motion";

const AddLocation = ({ setChangeLocation }) => {
  const [houseAddress, setHouseAddress] = useState("");
  const [city, setCity] = useState("");
  const [userState, setUserState] = useState("");

  const dispatch = useDispatch();

  const addAddress = () => {
    if (houseAddress !== null && city !== null && userState !== null) {
      dispatch(
        addDeliveryLocation({
          address: houseAddress,
          city: city,
          state: userState,
        })
      );
      setChangeLocation(false);

      setHouseAddress("");
      setCity("");
      setUserState("");
    }

    // setTimeout(() => {
    //   dispatch(addDeliveryLocation(deliveryAddress));
    // }, 2000);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      className="  rounded-tr-[14px] rounded-tl-[14px]   mtab:rounded-tr-[0px] mtab:rounded-tl-[0px]  absolute mtab:static w-screen bottom-0 h-[313px]    mtab:w-[384px]  tab:w-[423px]   mtab:h-[289px]   lap:w-[505px]   lap:h-[350px] bg-neutral-white rounded-md pt-[24px]  mtab:pt-[28px] mtab:py-[40px]  px-[23px]  mtab:px-[36px] lap:p-[34px]"
    >
      <div className=" hidden w-full lap:flex justify-end h-[12px]  mb-[12px]">
        <span
          onClick={() => setChangeLocation(false)}
          className="w-[12px] h-[12px] text-neutral-30 text-[20px] font-medium cursor-pointer"
        >
          <AiOutlineClose />
        </span>
      </div>
      <div className=" w-full flex items-center justify-between lap:block ">
        <p className="font-medium text-neutral-70 text-bodyN  mb-[32px]    mtab:mb-[26px]   lap:mb-[22px]">
          Choose a Location
        </p>
        <span
          onClick={() => setChangeLocation(false)}
          className=" mb-[32px]  mtab:mb-[26px]   lap:mb-[22px]   lap:hidden  w-[12px] h-[12px] text-neutral-30 text-[20px] font-medium cursor-pointer"
        >
          <AiOutlineClose />
        </span>
      </div>
      <div className=" w-full mtab:w-[327px] tab:w-[350px]  lap:w-[424.71] desk:w-[437px]  mtab:h-[171px]     lap:h-[207px] ">
        <input
          type="text"
          placeholder="House Address"
          value={houseAddress}
          onChange={(e) => setHouseAddress(e.target.value)}
          className="  outline-none w-full h-[48px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyS text-neutral-30 active:ring-1 ring-[#FFA599]"
        />
        <div className="w-full flex justify-between gap-[14.56px] mt-[14px] mb-[32px]">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="  outline-none w-[45%] mtab:w-[158px]  tab-w-[169px]    lap:w-[205.08px] h-[48px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyS text-neutral-30 active:ring-1 ring-[#FFA599]"
          />
          <input
            type="text"
            placeholder="State"
            value={userState}
            onChange={(e) => setUserState(e.target.value)}
            className="  outline-none w-[45%]  mtab:w-[158px]  tab-w-[169px]    lap:w-[205.08px] h-[48px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyS text-neutral-30 active:ring-1 ring-[#FFA599]"
          />
        </div>
        <button
          onClick={addAddress}
          className="w-full  h-[55px]  mtab:h-[47px]   lap:h-[65px] mtab:text-buttonL   lap:text-h4 medium bg-primary-50 text-neutral-white rounded-[4px]"
        >
          Save
        </button>
      </div>
    </motion.div>
  );
};

export default AddLocation;
