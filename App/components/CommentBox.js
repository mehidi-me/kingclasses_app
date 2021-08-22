<<<<<<< HEAD
import React, {useContext, useState} from 'react';
=======
import React, { useState } from "react";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
<<<<<<< HEAD
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';

import comment from '../api/comment';
import useApi from '../hooks/useApi';
import useToast from '../hooks/useToast';
import AuthContext from '../auth/context';
=======
  ActivityIndicator
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";

import colors from "../config/colors";
import comment from "../api/comment";
import useApi from "../hooks/useApi";
import useToast from "../hooks/useToast";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

const CommentBox = ({
  visibal,
  hideCommentInput,
  placeholder,
  allCat,
  mathId,
  getComment,
<<<<<<< HEAD
  commentParentId,
  commentParentEmail,
  mathTitle,
  parentImage,
}) => {
  const {theme, user} = useContext(AuthContext);
  const styles = useStyles(theme);

  const [inputValue, setInputValue] = useState('');
  const showToast = useToast();
  const {data, error, loading, request} = useApi(comment.insertComment);
=======
  commentParentId
}) => {
  const [inputValue, setInputValue] = useState("");
  const showToast = useToast();
  const { data, error, loading, request } = useApi(comment.insertComment);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

  const handleSubmit = async () => {
    const cat1id = allCat[0].id;
    const cat2id = allCat[1].id;
    const cat3id = allCat[2].id;
    const cat4id = allCat[3].id;
    const cat5id = allCat[4].id;

<<<<<<< HEAD
    const cat1title = allCat[0].title;
    const cat2title = allCat[1].title;
    const cat3title = allCat[2].title;
    const cat4title = allCat[3].title;
    const cat5title = allCat[4].title;

=======
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    const res = await request({
      cat1id,
      cat2id,
      cat3id,
      cat4id,
      cat5id,
      cat6id: mathId,
<<<<<<< HEAD
      cat1title,
      cat2title,
      cat3title,
      cat4title,
      cat5title,
      cat6title: mathTitle,
      math_id: mathId,
      description: inputValue,
      parent_id: commentParentId,
      parent_email: commentParentEmail,
      parent_image: parentImage,
      date: dayjs().format('D MMM YYYY'),
    });
    if (res.ok && res.data.ok) {
      getComment(mathId);
      setInputValue('');
      hideCommentInput(false);
      showToast({message: 'Comments Added Successfully'});
=======
      math_id: mathId,
      description: inputValue,
      parent_id: commentParentId,
      date: dayjs().format("D MMM YYYY")
    });
    if (res.ok && res.data.ok) {
      getComment(mathId);
      setInputValue("");
      hideCommentInput(false);
      showToast({ message: "Comments Added Successfully" });
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    }
  };

  const commentBoxHide = () => {
    if (inputValue.trim()) {
<<<<<<< HEAD
      Alert.alert('Kingclasses', `Discard comment?`, [
        {
          text: 'Keep Writing',
        },
        {
          text: 'Discard',
          onPress: () => {
            setInputValue('');
            hideCommentInput(false);
          },
        },
=======
      Alert.alert("Kingclasses", `Discard comment?`, [
        {
          text: "Keep Writing"
        },
        {
          text: "Discard",
          onPress: () => {
            setInputValue("");
            hideCommentInput(false);
          }
        }
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      ]);
    } else {
      hideCommentInput(false);
    }
  };

  if (!visibal) return null;
  return (
    <TouchableWithoutFeedback onPress={commentBoxHide}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => hideCommentInput(true)}>
          <View style={styles.inputContainer}>
<<<<<<< HEAD
            <Image source={{uri: user.photourl}} style={styles.image} />
=======
            <Image
              source={require("../assets/avatar.png")}
              style={styles.image}
            />
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
            <ScrollView indicatorStyle="white">
              <TextInput
                style={styles.input}
                autoFocus
                multiline
<<<<<<< HEAD
                placeholderTextColor={theme.grey}
=======
                placeholderTextColor={colors.grey}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
                placeholder={placeholder}
                onChangeText={v => setInputValue(v)}
              />
            </ScrollView>

            {inputValue.trim() ? (
              !loading ? (
                <TouchableOpacity onPress={handleSubmit}>
                  <MaterialCommunityIcons
                    name="send"
                    size={30}
<<<<<<< HEAD
                    color={theme.secondary}
=======
                    color={colors.secondary}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
                    style={styles.icon}
                  />
                </TouchableOpacity>
              ) : (
<<<<<<< HEAD
                <ActivityIndicator size={30} color={theme.secondary} />
=======
                <ActivityIndicator size={30} color={colors.secondary} />
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
              )
            ) : null}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentBox;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      position: 'absolute',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.secondary,
      width: '100%',
      padding: 10,
      position: 'absolute',
      bottom: 0,
      zIndex: 1,
      opacity: 1,
      backgroundColor: theme.primary,
      maxHeight: 100,
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    input: {
      fontSize: 16,
      fontFamily: 'Roboto',
      color: theme.white,
      borderColor: 'transparent',
      width: '96%',
    },
    icon: {
      marginLeft: 10,
    },
  });
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "absolute"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    width: "100%",
    padding: 10,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
    opacity: 1,
    backgroundColor: colors.primary,
    maxHeight: 100
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  input: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: colors.white,
    borderColor: "transparent",
    width: "96%"
  },
  icon: {
    marginLeft: 10
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
