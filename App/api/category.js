import client from "./client";

const getCategory = () => client.get("/category");

export default {
  getCategory
};
