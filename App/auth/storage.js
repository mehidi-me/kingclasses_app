<<<<<<< HEAD
// import * as SecureStore from "expo-secure-store";
import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'authToken';

const userKey = 'userData';

const storeToken = async authToken => {
  try {
    await AsyncStorage.setItem(key, authToken);
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};
const storeUserData = async userData => {
  try {
    await AsyncStorage.setItem(userKey, JSON.stringify(userData));
  } catch (error) {
    console.log('Error storing the auth token', error);
=======
import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  }
};

const getToken = async () => {
  try {
<<<<<<< HEAD
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};

const getUserData = async () => {
  try {
    return await AsyncStorage.getItem(userKey);
  } catch (error) {
    console.log('Error getting the auth token', error);
=======
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  }
};

const removeToken = async () => {
  try {
<<<<<<< HEAD
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing the auth token', error);
  }
};

const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem(userKey);
  } catch (error) {
    console.log('Error removing the auth token', error);
=======
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  }
};

export default {
  storeToken,
  getToken,
<<<<<<< HEAD
  removeToken,
  storeUserData,
  getUserData,
  removeUserData,
=======
  removeToken
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
};
