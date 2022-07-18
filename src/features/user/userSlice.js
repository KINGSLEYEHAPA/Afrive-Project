import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoadingGoogle: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
  isSuccess: false,
  google: null,
  isGoogleError: false,
  verified: null,
  resetMessage: null,
  passwordResetEmail: null,
  userInfo: null,
  deliveryAddress: null,
  logoutMessage: null,
  registerMessage: null,
  verifiedMessage: null,
  loginMessage: null,
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
// Registration Verification
export const verifyRegister = createAsyncThunk(
  "user/verifyRegister",
  async (url, thunkAPI) => {
    try {
      return await authService.verifyRegister(url);
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

//Forgot Password

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email, thunkAPI) => {
    try {
      return await authService.forgotPassword(email);
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

//Reset Password
export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (userData, thunkAPI) => {
    try {
      return await authService.forgotPassword(userData);
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
//logOut
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
      state.isLoadingGoogle = false;
      state.isGoogleError = false;
      state.verified = null;
      state.resetMessage = null;
      state.logoutMessage = null;
      state.registerMessage = null;
      state.verifiedMessage = null;
      state.loginMessage = null;
    },
    addUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    addDeliveryLocation: (state, action) => {
      state.deliveryAddress = action.payload;
    },

    // updatePayment: (state, action) => {
    //   state.userInfo.payment = action.payload.payment;
    // },
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
        state.registerMessage = "Registration successful,Check your mail";
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.user = null;
      })

      .addCase(verifyRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.verified = action.payload;
        state.verifiedMessage = "Verification Successful";
      })
      .addCase(verifyRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resetMessage = action.payload.message;
        state.passwordResetEmail = action.payload.data.email;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.resetMessage = action.payload.message;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.loginMessage = "Login was Successful";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.logoutMessage = "Logged Out Successfully";
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
        state.loginMessage = "Login was Successful";
        state.user = action.payload;
      })
      .addCase(verifyGoogleLogin.rejected, (state, action) => {
        state.isLoadingGoogle = false;
        state.isGoogleError = true;
        state.errorMessage = action.payload;
        state.user = null;
      });
  },
});

export const { reset, updatePayment, addUserInfo, addDeliveryLocation } =
  userSlice.actions;

export default userSlice.reducer;
