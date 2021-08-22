<<<<<<< HEAD
import {useState} from 'react';
import useAuth from '../auth/useAuth';
import useToast from './useToast';
import NetInfo from '@react-native-community/netinfo';
import {BackHandler} from 'react-native';
import useAlert from './useAlert';
// import {AdMobInterstitial} from 'react-native-admob@next';

export default useApi = apiFunc => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({ok: true, message: ''});
  const [loading, setLoading] = useState(false);
  const showToast = useToast();
  const {logOut} = useAuth();
  const showAlert = useAlert();

  const request = async (value, adsNotShow) => {
    setLoading(true);

    // if (!adsNotShow) {
    //   AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
    //   AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    // }

    NetInfo.fetch().then(async state => {
      if (!state.isConnected) {
        showAlert({
          message: `Check your internet connection and try again.`,
          rightButtonTitle: 'Ok',
          action: () => {
            BackHandler.exitApp();
          },
        });
      }
    });

    const res = await apiFunc(value);
    setLoading(false);

    if (res) {
      if (!res.ok) {
        if (res.status == 401) {
          logOut();
        }
        setError(res.data);
        showToast({message: 'Something wrong try again.'});
        res.data?.message && showToast({message: res.data?.message});
      } else {
        setData(res);
      }
=======
import { useState } from "react";
import useToast from "./useToast";

export default useApi = apiFunc => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({ ok: true, message: "" });
  const [loading, setLoading] = useState(false);
  const showToast = useToast();

  const request = async value => {
    setLoading(true);
    const res = await apiFunc(value);
    setLoading(false);
    //console.log(res);
    if (!res.ok) {
      setError(res.data);
      res.data.message && showToast({ message: res.data.message });
    } else {
      setData(res);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    }

    return res;
  };
<<<<<<< HEAD
  return {data, error, loading, setLoading, request};
=======
  return { data, error, loading, setLoading, request };
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
};
