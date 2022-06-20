import axios from "axios";

const API_URL = "https://afrive-book-store.herokuapp.com/api/v1/auth/";
const SERVER_BASE_URL =
  "https://afrive-book-store.herokuapp.com/api/v1/auth/google-login";

//Register User
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
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
};

export default authService;
