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

const booksService = {
  getAllBooks,
  getAllBookCategories,
  sendComment,
};

export default booksService;
