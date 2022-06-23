import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { googleLogin, reset } from "../features/user/userSlice";
import AnimatePages from "./AnimatePages";
import SignIn from "./SignIn";
import Signup from "./Signup";

const UserLogin = () => {
  const [userState, setUserState] = useState(true);

  const location = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    if (location.pathname === "/api/v1/auth/signup") {
      setUserState(false);
    }
    dispatch(reset());
    dispatch(googleLogin());
  }, []);

  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[88px] h-[1024px] flex">
        {userState ? (
          <SignIn setUserState={setUserState} />
        ) : (
          <Signup setUserState={setUserState} />
        )}
      </div>
    </AnimatePages>
  );
};

export default UserLogin;
