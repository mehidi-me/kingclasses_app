<<<<<<< HEAD
import {useContext, useEffect} from 'react';
import {Alert, BackHandler} from 'react-native';

import storage from './storage';
import AuthContext from './context';
import auth from './auth';
=======
import { useContext, useEffect } from "react";
import storage from "./storage";
import AuthContext from "./context";
import auth from "./auth";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

const useAuth = () => {
  useEffect(() => {
    const abortController = new AbortController();
    return () => {
      abortController.abort();
    };
  }, []);
<<<<<<< HEAD
  const {user, setUser} = useContext(AuthContext);
=======
  const { user, setUser } = useContext(AuthContext);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

  const login = async (data, setLoading) => {
    //setLoading(true);
    storage.storeToken(data);
    const res = await auth.getUser();
    //console.log(res);
<<<<<<< HEAD
    if (res.ok) {
      setUser(res.data.data);
      storage.storeUserData(res.data.data);
    } else {
      Alert.alert('Kingclasses', res.data.message, [
        {
          text: 'Exit',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);
    }
=======
    if (res.ok) setUser(res.data.data);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    //setLoading(false);
  };

  const logOut = () => {
    setUser(null);
    storage.removeToken();
<<<<<<< HEAD
    storage.removeUserData();
  };

  return {user, login, logOut, setUser};
=======
  };

  return { user, login, logOut, setUser };
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
};

export default useAuth;
