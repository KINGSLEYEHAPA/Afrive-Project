import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../features/books/bookSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userReducer,
  },
});
