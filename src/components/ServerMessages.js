import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  verifyGoogleLogin,
  reset,
  verifyRegister,
} from "../features/user/userSlice";

const ServerMessages = () => {
  const dispatch = useDispatch();
  const [showServerMessage, setShowServerMessage] = useState(null);

  const [url, setUrl] = useState(null);
  const { user, isError, errorMessage, isSuccess } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    if (location.search.includes("google")) {
      setUrl(location.search);
      if (url !== null) {
        dispatch(verifyGoogleLogin(url));
      }
    }

    if (isSuccess) {
      dispatch(reset());
      setUrl(null);
      navigate("/");
    }
  }, [url]);
  useEffect(() => {
    if (location.pathname.includes("verify")) {
      setUrl(location.pathname);
      if (url !== null) {
        dispatch(verifyRegister(url));
      }
    }

    if (isSuccess) {
      dispatch(reset());
      setUrl(null);
      navigate("/api/v1/auth");
    }
  }, [url]);
  useEffect(() => {
    if (user?.message || errorMessage)
      setShowServerMessage(user?.message || errorMessage);

    setTimeout(() => {
      setShowServerMessage(null);
    }, 2000);
  }, [user, isError, isSuccess]);

  return (
    showServerMessage !== null && (
      <div className=" rounded-[4px] absolute top-[-50px] text-neutral-white bg-primary-50 w-full h-[40px] flex justify-center items-center">
        {/* {user ? user.message : errorMessage} */}
      </div>
    )
  );
};

export default ServerMessages;
