<<<<<<< HEAD
import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import AppNavigator from './AppNavigator';
import HomeScreen from '../screens/HomeScreen';
import AddCoinScreen from '../screens/AddCoinScreen';
import SendMoneyScreen from '../screens/SendMoneyScreen';
import ReadBookScreen from '../screens/ReadBookScreen';
import BookDetailesScreen from '../screens/BookDetailesScreen';
import MathModal from '../components/MathModal';
import AllClassesScreen from '../screens/AllClassesScreen';
import WatchVideoScreen from '../screens/WatchVideoScreen';
import NotificationScreen from '../screens/NotificationScreen';
import NotificationDetailScreen from '../screens/NotificationDetailScreen';
import AuthContext from '../auth/context';
import ExamScreen from '../screens/ExamScreen';
import ExamLessionScreen from '../screens/ExamLessionScreen';
import AllLessionScreen from '../screens/AllLessionScreen';
import ResultNewsScreen from '../screens/ResultNewsScreen';
import useApi from '../hooks/useApi';
import news from '../api/news';
import mcq from '../api/mcq';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import auth from '../auth/auth';
import storage from '../auth/storage';
import ImageView from '../screens/ImageView';
=======
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AppNavigator from "./AppNavigator";
import colors from "../config/colors";
import AccountScreen from "../screens/AccountScreen";
import { Image } from "react-native";
import HeaderRight from "../components/HeaderRight";
import BookScreen from "../screens/BookScreen";
import AddCoinScreen from "../screens/AddCoinScreen";
import SendMoneyScreen from "../screens/SendMoneyScreen";
import EditProgileScreen from "../screens/EditProgileScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import ReadBookScreen from "../screens/ReadBookScreen";
import PurchasedBookScreen from "../screens/PurchasedBookScreen";
import BookDetailesScreen from "../screens/BookDetailesScreen";
import MathModal from "../components/MathModal";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

const Stack = createStackNavigator();

const MainHeader = () => {
<<<<<<< HEAD
  const {user, setUser, theme} = useContext(AuthContext);
  // Notifications.setNotificationHandler({
  //   handleNotification: async () => ({
  //     shouldShowAlert: true,
  //     shouldPlaySound: true,
  //     shouldSetBadge: false,
  //   }),
  // });

  // const showAds = async () => {
  //   // Display an interstitial
  //   await AdMobInterstitial.setAdUnitID(
  //     "ca-app-pub-3940256099942544/1033173712"
  //   ); // Test ID, Replace with your-admob-unit-id

  //   // Display a rewarded ad
  //   await AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917"); // Test ID, Replace with your-admob-unit-id
  // };

  // const registerForPushNotificationsAsync = async () => {
  //   let token;
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } =
  //       await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== "granted") {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== "granted") {
  //       alert("Failed to get push token for push notification!");
  //       return;
  //     }
  //     token = (await Notifications.getExpoPushTokenAsync()).data;
  //     if (token) {
  //       await auth.updateUser({ token });
  //     }
  //   } else {
  //     alert("Must use physical device for Push Notifications");
  //   }

  //   return token;
  // };

  const [jobNews, setJobNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [examNews, setExamNews] = useState([]);
  const [mcqCat, setMcqCat] = useState([]);

  const {request: coinRequest} = useApi(auth.getCoin);

  const {loading, request} = useApi(news.getNews);
  const {loading: loadingMcq, request: requestMcq} = useApi(mcq.getMcqCat);
  const getNews = async () => {
    const res = await request(null, true);
    const res2 = await requestMcq(null, true);

    if (res.data.ok) {
      const data = res.data.data;
      setJobNews([]);
      setLatestNews([]);
      setExamNews([]);
      data.map(v => {
        if (v.category == 'job') {
          setJobNews(data => [...data, v]);
        } else if (v.category == 'exam') {
          setExamNews(data => [...data, v]);
        } else {
          setLatestNews(data => [...data, v]);
        }
      });
    }

    if (res2.data.ok) {
      const data = res2.data.data;
      setMcqCat(data);
    }

    const res3 = await coinRequest(user.id, true);

    if (res3.data.ok) {
      const coin = res3.data.data[0].coin;
      setUser({...user, coin});
      await storage.removeUserData();
      await storage.storeUserData({...user, coin});
      console.log(user.id);
    }
  };

  const CloseIcon = props => {
    console.log(props.route);
    return (
      <TouchableOpacity onPress={() => props.navigation.pop()}>
        <Ionicons
          name="ios-close-outline"
          size={30}
          style={{marginLeft: 10}}
          color={theme.textColor}
        />
      </TouchableOpacity>
    );
  };

  const headerObj = {
    gestureEnabled: true,
    gestureDirection: 'vertical',
    ...TransitionPresets.ModalSlideFromBottomIOS,
    headerTitleAlign: 'center',
  };

  useEffect(() => {
    // registerForPushNotificationsAsync();
    // showAds();
    getNews();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',

        headerStyle: {
          backgroundColor: theme.primary,
=======
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
          elevation: 0,
        },
<<<<<<< HEAD

        headerTitleStyle: {
          color: theme.white,
        },
        headerTintColor: theme.white,
        //gestureEnabled: true,
        //gestureDirection: 'vertical',
        ...TransitionPresets.SlideFromRightIOS,
        headerTitleContainerStyle: {
          width: '70%',
          alignItems: 'center',
        },
      }}
      animation="fade">
      <Stack.Screen
        name={user.name}
        //name="Kingclasses"
        options={{headerShown: false}}>
        {props => (
          <HomeScreen {...props} loadingMcq={loadingMcq} loading={loading} />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="Mathview"
        component={MathModal}
        options={({navigation, route}) => ({
          title: route.params.name,
          ...headerObj,
          headerLeft: props => <CloseIcon {...props} navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="AllClasses"
        component={AllClassesScreen}
        options={{headerTitle: 'Filtering Classes'}}
      />

      <Stack.Screen
        name="Readbook"
        component={ReadBookScreen}
        options={({navigation, route}) => ({
          title: route.params.name,
          ...headerObj,
          headerLeft: () => <CloseIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="Bookdetails"
        component={BookDetailesScreen}
        options={{headerTitle: 'Book Details'}}
      />

      <Stack.Screen
        name="notificationlist"
        component={NotificationScreen}
        options={({navigation}) => ({
          headerTitle: 'Notifications',
          ...headerObj,
          headerLeft: () => <CloseIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="imageview"
        component={ImageView}
        options={({navigation}) => ({
          headerTitle: 'Image gallery',
          ...headerObj,
          headerLeft: () => <CloseIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="watchvideoscreen"
        component={WatchVideoScreen}
        options={({navigation, route}) => ({
          title: route.params.title,
          ...headerObj,
          headerLeft: () => <CloseIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="Addcoin"
        component={AddCoinScreen}
        options={{headerTitle: 'Add Gold Coin'}}
=======
        headerTitleStyle: {
          color: colors.white,
        },
        headerTintColor: colors.white,
      }}
      mode="modal"
      headerMode="float"
    >
      <Stack.Screen
        name="Kingclasses"
        component={AppNavigator}
        options={{
          headerRight: ({ tintColor }) => <HeaderRight tintColor={tintColor} />,
          headerLeft: () => (
            <Image
              source={require("../assets/king-logo.png")}
              style={{ width: 40, height: 40, borderRadius: 5, marginLeft: 5 }}
            />
          ),
        }}
      />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen
        name="Addcoin"
        component={AddCoinScreen}
        options={{ headerTitle: "Add Gold Coin" }}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      />
      <Stack.Screen
        name="Sendmoney"
        component={SendMoneyScreen}
<<<<<<< HEAD
        options={({navigation}) => ({
          headerTitle: 'Send Money',
          ...headerObj,
          headerLeft: () => <CloseIcon navigation={navigation} />,
        })}
      />

      <Stack.Screen
        name="examslessionscreen"
        component={ExamLessionScreen}
        options={({route}) => ({title: route.params.title})}
      />
      <Stack.Screen
        name="alllessionscreen"
        component={AllLessionScreen}
        options={({navigation, route}) => ({
          title: route.params.title,
          ...headerObj,
          headerLeft: () => <CloseIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="examscreen"
        options={{
          headerTitle: 'Filtering Exams',
        }}>
        {props => <ExamScreen {...props} data={mcqCat} />}
      </Stack.Screen>

      <Stack.Screen
        name="appnavigator"
        options={{headerTitle: 'Job & latest news'}}>
        {props => (
          <AppNavigator {...props} data1={jobNews} data2={latestNews} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="resultNewsScreen"
        options={{headerTitle: 'Exam result'}}>
        {props => <ResultNewsScreen {...props} data={examNews} />}
      </Stack.Screen>
      <Stack.Screen
        name="notificationdetails"
        component={NotificationDetailScreen}
        options={({navigation, route}) => ({
          title: route.params.title,
          ...headerObj,
          headerLeft: () => <CloseIcon navigation={navigation} />,
        })}
=======
        options={{ headerTitle: "Send Money" }}
      />
      <Stack.Screen
        name="Editprofile"
        component={EditProgileScreen}
        options={{ headerTitle: "Edit Profile" }}
      />
      <Stack.Screen
        name="Changepassword"
        component={ChangePasswordScreen}
        options={{ headerTitle: "Change Password" }}
      />
      <Stack.Screen
        name="Purchasedbook"
        component={PurchasedBookScreen}
        options={{ headerTitle: "Purchased Book List" }}
      />
      <Stack.Screen
        name="Bookdetails"
        component={BookDetailesScreen}
        options={{ headerTitle: "Book Details" }}
      />
      <Stack.Screen
        name="Mathview"
        component={MathModal}
        // options={({ route }) => ({ title: route.params.name })}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Readbook"
        component={ReadBookScreen}
        options={({ route }) => ({ title: route.params.name })}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      />
    </Stack.Navigator>
  );
};

export default MainHeader;
