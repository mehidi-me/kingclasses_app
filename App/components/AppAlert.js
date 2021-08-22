<<<<<<< HEAD
import React, {useContext, useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AuthContext from '../auth/context';
import AppText from './AppText';

const Button = ({title, color, onPress}) => {
  const {theme} = useContext(AuthContext);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
        paddingHorizontal: 25,
        paddingVertical: 7,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: theme.secondary,
      }}>
      <AppText>{title}</AppText>
    </TouchableOpacity>
  );
};

const AppAlert = ({
  show = false,
  message = 'Are You sure',
  leftButtonTitle = '',
  rightButtonTitle = 'Yes',
  onPress,
  clearAlert,
}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);
=======
import React, { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const AppAlert = ({
  show = false,
  message = "Are You sure",
  leftButtonTitle = "",
  rightButtonTitle = "Yes",
  onPress,
  clearAlert
}) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  const [visible, setVisible] = useState(show);
  useEffect(() => {
    if (show) {
      setVisible(true);
    }
  });
  if (!show) return null;
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View
        style={{
<<<<<<< HEAD
          zIndex: 1,
          backgroundColor: theme.primary,
          opacity: 0.8,
          backgroundColor: theme.primary,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: theme.primary,
            width: '100%',
            borderColor: theme.secondary,
            borderWidth: 1,
            borderRadius: 15,
            shadowColor: '#00070e',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,
            elevation: 13,
            zIndex: 2,
          }}>
          <AppText style={{textAlign: 'center', padding: 20}}>
            {message}
          </AppText>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 20,
            }}>
            {leftButtonTitle ? (
              <Button
                title={leftButtonTitle}
                color={theme.primary}
                onPress={() => {
                  setVisible(false);
                  clearAlert();
                }}
              />
            ) : null}
            <Button
              title={rightButtonTitle}
              color={theme.primary2}
              onPress={() => {
                setVisible(false);
                onPress();
                clearAlert();
              }}
            />
          </View>
=======
          backgroundColor: colors.white,
          position: "absolute",
          bottom: 10,
          width: "100%",
          borderColor: colors.secondary,
          borderWidth: 1,
          borderRadius: 15
        }}
      >
        <AppText style={{ textAlign: "center", padding: 20 }}>
          {message}
        </AppText>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 20
          }}
        >
          {leftButtonTitle ? (
            <Button
              title={leftButtonTitle}
              color={colors.secondary}
              onPress={() => {
                setVisible(false);
                clearAlert();
              }}
            />
          ) : null}
          <Button
            title={rightButtonTitle}
            color={colors.primary}
            onPress={() => {
              setVisible(false);
              onPress();
              clearAlert();
            }}
          />
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
        </View>
      </View>
    </Modal>
  );
};

export default AppAlert;

<<<<<<< HEAD
const useStyles = theme => StyleSheet.create({});
=======
const styles = StyleSheet.create({});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
