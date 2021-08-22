<<<<<<< HEAD
import React, {useContext} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import AppContext from '../auth/context';
// import {TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';

const AppScreen = ({children, style}) => {
  const {theme} = useContext(AppContext);
  const styles = useStyles(theme);
  return (
    <ImageBackground
      //source={require("../assets/backgroun.jpg")}
      style={{
        flex: 1,
        backgroundColor: theme.primary,
        // paddingBottom: 20,
      }}>
      {children}
      {/* <BannerAd
        adSize="fullBanner"
        unitId="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        size={BannerAdSize.FULL_BANNER}
      /> */}
    </ImageBackground>
=======
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "../config/colors";
//import Constants from "expo-constants";

const AppScreen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View>{children}</View>
      <StatusBar backgroundColor={colors.primary} />
    </SafeAreaView>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  );
};

export default AppScreen;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    screen: {
      paddingTop: 25,
      flex: 1,
    },
  });
=======
const styles = StyleSheet.create({
  screen: {
    paddingTop: 25,
    flex: 1
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
