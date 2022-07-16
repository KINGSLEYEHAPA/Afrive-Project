import { useEffect, useState } from "react";
import masterCardLogo from "../assets/mastercard2.webp";
import { PaystackButton } from "react-paystack";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { BsBagCheckFill } from "react-icons/bs";
import uuid from "uuid-random";
import {
  bookReset,
  clearBuyNShoppingBag,
  clearShoppingBag,
  deleteOrder,
  getOrder,
  pay,
  sendOrder,
} from "../features/books/bookSlice";
import { reset } from "../features/user/userSlice";

const Payment = ({
  order,
  totalAmountToPay,
  setShowPayment,
  referenceNumber,
}) => {
  const lastorder = useSelector((state) => state.books.customerOrders);

  const [transactionRef, setTransactionRef] = useState("");
  const [disablePayButton, setDisablePayButton] = useState(true);
  const [paymentFlow, setPaymentFlow] = useState(0);

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [confirmOrder, setConfirmOrder] = useState(null);
  const {
    orderMessage,

    isLoading,
    isOrderError,
    customerOrders,
  } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getOrder());
  }, []);

  const cancelOrder = () => {
    dispatch(deleteOrder(lastorder?.data?.[0]?.order_id));
    setShowPayment(false);
  };

  useEffect(() => {
    if (
      (!isLoading || !isOrderError) &&
      orderMessage?.data?.order_id === customerOrders?.data?.[0]?.order_id
    ) {
      setDisablePayButton(false);
    } else {
      setDisablePayButton(true);
    }
  }, [isOrderError, isLoading, orderMessage, customerOrders]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.2 } }}
        exit={{ opacity: 0, transition: { duration: 1.2 } }}
        className=" relative  w-[340px]     moby:w-[505px]  py-[10px]    moby:py-[16px]  px-[23px]    moby:px-[40px] h-[510px] bg-neutral-white shadow-[0px 4px 14px rgba(0, 0, 0, 0.15)] rounded-[4px]"
      >
        {isLoading && (
          <div className="absolute     top-[-150px] left-[130px]    moby:top-[-150px] moby:left-[210px]">
            <div className="relative flex items-center justify-center w-20 h-20 bg-primary-50 rounded-full mt-[350px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-20 h-20 bg-neutral-white border-t-[0.80rem] border-[0.80rem] border-primary-10 rounded-full border-box border-t-primary-50"
              ></motion.div>
            </div>
          </div>
        )}
        {paymentFlow === 0 && (
          <div>
            <div className="w-full h-[32px] flex justify-center items-center mt-[9.92px]">
              <h4 className="text-bodyN font-reg text-neutral-30 ">Payment</h4>
            </div>
            <div className="h-[120px] w-full overflow-hidden overflow-y-auto scrollbar-hide">
              <div className="my-[10px] ">
                <div className="min-h-[120px] w-full  flex justify-between   ">
                  <p className="whitespace-nowrap text-[15px]    moby:text-bodyS font-medium text-neutral-30">
                    Order Info:
                  </p>
                  <div className="">
                    {order.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className=" text-[15px]    moby:text-bodyS font-reg text-neutral-60"
                        >
                          <span>{item.quantity}</span> x {item.title}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center my-[5px]">
              <span className=" text-[15px]   moby:text-bodyS    text-neutral-30">
                Total Amount to Pay
              </span>
              <span className="   text-[15px]    moby:text-bodyS font-medium text-primary-50">
                N{totalAmountToPay.toLocaleString("en-US")}
              </span>
            </div>
            <div className="flex justify-between items-center mt-[10px]">
              <p className="  text-[15px]    moby:text-bodyS    text-neutral-30">
                Payment Method:
              </p>
              <div
                className="w-[120px] h-[70px] bg-[linear-gradient(186.31deg,#F67A6A_16.82%,#F89386_85.91%)] 
                   flex flex-col justify-between p-[6px]  rounded-[4px]"
              >
                {" "}
                <div>
                  <p className="text-[10px] text-neutral-white">
                    {" "}
                    {user?.data?.firstname} {user?.data?.lastname}
                  </p>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-[8px] text-neutral-white">
                    **** **** 5758
                  </p>
                  <div className="flex flex-col w-[47.78px] items-end">
                    <span>
                      {" "}
                      <img
                        className="w-[15px]"
                        src={masterCardLogo}
                        alt="Card Logo"
                      />
                    </span>{" "}
                    <p className="text-[8px] text-neutral-white">08/22</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full h-[24px] justify-end mt-[10px] px-[10px]">
              {" "}
              <p className="cursor-pointer text-bodyS text-neutral-30">
                Change
              </p>
            </div>
            <a
              href={orderMessage?.data?.checkout_url}
              style={{
                backgroundColor: disablePayButton ? "#FFA599" : "#f45c45",
              }}
              className={
                disablePayButton
                  ? "w-full h-[65px] flex items-center justify-center cursor-pointer mt-[20px] rounded-[4px] bg-primary-50 text-neutral-white  text-bodyN   moby:text-bodyL font-medium pointer-events-none"
                  : "w-full h-[65px] flex items-center justify-center cursor-pointer mt-[20px] rounded-[4px] bg-primary-50 text-neutral-white text-bodyN   moby:text-bodyL  font-medium"
              }
            >
              Pay with PayStack
            </a>

            <button
              onClick={cancelOrder}
              className="w-full h-[65px] mt-[20px] rounded-[4px] text-primary-50 bg-neutral-white   border-2 border-primary-50 text-bodyN   moby:text-bodyL  font-medium"
            >
              Cancel
            </button>
          </div>
        )}

        {/* {paymentFlow === 1 && (
          <div className="w-full">
            <div className="h-[380px] w-full flex flex-col justify-center items-center gap-[60px]">
              <h3 className="text-primary-50 text-h3">Afrive Books WebStore</h3>
              <span className="text-[60px] text-primary-50">
                <BsBagCheckFill />
              </span>
              <p className="text-bodyN text-neutral-40 leading-7">
                Your order has been processed and your transaction reference is{" "}
                <span className="text-primary-60">{transactionRef}</span>
              </p>
              <p className="text-primary-60 text-bodyL">
                Thank you for your purchase!
              </p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="w-full h-[65px] mt-[20px] rounded-[4px] bg-primary-50 text-neutral-white text-bodyL font-medium"
            >
              Return to Home
            </button>
          </div>
        )} */}
      </motion.div>
    </AnimatePresence>
  );
};

export default Payment;
