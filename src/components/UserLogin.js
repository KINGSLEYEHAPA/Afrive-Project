import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { googleLogin } from "../features/user/userSlice";
import AnimatePages from "./AnimatePages";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const UserLogin = () => {
  const [userState, setUserState] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(googleLogin());
  }, []);

  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[88px] h-[1024px] flex">
        {userState ? (
          <SignIn setUserState={setUserState} />
        ) : (
          <SignUp setUserState={setUserState} />
        )}
      </div>
    </AnimatePages>
  );
};

export default UserLogin;
