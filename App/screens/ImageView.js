import React, {useState, useEffect, useContext} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import category from '../api/category';
import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AuthContext from '../auth/context';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageView = ({
  navigation,
  data,
  route: {
    params: {imagezoom},
  },
}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  // const data = [
  //   { title: "Bangla" },
  //   { title: "English" },
  //   { title: "Math" },
  //   { title: "Religion" },
  //   { title: "ICT" },
  //   { title: "Physics" },
  //   { title: "Chemestry" },
  //   { title: "Biology" },
  //   { title: "Accounting" },
  //   { title: "Finance" },
  // ];

  return (
    <>
      <AppScreen>
        <ImageViewer
          imageUrls={imagezoom}
          enableSwipeDown={true}
          enablePreload={true}
          onSwipeDown={() => navigation.pop()}
          close={() => navigation.pop()}
          menuContext={{back: 'Back'}}
        />
      </AppScreen>
    </>
  );
};

export default ImageView;

const useStyles = theme =>
  StyleSheet.create({
    button: {
      borderWidth: 2,
      borderColor: theme.secondary,
      padding: 10,
      margin: 10,
      textAlign: 'center',
      borderRadius: 10,
      backgroundColor: theme.primary,
      color: theme.white,
      shadowColor: theme.secondary,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
    },
    button2: {
      borderWidth: 1,
      borderColor: theme.primary,
      //padding: 10,
      //margin: 10,
      textAlign: 'center',
      borderRadius: 20,
      backgroundColor: theme.primary2,
      color: theme.white,
      borderRadius: 15,
      shadowColor: '#00070e',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
      alignSelf: 'flex-start',
      width: '46%',
      padding: '2%',
      margin: '2%',
    },
    text: {
      color: theme.secondary,
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    text2: {
      textAlign: 'center',
      color: theme.white,
    },
  });
