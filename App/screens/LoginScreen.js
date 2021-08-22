import React, { useEffect } from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import * as Yup from "yup";

import AppScreen from "../components/AppScreen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppFormFeild from "../components/forms/AppFormFeild";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";
import useApi from "../hooks/useApi";
import auth from "../auth/auth";
import ActivityIndicator from "../components/ActivityIndicator";
import useAuth from "../auth/useAuth";
import ErrorMessage from "../components/forms/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .label("Password")
});

const LoginScreen = () => {
  const { login } = useAuth();
  const { error, loading, setLoading, request } = useApi(auth.login);
  const handleSubmit = async value => {
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
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <ErrorMessage error={error.message} visible={!error.ok} />
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

              <SubmitButton title="login" color="secondary" />

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL("https://www.kingclasses.net/forgot_password")
                }
              >
                <AppText style={styles.text}>Forgot Password?</AppText>
              </TouchableOpacity>
            </AppForm>
          </ScrollView>
        </View>
      </AppScreen>
    </>
  );
};

export default LoginScreen;

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
    //justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: "95%",
    //height: "90%",
    backgroundColor: colors.primary,
    borderRadius: 25,
    marginTop: "15%"
  },
  text: {
    color: colors.white,
    paddingVertical: 10
  }
});
