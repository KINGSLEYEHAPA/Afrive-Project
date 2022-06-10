import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineInformationCircle } from "react-icons/hi";
import AnimatePages from "./AnimatePages";
import bgId from "../assets/mesh1.jpg";
import FormInput from "./FormInput";

const ResetPassword = () => {
  const [resetValues, setResetValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const onChange = (e) => {
    setResetValues({ ...resetValues, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "newPassword",
      type: "password",
      placeholder: "",
      errorMessage:
        "Minimum eight characters, at least one letter and one number",
      label: "New Password",
      pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
      required: true,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: resetValues.newPassword,
      required: true,
    },
  ];

  const navigate = useNavigate();

  const handlePaswwordReset = (e) => {
    e.preventDefault();

    setResetValues({
      newPassword: "",
      confirmPassword: "",
    });

    navigate("/sign-in");
  };

  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[100px] h-[1024px] flex">
        <div
          className="w-[553px] h-[1024px]  flex justify-center items-center"
          style={{ background: `url(${bgId})`, backgroundSize: "cover" }}
        >
          <div className="h-[133px] w-[256px]">
            <h1 className=" font-[542] leading-[98px] text-[91.24px] drop-shadow-[0px 2.60697px 10.4279px rgba(0, 0, 0, 0.15)] text-neutral-white">
              Àfrive
            </h1>
            <p className="text-bodyL text-neutral-white font-reg mt-[12px]">
              Redefining African Literature.
            </p>
          </div>
        </div>
        <div className="w-[887px] h-[1024px] pr-[181px] pl-[165px] pt-[164.50px] pb-[50.41px]">
          <div className="h-[839px] w-[551px] ">
            <h2 className="text-h3 font-reg text-primary-50 mt-[147px]">
              Enter your New Password
            </h2>
            <form onSubmit={handlePaswwordReset}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={resetValues[input.name]}
                  onChange={onChange}
                />
              ))}
              <div className="w-full mt-[42.92px]">
                <button
                  type="submit"
                  className="w-full h-[56px] bg-primary-50 text-neutral-white rounded-[4px] text-bodyN font-reg"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatePages>
  );
};

export default ResetPassword;
