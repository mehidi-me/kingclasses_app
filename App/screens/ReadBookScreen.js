<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
//import { AdMobInterstitial } from "expo-ads-admob";

import ActivityIndicator from '../components/ActivityIndicator';
import AppScreen from '../components/AppScreen';
import useToast from '../hooks/useToast';
// import { usePreventScreenCapture } from "expo-screen-capture";

const ReadBookScreen = ({navigation, route}) => {
  // usePreventScreenCapture();
=======
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

import ActivityIndicator from "../components/ActivityIndicator";
import useToast from "../hooks/useToast";
import { usePreventScreenCapture } from "expo-screen-capture";

const ReadBookScreen = ({ navigation, route }) => {
  usePreventScreenCapture();
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  const url = route.params.url;
  //const title = route.params.name;
  const [uri, setUri] = useState();

  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [loading1, setLoading1] = useState(false);
  const showToast = useToast();

  useEffect(() => {
    // AdMobInterstitial.requestAdAsync({
    //   servePersonalizedAds: true,
    // })
    //   .then(() => {
    //     AdMobInterstitial.showAdAsync().then(() => {
    //       setLoading1(false);
    //     });
    //   })
    //   .catch(() => {
    //     setLoading1(false);
    //   });

    if (url.includes('view?usp=sharing')) {
      setUri(url.replace('view?usp=sharing', 'preview'));
=======
  const showToast = useToast();

  useEffect(() => {
    if (url.includes("view?usp=sharing")) {
      setUri(url.replace("view?usp=sharing", "preview"));
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    } else {
      setUri(url);
    }
  }, []);
  const runFirst = `
  document.getElementsByClassName("ndfHFb-c4YZDc-Wrql6b")[0].style.display = 'none';
    `;
  return (
<<<<<<< HEAD
    <AppScreen>
      <ActivityIndicator visible={loading || loading1} />
=======
    <View style={{ flex: 1 }}>
      <ActivityIndicator visible={loading} />
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

      <WebView
        onLoad={() => setLoading(false)}
        onError={() => {
          navigation.goBack();
<<<<<<< HEAD
          showToast({message: 'Book not loaded ,please try leater'});
        }}
        source={{uri}}
        injectedJavaScript={runFirst}
      />
    </AppScreen>
=======
          showToast({ message: "Book not loaded ,please try leater" });
        }}
        source={{ uri }}
        injectedJavaScript={runFirst}
      />
    </View>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  );
};

export default ReadBookScreen;
