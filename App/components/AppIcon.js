import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppIcon = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
  IconName = MaterialCommunityIcons
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <IconName name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({});
