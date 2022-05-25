import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addABook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addABook } = bookSlice.actions;
export default bookSlice.reducer;
