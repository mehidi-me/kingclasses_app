<<<<<<< HEAD
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import AuthContext from "../auth/context";

const ListItemSeparator = () => {
  const { theme } = useContext(AuthContext);
  const styles = useStyles(theme);

=======
import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

const ListItemSeparator = () => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  return <View style={styles.separator} />;
};

export default ListItemSeparator;

<<<<<<< HEAD
const useStyles = (theme) =>
  StyleSheet.create({
    separator: {
      width: "100%",
      height: 1,
      backgroundColor: theme.secondary,
    },
  });
=======
const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.secondary
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
