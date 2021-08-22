import React, {useContext, useEffect, useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import notification from '../api/notification';
import AuthContext from '../auth/context';
import ActivityIndicator from '../components/ActivityIndicator';
import AppListItem from '../components/AppListItem';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import useApi from '../hooks/useApi';

const NotificationScreen = ({
  navigation,
  route: {
    params: {notifications},
  },
}) => {
  const {theme, user} = useContext(AuthContext);
  const styles = useStyles(theme);

  //const [notifications, setNotification] = useState([]);
  const [isRead, setIsRead] = useState([]);

  // const { data, error, loading, request } = useApi(
  //   notification.getNotification
  // );

  // const getNotification = async () => {
  //   const res = await request();
  //   if (res.data.ok) {
  //     const data = res.data.data;
  //     setNotification(data.reverse());
  //   }
  // };
  //const {data, error, loading, request} = useApi(notification.getNotification);

  const sendReadNotValue = (ids, userId) => {
    let notId = [];
    ids.map(v => {
      if (!v.view?.includes(userId)) {
        notId.push(v.id);
      }
    });

    notification.sendReadNotValue({notId, userId});
  };

  useEffect(() => {
    sendReadNotValue(notifications, user.id);
    // getNotification();
  }, []);
  return (
    <>
      {/* <ActivityIndicator visible={loading} /> */}
      <AppScreen>
        {notifications.length ? (
          <FlatList
            data={notifications}
            keyExtractor={v => v.id.toString()}
            renderItem={({item: v}) => (
              <AppListItem
                title={v.title}
                subTitle={v.description}
                imageUrl={{
                  uri: v.photourl,
                }}
                style={{
                  margin: 5,
                  borderRadius: 10,
                  padding: 10,
                }}
                onPress={() => {
                  navigation.navigate('notificationdetails', {
                    title: v.title,
                    description: v.description,
                  });
                  setIsRead([...isRead, v.id]);
                  //sendReadNotValue(v.id, user.id);
                }}
                isRead={
                  isRead.includes(v.id) || (v.view && v.view.includes(user.id))
                }
              />
            )}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AppText>No notification found!</AppText>
          </View>
        )}
      </AppScreen>
    </>
  );
};

export default NotificationScreen;

const useStyles = theme =>
  StyleSheet.create({
    screen: {
      paddingTop: 10,
      backgroundColor: theme.primary,
    },
    card: {
      flexDirection: 'row',
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
