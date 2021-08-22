<<<<<<< HEAD
import React, {useContext} from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import AppText from './AppText';
import AppContext from '../auth/context';
import FastImage from 'react-native-fast-image';

const AppListItem = ({
  imageUrl,
  title,
  subTitle,
  onPress,
  style,
  isRead = false,
}) => {
  const {theme} = useContext(AppContext);
  const styles = useStyles(theme);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <FastImage
          style={styles.image}
          source={imageUrl}
          resizeMode={FastImage.resizeMode.contain}
        />
        {/* <Image source={imageUrl} style={styles.image} /> */}
        <View style={styles.contents}>
          <AppText
            style={{
              textTransform: 'capitalize',
              fontWeight: '600',
              color: isRead ? theme.grey : theme.white,
              fontSize: isRead ? 14 : 18,
            }}
            numberOfLines={1}>
            {title}
          </AppText>
          {subTitle && (
            <AppText
              style={[styles.subTitle, {fontSize: isRead ? 12 : 16}]}
              numberOfLines={2}>
=======
import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

const AppListItem = ({
  imageUrl,
  ImageComponent,
  title,
  subTitle,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {ImageComponent}
        {imageUrl && <Image source={imageUrl} style={styles.image} />}
        <View style={styles.contents}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          {subTitle && (
            <AppText style={styles.subTitle} numberOfLines={2}>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
              {subTitle}
            </AppText>
          )}
        </View>
<<<<<<< HEAD
        <MaterialIcons
          color={theme.grey}
          name="keyboard-arrow-right"
=======
        <MaterialCommunityIcons
          color={colors.grey}
          name="chevron-right"
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AppListItem;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 5,
      backgroundColor: theme.primary2,
      alignItems: 'center',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    contents: {
      marginLeft: 10,
      justifyContent: 'center',
      flex: 1,
    },

    subTitle: {
      color: theme.grey,
    },
  });
=======
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.primary,
    alignItems: "center"
  },
  image: {
    width: 66,
    height: 66,
    borderRadius: 33
  },
  contents: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "600",
    color: colors.white
  },
  subTitle: {
    color: colors.grey
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
