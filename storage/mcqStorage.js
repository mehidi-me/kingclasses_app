// import * as SecureStore from "expo-secure-store";
import AsyncStorage from '@react-native-async-storage/async-storage';

const totalMcqGet = async key => {
  try {
    return await AsyncStorage.getItem('key_' + key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};
const rightMcqGet = async key => {
  try {
    return await AsyncStorage.getItem('key_r' + key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};
const comMcqGet = async key => {
  try {
    return await AsyncStorage.getItem('key_c' + key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};
const doneMcqGet = async key => {
  try {
    return await AsyncStorage.getItem('key_d' + key);
  } catch (error) {
    console.log('Error getting the auth token', error);
  }
};

const totalMcqSet = async (key, total) => {
  try {
    await AsyncStorage.setItem('key_' + key, total.toString());
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};
const rightMcqSet = async (key, total) => {
  try {
    await AsyncStorage.setItem('key_r' + key, total.toString());
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};
const comMcqSet = async (key, total) => {
  try {
    await AsyncStorage.setItem('key_c' + key, total.toString());
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};
const doneMcqSet = async key => {
  try {
    await AsyncStorage.setItem('key_d' + key, 'done');
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};

export default {
  totalMcqGet,
  rightMcqGet,
  comMcqGet,
  doneMcqGet,
  totalMcqSet,
  rightMcqSet,
  comMcqSet,
  doneMcqSet,
};
