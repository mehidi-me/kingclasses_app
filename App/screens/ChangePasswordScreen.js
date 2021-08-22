import React from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import AppFormFeild from "../components/forms/AppFormFeild";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";
import useApi from "../hooks/useApi";
import auth from "../auth/auth";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorMessage from "../components/forms/ErrorMessage";
import useToast from "../hooks/useToast";

const validationSchema = Yup.object().shape({
  newpassword: Yup.string()
    .required()
    .min(6)
    .label("Password")
});

const ChangePasswordScreen = () => {
  const showToast = useToast();

  const { error, loading, request } = useApi(auth.updatePassword);

  const handleSubmit = async value => {
    if (value.connewpassword !== value.newpassword)
      return showToast({ message: "Password not match!" });
    const res = await request(value);

    if (res.ok) {
      showToast({ message: "Password Successfully Update." });
    }
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <ImageBackground
        source={require("../assets/backgroun.jpg")}
        style={styles.container}
      >
        <AppForm
          initialValues={{
            oldpassword: "",
            newpassword: "",
            connewpassword: ""
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormFeild
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Old Password"
            icon="lock"
            name="oldpassword"
            secureTextEntry
          />
          <AppFormFeild
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="New Password"
            icon="lock"
            name="newpassword"
            secureTextEntry
          />
          <AppFormFeild
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Confrim New Password"
            icon="lock"
            name="connewpassword"
            secureTextEntry
          />

          <ErrorMessage error={error.message} visible={!error.ok} />
          <SubmitButton title="Change Password" color="secondary" />
        </AppForm>
      </ImageBackground>
    </>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  }
});
