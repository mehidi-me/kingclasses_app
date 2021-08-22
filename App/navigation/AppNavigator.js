<<<<<<< HEAD
import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AuthContext from '../auth/context';
import ResultNewsScreen from '../screens/ResultNewsScreen';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = ({data1, data2}) => {
  const {theme} = useContext(AuthContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.primary,
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.secondary,
        },
        tabBarActiveTintColor: theme.secondary,
        tabBarInactiveTintColor: theme.grey,
        tabBarPressColor: theme.grey,
        tabBarShowIcon: true,
        tabBarShowLabel: true,
      }}>
      <Tab.Screen name="Latestnews" options={{tabBarLabel: 'Latest news'}}>
        {props => <ResultNewsScreen {...props} data={data2} />}
      </Tab.Screen>
      <Tab.Screen name="Jobnews" options={{tabBarLabel: 'Job news'}}>
        {props => <ResultNewsScreen {...props} data={data1} />}
      </Tab.Screen>
=======
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AllClassesScreen from "../screens/AllClassesScreen";
import BookScreen from "../screens/BookScreen";
import AccountScreen from "../screens/AccountScreen";
import colors from "../config/colors";

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: colors.primary
        },
        indicatorStyle: {
          backgroundColor: colors.secondary
        },
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.grey,
        pressColor: colors.grey,
        showIcon: true,
        showLabel: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={AllClassesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={25} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={25}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-box"
              size={25}
              color={color}
            />
          )
        }}
      />
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    </Tab.Navigator>
  );
};

export default AppNavigator;
