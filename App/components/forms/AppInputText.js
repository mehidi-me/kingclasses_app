<<<<<<< HEAD
import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthContext from '../../auth/context';

const AppInputText = ({icon, width = '100%', ...otherProps}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  return (
    <View style={[styles.container, {width}]}>
      {/* {icon && (
        <MaterialCommunityIcons name={icon} size={22} color={theme.grey} />
      )} */}
      <TextInput
        {...otherProps}
        placeholderTextColor={theme.grey}
=======
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const AppInputText = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={22} color={colors.grey} />
      )}
      <TextInput
        {...otherProps}
        placeholderTextColor={colors.grey}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
        style={styles.textInput}
      />
    </View>
  );
};

export default AppInputText;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderRadius: 20,
      backgroundColor: theme.primary2,
      paddingHorizontal: 12,
      marginVertical: 10,
      alignItems: 'center',
      shadowColor: theme.secondary,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
    },
    textInput: {
      width: '95%',
      padding: 12,
      fontSize: 18,
      fontFamily: 'Roboto',
      color: theme.textColor,
      borderColor: 'transparent',
    },
  });
=======
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: colors.light,
    paddingHorizontal:12,
    marginVertical: 10,
    alignItems:'center'
  },
  textInput: {
    width: "95%",
    padding:12,
    fontSize: 18,
    fontFamily: "Roboto",
    color: colors.dark,
    borderColor: "transparent"
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
