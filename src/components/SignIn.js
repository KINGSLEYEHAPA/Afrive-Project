import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatePages from "./AnimatePages";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  console.log(user);
  const handleSignIn = (e) => {
    e.preventDefault();
    setUser({
      email: email,
      password: password,
    });

    setPassword("");
    setEmail("");
  };

  return (
    <AnimatePages>
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
        <div className="w-[887px] h-[1024px] pr-[181px] pl-[165px] pt-[164.50px] pb-[50.41px]">
          <div className="h-[839px] w-[551px] ">
            <h2 className="text-h2 font-medium text-primary-50 ">Sign In</h2>
            <form onSubmit={handleSignIn}>
              <div className="w-full h-[86px] mt-[48px]">
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
              <div className="w-full h-[86px] mt-[32px]">
                <label className="text-bodyS text-neutral-70">
                  Your Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className=" outline-none w-full h-[56px] mt-[12px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
                />
              </div>
              <div className="w-full h-[18px] flex justify-between  mt-[10.51px]">
                <div className="flex items-center gap-[10px] text-bodyS text-primary-50">
                  <div className="w-[16px] h-[18px] border border-primary-30"></div>

                  <span className="text-[18px] text-bodyS text-neutral-70 font-reg">
                    Remember Me{" "}
                  </span>
                </div>
                <Link to="/forgot-password">
                  <p className="text-bodyS text-neutral-70">Forgot Password?</p>
                </Link>
              </div>
              <div className="w-full mt-[42.92px] space-y-[16px]">
                <button
                  type="submit"
                  className="w-full h-[56px] bg-primary-50 text-neutral-white rounded-[4px] text-bodyN font-reg"
                >
                  Sign In
                </button>
                <button className="w-full h-[56px] border border-primary-50 text-primary-50 rounded-[4px] text-bodyN font-reg">
                  Continue with Google
                </button>
              </div>
              <p className="text-center mt-[156.09px] text-bodyN text-neutral-black">
                Don't have an Account?
                <Link to="/sign-up">
                  <span className="text-primary-50">Sign Up</span>
                </Link>
              </p>
              <p className="text-center mt-[116px] text-primary-50">
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
