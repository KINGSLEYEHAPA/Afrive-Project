import { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import masterCardLogo from "../assets/mastercard2.webp";
import { addUserAddress, addUserPayment } from "../features/user/userSlice";
import FormInput from "./FormInput";
import { AnimatePresence, motion } from "framer-motion";

const ProfilePage = ({ setBillingPage, currentWidth }) => {
  const { user, userInfo } = useSelector((state) => state.user);
  const [editForm, setEditForm] = useState(0);
  const [editType, setEditType] = useState(0);
  const dispatch = useDispatch();

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [addressData, setAddressData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    state: "",
    postalCode: "",
    houseAddress: "",
  });

  const onChangeAddress = (e) => {
    setAddressData({
      ...addressData,
      [e.target.name]: e.target.value,
    });
  };
  const onChangePayment = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };
  const mobileProfileInputs = [
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
  ];

  const mobilePaymentInputs = [
    {
      id: 7,
      name: "cardNumber",
      type: "number",
      placeholder: "",
      errorMessage: "",
      label: "Card Number",
      required: true,
    },
    {
      id: 8,
      name: "expiryDate",
      type: "text",
      placeholder: "",
      errorMessage: "",
      label: "Expiry Date",
      required: true,
    },
    {
      id: 9,
      name: "cvv",
      type: "text",
      placeholder: "",
      errorMessage: "",
      label: "CVV",
      required: true,
    },
  ];

  const editProfile = () => {
    if (currentWidth <= 860) {
      setEditForm(1);
      setEditType(0);
    } else {
      setBillingPage("largeForm");
    }
  };
  const editPayment = () => {
    if (currentWidth <= 860) {
      setEditForm(1);
      setEditType(1);
    } else {
      setBillingPage("largeForm");
    }
  };

  const processForm = (e) => {
    e.preventDefault();
    if (editForm === 1 && editType === 0) {
      dispatch(addUserAddress(addressData));
    }
    if (editForm === 1 && editType === 1) {
      dispatch(addUserPayment(paymentData));
    }

    setAddressData({
      firstName: "",
      lastName: "",
      email: "",
      state: "",
      postalCode: "",
      houseAddress: "",
    });

    setPaymentData({ cardNumber: "", expiryDate: "", cvv: "" });
    setEditForm(0);
    setEditType(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      className=" pb-[51px] w-[327px] mobx:w-[431px] mtab:w-[431px]  min-h-[590px] mtab:h-[778.3px] mx-auto mt-[32px] mtab:mt-[40px] font-[450]"
    >
      {(editForm === 0 || (editForm === 1 && editType === 0)) && (
        <div key="2525" className="flex items-start justify-between">
          <p className="text-bodyS mtab:text-[18.46px] mtab:leading-6 text-primary-50">
            Profile
          </p>
          <span
            onClick={() => editProfile()}
            className="w-[15.83px] h-[15.83px] mtab:w-[20.88px] mtab:h-[20.88px] text-primary-50 cursor-pointer"
          >
            <BiPencil />
          </span>
        </div>
      )}
      {(editForm === 0 || (editForm === 1 && editType === 0)) && (
        <hr
          key="2125"
          className=" w-[100%] mx-auto  h-0 border-1 border-primary-20 mt-[15px] mb-[15px]"
        />
      )}

      {editForm === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          key="1158"
        >
          <div className="mt-[18px] mtab:mt-[31.88px]">
            <p className="text-bodyS mtab:text-[18.46px] mtab:leading-6 font-[450]  text-neutral-40">
              Name:
            </p>
            <p className="text-bodyN font-[450] mtab:text-[21.10px] mtab:leading-8 text-neutral-70">
              {userInfo.firstName} {userInfo.lastName}
            </p>
          </div>
          <div className="mt-[18px]  mtab:mt-[31.88px] ">
            <p className="text-bodyS font-[450]  mtab:text-[18.46px] mtab:leading-6  text-neutral-40">
              Email:
            </p>
            <p className="text-bodyN font-[450]  mtab:text-[21.10px] mtab:leading-8 text-neutral-70">
              {userInfo.email}
            </p>
          </div>
          <div className="mt-[18px] mtab:mt-[31.88px]">
            <p className="text-bodyS font-[450] mtab:text-[18.46px] mtab:leading-6  text-neutral-40">
              State:
            </p>
            <p className="text-bodyN font-[450]  mtab:text-[21.10px] mtab:leading-8 text-neutral-70">
              {userInfo.state}
            </p>
          </div>
          <div className="mt-[18px] mtab:mt-[31.88px]">
            <p className="text-bodyS font-[450] mtab:text-[18.46px] mtab:leading-6  text-neutral-40">
              Postal Code:
            </p>
            <p className="text-bodyN font-[450] mtab:text-[21.10px] mtab:leading-8  text-neutral-70">
              {userInfo.postalCode}
            </p>
          </div>
          <div className="mt-[18px] mtab:mt-[31.88px]">
            <p className="text-bodyS font-[450] mtab:text-[18.46px] mtab:leading-6  text-neutral-40">
              House Address:
            </p>
            <p className="text-bodyN font-[450] mtab:text-[21.10px] mtab:leading-8  text-neutral-70">
              {userInfo.houseAddress}
            </p>
          </div>
        </motion.div>
      )}
      {editForm === 1 && editType === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          key="315"
        >
          <form onSubmit={processForm}>
            {mobileProfileInputs.slice(0, 6).map((input) => (
              <div key={input.id + 15}>
                <FormInput
                  {...input}
                  value={addressData[input.name]}
                  onChange={onChangeAddress}
                  fTyp="mobile"
                  label={input.label}
                />
              </div>
            ))}
            <button className="w-full h-[46px]  mt-[40px] rounded-[4px] bg-primary-50 text-neutral-white text-sub   font-[450]">
              Save Changes
            </button>
            <button
              onClick={() => {
                setEditForm(0);
                setEditType(0);
              }}
              className="w-full  h-[46px]    mt-[24px] rounded-[4px] text-primary-50 bg-neutral-white   border-2 border-primary-50 text-sub     font-[450]"
            >
              Cancel
            </button>
          </form>
        </motion.div>
      )}

      {(editForm === 0 || editType === 1) && (
        <div
          key="400"
          className="flex items-start justify-between mt-[48px]   mtab:mt-[63.32px]"
        >
          <p className="text-bodyS mtab:text-[18.46px] mtab:leading-6 text-primary-50">
            Payment
          </p>
          <span
            onClick={() => editPayment()}
            className="w-[15.83px] h-[15.83px]  mtab:w-[20.88px] text-primary-50 cursor-pointer"
          >
            <BiPencil />
          </span>
        </div>
      )}
      {(editForm === 0 || editType === 1) && (
        <hr
          key="512"
          className=" w-[100%] mx-auto  h-0 border-1 border-primary-20 mt-[15px] mb-[15px]"
        />
      )}
      {editForm === 1 && editType === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.2 } }}
          key="615"
        >
          <form onSubmit={processForm}>
            {mobilePaymentInputs.slice(0, 3).map((input) => (
              <div key={input.id + 100}>
                <FormInput
                  {...input}
                  value={paymentData[input.name]}
                  onChange={onChangePayment}
                  fTyp="mobile"
                  label={input.label}
                />
              </div>
            ))}
            <button className="w-full h-[46px]  mt-[40px] rounded-[4px] bg-primary-50 text-neutral-white text-sub   font-[450]">
              Save Changes
            </button>
            <button
              onClick={() => {
                setEditForm(0);
                setEditType(0);
              }}
              className="w-full  h-[46px]    mt-[24px] rounded-[4px] text-primary-50 bg-neutral-white   border-2 border-primary-50 text-sub     font-[450]"
            >
              Cancel
            </button>
          </form>
        </motion.div>
      )}
      {editForm === 0 && (
        <div
          key="899  "
          className="w-[243px] h-[108px] mtab:w-[320.55px] mtab:h-[142.47px]    bg-[linear-gradient(186.31deg,#F67A6A_16.82%,#F89386_85.91%)] 
                   flex flex-col justify-between p-[18px]  rounded-[4px] mt-[24px]"
        >
          {" "}
          <div>
            <p className="text-sub mtab:text-[15.82px] mtab:leading-[21px] text-neutral-white font-[500]">
              {" "}
              {user?.data?.firstname} {user?.data?.lastname}
            </p>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-bodyS text-neutral-white">**** **** 5758</p>
            <div className="flex flex-col w-[47.78px] items-end">
              <span>
                {" "}
                <img
                  className="w-[15px] mtab:w-[20px]"
                  src={masterCardLogo}
                  alt="Card Logo"
                />
              </span>{" "}
              <p className="text-bodyS text-neutral-white">08/22</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProfilePage;
