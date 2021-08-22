<<<<<<< HEAD
import React from 'react';
import {StyleSheet, View, Image, StatusBar, Alert} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {LoginButton} from 'react-native-fbsdk-next';

import Text from '../components/AppText';
import Button from '../components/AppButton';
import googleAuth from '../auth/googleAuth';
import {useEffect, useContext} from 'react';
import ActivityIndicator from '../components/ActivityIndicator';
import {useState} from 'react';
import auth from '../auth/auth';
import storage from '../auth/storage';
import {BackHandler} from 'react-native';
import useAuth from '../auth/useAuth';
import ButtonAuth from '../components/ButtonAuth';
import facebookAuth from '../auth/facebookAuth';
import OneSignal from 'react-native-onesignal';

const WelcomeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const {login} = useAuth();
  const {request} = useApi(auth.register);

  const handleSubmit = async value => {
    try {
      const res = await request(value, true);
      if (res.ok) {
        await login(res.data.jwtToken);
        OneSignal.setExternalUserId(value.email, res.data.onsignalHas);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const authLogin = async type => {
    try {
      setLoading(true);
      const user = type == 'google' ? await googleAuth() : await facebookAuth();

      if (user) {
        if (user.email != null) {
          await handleSubmit(user);
        } else {
          console.log('error');
          Alert.alert(
            'Kingclasses',
            'Your facebook account email not exist please continue with google.',
            [
              {
                text: 'OK',
              },
            ],
          );
        }
        setLoading(false);
      } else {
        setLoading(false);
        Alert.alert('Kingclasses', 'something went wrong try again.', [
          {
            text: 'OK',
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <View style={styles.Background}>
        <ActivityIndicator visible={loading} />
        <View style={styles.logoContainer}>
          <Image source={require('../assets/icon.png')} style={styles.logo} />
          <Text style={styles.tagline}>Kingclasses</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={{alignItems: 'center', marginBottom: 20}}>
            <GoogleSigninButton
              style={{
                height: 55,
                width: '100%',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
              }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={() => authLogin('google')}
              disabled={loading ? true : false}
              // disabled={this.state.isSigninInProgress}
            />
          </View>
          <ButtonAuth
            disabled={loading ? true : false}
            title="Continue with Facebook"
            Icon={() => (
              <FontAwesome5 name="facebook" size={28} color="white" />
            )}
            color="#1877f2"
            onPress={() => authLogin('facebook')}
          />
        </View>
        <View style={{alignItems: 'center', marginBottom: 20}}></View>
      </View>
    </>
=======
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import colors from "../config/colors";
import Text from "../components/AppText";
import Button from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.Background}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/king-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>Kingclasses</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="login"
          color="secondary"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <StatusBar backgroundColor={colors.primary} />
    </View>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
<<<<<<< HEAD
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    marginVertical: 20,
    color: '#333',
  },
=======
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.white
  },
  buttonsContainer: {
    width: "100%",
    padding: 20
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center"
  },
  logo: {
    width: 120,
    height: 120
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 20
  }
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
});
