//import { AdMobInterstitial } from "expo-ads-admob";
import React, {useContext, useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import AuthContext from '../auth/context';
import ActivityIndicator from '../components/ActivityIndicator';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import RenderHtml from 'react-native-render-html';

const NotificationDetailScreen = ({route}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //   AdMobInterstitial.requestAdAsync({
    //     servePersonalizedAds: true,
    //   }).then(() => {
    //     AdMobInterstitial.showAdAsync()
    //       .then(() => {
    //         setLoading(false);
    //       })
    //       .catch(() => {
    //         setLoading(false);
    //       });
    //   });
    //   //setUri(url);
    //   return () => {
    //     //AdMobInterstitial.removeAllListeners();
    //   };
  }, []);

  const tagsStyles = {
    body: {
      padding: 10,
    },
    img: {
      width: Dimensions.get('window').width,
    },
    p: {
      fontSize: 16,
      color: theme.textColor,
    },
    h1: {
      fontSize: 16,
      color: theme.textColor,
    },
    h2: {
      fontSize: 16,
      color: theme.textColor,
    },
    h3: {
      fontSize: 16,
      color: theme.textColor,
    },
    pre: {
      fontSize: 16,
      color: theme.textColor,
    },
    ul: {
      fontSize: 16,
      color: theme.textColor,
    },
    ol: {
      fontSize: 16,
      color: theme.textColor,
    },
    li: {
      fontSize: 16,
      color: theme.textColor,
    },
    span: {
      fontSize: 16,
      color: theme.textColor,
    },
    a: {
      color: theme.secondary,
    },
  };

  return (
    <>
      <AppScreen>
        <ActivityIndicator visible={loading} />
        <ScrollView>
          <View
            style={{
              backgroundColor: theme.primary2,
              overflow: 'hidden',
              margin: '2%',
              padding: '3%',
              borderRadius: 15,
              shadowColor: '#00070e',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.3,
              elevation: 13,
            }}>
            <AppText
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 20,
                color: theme.secondary,
              }}>
              {route.params.title}
            </AppText>

            {!route.params.blog_data ? (
              <AppText style={{lineHeight: 30}}>
                {route.params.description}
              </AppText>
            ) : null}
          </View>
          {route.params.blog_data ? (
            <RenderHtml
              contentWidth={Dimensions.get('window').width}
              source={{html: route.params.blog_data}}
              tagsStyles={tagsStyles}
            />
          ) : null}
        </ScrollView>
      </AppScreen>
    </>
  );
};

export default NotificationDetailScreen;

const useStyles = theme =>
  StyleSheet.create({
    screen: {
      paddingTop: 10,
      backgroundColor: theme.primary,
    },
  });
