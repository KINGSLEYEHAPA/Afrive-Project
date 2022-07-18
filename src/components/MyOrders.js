import { MdChevronLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimatePages from "./AnimatePages";
import BookQuote from "./BookQuote";
import { FiArrowUpLeft } from "react-icons/fi";
import { Link as ALink } from "react-scroll";
import MobileOrders from "./MobileOrders";

const MyOrders = () => {
  const navigate = useNavigate();
  let options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const customerOrders = useSelector((state) => state.books.customerOrders);

  return (
    <AnimatePages>
      <MobileOrders />
      <div
        id="order"
        className=" hidden mtab:block   w-screen max-w-[1440px] min-h-screen  mx-auto mt-[88px] pt-[32px] "
      >
        <div
          onClick={() => navigate(-1)}
          className="w-full h-[24px] mtab:h-[96px] flex justify-start items-center pl-[22px] mtab:pl-[73.48px] tab:pl-[90px] lap:pl-[128px] desk:pl-[105px] gap-0  "
        >
          <span className="text-[25px]">
            <MdChevronLeft />
          </span>
          <p className=" text-bodyS mtab:text-bodyL  tab:text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="w-full  h-[24px]   tab:h-[32px] flex justify-center items-center mt-[9.92px]">
          <h4 className=" text-bodyL  tab:text-h4 font-reg text-neutral-30 ">
            Your Orders
          </h4>
        </div>
        <div className="mt-[72px] space-y-[82px] w-full    mtab:pl-[66px]   mtab:pr-[24px]    tab:pl-[86px]  tab:pr-[46px] lap:pl-[160px]  lap:pr-[105px]  desk:pl-[182px] desk:pr-[140px]">
          <div className="w-full h-[84px]  py-[5px] flex ">
            <div className="   mtab:w-[350px]  tab:w-[380px]     lap:w-[420px]    desk:w-[500px] h-full flex  justify-start items-center  gap-[72px]  ml-[80px] pr-[46px]">
              <div className="flex justify-center items-center gap-[32px]">
                <p className=" mtab:text=sub  tab:text-bodyS  lap:text-bodyN   desk:text-bodyL text-neutral-70">
                  Order:
                </p>
              </div>
            </div>
            <div className="mtab:w-[280px]  tab:w-[320px] lap:w-[350px]    desk:w-[372px] h-full flex   justify-start items-center  gap-[32px]  pl-[13px]  pr-[46px]">
              <p className="  mtab:text-sub  tab:text-bodyS  lap:text-bodyN   desk:text-bodyL text-neutral-black">
                Status:
              </p>
            </div>
            <div className=" mtab:w-[280px] tab:w-[320px] lap:w-[350px]    desk:w-[372px] h-full flex   justify-start items-center gap-[32px]  pl-[13px]    pr-[46px]">
              <p className="  mtab:text-sub   tab:text-bodyS  lap:text-bodyN   desk:text-bodyL text-neutral-black">
                Total Amount:
              </p>
            </div>
            <div className="mtab:w-[280px]  tab:w-[320px] lap:w-[350px]    desk:w-[372px] h-full flex   justify-start items-center gap-[32px]  pl-[13px]">
              <p className="  mtab:text-sub  tab:text-bodyS  lap:text-bodyN   desk:text-bodyL text-neutral-black">
                Estimated Delivery Date:
              </p>
            </div>
          </div>
          {customerOrders?.data?.map((order, index) => {
            return (
              <div
                key={order?.txn_ref}
                className="w-full h-[84px]  py-[5px] flex "
              >
                <p className="text-bodyL text-neutral-black mr-[20px]">
                  {index + 1}.
                </p>
                <div className="mtab:w-[350px] tab:w-[380px]    lap:w-[420px]    desk:w-[500px] h-full flex  justify-start items-center border-r-2 gap-[72px] border-r-primary-20 px-[46px]">
                  <div className="flex justify-center items-center gap-[32px]">
                    <div className="">
                      {order?.book?.map((item) => {
                        return (
                          <p
                            key={item}
                            className="text-neutral-60  mtab:text-sub     lap:text-[14px] lap:leading-[21px] whitespace-nowrap font-reg"
                          >
                            {item?.quantity} x {item?.bookName.slice(0, 30)}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="mtab:w-[280px]   tab:w-[320px] lap:w-[350px]    desk:w-[372px] h-full flex   justify-start items-center border-r-2 gap-[32px] border-r-primary-20  px-[46px]">
                  <p className="text-neutral-60  mtab:text-sub     lap:text-[14px] lap:leading-[21px] whitespace-nowrap font-reg ">
                    {order?.completed ? "Processed for delivery" : "Pending"}
                  </p>
                </div>
                <div className="mtab:w-[280px]  tab:w-[320px]  w-[372px] h-full flex   justify-start items-center border-r-2 gap-[32px] border-r-primary-20   px-[46px]">
                  <p className="text-neutral-60  mtab:text-sub     lap:text-[14px] lap:leading-[21px] whitespace-nowrap font-reg">
                    N{order?.total_order_amount.toLocaleString("en-US")}
                  </p>
                </div>
                <div className="mtab:w-[280px] tab:w-[320px]   w-[372px] h-full flex   justify-start items-center gap-[32px]  px-[46px]">
                  <p className="text-neutral-60  mtab:text-sub     lap:text-[14px] lap:leading-[21px] whitespace-nowrap font-reg">
                    {new Date(
                      order?.estimated_delivery_date
                    ).toLocaleDateString("en-US", options)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="w-full mt-[72.51px] flex justify-end items-center pr-[24px] mtab:pr-[71.14px] lap:pr-[117.23px] mb-[-19px]">
          <div className="  h-[96px] flex justify-start items-center gap-[5px]  ">
            <span className="text-[15px]   lap:text-[25px]">
              <FiArrowUpLeft />
            </span>

            <ALink
              to="order"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
            >
              <p className="text-sub mtab:text-bodyS   lap:text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
                Back to Top
              </p>
            </ALink>
          </div>
        </div> */}
      </div>
      <BookQuote />
    </AnimatePages>
  );
};

export default MyOrders;
