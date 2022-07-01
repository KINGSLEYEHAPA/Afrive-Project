import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineFavoriteBorder,
  MdFavorite,
  MdChevronLeft,
} from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import {
  addAFavoriteBook,
  removeFavoriteBook,
  clearBuyBookNow,
  addToBuyNowCheckOut,
} from "../features/books/bookSlice";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AnimatePages from "./AnimatePages";
import BookQuote from "./BookQuote";

const BuyNowShoppingBag = () => {
  const [discountCoupon, setDiscountCoupon] = useState(1000);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const shoppingBagBuyNow = useSelector(
    (state) => state.books.shoppingBagBuyNow
  );
  const favoriteBooks = useSelector((state) => state.books.likedBooks);
  const [couponVoucher, setCouponVoucher] = useState(false);
  const [voucher, setVoucher] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  console.log(selectedBook);
  useEffect(() => {
    const book = {
      ...shoppingBagBuyNow,
      quantity: 1,
      totalAmount: shoppingBagBuyNow?.price,
    };
    setSelectedBook(book);
  }, [shoppingBagBuyNow]);

  const addBookAsFavorite = (book) => {
    dispatch(addAFavoriteBook(book));
  };

  const decrementQuantity = () => {
    if (selectedBook.quantity > 1) {
      const quantity = selectedBook.quantity;
      setSelectedBook({
        ...selectedBook,
        quantity: quantity - 1,
        totalAmount: (selectedBook.quantity - 1) * selectedBook.price,
      });
    }
  };

  const incrementQuantity = () => {
    if (selectedBook.quantity >= 1) {
      const quantity = selectedBook.quantity;
      setSelectedBook({
        ...selectedBook,
        quantity: quantity + 1,
        totalAmount: (selectedBook.quantity + 1) * selectedBook.price,
      });
    }
  };

  const removeBookAsFavorite = (book) => {
    dispatch(removeFavoriteBook(book));
  };
  const removeBookFromQueue = () => {
    dispatch(clearBuyBookNow());
  };
  const handleCoupon = () => {
    setVoucher("");
    setCouponVoucher(false);
  };

  const buyNowCheckOut = () => {
    dispatch(addToBuyNowCheckOut(selectedBook));
    navigate("/buynow-checkout");
  };

  return (
    <AnimatePages>
      <div className="w-screen max-w-[1440px]  mx-auto mt-[88px] pt-[32px]">
        <div
          onClick={() => navigate(-1)}
          className="w-full  h-[32px] flex justify-start items-center pl-[105px] gap-0  "
        >
          <span className="text-[25px]">
            <MdChevronLeft />
          </span>
          <p className="text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="w-full h-[32px] flex justify-center items-center mt-[9.92px]">
          <h4 className="text-h4 font-reg text-neutral-30 ">Buy Now</h4>
        </div>
        <div className="w-full h-[753.86px] flex items-start justify-start gap-0 relative mt-[72px]">
          <div className="w-1/2 h-full pl-[181px] pr-[10px]  ">
            <AnimatePresence>
              {shoppingBagBuyNow !== null && (
                <div className="mb-[127.96px]">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 1 },
                    }}
                    className="w-full h-[312.95px]  flex gap-[53.23px] "
                  >
                    <div className="h-full w-[228.05px] relative group">
                      <div className="absolute w-full h-[91px]  opacity-0 flex justify-between items-center mx-auto group-hover:opacity-100  ">
                        <div className="w-[51px] h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center ml-[20px]">
                          {favoriteBooks?.filter(
                            (item) => item?.title === selectedBook?.title
                          ).length > 0 ? (
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{
                                scale: 1,
                                opacity: 1,
                                transition: { duration: 1 },
                              }}
                              exit={{
                                scale: 0,
                                opacity: 0,
                                transition: { duration: 1 },
                              }}
                              onClick={() => removeBookAsFavorite(selectedBook)}
                              className="text-[25px] text-primary-70 border-[1.59277px solid #FFFFFF]"
                            >
                              <MdFavorite />
                            </motion.span>
                          ) : (
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{
                                scale: 1,
                                opacity: 1,
                                transition: { duration: 1 },
                              }}
                              exit={{
                                scale: 0,
                                opacity: 0,
                                transition: { duration: 1 },
                              }}
                              onClick={() => addBookAsFavorite(selectedBook)}
                              className="text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
                            >
                              <MdOutlineFavoriteBorder />
                            </motion.span>
                          )}
                        </div>
                      </div>
                      <img
                        className="w-full h-full"
                        src={selectedBook?.img}
                        alt="Book"
                      />
                    </div>
                    <div className="h-full w-[257px]">
                      <div className="h-[12px] w-full flex justify-end items-center pr-[172.72px]">
                        <span
                          onClick={() => removeBookFromQueue(selectedBook)}
                          className="w-[12px] h-[12px] text-[20px] text-neutral-30 cursor-pointer"
                        >
                          <AiOutlineClose />
                        </span>
                      </div>
                      <div className="w-[257px] mt-[84.21px] space-y-[12px]">
                        {selectedBook?.eBook?.status === "yes" && (
                          <div className="flex items-center justify-center w-[84px] h-[29.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] ">
                            <p className="w-[52px] h-[24px] text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                              Ebook
                            </p>
                          </div>
                        )}
                        <Link to={`/book/${selectedBook?.title}`}>
                          <h3 className="text-h4 font-reg text-neutral-80">
                            {selectedBook?.title}
                          </h3>
                        </Link>
                        <p className="text-bodyL whitespace-nowrap text-neutral-30">
                          Total:&nbsp;{" "}
                          <span className="text-primary-50">
                            N
                            {selectedBook?.totalAmount?.toLocaleString("en-US")}
                          </span>
                        </p>

                        {selectedBook?.eBook?.status && (
                          <div className="flex items-center justify-center w-[70px]  h-[29.78px] rounded-[12px] border-2 border-primary-50  bg-primary-10 px-[7.28px] ">
                            {" "}
                            <p className=" text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                              {" "}
                              {selectedBook?.eBook?.format[0]}
                            </p>
                          </div>
                        )}
                      </div>
                      {!selectedBook?.eBook?.status && (
                        <div className="w-[111px] h-[30px]  mt-[53.86px] flex justify-between items-center gap-[13px]">
                          <span
                            onClick={() => incrementQuantity()}
                            className="cursor-pointer w-[30px] h-[30px] rounded-full bg-primary-50 flex items-center justify-center text-[18px] leading-5 text-neutral-white"
                          >
                            +
                          </span>
                          <span className="text-bodyL text-primary-50 font-reg">
                            {selectedBook?.quantity}
                          </span>
                          <span
                            onClick={() => decrementQuantity()}
                            className=" cursor-pointer w-[30px] h-[30px] rounded-full bg-primary-50 flex items-center justify-center text-[18px] leading-5 text-neutral-white"
                          >
                            -
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {selectedBook?.eBook?.status && (
                    <div className="w-full h-[24px] text-bodyL text-neutral-black mt-[21.58px]">
                      E-books will be downloaded to ‘Your e-books’.
                    </div>
                  )}
                </div>
              )}
              );
            </AnimatePresence>
          </div>

          <hr className="w-0 h-[753.86px] border border-primary-10 absolute rotate-180 left-[50%]    " />
          <div className="w-1/2 h-[353px] pl-[31.67px] pr-[185.33px]">
            <div className="w-full h-[24px] flex justify-between ">
              <p className="text-bodyL text-neutral-80">Subtotal</p>
              <p className="text-bodyL text-neutral-70">
                N{selectedBook?.totalAmount?.toLocaleString("en-US") || 0}
              </p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[26px] ">
              <p className="text-bodyL text-neutral-80">Coupon Discount:</p>
              <p className="text-bodyL text-neutral-70">
                -N{discountCoupon?.toLocaleString("en-US")}
              </p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[40px] ">
              <p className="text-bodyL text-neutral-80">Total to Pay:</p>
              <p className="text-bodyL text-neutral-70">
                N
                {(selectedBook?.totalAmount - discountCoupon)?.toLocaleString(
                  "en-US"
                ) || 0}
              </p>
            </div>
            <div className="w-full h-[46px] flex justify-center items-center  mt-[64px]">
              {!couponVoucher && (
                <div className="w-full h-full flex justify-center items-center mb-[32px] mt-[64px]">
                  <p
                    onClick={() => setCouponVoucher(true)}
                    className="text-bodyL text-neutral-30 font-reg cursor-pointer"
                  >
                    Add Coupon or Voucher
                  </p>
                </div>
              )}
              {couponVoucher && (
                <div className="w-[279px] h-full relative rounded-[4px]">
                  <input
                    className=" outline-none border border-neutral-30 w-full h-full rounded-[4px] pl-[16px] pr-[86px] text-neutral-20 text-sub placeholder:text-neutral-20 placeholder:text-sub"
                    type="text"
                    name="coupon"
                    value={voucher}
                    placeholder="Type in voucher or coupon code"
                    onChange={(e) => {
                      setVoucher(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => handleCoupon()}
                    className="h-full absolute w-[58px] top-0 right-0 z-20 bg-neutral-60 text-neutral-white rounded-tr-[4px] rounded-br-[4px]"
                  >
                    Verify
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => buyNowCheckOut()}
              className="w-full h-[65px] bg-primary-50 text-buttonL text-neutral-white font-medium rounded-[4px]  mt-[32px]"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <BookQuote />
    </AnimatePages>
  );
};

export default BuyNowShoppingBag;
