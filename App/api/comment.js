import client from "./client";

const insertComment = async commentObj => {
  return await client.post("/math/comment", commentObj);
};
const getComment = mathId => client.get(`/math/comment/${mathId}`);

export default {
  insertComment,
  getComment
};
