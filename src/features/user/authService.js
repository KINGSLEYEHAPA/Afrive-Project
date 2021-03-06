import axios from "axios";

const API_URL = "https://afrive-book-store.herokuapp.com/api/v1/auth/";
const SERVER_BASE_URL =
  "https://afrive-book-store.herokuapp.com/api/v1/auth/google-login";
const FORGOT_PASSWORD =
  "https://afrive-book-store.herokuapp.com/api/v1/auth/send-reset-password-link";

const RESET_PASSWORD =
  "https://afrive-book-store.herokuapp.com/api/v1/auth/reset-password";

//Register User
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  return response.data;
};

//Login User

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Forgot Password

const forgotPassword = async (email) => {
  const response = await axios.post(FORGOT_PASSWORD, email);

  return response.data;
};

//Reset Password
const resetPassword = async (userData) => {
  const response = await axios.post(RESET_PASSWORD, userData);

  return response.data;
};

const verifyRegister = async (url) => {
  const response = await axios.get(
    "https://afrive-book-store.herokuapp.com" + url
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout User

const logout = async () => {
  localStorage.removeItem("user");
};

// Google Auth
const handleLoginWithGoogle = async () => {
  const res = await axios.get(
    "https://afrive-book-store.herokuapp.com/api/v1/auth/google-login-url"
  );
  return res.data;
};

//Google verifification
const verifyGoogleLogin = async (url) => {
  const res = await axios.post(SERVER_BASE_URL + url);
  return res.data;
};

const authService = {
  register,
  logout,
  login,
  handleLoginWithGoogle,
  verifyGoogleLogin,
  verifyRegister,
  forgotPassword,
  resetPassword,
};

export default authService;
