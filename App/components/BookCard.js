<<<<<<< HEAD
import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import AuthContext from '../auth/context';

import AppText from './AppText';

const BookCard = ({title, uri, onPress, Purchased = false}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);
=======
import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const BookCard = ({ title, uri, onPress, Purchased = false }) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  return (
    <View style={styles.card}>
      {Purchased ? <AppText style={styles.purchased}>Purchased</AppText> : null}

      <TouchableOpacity onPress={onPress}>
<<<<<<< HEAD
        {/* <Image style={styles.image} source={{ uri }} /> */}
        <FastImage
          style={styles.image}
          source={{uri}}
          resizeMode={FastImage.resizeMode.contain}
        />
=======
        <Image style={styles.image} source={{ uri }} />
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
        <AppText style={styles.text}>{title}</AppText>
      </TouchableOpacity>
    </View>
  );
};

export default BookCard;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    card: {
      alignSelf: 'flex-start',
      margin: '2%',
      marginBottom: 10,
      width: '46%',
      position: 'relative',
      shadowColor: '#00070e',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
    },
    image: {
      borderRadius: 5,
      width: '100%',
      height: 180,
    },
    text: {
      textAlign: 'center',
      color: theme.white,
    },
    purchased: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: 'green',
      color: theme.white,
      padding: 5,
      borderRadius: 5,
      zIndex: 999,
    },
  });
=======
const styles = StyleSheet.create({
  card: {
    alignSelf: "flex-start",
    margin: "2%",
    marginBottom: 10,
    width: "46%",
    position: "relative",
  },
  image: {
    borderRadius: 5,
    width: "100%",
    height: 180,
  },
  text: {
    textAlign: "center",
    color: colors.white,
  },
  purchased: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "green",
    color: colors.white,
    padding: 5,
    borderRadius: 5,
    zIndex: 999,
  },
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
