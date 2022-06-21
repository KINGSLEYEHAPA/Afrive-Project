import { useState, useEffect } from "react";

import { Link, Outlet } from "react-router-dom";
import AnimatePages from "./AnimatePages";
import bgId from "../assets/mesh1.jpg";
import SmallFormInput from "./SmallFormInput";
import FormInput from "./FormInput";
import SmallLoader from "./SmallLoader";
import { register, reset } from "../features/user/userSlice";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUserState }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    user,
    isLoading,
    isLoadingGoogle,
    google,
    isError,
    errorMessage,
    isGoogleError,
  } = useSelector((state) => state.user);

  const [loginValues, setLoginValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const onChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "",
      errorMessage: "It should be atleast one character",
      label: "First Name",

      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "",
      errorMessage: "It should be atleast one character",
      label: "Last Name",

      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "",
      errorMessage: "it should be atleast one letter and one number",
      pattern: "([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*",
      label: "Username",
      required: true,
    },

    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "",
      errorMessage: "It should be a valid email address",
      label: "Your Email Address",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "",
      errorMessage:
        "Minimum eight characters, at least one letter and one number",
      label: "Your Password",
      pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
      required: true,
    },
    {
      id: 6,
      name: "password_confirmation",
      type: "password",
      placeholder: "",
      errorMessage: "Passwords don't match",
      label: "Your Password",
      pattern: loginValues.password,
      required: true,
    },
  ];

  console.log(google);
  console.log(user);

  const handleSignUp = (e) => {
    e.preventDefault();

    dispatch(register(loginValues));
    setLoginValues({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  };

  return (
    <AnimatePages>
      <div className="w-screen   mx-auto  h-[1074px] flex">
        <div
          className="w-[553px] h-[1074px] flex justify-center items-center"
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
        <div className="w-[887px] h-[1074px] pr-[181px] pl-[165px] pt-[34px]">
          <div className="h-[839px] w-[551px] ">
            <h2 className="font-medium text-h2 text-primary-50 ">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="w-full flex gap-[23px] mt-[10px]">
                {inputs.slice(0, 2).map((input) => (
                  <SmallFormInput
                    key={input.id}
                    {...input}
                    value={loginValues[input.name]}
                    onChange={onChange}
                  />
                ))}
              </div>
              {inputs.slice(2, 6).map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={loginValues[input.name]}
                  onChange={onChange}
                  fTyp="not"
                />
              ))}

              <div className="w-full mt-[42.92px] space-y-[16px] relative">
                <div className="absolute top-[-91px] left-[276px] z-20">
                  {isLoadingGoogle && <SmallLoader loaderColor={"secondary"} />}
                </div>
                <div className="absolute top-[-180px] left-[276px] z-10">
                  {isLoading && <SmallLoader loaderColor={"primary"} />}
                </div>
                {(isError || isGoogleError) && (
                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{
                      opacity: 1,
                      x: [-30, 30, -30, 30 - 30, 30, 0],
                      transition: { duration: 0.5 },
                    }}
                    className=" rounded-[4px] absolute top-[-50px] text-neutral-white bg-primary-50 w-full h-[40px] flex justify-center items-center"
                  >
                    {errorMessage}
                  </motion.div>
                )}
                <Outlet />

                <button
                  type="submit"
                  className="w-full h-[56px] bg-primary-50 text-neutral-white rounded-[4px] text-bodyN font-reg"
                >
                  {!isLoading && "Sign Up"}
                </button>
                <div className=" flex justify-center items-center w-full h-[56px] border border-primary-50 text-primary-50 rounded-[4px] text-bodyN font-reg">
                  {!isLoadingGoogle && (
                    <a className="" target="popup" href={google}>
                      Continue with Google
                    </a>
                  )}
                </div>
              </div>
              <p className="text-center mt-[66px] text-bodyN text-neutral-black">
                Already have an Account?{" "}
                <span
                  onClick={() => setUserState(true)}
                  className="cursor-pointer text-primary-50"
                >
                  Sign in
                </span>
              </p>
              <p className="text-center mt-[28px] text-primary-50">
                Are you an Author? Submit your work to us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </AnimatePages>
  );
};

export default Signup;
