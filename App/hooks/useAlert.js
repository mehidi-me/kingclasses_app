<<<<<<< HEAD
import {useContext, useEffect} from 'react';
import AuthContext from '../auth/context';
//import { Audio } from "expo-av";
=======
import { useContext, useEffect } from "react";
import AuthContext from "../auth/context";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

const useAlert = () => {
  useEffect(() => {
    const abortController = new AbortController();
    return () => {
      abortController.abort();
    };
  }, []);

<<<<<<< HEAD
  const {alert, setAlert} = useContext(AuthContext);

  const showAlert = value => {
    //sound.playAsync();
    // Audio.Sound.createAsync(require("../assets/audio/alert.mp3")).then((v) =>
    //   v.sound.playAsync()
    // );
    if (!value) return setAlert({...alert, visible: true});
    setAlert({...value, visible: true});
=======
  const { alert, setAlert } = useContext(AuthContext);

  const showAlert = value => {
    if (!value) return setAlert({ ...alert, visible: true });
    setAlert({ ...value, visible: true });
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  };

  return showAlert;
};

export default useAlert;
