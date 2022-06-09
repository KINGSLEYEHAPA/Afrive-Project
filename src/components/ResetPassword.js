import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineInformationCircle } from "react-icons/hi";
import AnimatePages from "./AnimatePages";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState();
  console.log(user);

  const navigate = useNavigate();
  const handlePaswwordReset = (e) => {
    e.preventDefault();
    setUser({
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    });

    setNewPassword("");
    setConfirmPassword("");

    if (newPassword !== "" && confirmPassword !== "") {
      navigate("/sign-in");
    }
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
            <h2 className="text-h3 font-reg text-primary-50 mt-[147px]">
              Enter your New Password
            </h2>
            <form onSubmit={handlePaswwordReset}>
              <div className="w-full h-[86px] mt-[32px]">
                <label className="text-bodyS text-neutral-70">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  name="newPassword"
                  className=" outline-none w-full h-[56px] mt-[12px] p-[15px] rounded-[4px] border-2 border-[#FFA599] text-bodyL text-neutral-30 active:ring-1 ring-[#FFA599]"
                />
              </div>
              <div className="w-full h-[86px] mt-[32px]">
                <label className="text-bodyS text-neutral-70">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  name="confirmPassword"
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
              </div>
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
