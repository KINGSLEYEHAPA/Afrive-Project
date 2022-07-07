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
import AllBooks from "./AllBooks";
import CategoriesMobile from "./CategoriesMobile";
import MobileEbook from "./MobileEbook";

const ApplicationsRoute = () => {
  const location = useLocation();

  return (
    <div className="w-screen min-h-screen max-w-[1440px] mx-auto">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="/mobile-category" element={<CategoriesMobile />} />
            <Route path="/ebook-mobile" element={<MobileEbook />} />
            <Route path="/category/:catName" element={<BookCategory />} />
            <Route path="/all-books/:trendName" element={<AllBooks />} />
            <Route
              path="/liked-books"
              element={
                <Protected>
                  <LikedBooks />
                </Protected>
              }
            />
            <Route path="/book/:bookId" element={<BookPreview />} />
            <Route
              path="/shopping-bag"
              element={
                <Protected>
                  <ShoppingBag />
                </Protected>
              }
            />
            <Route
              path="/buynow"
              element={
                <Protected>
                  <BuyNowShoppingBag />
                </Protected>
              }
            />
            <Route
              path="/buynow-checkout"
              element={
                <Protected>
                  <BuyNowCheckout />
                </Protected>
              }
            />
            <Route
              path="/checkout"
              element={
                <Protected>
                  <Checkout />
                </Protected>
              }
            />
            <Route
              path="/billing-address"
              element={
                <Protected>
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
                <Protected>
                  <MyOrders />
                </Protected>
              }
            />
            <Route
              path="/coupon"
              element={
                <Protected>
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
