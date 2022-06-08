import { HiOutlineInformationCircle } from "react-icons/hi";

const Signup = () => {
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
      <div className="w-[887px] h-[1024px] pr-[181px] pl-[165px] pt-[144.59px]">
        <div className="h-[839px] w-[551px] ">
          <h2 className="text-h2 font-medium text-primary-50 ">Sign Up</h2>
          <form>
            <div className="w-full flex gap-[23px] mt-[48px]">
              <div className="w-full h-[86px]">
                <label className="text-bodyS text-neutral-70">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="   outline-none w-[264px] h-[56px] mt-[12px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
                />
              </div>
              <div className="w-full h-[86px]">
                <label className="text-bodyS text-neutral-70">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="   outline-none w-[264px] h-[56px] mt-[12px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
                />
              </div>
            </div>
            <div className="w-full h-[86px] mt-[32px]">
              <label className="text-bodyS text-neutral-70">
                Your Email Address
              </label>
              <input
                type="email"
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
                name="password"
                className=" outline-none w-full h-[56px] mt-[12px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
              />
            </div>
            <div className="w-full h-[18px] flex justify-between  mt-[10.51px]">
              <div className="flex items-center gap-[11.51px] text-bodyS text-primary-50">
                <span className="text-[18px]">
                  <HiOutlineInformationCircle />
                </span>
                <span>Minimum of 7 letters</span>
              </div>
              <p className="text-bodyS text-neutral-70">Forgot Password?</p>
            </div>
            <div className="w-full mt-[42.92px] space-y-[16px]">
              <button className="w-full h-[56px] bg-primary-50 text-neutral-white rounded-[4px] text-bodyN font-reg">
                Sign Up
              </button>
              <button className="w-full h-[56px] border border-primary-50 text-primary-50 rounded-[4px] text-bodyN font-reg">
                Continue with Google
              </button>
            </div>
            <p className="text-center mt-[66px] text-bodyN text-neutral-black">
              Already have an Account?{" "}
              <span className="text-primary-50">Sign in</span>
            </p>
            <p className="text-center mt-[108px] text-primary-50">
              Are you an Author? Submit your work to us.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
