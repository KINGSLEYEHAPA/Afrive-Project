import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoadingGoogle: false,
  isLoading: false,
  isError: false,
  errorMessage: false,
  isSuccess: false,
  google: null,
};

export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
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
//Login User
export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});
// Google Url fetch
export const googleLogin = createAsyncThunk(
  "user/googleLogin",
  async (thunkAPI) => {
    try {
      return await authService.handleLoginWithGoogle();
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

// Google Login Verification
export const verifyGoogleLogin = createAsyncThunk(
  "user/verifyGoogleLogin",
  async (url, thunkAPI) => {
    try {
      return await authService.verifyGoogleLogin(url);
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

export const logout = createAsyncThunk("user/logout", async () => {
  await authService.logout();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.user = null;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.google = action.payload.data;
      })
      .addCase(verifyGoogleLogin.pending, (state) => {
        state.isLoadingGoogle = true;
      })
      .addCase(verifyGoogleLogin.fulfilled, (state, action) => {
        state.isLoadingGoogle = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(verifyGoogleLogin.rejected, (state, action) => {
        state.isLoadingGoogle = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;
