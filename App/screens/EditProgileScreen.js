import React, { useContext, useState } from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import ImageInput from "../components/ImageInput";
import * as Yup from "yup";

import colors from "../config/colors";
import AppFormFeild from "../components/forms/AppFormFeild";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";
import useApi from "../hooks/useApi";
import auth from "../auth/auth";
import ActivityIndicator from "../components/ActivityIndicator";
import useAuth from "../auth/useAuth";
import ErrorMessage from "../components/forms/ErrorMessage";
import AuthContext from "../auth/context";
import useToast from "../hooks/useToast";

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
    .label("College name")
});

const EditProgileScreen = () => {
  const showToast = useToast();

  const {
    user: { name, number, address, image }
  } = useAuth();
  const { user, setUser } = useContext(AuthContext);

  const [imageUrl, setImageUrl] = useState(null);

  const { error, loading, request } = useApi(auth.updateUser);

  const handleSubmit = async value => {
    if (imageUrl) {
      value.imageUrl = imageUrl;
    }

    const res = await request(value);

    if (res.ok) {
      const { name, number, address, image } = value;
      setUser({ ...user, name, number, address, image });
      value.imageUrl = null;
      setImageUrl(null);
      showToast({ message: "Profile Successfully Update." });
    }
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <ImageBackground
        source={require("../assets/backgroun.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <ImageInput
            imageUri={imageUrl}
            onChangeImage={url => setImageUrl(url)}
          />
          <AppForm
            initialValues={{
              name,
              number,
              address,
              image
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

            <ErrorMessage error={error.message} visible={!error.ok} />
            <SubmitButton title="Update Profile" color="secondary" />
          </AppForm>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default EditProgileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingHorizontal: 20
  }
});
