import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booksInStock: [],
  likedBooks: [],
  recommendedBooks: [],
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
  },
});

export const { addAFavoriteBook, removeFavoriteBook } = bookSlice.actions;
export default bookSlice.reducer;
