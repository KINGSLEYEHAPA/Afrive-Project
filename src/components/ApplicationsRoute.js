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
import SignUp from "./SignUp";
import ScrollToTop from "./ScrollToTop";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import { AnimatePresence } from "framer-motion";
import PageNotFound from "./PageNotFound";
import MyOrders from "./MyOrders";
import Coupon from "./Coupon";
import ServerMessages from "./ServerMessages";
import UserLogin from "./UserLogin";

const ApplicationsRoute = () => {
  const location = useLocation();
  return (
    <div className="w-screen min-h-screen max-w-[1440px] mx-auto">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="/category/:catName" element={<BookCategory />} />
            <Route path="/liked-books" element={<LikedBooks />} />
            <Route path="/book/:bookId" element={<BookPreview />} />
            <Route path="/shopping-bag" element={<ShoppingBag />} />
            <Route path="/buynow" element={<BuyNowShoppingBag />} />
            <Route path="/buynow-checkout" element={<BuyNowCheckout />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/billing-address" element={<ChangeBillingAddress />} />
            <Route path="/api/v1/auth" element={<UserLogin />}>
              <Route
                path="/api/v1/auth/google:authPath"
                element={<ServerMessages />}
              />
            </Route>

            <Route path="/sign-in" element={<SignIn />}>
              <Route
                path="sign-in/server-messages"
                element={<ServerMessages />}
              />
            </Route>
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default ApplicationsRoute;
