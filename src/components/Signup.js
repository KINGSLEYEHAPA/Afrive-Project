import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

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
    isSuccess,
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
      label: "  Confirm Your Password",
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

  useEffect(() => {
    if (isSuccess) {
      navigate("/api/v1/auth");
    }
  }, [isSuccess]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(reset());
    }, 3000);
  }, [isError, isGoogleError, isSuccess]);

  return (
    <AnimatePages>
      <div className="w-screen tab:w-full  max-w-[1440px]  mx-auto  h-[1024px] flex justify-center items-center ">
        <div
          className="hidden tab:block  tab:w-[273px] lap:w-[553px] h-[1024px] tab:pt-[99.54px] lap:pt-0 tab:px-[69px] lap:px-0   lap:flex justify-center items-center"
          style={{ background: `url(${bgId})`, backgroundSize: "cover" }}
        >
          <div className="tab:w-[140px] tab:h-[54px]   lap:h-[133px]    lap:w-[256px]">
            <h1 className=" font-[542]   tab:text-[49.61px] tab:leading-[53px] lap:leading-[98px] lap:text-[91.24px] drop-shadow-[0px 2.60697px 10.4279px rgba(0, 0, 0, 0.15)] text-neutral-white">
              Àfrive
            </h1>
            <p className="hidden lap:block    text-bodyL text-neutral-white font-reg mt-[12px]">
              Redefining African Literature.
            </p>
          </div>
        </div>
        <div className=" mx-[23px] moby:mx-0     tab:w-[745px]  pt-[53.30px]   lap:w-[887px] h-[1024px]  tab:px-[97px] tab:pt-[112.59px]   lap:pr-[181px] lap:pl-[165px]  lap:pt-[164.50px] pb-[20.41px]">
          <div className="h-[839px] w-full moby:w-[551px]  ">
            <div className="flex justify-center flex-col items-center tab:block ">
              <img
                className=" tab:hidden   w-[30px] h-[40px] mb-[52.01px]"
                src={logo}
                alt="Logo"
              />
              <h2 className="font-medium  text-h4  tab:text-h3   lap:text-h2 text-primary-50 ">
                Sign Up
              </h2>
            </div>
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
                <div className="absolute top-[-88px] lap:top-[-91px]  left-[276px] z-20">
                  {isLoadingGoogle && <SmallLoader loaderColor={"secondary"} />}
                </div>
                <div className="absolute top-[-177px] lap:top-[-180px] left-[276px] z-10">
                  {isLoading && <SmallLoader loaderColor={"primary"} />}
                </div>
                {/* {(isError || isGoogleError || user) && (
                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{
                      opacity: 1,
                      x: [-30, 30, -30, 30 - 30, 30, 0],
                      transition: { duration: 0.5 },
                    }}
                    className=" rounded-[4px] absolute top-[-50px] text-neutral-white bg-primary-50 w-full h-[40px] flex justify-center items-center truncate"
                  >
                    {user ? user.message : errorMessage}
                  </motion.div>
                )} */}
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
