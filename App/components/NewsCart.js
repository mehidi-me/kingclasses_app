import React, {useContext, useMemo, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import AuthContext from '../auth/context';

import AppText from './AppText';

const NewsCart = ({navigation, data}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  const [loading, setLoading] = useState(false);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        if (item.link_url) {
          navigation.navigate('watchvideoscreen', {
            url: item.link_url,
            title: item.title,
          });
        } else {
          navigation.navigate('notificationdetails', {
            title: item.title,
            description: item.description,
            blog_data: item.blog_data,
          });
        }
      }}
      style={styles.card}>
      <View
        style={{
          flex: 1.3,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        {loading ? (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.primary,
              opacity: 0.8,
              zIndex: 999,
            }}>
            <ActivityIndicator size={30} color={theme.secondary} />
          </View>
        ) : null}

        <FastImage
          style={{width: '100%', height: '100%'}}
          source={{
            uri:
              'https://kingclasses.net/resources/upload-images/' +
              item.image_url,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={{flex: 2, marginLeft: 10, marginTop: 10}}>
        <AppText>{item.title}</AppText>
        <AppText style={{fontSize: 14, color: theme.grey}}>
          {item.description.length > 100
            ? item.description.substring(0, 100) + '...'
            : item.description}
        </AppText>
      </View>
    </TouchableOpacity>
  );

  const memoizedValue = useMemo(() => renderItem, [data]);

  return (
    <FlatList
      data={data}
      keyExtractor={v => v.id.toString()}
      initialNumToRender={5}
      renderItem={memoizedValue}
    />
  );
};

export default NewsCart;

const useStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primary,
    },
    card: {
      flexDirection: 'row',
      height: 180,
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
