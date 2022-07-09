import { useEffect, useState } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { clearUserPreference, verifyPay } from "../features/books/bookSlice";
import Loading from "./Loading";

const PaymentVerification = () => {
  const [payState, setPayState] = useState(0);
  const navigate = useDispatch();
  const location = useLocation();
  const dispatch = useDispatch();

  const { isPaymentLoading, isPaymentSuccessful, isError } = useSelector(
    (state) => state.books
  );

  const [searchParams] = useSearchParams();
  const verifyReference = searchParams.get("reference");
  useEffect(() => {
    dispatch(verifyPay(verifyReference));
  }, []);

  useEffect(() => {
    if (!isPaymentLoading && isPaymentSuccessful && !isError) {
      setTimeout(() => {
        setPayState(1);
        dispatch(clearUserPreference());
      }, 3000);
    }
  }, [isPaymentSuccessful, isPaymentLoading, dispatch, isError]);

  console.log(location.search);
  return (
    <div className="w-[505px]  h-[510px] bg-neutral-white">
      {payState === 0 && (
        <div className="w-full h-full flex items-center justify-center flex-col">
          <h1 className="text-h2 text-primary-50">Afrive Bookstore </h1>
          <h2 className="text-neutral-40 text-bodyL mt-[25px]">
            {" "}
            Payment initialised.....Verifying payment
          </h2>
          <div className="mt-[-200px]">
            {" "}
            <Loading />
          </div>
        </div>
      )}
      {payState === 1 && (
        <div className="bg-neutral-white p-[22px]">
          <div className="h-[380px] w-full flex flex-col justify-center items-center gap-[60px]">
            <h3 className="text-primary-50 text-h3">Afrive Books WebStore</h3>
            <span className="text-[60px] text-primary-50">
              <BsBagCheckFill />
            </span>
            <p className="text-bodyN text-neutral-40 leading-7">
              Your order has been processed and your transaction reference is{" "}
              <span className="text-primary-60">00000000</span>
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
    </div>
  );
};

export default PaymentVerification;
