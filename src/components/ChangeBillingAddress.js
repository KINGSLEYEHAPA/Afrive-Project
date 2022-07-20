import { useEffect, useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AnimatePages from "./AnimatePages";
import FormInput from "./FormInput";
import SmallFormInput from "./SmallFormInput";

import { addUserInfo } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import ProfilePage from "./ProfilePage";

const ChangeBillingAddress = () => {
  const [notification, setNotification] = useState(false);
  const [billingPage, setBillingPage] = useState("page");
  const dispatch = useDispatch();
  const [searchWidth, setSearchWidth] = useState({ width: window.innerWidth });
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

  useEffect(() => {
    function handleResize() {
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      setSearchWidth({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);
  }, []);

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
      name: "houseAddress",
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

  const saveBillingInfo = (e) => {
    e.preventDefault();
    dispatch(addUserInfo(billingAddressValues));

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

    setBillingPage("page");

    setNotification(true);

    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  const navigate = useNavigate();
  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[88px] pt-[32px] ">
        <div
          onClick={() => navigate(-1)}
          className="w-full h-16px] mtab:h-[96px] flex justify-start items-center pl-[22px] mtab:pl-[73.48px] tab:pl-[90px] lap:pl-[128px] desk:pl-[105px] gap-0  "
        >
          <span className="text-[25px]">
            <MdChevronLeft />
          </span>
          <p className=" text-bodyS mtab:text-bodyL  tab:text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="w-full  h-[24px]   tab:h-[32px] flex justify-center items-center mt-[9.92px]">
          <h4 className=" text-bodyN  mtab:text-bodyL  tab:text-h4 font-reg text-neutral-30 ">
            Billing Address
          </h4>
        </div>
        {billingPage === "page" && (
          <ProfilePage
            setBillingPage={setBillingPage}
            currentWidth={searchWidth.width}
          />
        )}
        {billingPage === "largeForm" && (
          <div className="w-full   mt-[40px] flex justify-center pb-[101px] h-[1118px]">
            <form
              onSubmit={saveBillingInfo}
              className="w-[538px] h-full  space-y-[24px] "
            >
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
                <div className="w-[538px.71] h-[283px] mt-[-20px] relative  ">
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
                  {notification && (
                    <div className="absolute text-neutral-white bg-primary-50 rounded-[4px] text-bodyL p-[10px] w-full flex justify-center items-center">
                      Your information has been saved
                    </div>
                  )}
                  <div className="flex justify-center items-center mt-[84px]">
                    <button className="w-[390px] h-[65px] text-h4 medium bg-primary-50 text-neutral-white rounded-[4px]">
                      Save Billing Info
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </AnimatePages>
  );
};

export default ChangeBillingAddress;
