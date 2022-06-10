import { useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import masterCardLogo from "../assets/mastercard2.webp";
import AnimatePages from "./AnimatePages";
import BookQuote from "./BookQuote";

const BuyNowCheckout = () => {
  const navigate = useNavigate();
  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[100px] pb-[521px]">
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
          <h4 className="text-h4 font-reg text-neutral-30 ">Checkout</h4>
        </div>
        <div className="w-full min-h-[753.86px] flex items-start justify-start gap-0 relative mt-[72px]">
          <div className="w-1/2 h-full pl-[188.50px] pr-[74.50px]  ">
            <div className="min-h-[96px] w-full  flex justify-between items-center gap-[56px] mb-[112px]">
              <p className="whitespace-nowrap mt-[10px] text-h4 font-medium text-neutral-70">
                Order Info:
              </p>
              <div className="relative right-[52px]">
                <p className="text-h4 font-reg text-neutral-60">
                  <span>1</span> x Things Fall Apart
                </p>
                <p className="text-h4 font-reg text-neutral-60">
                  <span>3</span> x Things Fall Apart
                </p>

                <p className="text-h4 font-reg text-neutral-60">
                  <span>3</span> x Things Fall Apart
                </p>
              </div>
            </div>
            <div className="h-[96px] w-full  flex justify-between items-start gap-[56px]">
              <p className="whitespace-nowrap mt-[34px] text-h4 font-medium text-neutral-70">
                Delivered To:
              </p>
              <p className="text-h4 font-reg text-neutral-60">
                E-books are automatically added to ‘Your e-books’ on checkout.
              </p>
            </div>
            {/* <hr className="w-[100%] h-0 border border-primary-10 mt-[62.41px] mx-auto   " />
            <div className="h-[29.78px] w-full  flex items-center gap-[56px] mt-[56px]">
              <p className="whitespace-nowrap text-h4 font-medium text-neutral-70">
                Coupon:
              </p>
              <div className="flex items-center gap-[20px]">
                <p className="text-h4 font-reg text-neutral-60">586X7SV</p>
                <div className="flex items-center justify-center w-[84px] h-[29.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] ">
                  <p className="w-[52px] h-[24px] text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                    2% Off
                  </p>
                </div>
              </div>
            </div> */}
            <hr className="w-[100%] h-0 border border-primary-10 mt-[62.41px] mx-auto   " />
            <div className="h-[96px] w-full  flex justify-between items-start gap-[56px] mt-[56.41px]">
              <p className="whitespace-nowrap mt-[34px] text-h4 font-medium text-neutral-70">
                Payment:
              </p>
              <div
                className="w-[272px] h-[121px] bg-[linear-gradient(186.31deg,#F67A6A_16.82%,#F89386_85.91%)] 
                   flex justify-between p-[18px] items-end rounded-[4px]"
              >
                <p className="text-bodyL text-neutral-white">**** **** 5758</p>
                <div className="flex flex-col w-[47.78px] items-end">
                  <span>
                    {" "}
                    <img
                      className="w-[30px]"
                      src={masterCardLogo}
                      alt="Card Logo"
                    />
                  </span>{" "}
                  <p className="text-bodyL text-neutral-white">08/22</p>
                </div>
              </div>
            </div>
            <div className="flex w-full h-[24px] justify-end mt-[69.18px]">
              {" "}
              <p className="text-bodyL text-neutral-30">Change</p>
            </div>
          </div>

          <hr className="w-0 min-h-[753.86px] border border-primary-10 absolute rotate-180 left-[50%]    " />
          <div className="w-1/2 h-[353px] pl-[31.67px] pr-[185.33px]">
            <div className="w-full h-[24px] flex justify-between ">
              <p className="text-bodyL text-neutral-80">Subtotal:</p>
              <p className="text-bodyL text-neutral-70">N6,000</p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[24px] ">
              <p className="text-bodyL text-neutral-80">Coupon Discount:</p>
              <p className="text-bodyL text-neutral-70">-N1,000</p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[24px] ">
              <p className="text-bodyL text-neutral-80">Standard Delivery:</p>
              <p className="text-bodyL text-neutral-70">N3,000</p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[40px] ">
              <p className="text-bodyL text-neutral-80">Total to Pay:</p>
              <p className="text-bodyL text-neutral-70">N8,000</p>
            </div>
            <div className="w-full h-[46px] flex justify-center items-center  mt-[64px]">
              <button className="w-full h-[65px] bg-primary-50 text-buttonL text-neutral-white font-medium rounded-[4px]  mt-[32px]">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookQuote />
    </AnimatePages>
  );
};

export default BuyNowCheckout;
