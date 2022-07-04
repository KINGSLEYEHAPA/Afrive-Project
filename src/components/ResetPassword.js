import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { HiOutlineInformationCircle } from "react-icons/hi";
import AnimatePages from "./AnimatePages";
import bgId from "../assets/mesh1.jpg";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import SmallLoader from "./SmallLoader";
import { motion } from "framer-motion";
import ServerMessages from "./ServerMessages";
import { reset, resetPassword } from "../features/user/userSlice";

const ResetPassword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const email = searchParams.get("email");

  email?.replace("%40", "@");

  const [resetValues, setResetValues] = useState({
    password: "",
    password_confirmation: "",
    email: email,
    token: code,
  });
  const onChange = (e) => {
    setResetValues({ ...resetValues, [e.target.name]: e.target.value });
  };

  const { user, isLoading, isError, errorMessage, isSuccess, resetMessage } =
    useSelector((state) => state.user);
  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location.search);
  console.log(code, email);
  console.log(resetValues);

  const inputs = [
    {
      id: 1,
      name: "password",
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
      name: "password_confirmation",
      type: "password",
      placeholder: "",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: resetValues.password_confirmation,
      required: true,
    },
  ];

  const navigate = useNavigate();

  const handlePaswwordReset = (e) => {
    e.preventDefault();
    setResetValues({ ...resetValues, email: email, token: code });

    dispatch(resetPassword(resetValues));

    setResetValues({
      password: "",
      password_confirmation: "",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate("/api/v1/auth");
      }
    }
  }, [isSuccess]);

  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[88px] h-[1024px] flex">
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
              <div className="w-full mt-[42.92px] relative">
                <div className="absolute top-[-181px] left-[276px] z-10">
                  {isLoading && <SmallLoader loaderColor={"primary"} />}
                </div>
                {isError && (
                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{
                      opacity: 1,
                      x: [-30, 30, -30, 30 - 30, 30, 0],
                      transition: { duration: 0.5 },
                    }}
                    className=" rounded-[4px] absolute top-[-50px] text-neutral-white bg-primary-50 w-full h-[40px] flex justify-center items-center truncate px-[10px]"
                  >
                    {errorMessage}
                  </motion.div>
                )}
                {isSuccess && !isError && (
                  <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{
                      opacity: 1,
                      x: [-30, 30, -30, 30 - 30, 30, 0],
                      transition: { duration: 0.5 },
                    }}
                    className=" rounded-[4px] absolute top-[-50px] text-neutral-white bg-primary-50 w-full h-[40px] flex justify-center items-center truncate px-[10px]"
                  >
                    {resetMessage}
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full h-[56px] bg-primary-50 text-neutral-white rounded-[4px] text-bodyN font-reg"
                >
                  {!isLoading && " Reset Password"}
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
