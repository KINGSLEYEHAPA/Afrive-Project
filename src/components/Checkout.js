import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
import AddCard from "./AddCard";

const Checkout = () => {
  const navigate = useNavigate();
  const [deliveryFee, setDeliveryFee] = useState(3000);
  const [discountCoupon, setDiscountCoupon] = useState(1000);
  const [showPayment, setShowPayment] = useState(false);
  const [changeLocation, setChangeLocation] = useState(false);
  const [chooseDeliveryAddress, setChooseDeliveryAddress] = useState(false);
  const [orderDispatched, setOrderDispatched] = useState(false);
  const randomNumber = Math.random() * 1000000 + uuid();
  const { ordermessage, orderSuccess, isLoading } = useSelector(
    (state) => state.books
  );
  const location = useLocation();

  const checkout = useSelector((state) => state.books.checkout);

  const deliveryLocation = useSelector((state) => state.user.deliveryAddress);
  const userAddress = useSelector((state) => state.user.userInfo);
  const userEmail = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  let totalAmount = 0;

  useEffect(() => {
    if (!isLoading && orderDispatched) {
      setShowPayment(true);

      setTimeout(() => {
        setOrderDispatched(false);
      }, 3000);
    }
    setTimeout(() => {
      setChooseDeliveryAddress(false);
    }, 3000);
  }, [chooseDeliveryAddress, isLoading, orderDispatched]);

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
    book: bookAndQuantity,
    date: new Date(),
    total_order_amount: totalAmount + deliveryFee - discountCoupon,
    status: "Pending",
    estimated_delivery_date: deliverydate,
    currency: "NGN",
  };

  const processOrder = () => {
    if (
      deliveryLocation?.address !== "" ||
      deliveryLocation?.state !== "" ||
      deliveryLocation?.city !== "" ||
      userAddress !== null
    ) {
      dispatch(bookReset());
      dispatch(sendOrder(finalOrder));
      setOrderDispatched(true);
    } else {
      setChooseDeliveryAddress(true);
    }
  };

  return (
    <AnimatePages>
      <div className=" hidden mtab:block  w-screen max-w-[1440px]  mx-auto mt-[88px] pb-[162px] relative mb-0 pt-[32px] ">
        <AnimatePresence>
          {chooseDeliveryAddress && (
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{
                opacity: 1,
                x: [-50, 50, -50, 50, 0],
                transition: { duration: 1.2, type: "spring", stiffness: 100 },
              }}
              exit={{ opacity: 0, x: 500, transition: { duration: 1 } }}
              className=" text-h4 rounded-[4px] fixed z-50 top-[80px] right-[25px] text-neutral-white bg-primary-50 w-[400px] h-[100px] flex justify-center items-center  p-[10px]"
            >
              Please select a delivery address
            </motion.div>
          )}
        </AnimatePresence>
        {location.pathname === "/checkout/verifypay" && (
          <OptionsModal>
            {" "}
            <Outlet />
          </OptionsModal>
        )}
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
            Checkout
          </h4>
        </div>
        <div className="w-full h-[753.86px] flex items-start justify-start gap-0 relative mtab:mt-[48px] tab:mt-[52px]  lap:mt-[72px]">
          <div className="w-1/2 h-full   mtab:pl-[72px] mtab:pr-[33px]   tab:pl-[85px] tab:pr-[44px]     lap:pl-[194px] lap:pr-[32px]    desk:pl-[188.50px] desk:pr-[74.50px]  ">
            <div className="min-h-[96px] w-full  flex justify-between items-center  mtab:gap-[13px]   tab:gap-[24px] lap:gap-[56px]  mtab:mb-[56px]   lap:mb-[112px]">
              <p className="whitespace-nowrap   mtab:text-bodyN   lap:text-h4 font-medium text-neutral-70">
                Order Info:
              </p>
              <div className="relative right-[52px]">
                {checkout?.map((book) => {
                  return (
                    <p
                      key={book.id}
                      className="    mtab:text-[14px]   mtab:leading-6 tab:text-bodyN   lap:text-h4 font-reg text-neutral-60"
                    >
                      <span>
                        {checkout?.[0]?.eBook?.status ? null : book?.quantity}
                      </span>{" "}
                      {!checkout?.[0]?.eBook?.status && <span>x</span>}{" "}
                      {book?.title}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="h-[96px] w-full  flex justify-between items-start gap-[56px]">
              <p className="whitespace-nowrap mt-[10px] mtab:text-bodyN   lap:text-h4 font-medium text-neutral-70">
                Delivered To:
              </p>
              {deliveryLocation?.address !== "" ||
              deliveryLocation?.city !== "" ||
              deliveryLocation?.state !== "" ? (
                <p className="mtab:text-[14px]   mtab:leading-6 tab:text-bodyN   lap:text-h4 font-reg text-neutral-60">
                  {/* 1901 Thornridge Cir. Shiloh, Hawaii 81063 */}
                  <span>{deliveryLocation?.address}</span>{" "}
                  <span>{deliveryLocation?.city}</span>{" "}
                  <span>{deliveryLocation?.state}</span>{" "}
                </p>
              ) : (
                <p className="mtab:text-[14px]   mtab:leading-6 tab:text-bodyN   lap:text-h4 font-reg text-neutral-60">
                  {/* 1901 Thornridge Cir. Shiloh, Hawaii 81063 */}
                  <span>{userAddress?.houseAddress}</span>{" "}
                  <span>{userAddress?.city}</span>{" "}
                  <span>{userAddress?.state}</span>{" "}
                </p>
              )}
            </div>
            <div className="flex w-full h-[24px] justify-end  mtab:mt-[32px]   lap:mt-[39.41px]">
              {" "}
              <p
                onClick={() => setChangeLocation(true)}
                className="  mtab:text-bodyS tab:text-bodyN    lap:text-bodyL text-neutral-30 cursor-pointer"
              >
                Change
              </p>
            </div>
            <hr className="w-[100%] h-0 border border-primary-10  mtab:mt-[31px]   tab:mt-[53px]    lap:mt-[31px] mx-auto   " />
            <div className="h-[96px] w-full  flex justify-between items-center gap-[56px] my-[56px]">
              <p className="whitespace-nowrap  mtab:text-bodyN   lap:text-h4 font-medium text-neutral-70">
                Email:
              </p>
              <p className=" mtab:leading-6 tab:text-bodyN   lap:text-h4 font-reg text-neutral-60">
                {userEmail?.data?.email}
              </p>
            </div>
          </div>

          {/* <hr className="w-0 h-[753.86px] border border-primary-10 absolute rotate-180 left-[50%]    " /> */}
          <div className="w-1/2 h-[353px]   mtab:pl-[24px]  tab:pl-[29px]    lap:pl-[31.67px]  mtab:pr-[85px] tab:pr-[192px]    lap:pr-[185.33px]  border-l border-primary-10 ">
            <div className="w-full h-[24px] flex justify-between ">
              <p className="    mtab:text-bodyN  tab:text-bodyL text-neutral-80">
                Subtotal
              </p>
              <p className="    mtab:text-bodyN  tab:text-bodyL text-neutral-70">
                N{totalAmount.toLocaleString("en-US")}
              </p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[24px] ">
              <p className=" mtab:text-bodyN  tab:text-bodyL text-neutral-80">
                Coupon Discount:
              </p>
              <p className=" mtab:text-bodyN  tab:text-bodyL text-neutral-70">
                -N{discountCoupon.toLocaleString("en-US")}
              </p>
            </div>

            <div className="w-full h-[24px] flex justify-between mt-[24px] ">
              <p className=" mtab:text-bodyN  tab:text-bodyL text-neutral-80">
                Standard Delivery:
              </p>
              <p className=" mtab:text-bodyN  tab:text-bodyL text-neutral-70">
                N{deliveryFee.toLocaleString("en-US")}
              </p>
            </div>

            <div className="w-full h-[24px] flex justify-between mt-[40px] ">
              <p className=" mtab:text-bodyN  tab:text-bodyL text-neutral-80">
                Total to Pay:
              </p>
              <p className=" mtab:text-bodyN  tab:text-bodyL text-neutral-70">
                N
                {(totalAmount + deliveryFee - discountCoupon).toLocaleString(
                  "en-US"
                ) || 0}
              </p>
            </div>

            <div className="w-full h-[46px] flex justify-center items-center  mt-[64px] relative">
              {isLoading && (
                <div className="absolute top-[-170px]    tab:left-w/2   lap:left-[230px] z-20">
                  <SmallLoader loaderColor={"primary"} />
                </div>
              )}
              <button
                onClick={() => {
                  processOrder();
                }}
                className=" w-full mtab:h-[55px] tab:h-[65px] bg-primary-50 text-buttonL text-neutral-white font-medium rounded-[4px]  mt-[32px]"
              >
                {!isLoading && "Continue to Payment"}
              </button>
            </div>
            <div className="w-full h-[18px] flex justify-center items-center gap-[15px] mt-[41.25px]">
              {" "}
              <p className="    mtab:w-[298.36px]  mtab:text-sub   lap:w-[347px] h-full text-neutral-50 lap:text-bodyS whitespace-nowrap">
                Standard delivery within Nigeria takes 15 working days.
              </p>
              <span className="text-neutral-50 mtab:w-[12px]   mtab:h-[12px]    lap:w-[15.14px]   lap:h-[15.14px] mb-[7px]">
                <HiOutlineInformationCircle />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" block mtab:hidden   w-full min-h-screen mt-[68px] py-[17px] px-[23px] mobx:px-[60px]">
        <AnimatePresence>
          {chooseDeliveryAddress && (
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{
                opacity: 1,
                x: [-50, 50, -50, 50, 15],
                transition: { duration: 1.2, type: "spring", stiffness: 100 },
              }}
              exit={{ opacity: 0, x: 500, transition: { duration: 1 } }}
              className=" text-h4 rounded-[4px] fixed z-50 top-[80px] right-[25px] text-neutral-white bg-primary-50 w-[400px] h-[100px] flex justify-center items-center  p-[10px]"
            >
              Please select a delivery address
            </motion.div>
          )}
        </AnimatePresence>
        {location.pathname === "/checkout/verifypay" && (
          <OptionsModal>
            {" "}
            <Outlet />
          </OptionsModal>
        )}
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
          className="w-full  h-[96px] flex justify-start items-center gap-0  "
        >
          <span className="text-[18px]">
            <MdChevronLeft />
          </span>
          <p className="text-bodyS font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="w-full  h-[24px]    flex justify-center items-center mt-[-25px]">
          <h4 className=" text-bodyN  font-reg text-neutral-30 ">Checkout</h4>
        </div>

        <div className="w-full h-full  px-[23px] mt-[32px]   ">
          <div className="min-h-[50px] w-full  flex justify-between items-center  gap-[13px]  mb-[24px]">
            <p className="whitespace-nowrap   text-bodyN    font-medium text-neutral-70">
              Order Info:
            </p>
            <div className="">
              {checkout?.map((book) => {
                return (
                  <p
                    key={book.id}
                    className="   text-bodyN   font-reg text-neutral-60"
                  >
                    <span>
                      {checkout?.[0]?.eBook?.status ? null : book?.quantity}
                    </span>{" "}
                    {!checkout?.[0]?.eBook?.status && <span>x</span>}{" "}
                    {book?.title}
                  </p>
                );
              })}
            </div>
          </div>
          <hr className=" mtab:hidden w-[100%] mx-auto  h-0 border-1 border-neutral-20 mt-[15px] mb-[15px]" />
          <div className="h-[96px] w-full  flex justify-between items-start gap-[56px]">
            <p className="whitespace-nowrap mt-[10px] text-bodyN    font-medium text-neutral-70">
              Delivered To:
            </p>
            {deliveryLocation?.address !== "" ||
            deliveryLocation?.city !== "" ||
            deliveryLocation?.state !== "" ? (
              <p className="text-bodyN  font-reg text-neutral-60">
                {/* 1901 Thornridge Cir. Shiloh, Hawaii 81063 */}
                <span>{deliveryLocation?.address}</span>{" "}
                <span>{deliveryLocation?.city}</span>{" "}
                <span>{deliveryLocation?.state}</span>{" "}
              </p>
            ) : (
              <p className="text-bodyN    font-reg text-neutral-60">
                {/* 1901 Thornridge Cir. Shiloh, Hawaii 81063 */}
                <span>{userAddress?.houseAddress}</span>{" "}
                <span>{userAddress?.city}</span>{" "}
                <span>{userAddress?.state}</span>{" "}
              </p>
            )}
          </div>

          <div className="flex w-full h-[24px] justify-end  mtab:mt-[32px]   lap:mt-[39.41px]">
            {" "}
            <p
              onClick={() => setChangeLocation(true)}
              className="  text-bodyS  text-neutral-30 cursor-pointer"
            >
              Change
            </p>
          </div>
          <hr className=" mtab:hidden w-[100%] mx-auto  h-0 border-1 border-neutral-20 mt-[15px] mb-[15px]" />
          <div className="h-[50px] w-full  flex justify-between items-center gap-[56px]">
            <p className="whitespace-nowrap  mtab:text-bodyN   lap:text-h4 font-medium text-neutral-70">
              Email:
            </p>
            <p className=" mtab:leading-6 tab:text-bodyN   lap:text-h4 font-reg text-neutral-60">
              {userEmail?.data?.email}
            </p>
          </div>
        </div>
        <hr className=" mtab:hidden w-[100%] mx-auto  h-0 border-1 border-primary-40 mt-[25px] mb-[24px]" />

        <div>
          <div className="w-full h-[24px] flex justify-between ">
            <p className="  font-medium   text-bodyN text-neutral-80">
              Subtotal
            </p>
            <p className=" font-medium   text-bodyN text-neutral-70">
              N{totalAmount.toLocaleString("en-US")}
            </p>
          </div>
          <div className="w-full h-[24px] flex justify-between mt-[16px] ">
            <p className=" font-medium text-bodyN text-neutral-80">
              Coupon Discount:
            </p>
            <p className=" font-medium text-bodyN text-neutral-70">
              -N{discountCoupon.toLocaleString("en-US")}
            </p>
          </div>
          <div className="w-full h-[24px] flex justify-between mt-[16px] ">
            <p className=" font-medium text-bodyN text-neutral-80">
              Standard Delivery:
            </p>
            <p className=" font-medium text-bodyN text-neutral-70">
              N{deliveryFee.toLocaleString("en-US")}
            </p>
          </div>

          <div className="w-full h-[24px] flex justify-between mt-[24px] ">
            <p className=" font-medium text-bodyN text-neutral-80">
              Total to Pay:
            </p>
            <p className=" font-medium text-bodyN text-neutral-70">
              N
              {(totalAmount + deliveryFee - discountCoupon).toLocaleString(
                "en-US"
              ) || 0}
            </p>
          </div>

          <div className="w-full h-[46px] flex justify-center items-center  mt-[64px] relative">
            {isLoading && (
              <div className="absolute top-[-166px]    tab:left-w/2   lap:left-[230px] z-20">
                <SmallLoader loaderColor={"primary"} />
              </div>
            )}
            <button
              onClick={() => {
                processOrder();
              }}
              className=" w-full h-[55px]  bg-primary-50 text-buttonL text-neutral-white font-medium rounded-[4px]  mt-[40px]"
            >
              {!isLoading && "Continue to Payment"}
            </button>
          </div>
          <div className="w-full h-[18px] flex justify-center items-center gap-[10px] mt-[35px]">
            {" "}
            <span className="text-neutral-50 w-[10px]   h-[10px]   mb-[10px]">
              <HiOutlineInformationCircle />
            </span>
            <p className="    w-[297px]  h-full text-neutral-50 text-[12px] leading-[18px] whitespace-nowrap">
              Standard delivery within Nigeria takes 15 working days.
            </p>
          </div>
        </div>
      </div>

      <BookQuote />
    </AnimatePages>
  );
};

export default Checkout;
