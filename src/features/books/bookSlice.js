import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booksInStock: [],
  likedBooks: [],
  recommendedBooks: [],
  shoppingBag: [],
};

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
  },
});

export const { addAFavoriteBook, removeFavoriteBook, addToBag, removeFromBag } =
  bookSlice.actions;
export default bookSlice.reducer;
