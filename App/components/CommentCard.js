<<<<<<< HEAD
import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AuthContext from '../auth/context';

import AppText from './AppText';

const CommentCard = ({comment, style, width, onPress}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <View style={{width: '15%'}}>
        <Image
          source={
            comment.photourl
              ? {uri: comment.photourl}
              : require('../assets/avatar.png')
          }
          style={styles.image}
        />
=======
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const CommentCard = ({ comment, style, width, onPress }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={{ width: "15%" }}>
        <Image source={require("../assets/avatar.png")} style={styles.image} />
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      </View>

      <View style={styles.content}>
        <AppText style={styles.userName}>{comment.name}</AppText>
<<<<<<< HEAD
        <Text style={{color: theme.grey}}>{comment.date}</Text>
        <AppText style={[styles.description, {width}]}>
          {comment.description}
        </AppText>
        <TouchableOpacity onPress={onPress}>
          <AppText style={{color: theme.secondary}}>Reply</AppText>
=======
        <Text style={{ color: colors.grey }}>{comment.date}</Text>
        <AppText style={[styles.description, { width }]}>
          {unescape(comment.description)}
        </AppText>
        <TouchableOpacity onPress={onPress}>
          <AppText style={{ color: colors.secondary }}>Reply</AppText>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentCard;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 10,
      borderColor: theme.secondary,
      width: '100%',
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    content: {
      width: '85%',
      overflow: 'hidden',
    },
    userName: {
      color: theme.grey,
    },
    description: {
      marginVertical: 10,
      color: theme.white,
    },
  });
=======
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    borderColor: colors.secondary,
    width: "100%"
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  content: {
    width: "85%",
    overflow: "hidden"
  },
  userName: {
    color: colors.grey
  },
  description: {
    marginVertical: 10,
    color: colors.white
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
