<<<<<<< HEAD
import {useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
=======
import React, { useEffect, useState } from "react";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
<<<<<<< HEAD
  View,
} from 'react-native';
import AuthContext from '../auth/context';
import AppText from './AppText';
import CommentCard from './CommentCard';

const ShowComment = ({comment, onPress, commentParentId}) => {
  const {theme, user} = useContext(AuthContext);
  const styles = useStyles(theme);

=======
  View
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import CommentCard from "./CommentCard";

const ShowComment = ({ comment, onPress, commentParentId }) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  const [parentComment, setParentComment] = useState([]);
  const [childComment, setChildComment] = useState([]);
  const [childComment2, setChildComment2] = useState([]);

  useEffect(() => {
    if (comment.length) {
<<<<<<< HEAD
      const maincomment = comment.filter(
        v => v.parent_id == null || v.parent_id == 0,
      );
=======
      const maincomment = comment.filter(v => v.parent_id == null);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      setParentComment(maincomment.reverse());

      let cCommentObj = [];

      if (maincomment.length) {
        maincomment.map(v => {
          const cObj = comment.filter(data => v.id == data.parent_id);
          if (cObj) {
            cObj.map(data => {
              cCommentObj.push(data);
            });
          }
        });
        setChildComment(cCommentObj.reverse());
        //console.log(cCommentObj);
      }

      if (cCommentObj.length) {
        let cCommentObj2 = [];
        cCommentObj.map(v => {
          const cObj2 = comment.filter(data => v.id == data.parent_id);
          if (cObj2) {
            cObj2.map(data => {
              cCommentObj2.push(data);
            });
          }
        });
        setChildComment2(cCommentObj2.reverse());
        //console.log(cCommentObj2);
      }
    }
  }, [comment]);

  return (
    <>
      <AppText style={styles.heading}>Comments {comment.length}</AppText>

      <TouchableWithoutFeedback
        onPress={() => {
<<<<<<< HEAD
          onPress('Write your quesion..');
          commentParentId(null, null, null);
        }}>
        <View style={styles.inputBox}>
          <Image source={{uri: user.photourl}} style={styles.image} />
=======
          onPress("Write your quesion..");
          commentParentId(null);
        }}
      >
        <View style={styles.inputBox}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.image}
          />
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          <AppText style={styles.text}>Write your quesion..</AppText>
        </View>
      </TouchableWithoutFeedback>

      {comment.length
        ? parentComment.map(v => (
            <View
              key={v.id}
              style={{
                borderBottomWidth: 1,
<<<<<<< HEAD
                borderColor: theme.secondary,
                marginTop: 20,
              }}>
              <CommentCard
                comment={v}
                onPress={() => {
                  onPress('Write your reply..');
                  commentParentId(v.id, v.email, v.photo);
=======
                borderColor: colors.secondary,
                marginTop: 20
              }}
            >
              <CommentCard
                comment={v}
                onPress={() => {
                  onPress("Write your reply..");
                  commentParentId(v.id);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
                }}
              />
              {childComment.length
                ? childComment.map(data => {
                    if (data.parent_id == v.id) {
                      return (
                        <View key={data.id}>
                          <CommentCard
                            comment={data}
                            onPress={() => {
<<<<<<< HEAD
                              onPress('Write your reply..');
                              commentParentId(data.id, v.email, v.photo);
                            }}
                            width="85%"
                            style={{marginLeft: 50, borderTopWidth: 1}}
=======
                              onPress("Write your reply..");
                              commentParentId(data.id);
                            }}
                            width="85%"
                            style={{ marginLeft: 50, borderTopWidth: 1 }}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
                          />

                          {childComment2.length
                            ? childComment2.map(data2 => {
                                if (data2.parent_id == data.id) {
                                  return (
                                    <CommentCard
                                      key={data2.id}
                                      comment={data2}
                                      width="63%"
                                      style={{
                                        marginLeft: 100,
<<<<<<< HEAD
                                        borderTopWidth: 1,
=======
                                        borderTopWidth: 1
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
                                      }}
                                    />
                                  );
                                }
                              })
                            : null}
                        </View>
                      );
                    }
                  })
                : null}
            </View>
          ))
        : null}
    </>
  );
};

export default ShowComment;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    heading: {
      color: theme.white,
      margin: 10,
    },
    inputBox: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: theme.primary,
      borderBottomWidth: 1,
      //borderTopWidth: 1,
      borderColor: theme.secondary,
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    text: {
      color: theme.grey,
      fontSize: 16,
    },
  });
=======
const styles = StyleSheet.create({
  heading: {
    color: colors.white,
    margin: 10
  },
  inputBox: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.primary,
    borderBottomWidth: 1,
    //borderTopWidth: 1,
    borderColor: colors.secondary,
    width: "100%",
    alignItems: "center",
    marginBottom: 20
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  text: {
    color: colors.grey,
    fontSize: 16
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
