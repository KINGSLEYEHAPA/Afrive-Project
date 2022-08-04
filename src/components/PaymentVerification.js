import { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { ImWarning } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  clearPaymentState,
  clearUserPreference,
  verifyPay,
} from "../features/books/bookSlice";
import Loading from "./Loading";

const PaymentVerification = () => {
  const [payState, setPayState] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { isPaymentLoading, isPaymentSuccessfull, isError, paymentVerified } =
    useSelector((state) => state.books);

  const [searchParams] = useSearchParams();
  const verifyReference = searchParams.get("reference");
  useEffect(() => {
    dispatch(clearPaymentState());
    dispatch(verifyPay(verifyReference));
  }, []);

  useEffect(() => {
    if (!isPaymentLoading && isPaymentSuccessfull && !isError) {
      setTimeout(() => {
        setPayState(1);
        dispatch(clearUserPreference());
      }, 3000);
    } else if (!isPaymentLoading && !isPaymentSuccessfull && isError) {
      setTimeout(() => {
        setPayState(2);
        dispatch(clearUserPreference());
      }, 3000);
    }
  }, [isPaymentSuccessfull, isPaymentLoading, dispatch, isError]);

  console.log(location.search);
  return (
    <div className="  w-[340px]     moby:w-[505px]  py-[10px]    moby:py-[16px]  px-[23px]    moby:px-[40px] h-[510px] bg-neutral-white shadow-[0px 4px 14px rgba(0, 0, 0, 0.15)] rounded-[4px]">
      <AnimatePresence exitBeforeEnter>
        {payState === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            className="w-full h-full flex items-center justify-center flex-col"
          >
            <h1 className="text-h2 text-primary-50">Afrive Bookstore </h1>
            <h2 className="text-neutral-40  whitespace-nowrap   text-bodyS   moby:text-bodyL mt-[25px]">
              {" "}
              Payment initialised.....Verifying payment
            </h2>
            <div className="mt-[-200px]">
              {" "}
              <Loading />
            </div>
          </motion.div>
        )}
        {payState === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            className="  w-full  bg-neutral-white p-[10px]"
          >
            <div className=" h-[360px]   moby:h-[380px] w-full flex flex-col justify-center items-center gap-[15px]">
              <h3 className="text-primary-50  text-bodyL moby:text-h3    whitespace-nowrap">
                Afrive Books WebStore
              </h3>
              <span className=" text-[40px]   moby:text-[60px] text-primary-50">
                <BsBagCheckFill />
              </span>
              <h2 className="  text-bodyN  moby:text-h4 font-medium text-primary-50">
                Payment Verified
              </h2>
              <p className=" text-bodyS  moby:text-bodyN text-neutral-40 leading-7">
                Your order has been processed and your transaction reference is{" "}
                <span className="text-primary-60">
                  {" "}
                  {paymentVerified?.data?.txn_ref}.{" "}
                </span>
                <span className="text-primary-60 text-bodyS  moby:text-bodyN ">
                  Thank you for your purchase!
                </span>
              </p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="w-full h-[48px]     moby:h-[65px] mt-[20px] rounded-[4px] bg-primary-50 text-neutral-white text-bodyN   moby:text-bodyL font-medium"
            >
              Return to Home
            </button>
          </motion.div>
        )}
        {payState === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            className="  w-full  bg-neutral-white p-[10px]"
          >
            <div className=" h-[360px]   moby:h-[380px] w-full flex flex-col justify-center items-center gap-[15px]">
              <h3 className="text-primary-50  text-bodyL moby:text-h3    whitespace-nowrap">
                Afrive Books WebStore
              </h3>
              <span className=" text-[40px]   moby:text-[60px] text-primary-50">
                <ImWarning />
              </span>
              <h2 className="  text-bodyN  moby:text-h4 font-medium text-primary-50">
                Payment not Verified
              </h2>
              <p className=" text-bodyS  moby:text-bodyN text-neutral-40 leading-7">
                You can see details of the failed transaction in the orders page
              </p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="w-full h-[48px]     moby:h-[65px] mt-[20px] rounded-[4px] bg-primary-50 text-neutral-white text-bodyN   moby:text-bodyL font-medium"
            >
              Return to Home
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PaymentVerification;
