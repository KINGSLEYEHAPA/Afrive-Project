import { useEffect, useState } from "react";
import masterCardLogo from "../assets/mastercard2.webp";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { BsBagCheckFill } from "react-icons/bs";
import uuid from "uuid-random";
import {
  bookReset,
  clearBuyNShoppingBag,
  clearShoppingBag,
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
  const publicKey = process.env.PAYSTACK_PUBLIC_KEY;
  const [transactionRef, setTransactionRef] = useState("");
  const [paymentFlow, setPaymentFlow] = useState(0);
  const [error, setError] = useState("");
  const amount = 450000; // Remember, set in kobo!
  const [email, setEmail] = useState("kessity09@gmail.com");
  const [name, setName] = useState("Kingsley Ehapa");
  const [phone, setPhone] = useState("080");
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const randomNumber = Math.random() * 1000000 + uuid();
  const dispatch = useDispatch();
  const [confirmOrder, setConfirmOrder] = useState("");
  const { ordermessage, orderSuccess, isLoading, paymentLink } = useSelector(
    (state) => state.books
  );

  const orderConfirm = lastorder?.data?.find((item) => {
    return (
      item.total_order_amount === totalAmountToPay &&
      item.book.length === order.book.length
    );
  });

  console.log(paymentLink, orderConfirm, totalAmountToPay, order.book.length);

  useEffect(() => {
    setConfirmOrder(orderConfirm);
    if (confirmOrder !== "") {
      dispatch(
        pay({
          orderId: lastorder?.[0]?.order_id,
          payData: {
            email: user?.data?.email,
            amount: lastorder?.data?.[0]?.total_order_amount,
          },
        })
      );
    }
  }, [orderConfirm]);

  // const componentProps = {
  //   email,
  //   amount,
  //   channels: ["card"],
  //   metadata: {
  //     name,
  //     phone,
  //   },
  //   publicKey,
  //   text: "Pay with PayStack",
  //   onSuccess: (transaction) => setPaymentFlow(1),
  //   onClose: () => setPaymentFlow(0),
  //   // onError: (transaction) => setError(transaction.error),
  // };

  // const today = new Date();
  // const deliverydate = new Date();
  // deliverydate.setDate(today.getDate() + 2);

  // const bookAndQuantity = [];

  // order?.map((item) => {
  //   bookAndQuantity.push({
  //     bookName: item.title,
  //     quantity: item.quantity,
  //     totalAmount: item.totalAmount,
  //     format: item.eBook.status ? item.eBook.format[0] : "Hard Copy",
  //   });
  //   return null;
  // });

  // const finalOrder = {
  //   txn_ref: randomNumber,
  //   book: bookAndQuantity,
  //   date: new Date(),
  //   total_order_amount: totalAmountToPay,
  //   status: "Processing for Delivery",
  //   estimated_delivery_date: deliverydate,
  //   currency: "NGN",
  // };
  // console.log(finalOrder);
  // const processOrder = () => {
  //   setTransactionRef(randomNumber);
  //   dispatch(bookReset());
  //   dispatch(sendOrder(finalOrder));
  //   if (orderSuccess) {
  //     setTimeout(() => {
  //       setPaymentFlow(1);
  //       dispatch(clearBuyNShoppingBag());
  //       dispatch(clearShoppingBag());
  //     }, 3000);
  //   }
  // };

  // useEffect(() => {
  //   if (orderSuccess) {
  //     setTimeout(() => {
  //       setPaymentFlow(1);
  //     }, 1000);
  //   }
  // }, [orderSuccess]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.2 } }}
        exit={{ opacity: 0, transition: { duration: 1.2 } }}
        className=" relative w-[505px] py-[16px] px-[40px] h-[510px] bg-neutral-white shadow-[0px 4px 14px rgba(0, 0, 0, 0.15)] rounded-[4px]"
      >
        {isLoading && (
          <div className="absolute top-[-150px] left-[210px]">
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
                  <p className="whitespace-nowrap text-bodyS font-medium text-neutral-30">
                    Order Info:
                  </p>
                  <div className="">
                    {order.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className="text-bodyS font-reg text-neutral-60"
                        >
                          <span>{item.quantity}</span> x {item.title}
                        </p>
                      );
                    })}

                    {/* <p className="text-bodyS font-reg text-neutral-60">
                    <span>3</span> x Things Fall Apart
                  </p>
                  <p className="text-bodyS font-reg text-neutral-60">
                    <span>3</span> x Things Fall Apart
                  </p>
                  <p className="text-bodyS font-reg text-neutral-60">
                    <span>3</span> x Things Fall Apart
                  </p>
                  <p className="text-bodyS font-reg text-neutral-60">
                    <span>3</span> x Things Fall Apart
                  </p>
                  <p className="text-bodyS font-reg text-neutral-60">
                    <span>3</span> x Things Fall Apart
                  </p>
                  <p className="text-bodyS font-reg text-neutral-60">
                    <span>3</span> x Things Fall Apart
                  </p>
                  <p className="text-bodyS font-reg text-neutral-60">
                    <span>3</span> x Things Fall Apart
                  </p>
                  <p className="text-bodyS font-reg text-neutral-60">
                    <span>3</span> x Things Fall Apart
                  </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center my-[5px]">
              <span className="text-neutral-30">Total Amount to Pay</span>
              <span className="font-medium text-primary-50">
                N{totalAmountToPay.toLocaleString("en-US")}
              </span>
            </div>
            <div className="flex justify-between items-center mt-[10px]">
              <p className="text-neutral-30">Payment Method:</p>
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
            <button
              // onClick={() => processOrder()}
              className="w-full h-[65px] mt-[20px] rounded-[4px] bg-primary-50 text-neutral-white text-bodyL font-medium"
            >
              Pay
            </button>
            {/* <PaystackButton
            className="w-full h-[65px] mt-[20px] rounded-[4px] bg-primary-50 text-neutral-white text-bodyL font-medium"
            {...componentProps}
          /> */}
            <button
              onClick={() => setShowPayment(false)}
              className="w-full h-[65px] mt-[20px] rounded-[4px] text-primary-50 bg-neutral-white   border-2 border-primary-50 text-bodyL font-medium"
            >
              Cancel
            </button>
          </div>
        )}
        {paymentFlow === 1 && (
          <div className="">
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
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Payment;
