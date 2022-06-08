import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const ApplicationsRoute = () => {
  return (
    <div className="w-screen min-h-screen max-w-[1440px] mx-auto">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
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
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ApplicationsRoute;
