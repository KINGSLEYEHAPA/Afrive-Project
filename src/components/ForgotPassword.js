import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [user, setUser] = useState();
  console.log(user);
  const recoverPassword = (e) => {
    e.preventDefault();
    setUser({
      email: email,
    });

    setEmail("");
  };

  return (
    <div className="w-screen max-w-[1440px]  mx-auto mt-[100px] h-[1024px] flex">
      <div className="w-[553px] h-[1024px] bg-primary-40 flex justify-center items-center">
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
                className=" outline-none w-full h-[56px] mt-[12px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
              />
            </div>

            <div className="w-full mt-[39px]">
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
      </div>
    </div>
  );
};

export default ForgotPassword;
