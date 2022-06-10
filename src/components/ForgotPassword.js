import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatePages from "./AnimatePages";
import bgId from "../assets/mesh1.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [user, setUser] = useState();
  const [recoverLink, setRecoverLink] = useState(false);
  console.log(user);
  const recoverPassword = (e) => {
    e.preventDefault();
    setUser({
      email: email,
    });

    setEmail("");
    setRecoverLink(true);
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
        <div className="w-[887px] h-[1024px] pr-[181px] pl-[165px] pt-[389.5px] pb-[291.41px]">
          {!recoverLink && (
            <div className="h-[839px] w-[551px] ">
              <h2 className="text-h3 font-reg text-primary-50 ">
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

                <div className="w-full mt-[40px]">
                  <button
                    type="submit"
                    className="w-full h-[56px] bg-primary-50 text-neutral-white rounded-[4px] text-bodyN font-reg"
                  >
                    Send Recovery Link
                  </button>
                </div>
                <Link to="/sign-in">
                  <p className="text-center mt-[74.09px] text-bodyN text-primary-50">
                    Back to Sign In
                  </p>
                </Link>
              </form>
            </div>
          )}
          {recoverLink && (
            <div className="h-[839px] w-[551px] ">
              <h2 className="text-h3 font-reg text-primary-50 ">
                We’ve sent a recovery link to your email, please open the link
                to reset password.
              </h2>
              <div className="w-full mt-[39px]">
                <button
                  onClick={() => recoverPassword}
                  className="w-full h-[56px] bg-primary-50 text-neutral-white rounded-[4px] text-bodyN font-reg"
                >
                  Resend Recovery Link
                </button>
                <Link to="/sign-in" onClick={() => setRecoverLink(false)}>
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
