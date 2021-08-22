<<<<<<< HEAD
import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import AuthContext from '../auth/context';

const ActivityIndicator = ({visible = false}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);
  // const showAds = async () => {

  // };
  // useEffect(() => {
  //   if (visible) {
  //     showAds();
  //   }
  //   return () => {
  //     AdMobInterstitial.removeAllListeners();
  //   };
  // }, [visible]);
=======
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

const ActivityIndicator = ({ visible = false }) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
<<<<<<< HEAD
        source={require('../assets/animations/loading2.json')}
=======
        source={require("../assets/animations/loader.json")}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      />
    </View>
  );
};

export default ActivityIndicator;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 999,
      backgroundColor: theme.primary,
      opacity: 0.8,
    },
  });
=======
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    backgroundColor: colors.primary,
    opacity: 0.8
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
