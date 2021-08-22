<<<<<<< HEAD
import React, {useContext} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import AuthContext from '../auth/context';
import AppText from './AppText';

const AppToast = ({
  visible = false,
  message = 'no message',
  duration = 3000,
  setToast,
}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);
  if (visible) {
    setTimeout(() => {
      setToast({visible: false, message: ''});
=======
import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const AppToast = ({
  visible = false,
  message = "no message",
  duration = 3000,
  setToast
}) => {
  if (visible) {
    setTimeout(() => {
      setToast({ visible: false, message: "" });
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    }, duration);
  }
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View
        style={{
<<<<<<< HEAD
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: theme.primary,
          opacity: 0.8,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: theme.primary2,
            width: '100%',
            borderColor: theme.secondary,
            borderTopWidth: 2,
          }}>
          <AppText style={{textAlign: 'center', padding: 8}}>{message}</AppText>
        </View>
=======
          backgroundColor: colors.white,
          position: "absolute",
          bottom: 0,
          width: "100%",
          borderColor: colors.secondary,
          borderTopWidth: 2
        }}
      >
        <AppText style={{ textAlign: "center", padding: 8 }}>{message}</AppText>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      </View>
    </Modal>
  );
};

export default AppToast;

<<<<<<< HEAD
const useStyles = theme => StyleSheet.create({});
=======
const styles = StyleSheet.create({});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
