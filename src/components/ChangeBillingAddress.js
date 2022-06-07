import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ChangeBillingAddress = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen max-w-[1440px]  mx-auto mt-[100px] ">
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
        <h4 className="text-h4 font-reg text-neutral-30 ">Billing Address</h4>
      </div>
      <div className="w-full  h-[1041px] mt-[40px] flex justify-center pb-[101px] h-[1118px]">
        <div className="w-[538px] h-full  space-y-[24px] ">
          <div className="w-full h-[97px]">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className=" outline-none w-full h-[57px] mt-[7.62px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
            />
          </div>
          <div className="w-full h-[97px]">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="    outline-none w-full h-[57px] mt-[7.62px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
            />
          </div>
          <div className="w-full h-[97px]">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="   outline-none w-full h-[57px] mt-[7.62px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
            />
          </div>
          <div className="w-full h-[97px]">
            <label>State</label>
            <input
              type="text"
              name="state"
              className="   outline-none w-full h-[57px] mt-[7.62px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
            />
          </div>
          <div className="w-full h-[97px]">
            <label>Postal Code</label>
            <input
              type="number"
              name="postalCode"
              className="   outline-none w-full h-[57px] mt-[7.62px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
            />
          </div>
          <div className="w-full h-[97px]">
            <label>House Address</label>
            <input
              type="text"
              name="houseAddress"
              className="   outline-none w-full h-[57px] mt-[7.62px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
            />
          </div>
          <div>
            <p className="font-medium text-neutral-70 text-bodyN mb-[22px]">
              Add Card for Payment
            </p>
            <div className="w-[538px.71] h-[283px]  ">
              <input
                type="number"
                placeholder="Card Number"
                className="   outline-none w-full h-[57px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
              />
              <div className="w-full flex justify-between gap-[14.56px] mt-[20px] mb-[32px]">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="   outline-none w-[253px] h-[57px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
                />
                <input
                  type="number"
                  placeholder="CVV"
                  className="  outline-none w-[253px] h-[57px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
                />
              </div>
              <div className="flex justify-center items-center mt-[84px]">
                <button className="w-[390px] h-[65px] text-h4 medium bg-primary-50 text-neutral-white rounded-[4px]">
                  Save Billing Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeBillingAddress;
