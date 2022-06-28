import axios from "axios";
const API_URL = "https://afrive-book-store.herokuapp.com/api/v1/book";

const getAllBooks = async (token) => {
  const config = {
    headers: { Authorisation: `Bearer ${token}` },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const booksService = {
  getAllBooks,
};

export default booksService;
