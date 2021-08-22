import client from "./client";

const getMath = mathID => client.get(`/math/${mathID}`);

export default {
  getMath
};
