import { useState } from "react";
import masterCardLogo from "../assets/mastercard2.webp";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const publicKey = "pk_test_04fcf212c4274211c60c4e0680a841dda21aa8d0";
  const [paymentFlow, setPaymentFlow] = useState(0);
  const [error, setError] = useState("");
  const amount = 450000; // Remember, set in kobo!
  const [email, setEmail] = useState("kessity09@gmail.com");
  const [name, setName] = useState("Kingsley Ehapa");
  const [phone, setPhone] = useState("080");
  const navigate = useNavigate();
  const componentProps = {
    email,
    amount,
    channels: ["card"],
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay with PayStack",
    onSuccess: (transaction) => setPaymentFlow(1),
    onClose: () => setPaymentFlow(0),
    // onError: (transaction) => setError(transaction.error),
  };

  return (
    <div className="w-[505px] py-[16px] px-[40px] h-[510px] bg-neutral-white shadow-[0px 4px 14px rgba(0, 0, 0, 0.15)] rounded-[4px]">
      {paymentFlow === 0 && (
        <div>
          <div className="w-full h-[32px] flex justify-center items-center mt-[9.92px]">
            <h4 className="text-bodyN font-reg text-neutral-30 ">Payment</h4>
          </div>
          <div className="h-[120px] w-full overflow-hidden overflow-y-auto scrollbar-hide">
            <div className="my-[10px] ">
              <div className="min-h-[120px] w-full  flex justify-between   ">
                <p className="whitespace-nowrap mt-[10px] text-bodyS font-medium text-neutral-30">
                  Order Info:
                </p>
                <div className="">
                  <p className="text-bodyS font-reg text-neutral-60">
                    <span>1</span> x Things Fall Apart
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
                  </p>
                  <p className="text-bodyS font-reg text-neutral-60">
                    <span>3</span> x Things Fall Apart
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center my-[5px]">
            <span className="text-neutral-30">Total Amount to Pay</span>
            <span className="text-primary-50 font-medium">N25,000</span>
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
                  Kingsley Ehapa
                </p>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-[8px] text-neutral-white">**** **** 5758</p>
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
            <p className="text-bodyS text-neutral-30 cursor-pointer">Change</p>
          </div>
          {/* <button className="w-full h-[65px] mt-[20px] rounded-[4px] bg-primary-50 text-neutral-white text-bodyL font-medium">
        Pay with Paystack
      </button> */}
          <PaystackButton
            className="w-full h-[65px] mt-[20px] rounded-[4px] bg-primary-50 text-neutral-white text-bodyL font-medium"
            {...componentProps}
          />
          <button className="w-full h-[65px] mt-[20px] rounded-[4px] text-primary-50 bg-neutral-white   border-2 border-primary-50 text-bodyL font-medium">
            Cancel
          </button>
        </div>
      )}
      {paymentFlow === 1 && (
        <div>
          <div className="h-[380px] w-full flex flex-col justify-center items-center gap-[40px]">
            <p className="text-bodyN">
              Your payment is successful and your transaction ref is
              ZDJ214545452514
            </p>
            <p>Your book order is been processed</p>
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

export default Payment;