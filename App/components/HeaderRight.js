<<<<<<< HEAD
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import useAuth from '../auth/useAuth';
import AppContext from '../auth/context';
import notification from '../api/notification';

const HeaderRight = ({tintColor}) => {
  const {theme} = useContext(AppContext);
  const styles = useStyles(theme);
  const [notifications, setNotification] = useState([]);
  const [unRead, setunRead] = useState(0);

  const navigation = useNavigation();
  const {user} = useAuth();

  const {data, error, loading, request} = useApi(notification.getNotification);
  const getNotification = async () => {
    const res = await request(user.email, true);
    if (res.data.ok) {
      const data = res.data.data;

      data.map(v => {
        if (!v.view) {
          setunRead(v => v + 1);
        }
        if (v.view) {
          if (!v.view.includes(user.id)) {
            setunRead(v => v + 1);
          }
        }
      });

      setNotification(data.reverse());
    }
  };
  useEffect(() => {
    getNotification();
  }, []);

  return (
    <View style={{flexDirection: 'row', marginTop: 5}}>
      <TouchableOpacity onPress={() => navigation.navigate('Addcoin')}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15,
          }}>
          <Text style={{color: theme.gold, fontWeight: 'bold', marginRight: 5}}>
            {user.coin}
          </Text>
          <FontAwesome5 name="coins" size={30} color={theme.gold} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setunRead(0);
          navigation.navigate('notificationlist', {notifications});
        }}>
        <Ionicons
          name="notifications"
          size={30}
          color={theme.textColor}
          style={{marginRight: 5}}
        />
        {unRead ? (
          <View
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: theme.secondary,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              right: 5,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 10,
                fontWeight: 'bold',
              }}>
              {unRead}
            </Text>
          </View>
        ) : null}
=======
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";
import useAuth from "../auth/useAuth";

const HeaderRight = ({ tintColor }) => {
  const navigation = useNavigation();
  const { user } = useAuth();

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Addcoin")}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 15
          }}
        >
          <Text style={{ color: "gold", fontWeight: "bold", marginRight: 5 }}>
            {user.coin}
          </Text>
          <FontAwesome5 name="coins" size={30} color="gold" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <Ionicons
          name="notifications"
          size={30}
          color={tintColor}
          style={{ marginRight: 5 }}
        />
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: colors.secondary,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            right: 5
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 10,
              fontWeight: "bold"
            }}
          >
            8
          </Text>
        </View>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;

<<<<<<< HEAD
const useStyles = theme => StyleSheet.create({});
=======
const styles = StyleSheet.create({});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
