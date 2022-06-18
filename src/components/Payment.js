import masterCardLogo from "../assets/mastercard2.webp";

const Payment = () => {
  return (
    <div className="w-[505px] py-[16px] px-[40px] h-[510px] bg-neutral-white shadow-[0px 4px 14px rgba(0, 0, 0, 0.15)] rounded-[4px]">
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
            <p className="text-[10px] text-neutral-white"> Kingsley Ehapa</p>
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
      <button className="w-full h-[65px] mt-[20px] rounded-[4px] bg-primary-50 text-neutral-white text-bodyL font-medium">
        Pay with Paystack
      </button>
      <button className="w-full h-[65px] mt-[20px] rounded-[4px] text-primary-50 bg-neutral-white   border-2 border-primary-50 text-bodyL font-medium">
        Cancel
      </button>
      {false && <div></div>}
    </div>
  );
};

export default Payment;
