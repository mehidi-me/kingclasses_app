//import { AdMobInterstitial } from "expo-ads-admob";
import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AuthContext from '../auth/context';
import ActivityIndicator from '../components/ActivityIndicator';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import NewsCart from '../components/NewsCart';

const ResultNewsScreen = ({navigation, data}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  return (
    <>
      <AppScreen>
        {data.length ? (
          <NewsCart data={data.reverse()} navigation={navigation} />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AppText>No data found!</AppText>
          </View>
        )}
      </AppScreen>
    </>
  );
};

export default ResultNewsScreen;

const useStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    card: {
      flexDirection: 'row',
      height: 200,
      backgroundColor: theme.primary2,
      overflow: 'hidden',
      margin: '2%',
      //padding: "3%",
      borderRadius: 15,
      shadowColor: '#00070e',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
    },
  });
