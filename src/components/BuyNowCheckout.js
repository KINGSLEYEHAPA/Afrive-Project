import { useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import masterCardLogo from "../assets/mastercard2.webp";
import AnimatePages from "./AnimatePages";
import BookQuote from "./BookQuote";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import OptionsModal from "./OptionsModal";
import Payment from "./Payment";
import AddLocation from "./AddLocation";
import { AnimatePresence, motion } from "framer-motion";

const BuyNowCheckout = () => {
  const navigate = useNavigate();
  const [deliveryFee, setDeliveryFee] = useState(3000);
  const [discountCoupon, setDiscountCoupon] = useState(1000);
  const [chooseDeliveryAddress, setChooseDeliveryAddress] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [changeLocation, setChangeLocation] = useState(false);
  const deliveryLocation = useSelector((state) => state.user.deliveryAddress);

  const userAddress = useSelector((state) => state.user.userInfo);
  const userEmail = useSelector((state) => state.user.user);

  const buyNowBooks = useSelector((state) => state.books.buyNowCheckout);
  console.log(buyNowBooks);

  useEffect(() => {
    setTimeout(() => {
      setChooseDeliveryAddress(false);
    }, 3000);
  }, [chooseDeliveryAddress]);

  const placeOrder = () => {
    if (deliveryLocation !== null || userAddress !== null) {
      setShowPayment(true);
    } else {
      setChooseDeliveryAddress(true);
    }
  };

  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[88px] pb-[521px] pt-[32px] relative">
        <AnimatePresence>
          {chooseDeliveryAddress && (
            <motion.div
              initial={{ opacity: 0, x: 1000 }}
              animate={{
                opacity: 1,
                x: [-50, 50, -50, 50, 0],
                transition: { duration: 1, type: "spring", stiffness: 100 },
              }}
              exit={{ opacity: 0, x: 1000, transition: { duration: 1 } }}
              className=" text-h4 rounded-[4px] fixed z-50 top-[80px] right-[25px] text-neutral-white bg-primary-50 w-[400px] h-[100px] flex justify-center items-center  p-[10px]"
            >
              Please select a delivery address
            </motion.div>
          )}
        </AnimatePresence>
        {showPayment && (
          <OptionsModal>
            <Payment
              order={buyNowBooks}
              totalAmountToPay={
                buyNowBooks?.[0]?.totalAmount +
                (!buyNowBooks?.[0]?.eBook?.status && deliveryFee) -
                discountCoupon
              }
              setShowPayment={setShowPayment}
            />
          </OptionsModal>
        )}
        {changeLocation && (
          <OptionsModal>
            <AddLocation setChangeLocation={setChangeLocation} />
          </OptionsModal>
        )}

        <div
          onClick={() => navigate(-1)}
          className="w-full  h-[32px] flex justify-start items-center pl-[105px] gap-0  "
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
              <p className="whitespace-nowrap  text-h4 font-medium text-neutral-70">
                Order Info:
              </p>
              <div className="relative right-[52px]">
                {buyNowBooks.map((book) => {
                  return (
                    <p
                      key={book.id}
                      className="text-h4 font-reg text-neutral-60"
                    >
                      <span>
                        {buyNowBooks?.[0]?.eBook?.status
                          ? null
                          : book?.quantity}
                      </span>{" "}
                      {!buyNowBooks?.[0]?.eBook?.status && <span>x</span>}{" "}
                      {book?.title}
                    </p>
                  );
                })}
                {/* <p className="text-h4 font-reg text-neutral-60">
                  <span>3</span> x Things Fall Apart
                </p>

                <p className="text-h4 font-reg text-neutral-60">
                  <span>3</span> x Things Fall Apart
                </p> */}
              </div>
            </div>
            <div className="h-[96px] w-full  flex justify-between items-start gap-[56px]">
              <p className="whitespace-nowrap mt-[34px] text-h4 font-medium text-neutral-70">
                Delivered To:
              </p>
              {buyNowBooks?.[0]?.eBook?.status ? (
                <p className="text-h4 font-reg text-neutral-60">
                  E-books are automatically added to ‘Your e-books’ on checkout.
                </p>
              ) : (
                <div className="">
                  {deliveryLocation ? (
                    <p className="text-h4 font-reg text-neutral-60">
                      {/* 1901 Thornridge Cir. Shiloh, Hawaii 81063 */}
                      <span>{deliveryLocation?.address}</span>{" "}
                      <span>{deliveryLocation?.city}</span>{" "}
                      <span>{deliveryLocation?.state}</span>{" "}
                    </p>
                  ) : (
                    <p className="text-h4 font-reg text-neutral-60">
                      {/* 1901 Thornridge Cir. Shiloh, Hawaii 81063 */}
                      <span>{userAddress?.houseAddress}</span>{" "}
                      <span>{userAddress?.city}</span>{" "}
                      <span>{userAddress?.state}</span>{" "}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="flex w-full h-[24px] justify-end mt-[39.41px]">
              {" "}
              <p
                onClick={() => setChangeLocation(true)}
                className="text-bodyL text-neutral-30 cursor-pointer"
              >
                Change
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
            {/* <div className="h-[96px] w-full  flex justify-between items-start gap-[56px] mt-[56.41px]">
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
              
            </div> */}
            <div className="h-[96px] w-full  flex justify-between items-center gap-[56px] my-[56px]">
              <p className="whitespace-nowrap  text-h4 font-medium text-neutral-70">
                Email:
              </p>
              <p className="text-h4 font-reg text-neutral-60">
                {userEmail?.data?.email}
              </p>
            </div>
          </div>

          <hr className="w-0 min-h-[753.86px] border border-primary-10 absolute rotate-180 left-[50%]    " />
          <div className="w-1/2 h-[353px] pl-[31.67px] pr-[185.33px]">
            <div className="w-full h-[24px] flex justify-between ">
              <p className="text-bodyL text-neutral-80">Subtotal:</p>
              <p className="text-bodyL text-neutral-70">
                N{buyNowBooks?.[0]?.totalAmount.toLocaleString("en-US")}
              </p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[24px] ">
              <p className="text-bodyL text-neutral-80">Coupon Discount:</p>
              <p className="text-bodyL text-neutral-70">
                -N{discountCoupon.toLocaleString("en-US")}
              </p>
            </div>
            {!buyNowBooks?.[0]?.eBook?.status && (
              <div className="w-full h-[24px] flex justify-between mt-[24px] ">
                <p className="text-bodyL text-neutral-80">Standard Delivery:</p>
                <p className="text-bodyL text-neutral-70">
                  {deliveryFee.toLocaleString("en-US")}
                </p>
              </div>
            )}
            <div className="w-full h-[24px] flex justify-between mt-[40px] ">
              <p className="text-bodyL text-neutral-80">Total to Pay:</p>
              <p className="text-bodyL text-neutral-70">
                N
                {(
                  buyNowBooks?.[0]?.totalAmount +
                  (!buyNowBooks?.[0]?.eBook?.status ? deliveryFee : 0) -
                  discountCoupon
                ).toLocaleString("en-US") || 0}
              </p>
            </div>
            <div className="w-full h-[46px] flex justify-center items-center  mt-[64px]">
              <button
                onClick={() => placeOrder()}
                className="w-full h-[65px] bg-primary-50 text-buttonL text-neutral-white font-medium rounded-[4px]  mt-[32px]"
              >
                Continue to Payment
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
