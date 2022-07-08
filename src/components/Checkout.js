import { useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import masterCardLogo from "../assets/mastercard2.webp";
import { HiOutlineInformationCircle } from "react-icons/hi";
import OptionsModal from "./OptionsModal";
import AnimatePages from "./AnimatePages";
import BookQuote from "./BookQuote";
import Payment from "./Payment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddLocation from "./AddLocation";
import { AnimatePresence, motion } from "framer-motion";
import uuid from "uuid-random";
import { bookReset, sendOrder } from "../features/books/bookSlice";
import SmallLoader from "./SmallLoader";

const Checkout = () => {
  const navigate = useNavigate();
  const [deliveryFee, setDeliveryFee] = useState(3000);
  const [discountCoupon, setDiscountCoupon] = useState(1000);
  const [showPayment, setShowPayment] = useState(false);
  const [changeLocation, setChangeLocation] = useState(false);
  const [chooseDeliveryAddress, setChooseDeliveryAddress] = useState(false);
  const randomNumber = Math.random() * 1000000 + uuid();
  const { ordermessage, orderSuccess, isLoading } = useSelector(
    (state) => state.books
  );

  const checkout = useSelector((state) => state.books.checkout);
  const deliveryLocation = useSelector((state) => state.user.deliveryAddress);
  const userAddress = useSelector((state) => state.user.userInfo);
  const userEmail = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  let totalAmount = 0;

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowPayment(true);
      });
    }
    setTimeout(() => {
      setChooseDeliveryAddress(false);
    }, 3000);
  }, [chooseDeliveryAddress, isLoading]);

  // const placeOrder = () => {
  //   if (deliveryLocation !== null || userAddress !== null) {
  //     setTimeout(() => {
  //       if (isLoading)
  //     }, 3000);
  //   }
  // };

  checkout?.map((item) => {
    totalAmount += item.totalAmount;
    return null;
  });
  console.log(totalAmount);

  const today = new Date();
  const deliverydate = new Date();
  deliverydate.setDate(today.getDate() + 2);

  const bookAndQuantity = [];

  checkout?.map((item) => {
    bookAndQuantity.push({
      bookName: item.title,
      quantity: item.quantity,
      totalAmount: item.totalAmount,
      format: item.eBook.status ? item.eBook.format[0] : "Hard Copy",
    });
    return null;
  });

  const finalOrder = {
    txn_ref: randomNumber,
    book: bookAndQuantity,
    date: new Date(),
    total_order_amount: totalAmount + deliveryFee - discountCoupon,
    status: "Processing for Delivery",
    estimated_delivery_date: deliverydate,
    currency: "NGN",
  };
  console.log(finalOrder);
  const processOrder = () => {
    if (deliveryLocation !== null || userAddress !== null) {
      dispatch(bookReset());
      dispatch(sendOrder(finalOrder));
    } else {
      setChooseDeliveryAddress(true);
    }
  };

  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[88px] pb-[162px] relative mb-0 pt-[32px] ">
        <AnimatePresence>
          {chooseDeliveryAddress && (
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{
                opacity: 1,
                x: [-50, 50, -50, 50, 0],
                transition: { duration: 1, type: "spring", stiffness: 100 },
              }}
              exit={{ opacity: 0, x: 500, transition: { duration: 1 } }}
              className=" text-h4 rounded-[4px] fixed z-50 top-[80px] right-[25px] text-neutral-white bg-primary-50 w-[400px] h-[100px] flex justify-center items-center  p-[10px]"
            >
              Please select a delivery address
            </motion.div>
          )}
        </AnimatePresence>
        {showPayment && (
          <OptionsModal>
            <Payment
              order={checkout}
              totalAmountToPay={totalAmount + deliveryFee - discountCoupon}
              setShowPayment={setShowPayment}
              referenceNumber={randomNumber}
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
        <div className="w-full h-[753.86px] flex items-start justify-start gap-0 relative mt-[72px]">
          <div className="w-1/2 h-full pl-[188.50px] pr-[74.50px]  ">
            <div className="min-h-[96px] w-full  flex justify-between items-center gap-[56px] mb-[112px]">
              <p className="whitespace-nowrap  text-h4 font-medium text-neutral-70">
                Order Info:
              </p>
              <div className="relative right-[52px]">
                {checkout?.map((book) => {
                  return (
                    <p
                      key={book.id}
                      className="text-h4 font-reg text-neutral-60"
                    >
                      <span>
                        {checkout?.[0]?.eBook?.status ? null : book?.quantity}
                      </span>{" "}
                      {!checkout?.[0]?.eBook?.status && <span>x</span>}{" "}
                      {book?.title}
                    </p>
                  );
                })}
                {/* <p className="text-h4 font-reg text-neutral-60">
                  <span>1</span> x Things Fall Apart
                </p>
                <p className="text-h4 font-reg text-neutral-60">
                  <span>3</span> x Things Fall Apart
                </p>
                <p className="text-h4 font-reg text-neutral-60">
                  <span>3</span> x Things Fall Apart
                </p>
                <p className="text-h4 font-reg text-neutral-60">
                  <span>3</span> x Things Fall Apart
                </p>
                <p className="text-h4 font-reg text-neutral-60">
                  <span>3</span> x Things Fall Apart
                </p> */}
              </div>
            </div>
            <div className="h-[96px] w-full  flex justify-between items-start gap-[56px]">
              <p className="whitespace-nowrap mt-[10px] text-h4 font-medium text-neutral-70">
                Delivered To:
              </p>
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
            <div className="flex w-full h-[24px] justify-end mt-[39.41px]">
              {" "}
              <p
                onClick={() => setChangeLocation(true)}
                className="text-bodyL text-neutral-30 cursor-pointer"
              >
                Change
              </p>
            </div>
            <hr className="w-[100%] h-0 border border-primary-10 mt-[31px] mx-auto   " />
            <div className="h-[96px] w-full  flex justify-between items-center gap-[56px] my-[56px]">
              <p className="whitespace-nowrap  text-h4 font-medium text-neutral-70">
                Email:
              </p>
              <p className="text-h4 font-reg text-neutral-60">
                {userEmail?.data?.email}
              </p>
            </div>
            {/* 
            toLocaleString('en-US') */}
            {/* <hr className="w-[100%] h-0 border border-primary-10 mt-[62.41px] mx-auto   " /> */}
            {/* <div className="h-[29.78px] w-full  flex items-center gap-[56px] mt-[56px]">
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
            </div>
            <hr className="w-[100%] h-0 border border-primary-10 mt-[62.41px] mx-auto   " /> */}
            {/* <div className="h-[96px] w-full  flex justify-between items-start gap-[56px] mt-[56px]">
              <p className="whitespace-nowrap  text-h4 font-medium text-neutral-70">
                Billing Address:
              </p>
              <p className="text-h4 font-reg text-neutral-60">
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </p>
            </div>
            <div className="flex w-full h-[24px] justify-end mt-[40px]">
              {" "}
              <p className="text-bodyL text-neutral-30">Change</p>
            </div>
            <hr className="w-[100%] h-0 border border-primary-10 mt-[32px] mx-auto   " /> */}
            {/* 
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
            </div> */}
          </div>

          <hr className="w-0 h-[753.86px] border border-primary-10 absolute rotate-180 left-[50%]    " />
          <div className="w-1/2 h-[353px] pl-[31.67px] pr-[185.33px]">
            <div className="w-full h-[24px] flex justify-between ">
              <p className="text-bodyL text-neutral-80">Subtotal:</p>
              <p className="text-bodyL text-neutral-70">
                N{totalAmount.toLocaleString("en-US")}
              </p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[24px] ">
              <p className="text-bodyL text-neutral-80">Coupon Discount:</p>
              <p className="text-bodyL text-neutral-70">
                -N{discountCoupon.toLocaleString("en-US")}
              </p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[24px] ">
              <p className="text-bodyL text-neutral-80">Standard Delivery:</p>
              <p className="text-bodyL text-neutral-70">
                N{deliveryFee.toLocaleString("en-US")}
              </p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[40px] ">
              <p className="text-bodyL text-neutral-80">Total to Pay:</p>
              <p className="text-bodyL text-neutral-70">
                N
                {(totalAmount + deliveryFee - discountCoupon).toLocaleString(
                  "en-US"
                ) || 0}
              </p>
            </div>
            <div className="w-full h-[46px] flex justify-center items-center  mt-[64px] relative">
              {isLoading && (
                <div className="absolute top-[-170px] left-[250px] z-20">
                  <SmallLoader loaderColor={"primary"} />
                </div>
              )}
              <button
                onClick={() => {
                  processOrder();
                }}
                className="w-full h-[65px] bg-primary-50 text-buttonL text-neutral-white font-medium rounded-[4px]  mt-[32px]"
              >
                {!isLoading && "Continue to Payment"}
              </button>
            </div>
            <div className="w-full h-[18px] flex justify-center items-center gap-[15px] mt-[41.25px]">
              {" "}
              <p className="w-[347px] h-full text-neutral-50 text-bodyS whitespace-nowrap">
                Standard delivery within Nigeria takes 15 working days.
              </p>
              <span className="text-neutral-50 w-[15.14px] h-[15.14px]">
                <HiOutlineInformationCircle />
              </span>
            </div>
          </div>
        </div>
      </div>
      <BookQuote />
    </AnimatePages>
  );
};

export default Checkout;
