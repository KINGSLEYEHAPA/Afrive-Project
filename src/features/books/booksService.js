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

const sendComment = async (token, commentData, id) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(
    `${API_URL}review/${id}`,
    commentData,
    config
  );

  return response.data;
};

const updateComment = async (token, commentData, id) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.put(
    `${API_URL}review/${id}`,
    commentData,
    config
  );

  return response.data;
};
const sendOrder = async (token, userOrder) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(`${API_URL}order/`, userOrder, config);

  return response.data;
};

const getOrder = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`${API_URL}order/`, config);

  return response.data;
};
const deleteOrder = async (token, orderId) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.delete(`${API_URL}order/${orderId}`, config);

  return response.data;
};

const bookRecommendation = async () => {
  const response = await axios.get(
    "https://afrive-book-recommender.herokuapp.com/api/v1/predict"
  );

  return response.data;
};
const verifyPay = async (token, reference) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(
    `${API_URL}order/${reference}/verify`,
    config
  );

  return response.data;
};

const booksService = {
  getAllBooks,
  getAllBookCategories,
  sendComment,
  sendOrder,
  getOrder,

  verifyPay,
  deleteOrder,
  updateComment,
  bookRecommendation,
};

export default booksService;
