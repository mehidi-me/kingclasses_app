<<<<<<< HEAD
import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import AppContext from '../auth/context';

const AppText = ({children, style, ...otherProps}) => {
  const {theme} = useContext(AppContext);
  const styles = useStyles(theme);
=======
import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const AppText = ({ children, style, ...otherProps }) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    text: {
      letterSpacing: 1,
      fontSize: 18,
      fontFamily: 'MontserratRegular',
      color: theme.textColor,
    },
  });
=======
const styles = StyleSheet.create({
  text: {
    letterSpacing: 1,
    fontSize: 18,
    fontFamily: "Roboto",
    color:colors.black
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
