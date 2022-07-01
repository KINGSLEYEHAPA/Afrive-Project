import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "./booksService";

const initialState = {
  booksInStock: [
    {
      id: 1,
      title: "There was a Country",
      author: "Chinua Achebe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSZI4k6afyB1AUj8OR74jFcsaYr2E6NkHLg&usqp=CAU",
      description:
        "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
      price: 8000,
      status: "in stock",

      category: ["Action", "Adventure", "Fantasy", "Drama"],

      eBook: { status: true, format: ["PDF", "MOBI", "EPUB"] },
      bookRating: {
        averageRating: 4.2,
        ratings: [
          {
            name: "P. John",
            comment: "A great book! What a read!",
            starRating: 5,
          },
          {
            name: "Joshua Oyedepo",
            comment: "I love this book.She is good writer",
            starRating: 5,
          },
          {
            name: "Pamela Faith",
            comment:
              "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
            starRating: 2,
          },
          {
            name: "Ade Kay Johnson",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Adewole Femi John",
            comment: "A great book! What a read!",
            starRating: 5,
          },
        ],
      },
    },
    {
      id: 2,
      title: "Half of a Yellow Sun",
      author: "Chimamanda Adieche",
      img: "https://farafinabooks.files.wordpress.com/2013/04/half-of-a-yellow-sun.jpg",
      description:
        "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
      price: 10000,
      status: "in stock",

      category: ["Action", "Adventure", "Fantasy", "Drama"],

      eBook: { status: false, format: [] },
      bookRating: {
        averageRating: 4.2,
        ratings: [
          {
            name: "King John",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Joshua Oyedepo",
            comment: "I love this book.She is good writer",
            starRating: 5,
          },
          {
            name: "Pamela Obodo",
            comment:
              "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
            starRating: 3,
          },
          {
            name: "Kay Johnson",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Adewole Femi John",
            comment: "A great book! What a read!",
            starRating: 5,
          },
        ],
      },
    },
    {
      id: 3,
      title: "The Concubine",
      author: "Amadin Elechi",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1281647970l/1199163.jpg",
      description:
        "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
      price: 5000,
      status: "in stock",

      category: ["Action", "Adventure", "Fantasy", "Drama"],

      eBook: { status: true, format: ["PDF", "MOBI"] },
      bookRating: {
        averageRating: 3.2,
        ratings: [
          {
            name: "King John",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Joshua Oyedepo",
            comment: "I love this book.She is good writer",
            starRating: 5,
          },
          {
            name: "Pam J.",
            comment: "AFHSHFJKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
            starRating: 1,
          },
          {
            name: "Kay Johnson",
            comment: "I hate this book",
            starRating: 1,
          },
          {
            name: "Adewole Femi John",
            comment: "A great book! What a read!",
            starRating: 5,
          },
        ],
      },
    },
    {
      id: 4,
      title: "The African Child",
      author: "Camera Laye",
      img: "https://tothebalcony.files.wordpress.com/2012/08/africanchild1.jpg?w=584",
      description:
        "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
      price: 7000,
      status: "in stock",

      category: ["Action", "Adventure", "Fantasy", "Drama"],

      eBook: { status: true, format: ["PDF", "MOBI", "EPUB"] },
      bookRating: {
        averageRating: 3.2,
        ratings: [
          {
            name: "King John",
            comment: "A great book! What a read!",
            starRating: 5,
          },
          {
            name: "Joshua Oyedepo",
            comment: "I love this book.She is good writer",
            starRating: 4,
          },
          {
            name: "Pamela Obodo",
            comment:
              "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
            starRating: 2,
          },
          {
            name: "Kay Johnson",
            comment: "A great book! What a read!",
            starRating: 3,
          },
          {
            name: "Adewole Femi John",
            comment: "A great book! What a read!",
            starRating: 2,
          },
        ],
      },
    },
    {
      id: 5,
      title: "Without a Silver Spoon",
      author: "Eddie Iroh",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347325638l/2301365.jpg",
      description:
        "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
      price: 4000,
      status: "in stock",

      category: ["Poetry", "Adventure"],

      eBook: { status: true, format: ["PDF", "MOBI"] },
      bookRating: {
        averageRating: 2.6,
        ratings: [
          {
            name: "King John",
            comment: "A gre! What a read!",
            starRating: 2,
          },

          {
            name: "Pamela Obodo",
            comment:
              "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
            starRating: 3,
          },
          {
            name: "Kay Johnson",
            comment: "A great book! What a read!",
            starRating: 2,
          },
          {
            name: "Adewole Femi John",
            comment: "A great book! What a read!",
            starRating: 5,
          },
        ],
      },
    },
    {
      id: 6,
      title: "Sugar Girl",
      author: "Kola Onadipe",
      img: "https://continentalbooksgh.com/wp-content/uploads/2020/05/Sugar-Girl.jpg",
      description:
        "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
      price: 2500,
      status: "in stock",

      category: ["Action", "Adventure", "Drama"],

      eBook: { status: true, format: ["PDF", "MOBI", "EPUB"] },

      bookRating: {
        averageRating: 2,
        ratings: [
          {
            name: "King John",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Joshua Oyedepo",
            comment: "I love this book.She is good writer",
            starRating: 5,
          },
          {
            name: "Pamela Obodo",
            comment:
              "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
            starRating: 3,
          },
          {
            name: "Kay Johnson",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Adewole Femi John",
            comment: "A great book! What a read!",
            starRating: 5,
          },
        ],
      },
    },
    {
      id: 7,
      title: "Chike and the River",
      author: "Chinua Achebe",
      img: "https://folioreview.files.wordpress.com/2020/04/f21df8d465645236f369031b1dda8746.jpg",
      description:
        "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
      price: 4500,
      status: "in stock",

      category: ["Action", "Adventure", "Drama", "Children"],

      eBook: { status: true, format: ["MOBI", "EPUB"] },
      bookRating: {
        averageRating: 2,
        ratings: [
          {
            name: "King John",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Joshua Oyedepo",
            comment: "I love this book.She is good writer",
            starRating: 5,
          },
          {
            name: "Pamela Obodo",
            comment:
              "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
            starRating: 3,
          },
          {
            name: "Kay Johnson",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Adewole Femi John",
            comment: "A great book! What a read!",
            starRating: 5,
          },
        ],
      },
    },
    {
      id: 8,
      title: "Adventures of Souza",
      author: "Kola Onadipe",
      img: "https://covers.openlibrary.org/b/id/8494992-M.jpg",
      description:
        "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
      price: 1500,
      status: "in stock",

      category: ["Action", "Adventure", "Drama"],

      eBook: { status: false, format: [] },
      bookRating: {
        averageRating: 2,
        ratings: [
          {
            name: "King John",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Joshua Oyedepo",
            comment: "I love this book.She is good writer",
            starRating: 5,
          },
          {
            name: "Pamela Obodo",
            comment:
              "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
            starRating: 3,
          },
          {
            name: "Kay Johnson",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Adewole Femi John",
            comment: "A great book! What a read!",
            starRating: 5,
          },
        ],
      },
    },
    {
      id: 9,
      title: "Shaka Zulu",
      author: "E.A. Ritter",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OEpvX9f9lrxQI8Og49F9hs65v6QMjOWlXA&usqp=CAU",
      description:
        "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
      price: 6000,
      status: "in stock",

      category: ["Action", "Adventure", "Drama", "Autobiography"],

      eBook: { status: true, format: ["PDF", "MOBI", "EPUB"] },
      bookRating: {
        averageRating: 3,
        ratings: [
          {
            name: "King John",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Joshua Oyedepo",
            comment: "I love this book.She is good writer",
            starRating: 5,
          },
          {
            name: "Pamela Obodo",
            comment:
              "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
            starRating: 3,
          },
          {
            name: "Kay Johnson",
            comment: "A great book! What a read!",
            starRating: 4,
          },
        ],
      },
    },
    {
      id: 10,
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZsNEnyODRqOnSFFr96JB5iXlsvs27w9c7e-Kb4K12opn26zK-Pt8piC1FCyZ8KJy2gU&usqp=CAU",
      description:
        "lorem jsdsh ikkkad hhjkjaa jkhjsks jkhsk js jusuhds ggtgywjhws n lorem djsjds loejh jklsdj kjsdjksdshn nf ndjh",
      price: 8000,
      status: "in stock",

      category: ["Action", "Adventure", "Drama", "Fantasy"],

      eBook: { status: true, format: ["PDF", "MOBI", "EPUB"] },
      bookRating: {
        averageRating: 5,
        ratings: [
          {
            name: "King John",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Joshua Oyedepo",
            comment: "I love this book.She is good writer",
            starRating: 5,
          },
          {
            name: "Pamela Obodo",
            comment:
              "AFHSHF JKFHKHSF JKKSLJ SFJS JFSJ JKSFHKFKJS KJSFHS KJHSFKS!",
            starRating: 3,
          },
          {
            name: "Kay Johnson",
            comment: "A great book! What a read!",
            starRating: 4,
          },
          {
            name: "Adewole Femi John",
            comment: "A great book! What a read!",
            starRating: 5,
          },
        ],
      },
    },
  ],
  likedBooks: [],
  recommendedBooks: [],
  shoppingBag: [],
  shoppingBagBuyNow: null,
  buyNowCheckout: [],
  checkout: [],
  booksFromServer: null,
  isLoading: false,
  isError: false,
  error: null,
  isSuccess: false,
};

export const getAllBooks = createAsyncThunk(
  "user/getAllBooks",
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

    commentOnABook: (state, action) => {
      const otherbooks = state.booksInStock.filter((item) => {
        return item.id !== action.payload?.id;
      });
      state.booksInStock = otherbooks;
      state.booksInStock.push(action.payload);
      return state;
    },
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
      });
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
} = bookSlice.actions;
export default bookSlice.reducer;
