import { MdChevronLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnimatePages from "./AnimatePages";
import BookQuote from "./BookQuote";

const MyOrders = () => {
  const navigate = useNavigate();

  const customerOrders = useSelector((state) => state.books.customerOrders);
  console.log(customerOrders);
  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[88px] pt-[32px] ">
        <div
          onClick={() => navigate(-1)}
          className="w-full  h-[32px] flex justify-start items-center pl-[105px]  gap-0  "
        >
          <span className="text-[25px]">
            <MdChevronLeft />
          </span>
          <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="w-full h-[32px] flex justify-center items-center mt-[9.92px]">
          <h4 className="text-h4 font-reg text-neutral-30 ">Your Orders</h4>
        </div>
        <div className="mt-[72px] space-y-[82px] w-full pl-[182px] pr-[140px]">
          <div className="w-full h-[84px]  py-[5px] flex ">
            <div className="w-[372px] h-full flex  justify-start items-center border-r-2 gap-[72px] border-r-primary-20 pr-[46px]">
              <p className="text-bodyL text-neutral-black">1.</p>
              <div className="flex justify-center items-center gap-[32px]">
                <p className="text-bodyL text-neutral-70">Order:</p>
                <div className="">
                  <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                    1 x Things Fall Apart
                  </p>
                  <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                    2 x Under the Small Rock
                  </p>
                </div>
              </div>
            </div>
            <div className=" h-full flex   justify-start items-center border-r-2 gap-[32px] border-r-primary-20 px-[46px]">
              <p className="text-bodyL text-neutral-black">Status:</p>

              <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                Out for Delivery
              </p>
            </div>
            <div className=" h-full flex   justify-start items-center gap-[32px]  pl-[46px]">
              <p className="text-bodyL text-neutral-black">
                Estimated Delivery Date:
              </p>

              <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                17th June, 2022
              </p>
            </div>
          </div>
          <div className="w-full h-[84px]  py-[5px] flex ">
            <div className="w-[372px] h-full flex  justify-start items-center border-r-2 gap-[72px] border-r-primary-20 pr-[46px]">
              <p className="text-bodyL text-neutral-black">2.</p>
              <div className="flex justify-center items-center gap-[32px]">
                <p className="text-bodyL text-neutral-70">Order:</p>
                <div className="">
                  <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                    1 x Things Fall Apart
                  </p>
                  <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                    2 x Under the Small Rock
                  </p>
                  <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                    2 x Under the Small Rock
                  </p>
                  <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                    2 x Under the Small Rock
                  </p>
                </div>
              </div>
            </div>
            <div className=" h-full flex   justify-start items-center border-r-2 gap-[32px] border-r-primary-20 px-[46px]">
              <p className="text-bodyL text-neutral-black">Status:</p>

              <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                Out for Delivery
              </p>
            </div>
            <div className=" h-full flex   justify-start items-center gap-[32px]  pl-[46px]">
              <p className="text-bodyL text-neutral-black">
                Estimated Delivery Date:
              </p>

              <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                17th June, 2022
              </p>
            </div>
          </div>
          <div className="w-full h-[84px]  py-[5px] flex ">
            <div className="w-[372px] h-full flex  justify-start items-center border-r-2 gap-[72px] border-r-primary-20 pr-[46px]">
              <p className="text-bodyL text-neutral-black">3.</p>
              <div className="flex justify-center items-center gap-[32px]">
                <p className="text-bodyL text-neutral-70">Order:</p>
                <div className="">
                  <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                    1 x Things Fall Apart
                  </p>
                  <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                    2 x Under the Small Rock
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full flex   justify-start items-center border-r-2 gap-[32px] border-r-primary-20 px-[46px]">
              <p className="text-bodyL text-neutral-black">Status:</p>

              <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                Out for Delivery
              </p>
            </div>
            <div className=" h-full flex   justify-start items-center gap-[32px]  pl-[46px]">
              <p className="text-bodyL text-neutral-black">
                Estimated Delivery Date:
              </p>

              <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                17th June, 2022
              </p>
            </div>
          </div>
          <div className="w-full h-[84px]  py-[5px] flex ">
            <div className="w-[372px] h-full flex  justify-start items-center border-r-2 gap-[72px] border-r-primary-20 pr-[46px]">
              <p className="text-bodyL text-neutral-black">4.</p>
              <div className="flex justify-center items-center gap-[32px]">
                <p className="text-bodyL text-neutral-70">Order:</p>
                <div className="">
                  <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                    1 x Things Fall Apart
                  </p>
                  <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                    2 x Under the Small Rock
                  </p>
                </div>
              </div>
            </div>
            <div className=" h-full flex   justify-start items-center border-r-2 gap-[32px] border-r-primary-20 px-[46px]">
              <p className="text-bodyL text-neutral-black">Status:</p>

              <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                Processing for Delivery
              </p>
            </div>
            <div className=" h-full flex   justify-start items-center gap-[32px]  pl-[46px]">
              <p className="text-bodyL text-neutral-black">
                Estimated Delivery Date:
              </p>

              <p className="text-neutral-60 text-[14px] leading-[21px] whitespace-nowrap font-reg">
                17th June, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
      <BookQuote />
    </AnimatePages>
  );
};

export default MyOrders;
