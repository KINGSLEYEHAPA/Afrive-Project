import axios from "axios";
const API_URL = "https://afrive-book-store.herokuapp.com/api/v1/";

const getAllBooks = async () => {
  // console.log(token);
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  const response = await axios.get(API_URL + "book");

  return response.data;
};
const getAllBookCategories = async () => {
  // console.log(token);
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  const response = await axios.get(API_URL + "category");

  return response.data;
};

const addToCart = async (token, id) => {
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(`${API_URL}cart/${id}`, config);

  return response.data;
};
const removeFromCart = async (token, id) => {
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.delete(`${API_URL}cart/${id}`, config);

  return response.data;
};

const getCart = async (token) => {
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(API_URL + "cart", config);

  return response.data;
};

const booksService = {
  getAllBooks,
  getAllBookCategories,
  addToCart,
  removeFromCart,
  getCart,
};

export default booksService;
