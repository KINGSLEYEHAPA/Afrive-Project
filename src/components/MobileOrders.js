import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MobileOrders = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-full mt-[68px] py-[17px] mx-auto mtab:hidden">
      {" "}
      <div
        onClick={() => navigate(-1)}
        className="w-full  h-[20px] flex justify-start items-center gap-0 px-[22px]  "
      >
        <span className="text-[18px]">
          <MdChevronLeft />
        </span>
        <p className="text-bodyS font-reg text-[#000000] cursor-pointer active:text-primary-50">
          Back
        </p>
      </div>
    </div>
  );
};

export default MobileOrders;
