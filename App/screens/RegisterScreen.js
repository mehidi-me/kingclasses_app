import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen";
import colors from "../config/colors";
import AppFormFeild from "../components/forms/AppFormFeild";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";
import useApi from "../hooks/useApi";
import auth from "../auth/auth";
import ActivityIndicator from "../components/ActivityIndicator";
import useAuth from "../auth/useAuth";
import ErrorMessage from "../components/forms/ErrorMessage";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .label("Name"),
  number: Yup.string()
    .required()
    .matches(new RegExp("[0-9]{11}"), "Number is invalid")
    .label("Number"),
  address: Yup.string()
    .required()
    .label("College name"),
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .label("Password")
});

const RegisterScreen = () => {
  const { login } = useAuth();
  const { error, loading, setLoading, request } = useApi(auth.register);
  const handleSubmit = async value => {
    value.username = value.number;

    try {
      const res = await request(value);
      if (res.ok) login(res.data.jwtToken, setLoading);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ActivityIndicator visible={loading} />
      <AppScreen style={styles.container}>
        <View style={styles.box}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.avatar}
          />

          <ScrollView style={styles.form}>
            <AppForm
              initialValues={{
                name: "",
                number: "",
                address: "",
                email: "",
                password: ""
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <AppFormFeild
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Your name"
                icon="account"
                name="name"
              />
              <AppFormFeild
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                placeholder="Phone number"
                icon="phone"
                name="number"
              />
              <AppFormFeild
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Varsity/College Name"
                icon="barn"
                name="address"
              />
              <AppFormFeild
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="Email"
                icon="email"
                name="email"
              />
              <AppFormFeild
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Password"
                icon="lock"
                name="password"
                secureTextEntry
              />

              <ErrorMessage error={error.message} visible={!error.ok} />
              <SubmitButton title="Register" color="secondary" />
            </AppForm>
          </ScrollView>
        </View>
      </AppScreen>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    top: -50,
    left: "35%"
  },
  form: {
    marginHorizontal: 20,
    marginTop: 80,
    marginBottom: 20
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: "95%",
    height: "90%",
    backgroundColor: colors.primary,
    borderRadius: 25,
    marginTop: "5%"
  },
  text: {
    color: colors.white,
    paddingVertical: 10
  }
});
