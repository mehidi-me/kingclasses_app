<<<<<<< HEAD
import {create} from 'apisauce';
import storage from '../auth/storage';

const apiClient = create({
  baseURL: 'https://api.kingclasses.net/api/v1',
  //baseURL: 'http://192.168.0.104:3002/api/v1',
});

apiClient.addAsyncRequestTransform(async req => {
=======
import { create } from "apisauce";
import storage from "../auth/storage";

const apiClient = create({
  // baseURL: "https://kingclasses.herokuapp.com/api/v1"
  baseURL: "http://192.168.0.104:3001/api/v1",
});

apiClient.addAsyncRequestTransform(async (req) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  const authToken = await storage.getToken();

  if (!authToken) return;

<<<<<<< HEAD
  req.headers['Authorization'] = `Bearer ${authToken}`;
  // req.headers['contentType'] = 'application/json; charset=utf-8';
=======
  req.headers["Authorization"] = `Bearer ${authToken}`;
  req.headers["contentType"] = "application/json; charset=utf-8";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
});

export default apiClient;
