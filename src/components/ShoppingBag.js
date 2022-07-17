import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import {
  removeFromBag,
  addAFavoriteBook,
  removeFavoriteBook,
  addToCheckOut,
  clearShoppingBag,
} from "../features/books/bookSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AnimatePages from "./AnimatePages";
import BookQuote from "./BookQuote";

const ShoppingBag = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [discountCoupon, setDiscountCoupon] = useState(1000);
  const shoppingBag = useSelector((state) => state.books.shoppingBag);
  console.log(shoppingBag);
  const favoriteBooks = useSelector((state) => state.books.likedBooks);
  const addBookAsFavorite = (book) => {
    dispatch(addAFavoriteBook(book));
  };

  const booksInCart = shoppingBag.map((item) => ({ ...item }));
  const [shoppingBagBooks, setShoppingBagBooks] = useState([]);
  const [totalCostOfBooks, setTotalCostOfBooks] = useState(0);
  const [couponVoucher, setCouponVoucher] = useState(false);
  const [voucher, setVoucher] = useState("");

  booksInCart.forEach((item) => {
    item.quantity = 1;
    item.totalAmount = item.price;
  });

  useEffect(() => {
    setShoppingBagBooks([...booksInCart]);
  }, []);

  useEffect(() => {
    let totalCost = 0;
    shoppingBagBooks.map((item) => {
      totalCost += item.totalAmount;

      setTotalCostOfBooks(totalCost);

      return null;
    });
  });
  console.log(totalCostOfBooks);

  const decrementQuantity = (index) => {
    const book = shoppingBagBooks[index];
    if (book.quantity > 1) book.quantity -= 1;

    book.totalAmount = book.price * book.quantity;

    setShoppingBagBooks((shoppingBagBooks) => {
      return [
        ...shoppingBagBooks.slice(0, index),
        book,
        ...shoppingBagBooks.slice(index + 1, shoppingBagBooks.length),
      ];
    });
    let totalCost = 0;
    shoppingBagBooks.map((item) => {
      totalCost += item.totalAmount;

      setTotalCostOfBooks(totalCost);
      return null;
    });
  };
  const incrementQuantity = (index) => {
    const book = shoppingBagBooks[index];
    if (book.quantity >= 1) book.quantity += 1;

    book.totalAmount = book.price * book.quantity;

    setShoppingBagBooks((shoppingBagBooks) => {
      return [
        ...shoppingBagBooks.slice(0, index),
        book,
        ...shoppingBagBooks.slice(index + 1, shoppingBagBooks.length),
      ];
    });
    let totalCost = 0;
    shoppingBagBooks.map((item) => {
      totalCost += item.totalAmount;

      setTotalCostOfBooks(totalCost);
      return null;
    });
  };

  console.log(shoppingBagBooks);
  const removeBookAsFavorite = (book) => {
    dispatch(removeFavoriteBook(book));
  };
  const removeBookFromQueue = (book) => {
    const filteredBooks = shoppingBagBooks.filter((item) => {
      return item.id !== book.id;
    });
    setShoppingBagBooks([...filteredBooks]);
    dispatch(removeFromBag(book));
  };

  const handleCoupon = () => {
    setVoucher("");
    setCouponVoucher(false);
  };

  const checkout = () => {
    dispatch(addToCheckOut(shoppingBagBooks));

    navigate("/checkout");
  };

  return (
    <AnimatePages>
      <div className=" hidden mtab:block   w-screen max-w-[1440px]  mx-auto mt-[88px] pt-[32px]">
        <div
          onClick={() => navigate(-1)}
          className="w-full h-[24px] mtab:h-[96px] flex justify-start items-center pl-[22px] mtab:pl-[73.48px] tab:pl-[90px] lap:pl-[128px] desk:pl-[105px] gap-0  "
        >
          <span className="text-[25px]">
            <MdChevronLeft />
          </span>
          <p className=" text-bodyS mtab:text-bodyL  tab:text-h4 font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="w-full  h-[24px]   tab:h-[32px] flex justify-center items-center mt-[9.92px]">
          <h4 className=" text-bodyL  tab:text-h4 font-reg text-neutral-30 ">
            Your Shopping Bag
          </h4>
        </div>
        <div className="w-full h-[753.86px] flex items-start justify-start gap-0 relative mtab:mt-[48px] tab:mt-[52px]  lap:mt-[72px]">
          <div className="w-1/2 h-full mtab:pl-[72px] tab:pl-[86px] lap:pl-[193px]  desk:pl-[181px] mtab:pr-[24px] tab:pr-[50px]  lap:pr-[40px] desk:pr-[10px] overflow-hidden ">
            <div className=" overflow-y-auto scrollbar-hide w-full h-full ">
              <AnimatePresence>
                {shoppingBagBooks.map((book, index) => {
                  return (
                    <div
                      key={book.id}
                      className="   mtab:mb-[80.14px]   tab:mb-[132.77px]      lap:mb-[129.30px]    desk:mb-[127.96px]"
                    >
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
                        className="w-full mtab:h-[230px]    tab:h-[293px]    desk:h-[312.95px]  flex mtab:gap-[24.92px]  tab:gap-[32.34px] lap:gap-[78.45px]   desk:gap-[53.23px] "
                      >
                        <div className="h-full   mtab:w-[168.08px]    tab:w-[214px]   desk:w-[228.05px] relative group">
                          <div className="absolute w-full     h-[56px]  mtab:h-[60px] lap:h-[65px]  desk:h-[91px]  opacity-0 flex justify-between items-center mx-auto group-hover:opacity-100  ">
                            <div className=" w-[38px] h-[38px] lap:w-[46px] lap:h-[46px] desk:w-[51px] desk:h-[51px] rounded-full bg-neutral-70/80 cursor-pointer flex justify-center items-center ml-[14px] desk:ml-[20px]">
                              {favoriteBooks.filter(
                                (item) => item.title === book.title
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
                                  onClick={() => removeBookAsFavorite(book)}
                                  className="text-[22px] desk:text-[25px] text-primary-70 border-[1.59277px solid #FFFFFF]"
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
                                  onClick={() => addBookAsFavorite(book)}
                                  className="text-[22px] desk:text-[25px] text-neutral-white border-[1.59277px solid #FFFFFF]"
                                >
                                  <MdOutlineFavoriteBorder />
                                </motion.span>
                              )}
                            </div>
                          </div>
                          <img
                            className="w-full h-full"
                            src={book?.img}
                            alt="Book"
                          />
                        </div>

                        <div className="h-full mtab:w-[140px]  tab:w-[146px]  lap:w-[200px]  desk:w-[257px]">
                          <div className="h-[12px] w-full flex justify-end items-center mtab:pr-[46px] tab:pr-[66.76px] lap:pr-[112px] desk:pr-[172.72px]">
                            <span
                              onClick={() => removeBookFromQueue(book)}
                              className="w-[12px] h-[12px] text-[20px] text-neutral-30 cursor-pointer hover:text-neutral-black"
                            >
                              <AiOutlineClose />
                            </span>
                          </div>
                          <div className="mtab:w-[140px]  tab:w-[146px]  lap:w-[200px]  desk:w-[257px] mtab:mt-[45.33px]  tab:mt-[118px]  lap:mt-[115.09px]   desk:mt-[84.21px] mtab:space-y-[8px]  tab:space-y-[21px] lap:space-y-[12px]">
                            <div className="flex gap-[10px] mb-[10px]">
                              {book?.eBook?.status && (
                                <div className="flex items-center justify-center mtab:w-[78px] tab:w-[84px] h-[29.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] ">
                                  <p className="w-[52px] h-[24px] text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                                    Ebook
                                  </p>
                                </div>
                              )}
                              {book?.eBook?.status && (
                                <div className="flex items-center justify-center w-[70px]  h-[29.78px] rounded-[12px] border-2 border-primary-50  bg-primary-10 px-[7.28px] ">
                                  {" "}
                                  <p className=" text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                                    {" "}
                                    {book?.eBook?.format[0]}
                                  </p>
                                </div>
                              )}
                            </div>
                            <Link to={`/book/${book.title}`}>
                              <h3 className=" mtab:text-bodyN  tab:text-bodyL  lap:text-h4 font-reg text-neutral-80">
                                {book?.title}
                              </h3>
                            </Link>
                            <p className=" mtab:text-bodyN     tab:text-bodyL whitespace-nowrap text-neutral-30">
                              Total:&nbsp;{" "}
                              <span className="text-primary-50">
                                N{book.totalAmount.toLocaleString("en-US")}
                              </span>
                            </p>
                          </div>
                          {!book?.eBook?.status && (
                            <div className="w-[111px] h-[30px] mt-[53.86px] flex justify-between items-center gap-[11px]">
                              <span
                                onClick={() => decrementQuantity(index)}
                                className=" cursor-pointer w-[30px] h-[30px] rounded-full bg-primary-50 flex items-center justify-center text-[18px] leading-5 text-neutral-white"
                              >
                                -
                              </span>
                              <span className="text-bodyL text-primary-50 font-reg">
                                {book.quantity}
                              </span>

                              <span
                                onClick={() => incrementQuantity(index)}
                                className="cursor-pointer w-[30px] h-[30px] rounded-full bg-primary-50 flex items-center justify-center text-[18px] leading-5 text-neutral-white"
                              >
                                +
                              </span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                      {book?.eBook?.status && (
                        <div className="w-full h-[24px] mtab:text-sub    tab:text-bodyS lap:text-bodyN    desk:text-bodyL text-neutral-30 mt-[21.58px]">
                          E-books will be downloaded to{" "}
                          <span className=" text-neutral-40">
                            ‘Your e-books’.
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          <hr className="w-0 h-[753.86px] border border-primary-10 absolute rotate-180 left-[50%]    " />
          <div className="w-1/2 h-[353px]   mtab:pl-[24px]  tab:pl-[29px]    lap:pl-[31.67px]  mtab:pr-[85px] tab:pr-[192px]    lap:pr-[185.33px]">
            <div className="w-full h-[24px] flex justify-between ">
              <p className="    mtab:text-bodyN  tab:text-bodyL text-neutral-80">
                Subtotal
              </p>
              <p className="    mtab:text-bodyN  tab:text-bodyL text-neutral-70">
                N{totalCostOfBooks.toLocaleString("en-US")}
              </p>
            </div>
            <div className="w-full h-[24px] flex justify-between mt-[24px] ">
              <p className=" mtab:text-bodyN  tab:text-bodyL text-neutral-80">
                Coupon Discount:
              </p>
              <p className=" mtab:text-bodyN  tab:text-bodyL text-neutral-70">
                -N{discountCoupon.toLocaleString("en-US")}
              </p>
            </div>
            {/* <div className="w-full h-[24px] flex justify-between mt-[26px] ">
              <p className="text-bodyL text-neutral-80">Standard Delivery:</p>
              <p className="text-bodyL text-neutral-70">N3000</p>
            </div> */}
            <div className="w-full h-[24px] flex justify-between mt-[40px] ">
              <p className=" mtab:text-bodyN  tab:text-bodyL text-neutral-80">
                Total to Pay:
              </p>
              <p className=" mtab:text-bodyN  tab:text-bodyL text-neutral-70">
                N{totalCostOfBooks.toLocaleString("en-US")}
              </p>
            </div>
            <div className="w-full mtab:h-[37px] tab:h-[46px] flex justify-center items-center  mt-[64px]">
              {!couponVoucher && (
                <div className="w-full h-full flex justify-center items-center mb-[32px] mt-[64px]">
                  <p
                    onClick={() => setCouponVoucher(true)}
                    className=" mtab:text-bodyN  tab:text-bodyL text-neutral-30 font-reg cursor-pointer"
                  >
                    Add Coupon or Voucher
                  </p>
                </div>
              )}
              {couponVoucher && (
                <div className="  mtab:w-[257px]  tab:w-[279px] h-full relative rounded-[4px]">
                  <input
                    className=" outline-none border border-neutral-30 w-full h-full rounded-[4px] mtab:pl-[12px] tab:pl-[16px] pr-[86px] text-neutral-20 text-sub placeholder:text-neutral-20 placeholder:text-sub"
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
              onClick={checkout}
              className="  w-full mtab:h-[55px] tab:h-[65px] bg-primary-50 text-buttonL text-neutral-white font-medium rounded-[4px]  mt-[32px]"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <div className=" mtab:hidden   w-full min-h-screen mt-[68px] py-[17px] px-[23px] mobx:px-[60px]">
        <div
          onClick={() => navigate(-1)}
          className="w-full  h-[96px] flex justify-start items-center gap-0  "
        >
          <span className="text-[18px]">
            <MdChevronLeft />
          </span>
          <p className="text-bodyS font-reg text-[#000000] cursor-pointer active:text-primary-50">
            Back
          </p>
        </div>
        <div className="w-full  h-[24px]    flex justify-center items-center mt-[-25px]">
          <h4 className=" text-bodyN  font-reg text-neutral-30 ">
            Your Shopping Bag
          </h4>
        </div>

        <div className="w-full h-3/5  overflow-hidden mt-[32px] ">
          <div className=" overflow-y-auto scrollbar-hide w-full h-full ">
            <AnimatePresence>
              {shoppingBagBooks.map((book, index) => {
                return (
                  <div key={book.id} className="   mb-[48.32px]   ">
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
                      className="w-full h-full  flex gap-[16px]   "
                    >
                      <div className="h-[117.68px]   w-[86px]      relative group">
                        <img
                          className="w-full h-full"
                          src={book?.img}
                          alt="Book"
                        />
                      </div>

                      <div className="h-full w-[260px] mobx:w-3/5 flex items-start justify-between">
                        <div className="  ml-[20px] w-[260px] mobx:w-3/5 flex flex-col space-y-[15px] items-start justify-between">
                          <Link to={`/book/${book.title}`}>
                            <h3 className=" whitespace-nowrap text-bodyN font-reg text-neutral-80">
                              {book?.title}
                            </h3>
                          </Link>
                          <p className="text-bodyN whitespace-nowrap text-neutral-30">
                            Total:&nbsp;{" "}
                            <span className="text-primary-50">
                              N{book.totalAmount.toLocaleString("en-US")}
                            </span>
                          </p>

                          <div className="flex gap-[10px] ">
                            {book?.eBook?.status && (
                              <div className="flex items-center justify-centerw-[78px] h-[21.78px] rounded-[14px] border-2 border-primary-50  bg-primary-10 px-[7.28px] ">
                                <p className="w-[52px] h-[24px] text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                                  Ebook
                                </p>
                              </div>
                            )}
                            {book?.eBook?.status && (
                              <div className="flex items-center justify-center w-[70px]  h-[21.78px] rounded-[12px] border-2 border-primary-50  bg-primary-10 px-[7.28px] ">
                                {" "}
                                <p className=" text-primary-50  text-[16px] leading-6 whitespace-nowrap cursor-pointer ">
                                  {" "}
                                  {book?.eBook?.format[0]}
                                </p>
                              </div>
                            )}
                          </div>
                          {!book?.eBook?.status && (
                            <div className="w-[75px] h-[24px]  flex justify-between items-center  gap-[10px]">
                              <span
                                onClick={() => decrementQuantity(index)}
                                className=" cursor-pointer w-[24px] h-[24px] rounded-full bg-primary-40 flex items-center justify-center text-[14px] leading-4 text-neutral-white"
                              >
                                -
                              </span>
                              <span className="text-[14.63px] leading-5 text-primary-40 font-reg">
                                {book.quantity}
                              </span>
                              <span
                                onClick={() => incrementQuantity(index)}
                                className="cursor-pointer w-[24px] h-[24px] rounded-full bg-primary-40 flex items-center justify-center text-[14px] leading-4 text-neutral-white"
                              >
                                +
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="h-[12px] w-full flex justify-end items-center pr-[23px]">
                          <span
                            onClick={() => removeBookFromQueue(book)}
                            className="w-[12px] h-[12px] text-[20px] text-neutral-30 cursor-pointer hover:text-neutral-black"
                          >
                            <AiOutlineClose />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <hr className=" mtab:hidden w-[100%] mx-auto  h-0 border-1 border-primary-40 mt-[25px] mb-[24px]" />

        <div>
          <div className="w-full h-[24px] flex justify-between ">
            <p className="  font-medium   text-bodyN text-neutral-80">
              Subtotal
            </p>
            <p className=" font-medium   text-bodyN text-neutral-70">
              N{totalCostOfBooks.toLocaleString("en-US")}
            </p>
          </div>
          <div className="w-full h-[24px] flex justify-between mt-[16px] ">
            <p className=" font-medium text-bodyN text-neutral-80">
              Coupon Discount:
            </p>
            <p className=" font-medium text-bodyN text-neutral-70">
              -N{discountCoupon.toLocaleString("en-US")}
            </p>
          </div>

          <div className="w-full h-[24px] flex justify-between mt-[24px] ">
            <p className=" font-medium text-bodyN text-neutral-80">
              Total to Pay:
            </p>
            <p className=" font-medium text-bodyN text-neutral-70">
              N{totalCostOfBooks.toLocaleString("en-US")}
            </p>
          </div>
          <div className="w-full h-[37px] flex justify-center items-center  mt-[40px]">
            {!couponVoucher && (
              <div className="w-full h-full flex justify-center items-center mb-[32px] mt-[40px]">
                <p
                  onClick={() => setCouponVoucher(true)}
                  className=" text-bodyN   text-neutral-30 font-reg cursor-pointer"
                >
                  Add Coupon or Voucher
                </p>
              </div>
            )}
            {couponVoucher && (
              <div className="  w-[257px]   h-full relative rounded-[4px]">
                <input
                  className=" outline-none border border-neutral-30 w-full h-full rounded-[4px] mtab:pl-[12px] tab:pl-[16px] pr-[86px] text-neutral-20 text-sub placeholder:text-neutral-20 placeholder:text-sub"
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
            onClick={checkout}
            className="  w-full h-[55px]  bg-primary-50 text-bodyN text-neutral-white font-medium rounded-[4px]  mt-[32px]"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <BookQuote />
    </AnimatePages>
  );
};

export default ShoppingBag;
