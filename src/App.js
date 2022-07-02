import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BookQuote from "./components/BookQuote";
import Header from "./components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "./features/user/userSlice";

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
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(reset());
    }, 3000);
  }, [isError, isGoogleError, isSuccess, user]);

  return (
    <div className="w-screen min-h-screen max-w-[1440px] mx-auto p-0 relative">
      <AnimatePresence>
        {(isError || isGoogleError || user.message) && (
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            animate={{
              opacity: 1,
              x: [-50, 50, -50, 50 - 50, 50, 0],
              transition: { duration: 1, type: "spring", stiffness: 100 },
            }}
            exit={{ opacity: 0, x: -1000, transition: { duration: 1 } }}
            className=" text-h4 rounded-[4px] absolute top-[10px] right-[25px] text-neutral-white bg-primary-50 w-[400px] h-[100px] flex justify-center items-center  p-[10px]"
          >
            {user ? user.message : errorMessage}{" "}
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
