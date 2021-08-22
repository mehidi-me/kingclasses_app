import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
//import { AdMobInterstitial } from "expo-ads-admob";
import ActivityIndicator from '../components/ActivityIndicator';
import AppScreen from '../components/AppScreen';
import useToast from '../hooks/useToast';
// import { usePreventScreenCapture } from "expo-screen-capture";

const WatchVideoScreen = ({navigation, route}) => {
  // usePreventScreenCapture();
  const linkUrl = route.params.url;
  //const title = route.params.name;
  const [uri, setUri] = useState();
  const webViewRef = useRef(null);

  const goback = () => {
    // console.log(webViewRef.current);
    webViewRef.current.goBack();
  };
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(false);
  const showToast = useToast();

  // useEffect(() => {
  //   AdMobInterstitial.requestAdAsync({
  //     servePersonalizedAds: true,
  //   }).then(() => {
  //     AdMobInterstitial.showAdAsync()
  //       .then(() => {
  //         setLoading1(false);
  //       })
  //       .catch(() => {
  //         setLoading1(false);
  //       });
  //   });
  //   //setUri(url);
  //   return () => {
  //     AdMobInterstitial.removeAllListeners();
  //   };
  // }, []);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
        if (e.data.action.type == 'GO_BACK') {
          goback();
        } else {
          navigation.dispatch(e.data.action);
        }
      }),
    [navigation],
  );
  // const runFirst = `
  // document.querySelector("#header-bar").style.display = "none";

  // document.querySelector("#player-container-id").style.top = 0;

  // document.getElementsByTagName("ytm-playlist-panel-header")[0].style.display = "none";
  // document.getElementsByTagName("ytm-playlist-controls")[0].style.display = "none";
  // document.querySelector("#app").style.paddingTop = 0;
  //   `;
  return (
    <AppScreen>
      <ActivityIndicator visible={loading || loading1} />

      <WebView
        ref={webViewRef}
        onLoad={() => setLoading(false)}
        onError={() => {
          navigation.goBack();
          showToast({message: 'not loaded ,please try leater'});
        }}
        source={{
          uri: linkUrl
            ? linkUrl
            : 'https://m.youtube.com/channel/UCB9yPPKwD6SivERB2qvMGCQ/videos',
        }}
        //injectedJavaScript={runFirst}
        allowsBackForwardNavigationGestures
        onNavigationStateChange={navState => {
          if (navState.canGoBack) {
            navigation.setParams({
              headerLeftInfo: {
                title: '',
                onPress: () => ref.current.goBack(),
              },
            });
          } else {
            navigation.setParams({
              headerLeftInfo: null,
            });
          }
        }}
      />
    </AppScreen>
  );
};

export default WatchVideoScreen;
