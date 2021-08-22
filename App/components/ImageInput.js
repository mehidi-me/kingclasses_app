<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
<<<<<<< HEAD
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import AppText from "./AppText";
import useAuth from "../auth/useAuth";
import AuthContext from "../auth/context";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const { theme } = useContext(AuthContext);
  const styles = useStyles(theme);

=======
  View
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";
import AppText from "./AppText";
import useAuth from "../auth/useAuth";

const ImageInput = ({ imageUri, onChangeImage }) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  const { user } = useAuth();

  useEffect(() => {
    requesstPermission();
  }, []);

  const requesstPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access livary");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      !result.cancelled && onChangeImage(result.uri);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={selectImage}>
      <View>
        <View style={styles.container}>
          <Image
            source={{
              uri: !imageUri
                ? `https://www.kingclasses.net/resources/upload-images/${user.image}`
<<<<<<< HEAD
                : imageUri,
=======
                : imageUri
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
            }}
            style={styles.image}
          />
        </View>
        <AppText style={styles.text}>UPLOAD NEW IMAGE</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

<<<<<<< HEAD
const useStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.light,
      width: 160,
      height: 160,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      margin: 5,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    text: {
      color: theme.grey,
    },
  });
=======
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: 160,
    height: 160,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    margin: 5
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    color: colors.grey
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
