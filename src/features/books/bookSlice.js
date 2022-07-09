import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "./booksService";

const initialState = {
  // booksInStock: [
  //   {
  //     id: 1,
  //     title: "There was a Country",
  //     author: "Chinua Achebe",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSZI4k6afyB1AUj8OR74jFcsaYr2E6NkHLg&usqp=CAU",
  //     description:
  //       "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
  //     price: 8000,
  //     status: "in stock",

  //     category: ["Action", "Adventure", "Fantasy", "Drama"],

  //     eBook: { status: true, format: ["PDF", "MOBI", "EPUB"] },
  //     bookRating: {
  //       averageRating: 4.2,
  //       ratings: [
  //         {
  //           name: "P. John",
  //           comment: "A great book! What a read!",
  //           starRating: 5,
  //         },
  //         {
  //           name: "Joshua Oyedepo",
  //           comment: "I love this book.She is good writer",
  //           starRating: 5,
  //         },
  //         {
  //           name: "Pamela Faith",
  //           comment:
  //             "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
  //           starRating: 2,
  //         },
  //         {
  //           name: "Ade Kay Johnson",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Adewole Femi John",
  //           comment: "A great book! What a read!",
  //           starRating: 5,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "Half of a Yellow Sun",
  //     author: "Chimamanda Adieche",
  //     img: "https://farafinabooks.files.wordpress.com/2013/04/half-of-a-yellow-sun.jpg",
  //     description:
  //       "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
  //     price: 10000,
  //     status: "in stock",

  //     category: ["Action", "Adventure", "Fantasy", "Drama"],

  //     eBook: { status: false, format: [] },
  //     bookRating: {
  //       averageRating: 4.2,
  //       ratings: [
  //         {
  //           name: "King John",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Joshua Oyedepo",
  //           comment: "I love this book.She is good writer",
  //           starRating: 5,
  //         },
  //         {
  //           name: "Pamela Obodo",
  //           comment:
  //             "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
  //           starRating: 3,
  //         },
  //         {
  //           name: "Kay Johnson",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Adewole Femi John",
  //           comment: "A great book! What a read!",
  //           starRating: 5,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "The Concubine",
  //     author: "Amadin Elechi",
  //     img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1281647970l/1199163.jpg",
  //     description:
  //       "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
  //     price: 5000,
  //     status: "in stock",

  //     category: ["Action", "Adventure", "Fantasy", "Drama"],

  //     eBook: { status: true, format: ["PDF", "MOBI"] },
  //     bookRating: {
  //       averageRating: 3.2,
  //       ratings: [
  //         {
  //           name: "King John",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Joshua Oyedepo",
  //           comment: "I love this book.She is good writer",
  //           starRating: 5,
  //         },
  //         {
  //           name: "Pam J.",
  //           comment: "AFHSHFJKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
  //           starRating: 1,
  //         },
  //         {
  //           name: "Kay Johnson",
  //           comment: "I hate this book",
  //           starRating: 1,
  //         },
  //         {
  //           name: "Adewole Femi John",
  //           comment: "A great book! What a read!",
  //           starRating: 5,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 4,
  //     title: "The African Child",
  //     author: "Camera Laye",
  //     img: "https://tothebalcony.files.wordpress.com/2012/08/africanchild1.jpg?w=584",
  //     description:
  //       "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
  //     price: 7000,
  //     status: "in stock",

  //     category: ["Action", "Adventure", "Fantasy", "Drama"],

  //     eBook: { status: true, format: ["PDF", "MOBI", "EPUB"] },
  //     bookRating: {
  //       averageRating: 3.2,
  //       ratings: [
  //         {
  //           name: "King John",
  //           comment: "A great book! What a read!",
  //           starRating: 5,
  //         },
  //         {
  //           name: "Joshua Oyedepo",
  //           comment: "I love this book.She is good writer",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Pamela Obodo",
  //           comment:
  //             "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
  //           starRating: 2,
  //         },
  //         {
  //           name: "Kay Johnson",
  //           comment: "A great book! What a read!",
  //           starRating: 3,
  //         },
  //         {
  //           name: "Adewole Femi John",
  //           comment: "A great book! What a read!",
  //           starRating: 2,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 5,
  //     title: "Without a Silver Spoon",
  //     author: "Eddie Iroh",
  //     img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347325638l/2301365.jpg",
  //     description:
  //       "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
  //     price: 4000,
  //     status: "in stock",

  //     category: ["Poetry", "Adventure"],

  //     eBook: { status: true, format: ["PDF", "MOBI"] },
  //     bookRating: {
  //       averageRating: 2.6,
  //       ratings: [
  //         {
  //           name: "King John",
  //           comment: "A gre! What a read!",
  //           starRating: 2,
  //         },

  //         {
  //           name: "Pamela Obodo",
  //           comment:
  //             "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
  //           starRating: 3,
  //         },
  //         {
  //           name: "Kay Johnson",
  //           comment: "A great book! What a read!",
  //           starRating: 2,
  //         },
  //         {
  //           name: "Adewole Femi John",
  //           comment: "A great book! What a read!",
  //           starRating: 5,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 6,
  //     title: "Sugar Girl",
  //     author: "Kola Onadipe",
  //     img: "https://continentalbooksgh.com/wp-content/uploads/2020/05/Sugar-Girl.jpg",
  //     description:
  //       "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
  //     price: 2500,
  //     status: "in stock",

  //     category: ["Action", "Adventure", "Drama"],

  //     eBook: { status: true, format: ["PDF", "MOBI", "EPUB"] },

  //     bookRating: {
  //       averageRating: 2,
  //       ratings: [
  //         {
  //           name: "King John",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Joshua Oyedepo",
  //           comment: "I love this book.She is good writer",
  //           starRating: 5,
  //         },
  //         {
  //           name: "Pamela Obodo",
  //           comment:
  //             "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
  //           starRating: 3,
  //         },
  //         {
  //           name: "Kay Johnson",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Adewole Femi John",
  //           comment: "A great book! What a read!",
  //           starRating: 5,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 7,
  //     title: "Chike and the River",
  //     author: "Chinua Achebe",
  //     img: "https://folioreview.files.wordpress.com/2020/04/f21df8d465645236f369031b1dda8746.jpg",
  //     description:
  //       "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
  //     price: 4500,
  //     status: "in stock",

  //     category: ["Action", "Adventure", "Drama", "Children"],

  //     eBook: { status: true, format: ["MOBI", "EPUB"] },
  //     bookRating: {
  //       averageRating: 2,
  //       ratings: [
  //         {
  //           name: "King John",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Joshua Oyedepo",
  //           comment: "I love this book.She is good writer",
  //           starRating: 5,
  //         },
  //         {
  //           name: "Pamela Obodo",
  //           comment:
  //             "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
  //           starRating: 3,
  //         },
  //         {
  //           name: "Kay Johnson",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Adewole Femi John",
  //           comment: "A great book! What a read!",
  //           starRating: 5,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 8,
  //     title: "Adventures of Souza",
  //     author: "Kola Onadipe",
  //     img: "https://covers.openlibrary.org/b/id/8494992-M.jpg",
  //     description:
  //       "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
  //     price: 1500,
  //     status: "in stock",

  //     category: ["Action", "Adventure", "Drama"],

  //     eBook: { status: false, format: [] },
  //     bookRating: {
  //       averageRating: 2,
  //       ratings: [
  //         {
  //           name: "King John",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Joshua Oyedepo",
  //           comment: "I love this book.She is good writer",
  //           starRating: 5,
  //         },
  //         {
  //           name: "Pamela Obodo",
  //           comment:
  //             "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
  //           starRating: 3,
  //         },
  //         {
  //           name: "Kay Johnson",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Adewole Femi John",
  //           comment: "A great book! What a read!",
  //           starRating: 5,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 9,
  //     title: "Shaka Zulu",
  //     author: "E.A. Ritter",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OEpvX9f9lrxQI8Og49F9hs65v6QMjOWlXA&usqp=CAU",
  //     description:
  //       "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
  //     price: 6000,
  //     status: "in stock",

  //     category: ["Action", "Adventure", "Drama", "Autobiography"],

  //     eBook: { status: true, format: ["PDF", "MOBI", "EPUB"] },
  //     bookRating: {
  //       averageRating: 3,
  //       ratings: [
  //         {
  //           name: "King John",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Joshua Oyedepo",
  //           comment: "I love this book.She is good writer",
  //           starRating: 5,
  //         },
  //         {
  //           name: "Pamela Obodo",
  //           comment:
  //             "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
  //           starRating: 3,
  //         },
  //         {
  //           name: "Kay Johnson",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     id: 10,
  //     title: "Things Fall Apart",
  //     author: "Chinua Achebe",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZsNEnyODRqOnSFFr96JB5iXlsvs27w9c7e-Kb4K12opn26zK-Pt8piC1FCyZ8KJy2gU&usqp=CAU",
  //     description:
  //       "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
  //     price: 8000,
  //     status: "in stock",

  //     category: ["Action", "Adventure", "Drama", "Fantasy"],

  //     eBook: { status: true, format: ["PDF", "MOBI", "EPUB"] },
  //     bookRating: {
  //       averageRating: 5,
  //       ratings: [
  //         {
  //           name: "King John",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Joshua Oyedepo",
  //           comment: "I love this book.She is good writer",
  //           starRating: 5,
  //         },
  //         {
  //           name: "Pamela Obodo",
  //           comment:
  //             "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
  //           starRating: 3,
  //         },
  //         {
  //           name: "Kay Johnson",
  //           comment: "A great book! What a read!",
  //           starRating: 4,
  //         },
  //         {
  //           name: "Adewole Femi John",
  //           comment: "A great book! What a read!",
  //           starRating: 5,
  //         },
  //       ],
  //     },
  //   },
  // ],
  likedBooks: [],
  recommendedBooks: [],
  shoppingBag: [],
  shoppingBagBuyNow: null,
  buyNowCheckout: [],
  checkout: null,
  booksFromServer: null,
  isLoading: false,
  isError: false,
  error: null,
  isSuccess: false,
  bookCategories: null,
  commentMessage: null,
  orderMessage: null,
  orderSuccess: false,
  customerOrders: null,
  paymentVerified: null,
  isPaymentSuccessFull: false,
  orderDeleteMessage: null,
  isOrderError: false,
  orderError: null,
  isPaymentLoading: false,
};

export const getAllBooks = createAsyncThunk(
  "books/getAllBooks",
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().user.user.data.token;
      return await booksService.getAllBooks();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getAllBookCategories = createAsyncThunk(
  "books/getAllBookCategories",
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().user.user.data.token;
      return await booksService.getAllBookCategories();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const sendComment = createAsyncThunk(
  "books/sendComment",
  async (comment, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.data.token;
      return await booksService.sendComment(
        token,
        comment.commentData,
        comment.id
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const sendOrder = createAsyncThunk(
  "books/sendOrder",
  async (order, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.data.token;
      return await booksService.sendOrder(token, order);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// // Payment
// export const pay = createAsyncThunk("books/pay", async (payData, thunkAPI) => {
//   try {
//     const token = thunkAPI.getState().user.user.data.token;
//     return await booksService.pay(token, payData);
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();

//     return thunkAPI.rejectWithValue(message);
//   }
// });
// verifyPayment

export const verifyPay = createAsyncThunk(
  "books/verifyPay",
  async (reference, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.data.token;
      return await booksService.verifyPay(token, reference);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getOrder = createAsyncThunk(
  "books/getOrder",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.data.token;
      return await booksService.getOrder(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteOrder = createAsyncThunk(
  "books/deleteOrder",
  async (orderId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.data.token;
      return await booksService.deleteOrder(token, orderId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const removeFromCart = createAsyncThunk(
//   "books/removeFromCart",
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().user.user.data.token;
//       return await booksService.removeFromCart(token, id);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
// export const getCart = createAsyncThunk(
//   "books/getCart",
//   async (_, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().user.user.data.token;
//       return await booksService.getCart(token);
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addAFavoriteBook: (state, action) => {
      const bookExist = state.likedBooks?.filter((item) => {
        return state.likedBooks.length !== 0 && item?.id === action.payload.id;
      });

      if (bookExist.length === 0) {
        state.likedBooks.push(action.payload);
      }
      return state;
    },
    removeFavoriteBook: (state, action) => {
      const otherbooks = state.likedBooks.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.likedBooks = otherbooks;
    },

    addToBuyNowCheckOut: (state, action) => {
      state.buyNowCheckout = [action.payload];
    },

    addToCheckOut: (state, action) => {
      state.checkout = action.payload;
    },
    clearCheckOut: (state) => {
      state.checkout = null;
    },
    clearBuyNowCheckOut: (state) => {
      state.buyNowCheckout = [];
    },
    clearBuyNShoppingBag: (state) => {
      state.shoppingBagBuyNow = [];
    },
    clearShoppingBag: (state) => {
      state.shoppingBag = [];
    },
    bookReset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.error = null;
      state.orderMessage = null;
      state.orderSuccess = false;
    },

    clearUserPreference: (state) => {
      state.shoppingBag = [];
      state.likedBooks = [];
      state.recommendedBooks = [];
      state.shoppingBag = [];
      state.shoppingBagBuyNow = null;
      state.buyNowCheckout = [];
      state.checkout = null;
      state.isPaymentSuccessFull = false;
      state.orderSuccess = false;
    },

    addToBag: (state, action) => {
      const bookExist = state.shoppingBag?.filter((item) => {
        return state.shoppingBag.length !== 0 && item?.id === action.payload.id;
      });

      if (bookExist.length === 0) {
        state.shoppingBag.push(action.payload);
      }
      return state;
    },
    removeFromBag: (state, action) => {
      const otherbooks = state.shoppingBag.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.shoppingBag = otherbooks;
    },

    // commentOnABook: (state, action) => {
    //   const otherbooks = state.booksInStock.filter((item) => {
    //     return item.id !== action.payload?.id;
    //   });
    //   state.booksInStock = otherbooks;
    //   state.booksInStock.push(action.payload);
    //   return state;
    // },
    buyBookNow: (state, action) => {
      state.shoppingBagBuyNow = action.payload;
    },
    clearBuyBookNow: (state, action) => {
      state.shoppingBagBuyNow = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.booksFromServer = action.payload;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(getAllBookCategories.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getAllBookCategories.fulfilled, (state, action) => {
        state.bookCategories = action.payload.data;
        state.isSuccess = true;
        state.isLoading = false;
      })
      .addCase(getAllBookCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.commentMessage = action.payload;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.orderMessage = action.payload;
        state.orderSuccess = true;
        state.isLoading = false;
        state.error = null;
        state.isError = false;
      })
      .addCase(sendOrder.pending, (state) => {
        state.isLoading = true;
        state.isOrderError = false;
        state.orderError = null;
      })

      .addCase(sendOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isOrderError = true;
        state.orderError = action.payload;
        state.orderSuccess = false;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.customerOrders = action.payload;
        state.orderSuccess = true;
        state.isLoading = false;
        state.orderError = null;
        state.isOrderError = false;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orderDeleteMessage = action.payload;
      })
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })

      .addCase(verifyPay.fulfilled, (state, action) => {
        state.paymentVerified = action.payload;
        state.isPaymentLoading = false;
        state.isPaymentSuccessFull = true;
        state.error = null;
        state.isError = false;
      })
      .addCase(verifyPay.pending, (state) => {
        state.isPaymentLoading = true;
      })

      .addCase(verifyPay.rejected, (state, action) => {
        state.isPaymentLoading = false;
        state.isError = true;
        state.error = action.payload;
        state.isPaymentSuccessFull = false;
      });

    // .addCase(getCart.fulfilled, (state, action) => {
    //   state.cartFromServer = action.payload;
    //   state.isSuccess = true;
    //   state.isLoading = false;
    // })
    // .addCase(getCart.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.error = action.payload;
    // })
    // .addCase(addToCart.fulfilled, (state, action) => {
    //   state.addAndRemoveFromCartMessages = action.payload;
    // })

    // .addCase(removeFromCart.fulfilled, (state, action) => {
    //   state.addAndRemoveFromCartMessages = action.payload;
    // });
  },
});

export const {
  addAFavoriteBook,
  removeFavoriteBook,
  addToBag,
  removeFromBag,
  commentOnABook,
  buyBookNow,
  clearBuyBookNow,
  addToBuyNowCheckOut,
  addToCheckOut,
  clearBuyNowCheckOut,
  clearCheckOut,
  clearBuyNShoppingBag,
  clearShoppingBag,
  clearUserPreference,
  bookReset,
} = bookSlice.actions;
export default bookSlice.reducer;
