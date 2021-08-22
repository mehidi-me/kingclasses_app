import client from "./client";

const getBooks = () => client.get("/book");

<<<<<<< HEAD
const getSingelBook = (id) => client.get("/book/" + id);

const bookPurchased = (value) => client.get("/book/purchased", value);
const getNews = () => client.get("/book/getnews");
=======
const getSingelBook = id => client.get("/book/" + id);

const bookPurchased = value => client.post("/book/purchased", value);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

export default {
  getBooks,
  getSingelBook,
<<<<<<< HEAD
  bookPurchased,
  getNews,
=======
  bookPurchased
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
};
