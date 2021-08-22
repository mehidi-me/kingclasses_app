<<<<<<< HEAD
import React, { useContext } from "react";
=======
import React from "react";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
<<<<<<< HEAD
import AuthContext from "../auth/context";
=======
import colors from "../config/colors";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

const Stack = createStackNavigator();

const AuthNavigator = () => {
<<<<<<< HEAD
  const { theme } = useContext(AuthContext);
=======
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
<<<<<<< HEAD
          backgroundColor: theme.primary,
        },
        headerTitleStyle: {
          color: theme.white,
        },
        headerTintColor: theme.white,
=======
          backgroundColor: colors.primary
        },
        headerTitleStyle: {
          color: colors.white
        },
        headerTintColor: colors.white
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      }}
      mode="modal"
      headerMode="float"
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
