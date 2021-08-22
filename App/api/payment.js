import client from "./client";

const paymentReq = async vlaue => {
  return await client.post("payment/paymentreq", vlaue);
};

const paymentReqGet = () => client.get("payment/paymentreq");
export default {
  paymentReq,
  paymentReqGet
};
