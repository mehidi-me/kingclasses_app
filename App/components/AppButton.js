<<<<<<< HEAD
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AuthContext from "../auth/context";

import AppText from "./AppText";

const AppButton = ({ color = "primary", title, onPress, width = "70%" }) => {
  const { theme } = useContext(AuthContext);
  const styles = useStyles(theme);
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.secondary, width }]}
=======
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const AppButton = ({ color = "primary", title, onPress, width = "100%" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color], width }]}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      onPress={onPress}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

<<<<<<< HEAD
const useStyles = (theme) =>
  StyleSheet.create({
    button: {
      borderRadius: 25,
      padding: 15,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#fff",
    },
  });
=======
const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.white
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
