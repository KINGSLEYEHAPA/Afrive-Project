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
        <span className="text-[20px]">
          <MdChevronLeft />
        </span>
        <p className="text-bodyS font-reg text-[#000000] cursor-pointer active:text-primary-50">
          Back
        </p>
      </div>
      <div className="w-full h-[24px] flex justify-center items-center mt-[12px]">
        <h4 className="text-bodyN font-reg text-neutral-40 ">Your Orders</h4>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h2 className="mx-[23px] text-bodyN text-neutral-80">Book Title</h2>
        <div className="mx-[23px] flex flex-col gap-[8px] ">
          <p className="text-bodyS  text-neutral-50">
            Quantity:&nbsp;<span className="text-neutral-80">1</span>
          </p>
          <p className="text-bodyS  text-neutral-50">
            Status:&nbsp;
            <span className="text-neutral-80">Out for Delivery</span>
          </p>
          <p className="text-bodyS  text-neutral-50">
            Estimated Time of Delivery:&nbsp;
            <span className="text-neutral-80">17th June, 2022</span>
          </p>
          <hr className="w-[100%] mx-auto  h-0 border-1 border-primary-20 mt-[20px] mb-[22px]" />
        </div>
      </div>
    </div>
  );
};

export default MobileOrders;
