import axios from "axios";
const API_URL = "https://afrive-book-store.herokuapp.com/api/v1/book";

const getAllBooks = async () => {
  // console.log(token);
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };
  const response = await axios.get(API_URL);

  return response.data;
};

const booksService = {
  getAllBooks,
};

export default booksService;
