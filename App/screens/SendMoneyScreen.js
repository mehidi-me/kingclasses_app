<<<<<<< HEAD
import React, {useContext} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import payment from '../api/payment';
import AuthContext from '../auth/context';
import ActivityIndicator from '../components/ActivityIndicator';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppForm from '../components/forms/AppForm';
import AppFormFeild from '../components/forms/AppFormFeild';
import ErrorMessage from '../components/forms/ErrorMessage';
import SubmitButton from '../components/forms/SubmitButton';
import useAlert from '../hooks/useAlert';
import useApi from '../hooks/useApi';
=======
import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import payment from "../api/payment";
import ActivityIndicator from "../components/ActivityIndicator";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppForm from "../components/forms/AppForm";
import AppFormFeild from "../components/forms/AppFormFeild";
import ErrorMessage from "../components/forms/ErrorMessage";
import SubmitButton from "../components/forms/SubmitButton";
import colors from "../config/colors";
import useAlert from "../hooks/useAlert";
import useApi from "../hooks/useApi";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

const validationSchema = Yup.object().shape({
  number: Yup.string()
    .required()
<<<<<<< HEAD
    .matches(new RegExp('[0-9]{11}'), 'Bkash/Nagad Number is invalid')
    .label('Bkash/Nagad Number'),
});

const SendMoneyScreen = ({route, navigation}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  const {coin} = route.params;
  const showAlert = useAlert();
  const {error, loading, request} = useApi(payment.paymentReq);
=======
    .matches(new RegExp("[0-9]{11}"), "Bkash/Nagad Number is invalid")
    .label("Bkash/Nagad Number")
});

const SendMoneyScreen = ({ route, navigation }) => {
  const { coin, getPaymentreq } = route.params;
  const showAlert = useAlert();
  const { error, loading, request } = useApi(payment.paymentReq);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  const handleSubmit = async value => {
    try {
      const res = await request(value);

      if (res.ok) {
        showAlert({
          message: `Your Gold coins will be added within 24 hours`,
<<<<<<< HEAD
          rightButtonTitle: 'Ok',
          action: () => {
            navigation.goBack();
          },
=======
          rightButtonTitle: "Ok",
          action: () => {
            getPaymentreq();
            navigation.goBack();
          }
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ActivityIndicator visible={loading} />
<<<<<<< HEAD
      <AppScreen>
        <AppText style={styles.text}>
          <AppText style={{color: theme.gold}}>Gold Coin</AppText> কিনার জন্য
          বিকাশ অথবা নগদ Personal account এ নিচের নাম্বার এ{' '}
          <AppText style={{color: theme.gold}}>{coin}</AppText> টাকা Send Money
          করুন৷ 01689005602 Send Money করার পর, যে নাম্বার থেকে টাকা পাঠিয়েছেন
          তা confirm করুন৷
        </AppText>

        <AppForm
          initialValues={{number: '', code: '', coin}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <ErrorMessage error={error?.message} visible={!error?.ok} />
=======
      <AppScreen style={styles.screen}>
        <AppText style={styles.text}>
          <AppText style={{ color: colors.gold }}>Gold Coin</AppText> কিনার জন্য
          বিকাশ অথবা নগদ Personal account এ নিচের নাম্বার এ{" "}
          <AppText style={{ color: colors.gold }}>{coin}</AppText> টাকা Send
          Money করুন৷ 01689005602 Send Money করার পর, যে নাম্বার থেকে টাকা
          পাঠিয়েছেন তা confirm করুন৷
        </AppText>

        <AppForm
          initialValues={{ number: "", code: "", coin }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error.message} visible={!error.ok} />
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          <AppFormFeild
            keyboardType="number-pad"
            placeholder="Your Bkash/Nagad Number"
            name="number"
<<<<<<< HEAD
            autoFocus={true}
=======
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          />
          <AppFormFeild
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Transition trxID (optional)"
            name="code"
          />

          <SubmitButton title="Confirm Payment" color="secondary" />
        </AppForm>
      </AppScreen>
    </>
  );
};

export default SendMoneyScreen;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    screen: {
      backgroundColor: theme.primary,
      padding: 10,
    },
    text: {
      color: theme.white,
      textAlign: 'center',
      lineHeight: 30,
      marginTop: 30,
    },
  });
=======
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
    padding: 10
  },
  text: {
    color: colors.white,
    textAlign: "center",
    lineHeight: 30
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
