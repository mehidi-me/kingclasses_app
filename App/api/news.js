import client from "./client";

const getNews = () => client.get("/news");

export default {
  getNews,
};
