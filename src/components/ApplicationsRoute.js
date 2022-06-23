import { Routes, Route, useLocation } from "react-router-dom";
import App from "../App";
import BookCategory from "./BookCategory";
import BookPreview from "./BookPreview";
import BuyNowCheckout from "./BuyNowCheckout";
import BuyNowShoppingBag from "./BuyNowShoppingBag";
import Homepage from "./Homepage";
import LikedBooks from "./LikedBooks";
import ShoppingBag from "./ShoppingBag";
import Checkout from "./Checkout";
import ChangeBillingAddress from "./ChangeBillingAddress";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import { AnimatePresence } from "framer-motion";
import PageNotFound from "./PageNotFound";
import MyOrders from "./MyOrders";
import Coupon from "./Coupon";
import ServerMessages from "./ServerMessages";
import UserLogin from "./UserLogin";
import { useSelector } from "react-redux";
import Protected from "./Protected";

const ApplicationsRoute = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  return (
    <div className="w-screen min-h-screen max-w-[1440px] mx-auto">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="/category/:catName" element={<BookCategory />} />
            <Route
              path="/liked-books"
              element={
                <Protected isLoggedIn={user}>
                  <LikedBooks />
                </Protected>
              }
            />
            <Route path="/book/:bookId" element={<BookPreview />} />
            <Route
              path="/shopping-bag"
              element={
                <Protected isLoggedIn={user}>
                  <ShoppingBag />
                </Protected>
              }
            />
            <Route
              path="/buynow"
              element={
                <Protected isLoggedIn={user}>
                  <BuyNowShoppingBag />
                </Protected>
              }
            />
            <Route
              path="/buynow-checkout"
              element={
                <Protected isLoggedIn={user}>
                  <BuyNowCheckout />
                </Protected>
              }
            />
            <Route
              path="/checkout"
              element={
                <Protected isLoggedIn={user}>
                  <Checkout />
                </Protected>
              }
            />
            <Route
              path="/billing-address"
              element={
                <Protected isLoggedIn={user}>
                  <ChangeBillingAddress />
                </Protected>
              }
            />
            <Route path="/api/v1/auth" element={<UserLogin />}>
              <Route
                path="/api/v1/auth/google:authPath"
                element={<ServerMessages />}
              />{" "}
              <Route
                path="/api/v1/auth/verify/:emailId/:codeId"
                element={<ServerMessages />}
              />
            </Route>
            <Route path="/api/v1/auth/signup" element={<UserLogin />} />

            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/orders"
              element={
                <Protected isLoggedIn={user}>
                  <MyOrders />
                </Protected>
              }
            />
            <Route
              path="/coupon"
              element={
                <Protected isLoggedIn={user}>
                  <Coupon />
                </Protected>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default ApplicationsRoute;
