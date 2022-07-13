import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import AnimatePages from "./AnimatePages";
import FormInput from "./FormInput";
import bgId from "../assets/mesh1.jpg";
import SmallLoader from "./SmallLoader";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { login, reset } from "../features/user/userSlice";

const SignIn = ({ setUserState }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    user,
    isLoading,
    isLoadingGoogle,
    google,
    isError,
    errorMessage,
    isSuccess,
    isGoogleError,
  } = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(reset());
    }, 4000);
  }, [isError, isGoogleError, isSuccess]);

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "",
      errorMessage: "It should be a valid email address",
      label: "Your Email Address",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "",
      errorMessage:
        "Minimum eight characters, at least one letter and one number:",
      label: "Your Password",
      pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
      required: true,
    },
  ];

  console.log(loginValues);
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(login(loginValues));

    setLoginValues({
      email: "",
      password: "",
    });
  };
  const onChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePages>
      <div className="w-screen tab:w-full  max-w-[1440px]  mx-auto  h-[1024px] flex justify-center items-center ">
        <div
          className=" hidden tab:block  tab:w-[273px] lap:w-[553px] h-[1024px] tab:pt-[99.54px] lap:pt-0 tab:px-[69px] lap:px-0   lap:flex justify-center items-center"
          style={{ background: `url(${bgId})`, backgroundSize: "cover" }}
        >
          <div className="  tab:w-[140px] tab:h-[54px]   lap:h-[133px]    lap:w-[256px]">
            <h1 className=" font-[542]   tab:text-[49.61px] tab:leading-[53px] lap:leading-[98px] lap:text-[91.24px] drop-shadow-[0px 2.60697px 10.4279px rgba(0, 0, 0, 0.15)] text-neutral-white">
              Àfrive
            </h1>
            <p className=" hidden lap:block    text-bodyL text-neutral-white font-reg mt-[12px]">
              Redefining African Literature.
            </p>
          </div>
        </div>
        <div className=" mx-[23px] moby:mx-0  tab:w-[745px]  pt-[53.30px]   lap:w-[887px] h-[1024px]  tab:px-[97px] tab:pt-[112.59px]   lap:pr-[181px] lap:pl-[165px]  lap:pt-[164.50px] pb-[20.41px]">
          <div className="h-[839px]   w-full moby:w-[551px] ">
            <div className="flex justify-center flex-col items-center tab:block ">
              <img
                className=" tab:hidden   w-[30px] h-[40px] mb-[52.01px]"
                src={logo}
                alt="Logo"
              />
              <h2 className="font-medium  text-h4  tab:text-h3   lap:text-h2 text-primary-50 ">
                Sign In
              </h2>
            </div>
            <form onSubmit={handleSignIn}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={loginValues[input.name]}
                  onChange={onChange}
                />
              ))}

              <div className="w-full h-[18px] flex justify-between  mt-[45.51px]">
                <div className="flex items-center gap-[10px] text-bodyS text-primary-50">
                  <div className="w-[16px] h-[18px] border border-primary-30"></div>

                  <span className="text-[18px] text-sub moby:text-bodyS text-neutral-70 font-reg">
                    Remember Me{" "}
                  </span>
                </div>
                <Link to="/forgot-password">
                  <p className="text-sub moby:text-bodyS text-neutral-70">
                    Forgot Password?
                  </p>
                </Link>
              </div>
              <div className="w-full mt-[42.92px] space-y-[16px] relative">
                <div className="absolute top-[-88px] lap:top-[-91px] left-[180px] moby:left-[276px] z-20">
                  {isLoadingGoogle && <SmallLoader loaderColor={"secondary"} />}
                </div>
                <div className="absolute top-[-177px] lap:top-[-180px] left-[180px] moby:left-[276px] z-10">
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
                    className="  rounded-[4px] absolute top-[-50px] text-neutral-white bg-primary-50 w-full h-[40px] flex justify-center items-center truncate px-[10px]"
                  >
                    {user ? user.message : errorMessage}
                  </motion.div>
                )} */}
                <Outlet />
                <button
                  type="submit"
                  className="w-full h-[56px] bg-primary-50 text-neutral-white rounded-[4px] text-bodyN font-reg"
                >
                  {!isLoading && "Sign In"}
                </button>

                {!isLoadingGoogle && (
                  <a
                    className="w-full h-[56px] flex items-center justify-center cursor-pointer  rounded-[4px] border border-primary-50 text-primary-50 text-bodyN font-reg "
                    target="popup"
                    href={google}
                  >
                    Continue with Google
                  </a>
                )}

                {/* <button className="w-full h-[56px] border border-primary-50 text-primary-50 rounded-[4px] text-bodyN font-reg">
                  {!isLoadingGoogle && "Continue with Google"}
                </button> */}
              </div>
              <p className="text-center  mt-[206px]    lap:mt-[156.09px] text-bodyN text-neutral-black">
                Don't have an Account?
                <span
                  onClick={() => setUserState(false)}
                  className="cursor-pointer text-primary-50"
                >
                  Sign Up
                </span>
              </p>
              <p className="text-center text-sub moby:text-bodyN mt-[65px]  moby:mt-[85px] text-primary-50">
                Are you an Author? Submit your work to us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </AnimatePages>
  );
};

export default SignIn;
