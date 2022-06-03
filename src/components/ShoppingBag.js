import React from "react";
import { useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const ShoppingBag = () => {
  let navigate = useNavigate();

  return (
    <div className="w-screen max-w-[1440px]  mx-auto mt-[100px] ">
      <div
        onClick={() => navigate(-1)}
        className="w-full  h-[96px] flex justify-start items-center pl-[105px] gap-0  "
      >
        <span className="text-[25px]">
          <MdChevronLeft />
        </span>
        <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
          Back
        </p>
      </div>
      <div className="w-full h-[32px] flex justify-center items-center mt-[9.92px]">
        <h4 className="text-h4 font-reg text-neutral-30 ">Your Shopping Bag</h4>
      </div>
      <div className="w-full h-[753.86px] flex items-start justify-start gap-0 relative mt-[72px]">
        <div className="w-1/2 h-full pl-[181px] pr-[145.72px] overflow-hidden ">
          <div className=" overflow-y-auto scrollbar-hide w-full h-full ">
            <div className="w-full h-[312.95px]  flex gap-[53.23px] mb-[127.96px]">
              <div className="h-full w-[228.05px]">
                <img
                  className="w-full h-full"
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaFEErVzVj4X_VsqW9m1g0SrhlMWFJDozmUUiDr4Mc0J-qlUr0"
                  alt="Book"
                />
              </div>
              <div className="h-full w-[107px]">
                <div className="h-[12px] w-full flex justify-end items-center pr-[22px]">
                  <span className="w-[12px] h-[12px] text-neutral-30">
                    <AiOutlineClose />
                  </span>
                </div>
                <div className="w-[107px] mt-[84.21px] space-y-[12px]">
                  <div className="flex items-center justify-center w-[84px] h-[29.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] ">
                    <p className="w-[52px] h-[24px] text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                      Ebook
                    </p>
                  </div>
                  <h3 className="text-h4 font-reg text-neutral-80">
                    Book Title
                  </h3>
                  <p className="text-bodyL whitespace-nowrap text-neutral-30">
                    Total:&nbsp; <span className="text-primary-50">N3000</span>
                  </p>
                </div>
                <div className="w-[91px] h-[30px]  mt-[53.86px] flex justify-between items-center gap-[13px]">
                  <span className="w-[30px] h-[30px] rounded-full bg-primary-50 flex items-center justify-center text-[18px] leading-5 text-neutral-white">
                    +
                  </span>
                  <span className="text-bodyL text-primary-50 font-reg">1</span>
                  <span className="w-[30px] h-[30px] rounded-full bg-primary-50 flex items-center justify-center text-[18px] leading-5 text-neutral-white">
                    -
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-[312.95px]  flex gap-[53.23px] mb-[127.96px]">
              <div className="h-full w-[228.05px]">
                <img
                  className="w-full h-full"
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaFEErVzVj4X_VsqW9m1g0SrhlMWFJDozmUUiDr4Mc0J-qlUr0"
                  alt="Book"
                />
              </div>
              <div className="h-full w-[107px]">
                <div className="h-[12px] w-full flex justify-end items-center pr-[22px]">
                  <span className="w-[12px] h-[12px] text-neutral-30">
                    <AiOutlineClose />
                  </span>
                </div>
                <div className="w-[107px] mt-[84.21px] space-y-[12px]">
                  <div className="flex items-center justify-center w-[84px] h-[29.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] ">
                    <p className="w-[52px] h-[24px] text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                      Ebook
                    </p>
                  </div>
                  <h3 className="text-h4 font-reg text-neutral-80">
                    Book Title
                  </h3>
                  <p className="text-bodyL whitespace-nowrap text-neutral-30">
                    Total:&nbsp; <span className="text-primary-50">N3000</span>
                  </p>
                </div>
                <div className="w-[91px] h-[30px]  mt-[53.86px] flex justify-between items-center gap-[13px]">
                  <span className="w-[30px] h-[30px] rounded-full bg-primary-50 flex items-center justify-center text-[18px] leading-5 text-neutral-white">
                    +
                  </span>
                  <span className="text-bodyL text-primary-50 font-reg">1</span>
                  <span className="w-[30px] h-[30px] rounded-full bg-primary-50 flex items-center justify-center text-[18px] leading-5 text-neutral-white">
                    -
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-[312.95px]  flex gap-[53.23px] mb-[127.96px]">
              <div className="h-full w-[228.05px]">
                <img
                  className="w-full h-full"
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaFEErVzVj4X_VsqW9m1g0SrhlMWFJDozmUUiDr4Mc0J-qlUr0"
                  alt="Book"
                />
              </div>
              <div className="h-full w-[107px]">
                <div className="h-[12px] w-full flex justify-end items-center pr-[22px]">
                  <span className="w-[12px] h-[12px] text-neutral-30">
                    <AiOutlineClose />
                  </span>
                </div>
                <div className="w-[107px] mt-[84.21px] space-y-[12px]">
                  <div className="flex items-center justify-center w-[84px] h-[29.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] ">
                    <p className="w-[52px] h-[24px] text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                      Ebook
                    </p>
                  </div>
                  <h3 className="text-h4 font-reg text-neutral-80">
                    Book Title
                  </h3>
                  <p className="text-bodyL whitespace-nowrap text-neutral-30">
                    Total:&nbsp; <span className="text-primary-50">N3000</span>
                  </p>
                </div>
                <div className="w-[91px] h-[30px]  mt-[53.86px] flex justify-between items-center gap-[13px]">
                  <span className="w-[30px] h-[30px] rounded-full bg-primary-50 flex items-center justify-center text-[18px] leading-5 text-neutral-white">
                    +
                  </span>
                  <span className="text-bodyL text-primary-50 font-reg">1</span>
                  <span className="w-[30px] h-[30px] rounded-full bg-primary-50 flex items-center justify-center text-[18px] leading-5 text-neutral-white">
                    -
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-0 h-[753.86px] border border-primary-10 absolute rotate-180 left-[50%]    " />
        <div className="w-1/2 h-[353px] pl-[31.67px] pr-[185.33px]">
          <div className="w-full h-[24px] flex justify-between ">
            <p className="text-bodyL text-neutral-80">Subtotal</p>
            <p className="text-bodyL text-neutral-70">N8000</p>
          </div>
          <div className="w-full h-[24px] flex justify-between mt-[26px] ">
            <p className="text-bodyL text-neutral-80">Total Weight</p>
            <p className="text-bodyL text-neutral-70">0.68Kg</p>
          </div>
          <div className="w-full h-[24px] flex justify-between mt-[40px] ">
            <p className="text-bodyL text-neutral-80">Total:</p>
            <p className="text-bodyL text-neutral-70">N20000</p>
          </div>
          <div className="w-full h-[46px] flex justify-center items-center  mt-[64px]">
            <div className="w-[279px] h-full relative rounded-[4px]">
              <input
                className=" border border-neutral-30 w-full h-full rounded-[4px] pl-[16px] pr-[86px] text-neutral-20 text-sub placeholder:text-neutral-20 placeholder:text-sub"
                type="text"
                name="coupon"
                placeholder="Type in voucher or coupon code"
              />
              <button className="h-full absolute w-[58px] top-0 right-0 z-10 bg-neutral-60 text-neutral-white">
                Verify
              </button>
            </div>
          </div>
          <button className="w-full h-[65px] bg-primary-50 text-buttonL text-neutral-white font-medium rounded-[4px]  mt-[32px]">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
