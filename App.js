<<<<<<< HEAD
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Button,
  BackHandler,
} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

import AppContext from './App/auth/context';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './App/screens/HomeScreen';
import WatchVideoScreen from './App/screens/WatchVideoScreen';
import AppText from './App/components/AppText';
import MainHeader from './App/navigation/MainHeader';
import AppAlert from './App/components/AppAlert';
import AppToast from './App/components/AppToast';
import WelcomeScreen from './App/screens/WelcomeScreen';
import storage from './App/auth/storage';
import OneSignal from 'react-native-onesignal';
import RNBootSplash from 'react-native-bootsplash';
import {navigationRef} from './App/navigation/rootNavigation';
import navigation from './App/navigation/rootNavigation';
import useAlert from './App/hooks/useAlert';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAIzK_dI4nnnPurjOh5DbB5uVSFUQ3Kub0',
//   authDomain: 'kingclasses-83c83.firebaseapp.com',
//   projectId: 'kingclasses-83c83',
//   storageBucket: 'kingclasses-83c83.appspot.com',
//   messagingSenderId: '794089495312',
//   appId: '1:794089495312:web:30bcb31d7e876c6271a395',
//   measurementId: 'G-NWHX6CKFZ5',
// };

// !firebase.apps.length && firebase.initializeApp({firebaseConfig});
//import AuthNavigator from './App/navigation/AuthNavigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const lightColor = {
    primary: '#F7F8FA',
    //primary: "#caf0f8",

    primary2: 'white',

    textColor: '#333',

    white: '#000',

    gold: '#aa6c39',

    secondary: '#fb2525',
    black: '#000000',
    grey: 'grey',
    dark: '#fff',
    //dark: "#4C4C6D",
    light: '#f8f4f4',
    danger: '#ff5252',
  };

  const darkColor = {
    primary: '#212121', //dark

    primary2: '#383847', //dark

    textColor: '#fff', //dark

    white: '#fff', //dark

    gold: 'gold', //dark

    secondary: '#fb2525',
    black: '#000000',
    grey: 'grey',
    dark: '#fff',
    //dark: "#4C4C6D",
    light: '#f8f4f4',
    danger: '#ff5252',
  };

  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(lightColor);
  const [sound, setSound] = useState();
  const [alert, setAlert] = useState({
    visible: false,
    message: 'Are You Sure?',
    leftButtonTitle: 'No',
    rightButtonTitle: 'Yes',
    action: () => {
      return null;
    },
  });
  const [toast, setToast] = useState({visible: false, message: ''});
  const [isReady, setIsReady] = useState(false);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.primary,
      background: theme.primary,
      card: theme.primary,
    },
  };

  const clearAlert = () => {
    setAlert({
      visible: false,
      message: 'Are You Sure?',
      leftButtonTitle: 'No',
      rightButtonTitle: 'Yes',
      action: () => {
        return null;
      },
    });
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getUser = async () => {
    // await Font.loadAsync({
    //   MontserratBold: require("./App/assets/font/Roboto-Bold.ttf"),
    //   MontserratRegular: require("./App/assets/font/Roboto-Regular.ttf"),
    //   MontserratMedium: require("./App/assets/font/Roboto-Medium.ttf"),
    // });

    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        setAlert({
          visible: true,
          message: `Check your internet connection and try again.`,
          rightButtonTitle: 'Ok',
          action: () => {
            BackHandler.exitApp();
          },
        });
      }
    });

    const token = await storage.getToken();
    if (!token) {
      return setUser(null);
    } else {
      const userData = await storage.getUserData();
      setUser(JSON.parse(userData));
    }

    if (isDarkMode) {
      setTheme(darkColor);
    } else {
      setTheme(lightColor);
    }
  };

  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('1a665521-bf3a-42a0-8947-fe4759629a13');

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();

        //const {title, description} = notification.additionalData;
        // if (navigation) {
        //   navigation.navigate('notificationdetails', {
        //     title,
        //     description,
        //   });
        // }
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      // console.log('OneSignal: notification opened:', notification);

      if (notification) {
        if (notification.notification) {
          if (notification.notification.additionalData) {
            const {title, description, link_url, blog_data} =
              notification.notification.additionalData;

            if (title && description && navigation) {
              if (link_url) {
                navigation.navigate('watchvideoscreen', {
                  url: link_url,
                  title: title,
                });
              } else {
                navigation.navigate('notificationdetails', {
                  title,
                  description,
                  blog_data: blog_data,
                });
              }
            }
          }
        }
      }
    });

    // admob()
    //   .setRequestConfiguration({
    //     // Update all future requests suitable for parental guidance
    //     maxAdContentRating: MaxAdContentRating.PG,

    //     // Indicates that you want your content treated as child-directed for purposes of COPPA.
    //     tagForChildDirectedTreatment: true,

    //     // Indicates that you want the ad request to be handled in a
    //     // manner suitable for users under the age of consent.
    //     tagForUnderAgeOfConsent: true,
    //   })
    //   .then(() => {
    //     // Request config successfully set!
    //   });

    // Your secondary Firebase project credentials...
  }, []);

  useEffect(() => {
    if (navigation) {
      console.log(navigation);
    }
    const init = async () => {
      await getUser();
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //   </ScrollView>
    // </SafeAreaView>
    <AppContext.Provider
      value={{user, setUser, alert, setAlert, toast, setToast, theme}}>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <>
          {user ? (
            <>
              <MainHeader />
            </>
          ) : (
            <WelcomeScreen />
          )}
=======
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { Alert, BackHandler } from "react-native";

import storage from "./App/auth/storage";
import auth from "./App/auth/auth";
import AuthNavigator from "./App/navigation/AuthNavigator";
import MainHeader from "./App/navigation/MainHeader";
import AuthContext from "./App/auth/context";
import AppAlert from "./App/components/AppAlert";
import AppToast from "./App/components/AppToast";

export default function App() {
  useEffect(() => {
    const abortController = new AbortController();
    return () => {
      abortController.abort();
    };
  }, []);
  const [user, setUser] = useState();
  const [alert, setAlert] = useState({
    visible: false,
    message: "Are You Sure?",
    leftButtonTitle: "No",
    rightButtonTitle: "Yes",
    action: () => {
      return null;
    }
  });
  const [toast, setToast] = useState({ visible: false, message: "" });
  const [isReady, setIsReady] = useState(false);

  const clearAlert = () => {
    setAlert({
      visible: false,
      message: "Are You Sure?",
      leftButtonTitle: "No",
      rightButtonTitle: "Yes",
      action: () => {
        return null;
      }
    });
  };

  const getUser = async () => {
    const token = await storage.getToken();
    if (!token) return setUser(null);
    const res = await auth.getUser();
    if (res.ok) {
      setUser(res.data.data);
    } else {
      if (res.status == 401) return setUser(null);
      Alert.alert("Kingclasses", `Somthink wrong!`, [
        {
          text: "Exit",
          onPress: () => {
            BackHandler.exitApp();
          }
        }
      ]);
    }
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={getUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider
      value={{ user, setUser, alert, setAlert, toast, setToast }}
    >
      <NavigationContainer>
        <>
          {user ? <MainHeader /> : <AuthNavigator />}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          <AppAlert
            show={alert.visible}
            message={alert.message}
            leftButtonTitle={alert.leftButtonTitle}
            rightButtonTitle={alert.rightButtonTitle}
            onPress={alert.action}
            clearAlert={clearAlert}
          />
          <AppToast
            visible={toast.visible}
            message={toast.message}
            setToast={setToast}
          />
<<<<<<< HEAD
          <StatusBar
            backgroundColor={theme.primary}
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          />
        </>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
=======
        </>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
