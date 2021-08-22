<<<<<<< HEAD
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthContext from "../../auth/context";
import AppText from "../AppText";

const ErrorMessage = ({ error, visible }) => {
  const { theme } = useContext(AuthContext);
  const styles = useStyles(theme);

=======
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const ErrorMessage = ({ error, visible }) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  if (!visible || !error) return null;

  return <AppText style={styles.text}>{error}</AppText>;
};

export default ErrorMessage;

<<<<<<< HEAD
const useStyles = (theme) =>
  StyleSheet.create({
    text: {
      color: theme.secondary,
    },
  });
=======
const styles = StyleSheet.create({
  text: {
    color: colors.secondary
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
