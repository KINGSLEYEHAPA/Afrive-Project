import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BookQuote from "./components/BookQuote";
import Header from "./components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "./features/user/userSlice";
import { actionReset } from "./features/books/bookSlice";

function App() {
  const [showCategories, setShowCategories] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [showEbookMenu, setShowEbookMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const {
    user,
    isLoading,
    isLoadingGoogle,
    google,
    isError,
    errorMessage,
    isSuccess,
    isGoogleError,
    resetMessage,
    isverified,
    logoutMessage,
    registerMessage,
    verifiedMessage,
    loginMessage,
    paymentDetailsMessage,
    addressDetailsMessage,
  } = useSelector((state) => state.user);

  const { favStatus, bagStatus } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(reset());
      dispatch(actionReset());
    }, 2000);
  }, [
    isError,
    isGoogleError,
    isSuccess,
    user,
    resetMessage,
    isverified,
    logoutMessage,
    registerMessage,
    verifiedMessage,
    loginMessage,
    paymentDetailsMessage,
    addressDetailsMessage,

    errorMessage,
    favStatus,
    bagStatus,
  ]);

  return (
    <div className="w-screen min-h-screen max-w-[1440px] mx-auto p-0 relative">
      <AnimatePresence>
        {(isError ||
          isGoogleError ||
          isSuccess ||
          errorMessage ||
          logoutMessage ||
          loginMessage ||
          registerMessage ||
          addressDetailsMessage ||
          paymentDetailsMessage ||
          favStatus ||
          bagStatus) && (
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{
              opacity: 1,
              x: [-50, 50, -50, 50, 0],
              transition: { duration: 1, type: "spring", stiffness: 100 },
            }}
            exit={{ opacity: 0, x: 1000, transition: { duration: 1 } }}
            className=" text-sub   mtab:text-bodyL  tab:text-h4 rounded-[4px] fixed z-50 top-[80px] right-[25px] text-neutral-white bg-primary-50   w-[250px]  mtab:w-300px    tab:w-[425px] h-[60px] mtab:h-[100px] flex justify-center items-center  p-[10px] whitespace-nowrap "
          >
            {errorMessage === "Network Error" && "Please try again."}
            {errorMessage?.toLowerCase().includes("already exist") &&
              "User/Email already exist"}
            {errorMessage?.toLowerCase().includes("not found") &&
              "Email invalid"}
            {errorMessage
              ?.toLowerCase()
              .includes("username or password is invalid") &&
              "Password is incorrect"}
            {errorMessage?.toLowerCase().includes("salt") &&
              "Reset your password"}
            {errorMessage
              ?.toLowerCase()
              .includes("duplicate key value violates") &&
              "Username already exist"}
            {resetMessage}
            {isverified?.data}
            {logoutMessage}
            {registerMessage}
            {verifiedMessage}
            {loginMessage}
            {paymentDetailsMessage}
            {addressDetailsMessage}
            {bagStatus}
            {favStatus}
          </motion.div>
        )}
      </AnimatePresence>

      <Header
        showCategories={showCategories}
        setShowCategories={setShowCategories}
        showEbookMenu={showEbookMenu}
        setShowEbookMenu={setShowEbookMenu}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        showProfileInfo={showProfileInfo}
        setShowProfileInfo={setShowProfileInfo}
      />

      <div
        onClick={() => {
          setShowCategories(false);
          setShowEbookMenu(false);
          setShowProfileInfo(false);
          setShowSearch(false);
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
