import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatePages from "./AnimatePages";
import bgId from "../assets/mesh1.jpg";
import SmallLoader from "./SmallLoader";
import { useSelector, useDispatch } from "react-redux";
import { forgotPassword, reset } from "../features/user/userSlice";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { user, isLoading, isError, errorMessage, isSuccess } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const [recoverLink, setRecoverLink] = useState(false);
  console.log(user);
  const recoverPassword = (e) => {
    e.preventDefault();

    dispatch(forgotPassword({ email: email }));

    setEmail("");
  };
  useEffect(() => {
    if (isSuccess) {
      setRecoverLink(true);
      dispatch(reset());
    }
  }, [isSuccess]);
  return (
    <AnimatePages>
      <div className="w-screen tab:w-full  max-w-[1440px]  mx-auto mt-[88px] h-[1024px] flex item-center tab:justify-start justify-center  ">
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

        <div className="tab:w-[745px]     pt-[53.30px]   lap:w-[887px] h-[1024px]  tab:px-[97px]  lap:pr-[181px] lap:pl-[165px]  tab:pt-[389.5px] pb-[291.41px]">
          <div className="flex justify-center flex-col items-center tab:block ">
            <img
              className=" tab:hidden   w-[30px] h-[40px] mb-[52.01px]"
              src={logo}
              alt="Logo"
            />
          </div>
          {!recoverLink && (
            <div className="h-[839px] w-[551px] ">
              <h2 className=" text-h4  lap:text-h3 font-reg text-primary-50 ">
                Forgotten password? We’ve got you covered.
              </h2>
              <form onSubmit={recoverPassword}>
                <div className="w-full h-[86px] mt-[32px]">
                  <label className="text-bodyS text-neutral-70">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    required
                    className=" outline-none w-full h-[56px] mt-[12px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
                  />
                </div>

                <div className="w-full mt-[40px] relative">
                  {isError && (
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      animate={{
                        opacity: 1,
                        x: [-30, 30, -30, 30 - 30, 30, 0],
                        transition: { duration: 0.5 },
                      }}
                      className=" rounded-[4px] absolute top-[-37px] text-neutral-white bg-primary-50 w-full h-[40px] flex justify-center items-center truncate px-[10px]"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                  <div className="absolute top-[-177px] lap:top-[-180px] left-[276px] z-20">
                    {isLoading && <SmallLoader loaderColor={"primary"} />}
                  </div>
                  <button
                    type="submit"
                    className="w-full h-[56px] bg-primary-50 text-neutral-white rounded-[4px] text-bodyN font-reg mt-[10px]"
                  >
                    {!isLoading && "  Send Recovery Link"}
                  </button>
                </div>
                <Link to="/api/v1/auth">
                  <p className="text-center mt-[74.09px] text-bodyN text-primary-50">
                    Back to Sign In
                  </p>
                </Link>
              </form>
            </div>
          )}
          {recoverLink && (
            <div className="h-[839px] w-[551px] ">
              <h2 className="text-[20px] leading-[34px] lap:text-h3  font-reg text-primary-50 ">
                We’ve sent a recovery link to your email, please open the link
                to reset password.
              </h2>
              <div className="w-full mt-[39px]">
                <button
                  onClick={() => setRecoverLink(false)}
                  className="w-full h-[56px] bg-primary-50 text-neutral-white rounded-[4px] text-bodyN font-reg"
                >
                  {!isLoading && "  Resend Recovery Link"}
                </button>
                <Link to="/api/v1/auth" onClick={() => setRecoverLink(false)}>
                  <p className="text-center mt-[74.09px] text-bodyN text-primary-50">
                    Back to Sign In
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatePages>
  );
};

export default ForgotPassword;
