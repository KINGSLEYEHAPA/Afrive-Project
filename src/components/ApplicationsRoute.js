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

const ApplicationsRoute = () => {
  return (
    <div className="w-screen min-h-screen max-w-[1440px] mx-auto">
      <BrowserRouter>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ApplicationsRoute;
