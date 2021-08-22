<<<<<<< HEAD
import React, {useContext, useEffect, useState} from 'react';
=======
import React, { useEffect, useState } from "react";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
import {
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
<<<<<<< HEAD
  View,
} from 'react-native';
import payment from '../api/payment';
import AuthContext from '../auth/context';
import useAuth from '../auth/useAuth';
import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppInputText from '../components/forms/AppInputText';
import useApi from '../hooks/useApi';
import useToast from '../hooks/useToast';

const AddCoinScreen = ({navigation}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  const activate = async () => {};
  const [value, setValue] = useState('');
=======
  View
} from "react-native";
import payment from "../api/payment";
import useAuth from "../auth/useAuth";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppInputText from "../components/forms/AppInputText";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import useToast from "../hooks/useToast";

const AddCoinScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  const [pendingBalance, setPendingBalance] = useState([]);

  const showToast = useToast();

<<<<<<< HEAD
  const {user} = useAuth();
  const {request} = useApi(payment.paymentReqGet);

  const getPaymentreq = async () => {
    const res = await request(null, true);
=======
  const { user } = useAuth();
  const { request } = useApi(payment.paymentReqGet);

  const getPaymentreq = async () => {
    const res = await request();
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

    if (res.ok && res.data.data) {
      setPendingBalance(res.data.data);
    }
  };

  useEffect(() => {
    getPaymentreq();
  }, []);

  return (
    <>
<<<<<<< HEAD
      <AppScreen>
        <View style={styles.box}>
          <AppText style={styles.text}>
            1 <AppText style={{color: theme.gold}}>Gold</AppText> Coin = 1 Taka
          </AppText>
          <AppText>Enter Amount</AppText>
=======
      <ImageBackground
        source={require("../assets/backgroun.jpg")}
        style={styles.container}
      >
        <View style={styles.box}>
          <AppText style={styles.text}>
            1 <AppText style={{ color: colors.gold }}>Gold</AppText> Coin = 1
            Taka
          </AppText>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          <AppInputText
            placeholder="minimum 100 Gold coin"
            keyboardType="number-pad"
            onChangeText={v => setValue(v)}
            value={value}
<<<<<<< HEAD
            autoFocus={true}
=======
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          />
          <AppButton
            title="Buy Gold Coin"
            onPress={() => {
<<<<<<< HEAD
              activate();
              if (value < 100)
                return showToast({message: 'Enter minimum 100 gold coin'});

              navigation.navigate('Sendmoney', {
                coin: value,
=======
              if (value < 100)
                return showToast({ message: "Enter minimum 100 gold coin" });

              navigation.navigate("Sendmoney", {
                coin: value,
                getPaymentreq: getPaymentreq
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
              });
              setValue(null);
            }}
          />
        </View>
        <ScrollView>
<<<<<<< HEAD
          <AppText style={[styles.text2, {color: theme.white}]}>
            Your balance :{' '}
            <AppText style={{color: theme.gold}}>{user.coin} Gold Coin</AppText>
=======
          <AppText style={[styles.text2, { color: colors.white }]}>
            Your balance :{" "}
            <AppText style={{ color: colors.gold }}>
              {user.coin} Gold Coin
            </AppText>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          </AppText>
          {pendingBalance.length
            ? pendingBalance.map((v, index) => (
                <AppText key={index} style={styles.text2}>
                  Pending balance : {v.coin} Gold Coin
                </AppText>
              ))
            : null}
        </ScrollView>
<<<<<<< HEAD
      </AppScreen>
=======
      </ImageBackground>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    </>
  );
};

export default AddCoinScreen;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    box: {
      alignItems: 'center',
      padding: 30,
    },
    text: {
      color: theme.white,
      textAlign: 'center',
      marginVertical: 20,
      letterSpacing: 4,
      fontWeight: 'bold',
      fontSize: 20,
    },
    text2: {
      color: 'green',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
    },
  });
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  box: {
    alignItems: "center",
    padding: 30
  },
  text: {
    color: colors.white,
    textAlign: "center",
    marginVertical: 10,
    letterSpacing: 5
  },
  text2: {
    color: "green",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
