import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import useAuth from "../auth/useAuth";
import AppIcon from "../components/AppIcon";
import AppListItem from "../components/AppListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import AppScreen from "../components/AppScreen";
import colors from "../config/colors";

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();

  //const users = user.user;
  const menuItem = [
    {
      title: "Add Gold Coin",
      icon: {
        IconName: FontAwesome5,
        name: "coins",
        iconColor: colors.gold
      },
      navigator: "Addcoin"
    },
    {
      title: "Notifications",
      icon: {
        IconName: Ionicons,
        name: "notifications",
        backgroundColor: colors.dark
      }
    },
    {
      title: "Purchased Book",
      icon: {
        name: "book-open-page-variant",
        backgroundColor: colors.grey
      },
      navigator: "Purchasedbook"
    },
    {
      title: "Edit Profile",
      icon: {
        name: "account-edit",
        backgroundColor: colors.secondary
      },
      navigator: "Editprofile"
    },
    {
      title: "Change Password",
      icon: {
        name: "lock",
        backgroundColor: colors.secondary
      },
      navigator: "Changepassword"
    }
  ];
  return (
    <AppScreen style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <AppListItem
            title={user.name}
            subTitle={user.email}
            imageUrl={{
              uri: `https://www.kingclasses.net/resources/upload-images/${user.image}`
            }}
            onPress={() => {
              navigation.navigate("Editprofile");
            }}
          />
        </View>

        {menuItem.map(v => (
          <View key={v.title}>
            <AppListItem
              title={v.title}
              ImageComponent={
                <AppIcon
                  IconName={v.icon.IconName && v.icon.IconName}
                  iconColor={v.icon.iconColor && v.icon.iconColor}
                  name={v.icon.name}
                  backgroundColor={
                    v.icon.backgroundColor && v.icon.backgroundColor
                  }
                />
              }
              onPress={() => {
                v.navigator && navigation.navigate(v.navigator);
              }}
            />
            <ListItemSeparator />
          </View>
        ))}
        <AppListItem
          title="Log Out"
          ImageComponent={<AppIcon name="logout" backgroundColor="red" />}
          onPress={logOut}
        />
      </ScrollView>
    </AppScreen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 40
  },
  screen: {
    backgroundColor: colors.dark,
    paddingTop: 0
  }
});
