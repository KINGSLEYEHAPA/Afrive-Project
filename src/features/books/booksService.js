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
  console.log(token);
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
const sendOrder = async (token, userOrder) => {
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(`${API_URL}order/`, userOrder, config);

  return response.data;
};

const getOrder = async (token) => {
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(`${API_URL}order/`, config);

  return response.data;
};
const pay = async (token, payData) => {
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.post(
    `${API_URL}paystack/${payData.orderId}/pay/`,
    payData,
    config
  );

  return response.data;
};
const verifyPay = async (token, orderId) => {
  console.log(token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(
    `${API_URL}paystack/${orderId}/pay/`,
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
  pay,
  verifyPay,
};

export default booksService;
