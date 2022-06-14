import { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AnimatePages from "./AnimatePages";
import FormInput from "./FormInput";
import SmallFormInput from "./SmallFormInput";

const ChangeBillingAddress = () => {
  const [billingAddressValues, setBillingAddressValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    postalCode: "",
    houseAddress: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const onChange = (e) => {
    setBillingAddressValues({
      ...billingAddressValues,
      [e.target.name]: e.target.value,
    });
  };

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "",
      errorMessage: "",
      label: "First Name",

      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "",
      errorMessage: "",
      label: "Last Name",

      required: true,
    },

    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "",
      errorMessage: "",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "state",
      type: "text",
      placeholder: "",
      errorMessage: "",
      label: "State",

      required: true,
    },
    {
      id: 5,
      name: "postalCode",
      type: "number",
      placeholder: "",
      errorMessage: "",
      label: "Postal Code",

      required: true,
    },
    {
      id: 6,
      name: "houseAdress",
      type: "text",
      placeholder: "",
      errorMessage: "",
      label: "House Address",
      required: true,
    },
    {
      id: 7,
      name: "cardNumber",
      type: "number",
      placeholder: "Card Number",
      errorMessage: "",
      label: " Add Card for Payment",
      required: true,
    },
    {
      id: 8,
      name: "expiryDate",
      type: "text",
      placeholder: "MM/YY",
      errorMessage: "",
      label: "",
      required: true,
    },
    {
      id: 9,
      name: "cvv",
      type: "text",
      placeholder: "CVV",
      errorMessage: "",
      label: "",
      required: true,
    },
  ];

  console.log(billingAddressValues);
  const SaveBillingInfo = (e) => {
    e.preventDefault();

    setBillingAddressValues({
      firstName: "",
      lastName: "",
      email: "",
      state: "",
      postalCode: "",
      houseAddress: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
  };

  const navigate = useNavigate();
  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[88px] pt-[32px] ">
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
        <div className="w-full h-[32px] flex justify-center items-center">
          <h4 className="text-h4 font-reg text-neutral-30 ">Billing Address</h4>
        </div>
        <div className="w-full   mt-[40px] flex justify-center pb-[101px] h-[1118px]">
          <form className="w-[538px] h-full  space-y-[24px] ">
            {inputs.slice(0, 6).map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={billingAddressValues[input.name]}
                onChange={onChange}
                formtyp="billing"
              />
            ))}

            <div>
              <div className="w-[538px.71] h-[283px] mt-[-20px]  ">
                {inputs.slice(6, 7).map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={billingAddressValues[input.name]}
                    onChange={onChange}
                    formtyp="billing"
                  />
                ))}

                <div className="w-full flex justify-between gap-[14.56px] mt-[-25px] mb-[32px]">
                  {inputs.slice(7, 9).map((input) => (
                    <SmallFormInput
                      key={input.id}
                      {...input}
                      value={billingAddressValues[input.name]}
                      onChange={onChange}
                    />
                  ))}
                </div>
                <div className="flex justify-center items-center mt-[84px]">
                  <button className="w-[390px] h-[65px] text-h4 medium bg-primary-50 text-neutral-white rounded-[4px]">
                    Save Billing Info
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AnimatePages>
  );
};

export default ChangeBillingAddress;
