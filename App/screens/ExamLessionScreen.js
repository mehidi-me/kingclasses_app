import React, {useState, useEffect, useContext} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import category from '../api/category';
import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AuthContext from '../auth/context';
import LottieView from 'lottie-react-native';
import mcqStorage from '../../storage/mcqStorage';
import useToast from '../hooks/useToast';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ExamLessionScreen = ({navigation, route}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);
  const [lession, setLession] = useState([]);

  const setLessionFunc = () => {
    setLession([]);
    route.params.data.map(async v => {
      if (!lession.includes(v) && route.params.id == v.p_id) {
        // const total = await mcqStorage.totalMcqGet(v.id.toString());
        // const right = await mcqStorage.rightMcqGet(v.id.toString());
        // const com = await mcqStorage.comMcqGet(v.id.toString());
        const done = await mcqStorage.doneMcqGet(v.id.toString());
        // v.total = total;
        // v.right = right;
        // if (com == total && com && total) {
        //   v.complete = true;
        // } else {
        //   if (com && com < total) {
        //     v.runing = true;
        //   } else {
        //     v.runing = false;
        //   }
        //   v.complete = false;
        // }
        if (done == 'done') {
          v.done = true;
        }
        setLession(value => [...value, v]);
      }
    });
  };

  const showToast = useToast();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      setLessionFunc();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <AppScreen>
        {lession.length ? (
          <FlatList
            data={lession}
            keyExtractor={(v, inx) => inx}
            renderItem={({item, index}) => (
              // <TouchableOpacity
              //   key={item.title}
              //   onPress={() => {
              //     navigation.navigate('alllessionscreen', {
              //       title: item.title,
              //       id: item.id,
              //     });
              //   }}>
              //   <AppText style={styles.button}>{item.title}</AppText>
              //   <AppText>{item.total}</AppText>
              //   <AppText>{item.right}</AppText>
              //   <AppText>{item.com}</AppText>
              // </TouchableOpacity>
              <TouchableOpacity
                style={styles.button2}
                key={item.title}
                onPress={async () => {
                  if (index == 0) {
                    navigation.navigate('alllessionscreen', {
                      title: item.title,
                      id: item.id,
                    });
                  } else {
                    if (lession[index - 1].done) {
                      navigation.navigate('alllessionscreen', {
                        title: item.title,
                        id: item.id,
                      });
                    } else {
                      showToast({
                        message:
                          'Complete the previous lesson to unlock this one',
                      });
                    }
                  }
                }}>
                <AppText style={{textAlign: 'center'}}>{item.title}</AppText>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  {/* {item.total ? (
                    <Text style={{color: theme.gold}}>
                      Result: {item.right} {' /'} {item.total}
                    </Text>
                  ) : null} */}

                  {item.done ? (
                    // <Text style={{color: 'green'}}>Complete</Text>
                    <Ionicons
                      color="green"
                      name="checkmark-done-circle"
                      size={26}
                    />
                  ) : index == 0 ? (
                    <FontAwesome name="unlock" color={theme.grey} size={24} />
                  ) : lession[index - 1].done ? (
                    <FontAwesome name="unlock" color={theme.grey} size={24} />
                  ) : (
                    // <Text style={{color: theme.secondary}}>Locked</Text>
                    <FontAwesome
                      name="lock"
                      color={theme.secondary}
                      size={24}
                    />
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AppText>No data found!</AppText>
          </View>
        )}
        {/* <ActivityIndicator visible={loading} /> */}
        {/* <ScrollView>
          {data.map(v => (
            <TouchableOpacity
              key={v.title}
              onPress={() => {
                navigation.navigate('alllessionscreen', {title: v.title});
              }}>
              <AppText style={styles.button}>{v.title}</AppText>
            </TouchableOpacity>
          ))}

          {!data.length ? (
            !error.ok ? (
              <>
                <AppText style={styles.text2}>Somthing was wrong!</AppText>
                <AppText style={styles.text2}>{error.message}</AppText>
                <AppButton title="Retry" onPress={getCategory} />
              </>
            ) : null
          ) : null}
        </ScrollView> */}
      </AppScreen>
    </>
  );
};

export default ExamLessionScreen;

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
