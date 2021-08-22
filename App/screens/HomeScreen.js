import React, {useContext, useEffect} from 'react';
import {
  FlatList,
  TouchableHighlight,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import HeaderRight from '../components/HeaderRight';
import HomeBox from '../components/HomeBox';
import AppContext from '../auth/context';
import useAuth from '../auth/useAuth';
import ActivityIndicator from '../components/ActivityIndicator';

const HomeScreen = ({navigation, loading, loadingMcq}) => {
  const {user, logOut} = useAuth();

  const {theme} = useContext(AppContext);
  const styles = UseStyles(theme);
  //const users = user.user;
  const menuItem = [
    {
      title: 'Paid Classes & Free Books',
      img: require('../assets/lesson.png'),
      navigator: 'AllClasses',
    },
    {
      title: 'Youtube Video',
      img: require('../assets/youtube.png'),
      navigator: 'watchvideoscreen',
    },
    {
      title: 'Buy Gold Coin',
      img: require('../assets/shopping-cart.png'),
      navigator: 'Addcoin',
    },
    {
      title: 'MCQ Exams',
      img: require('../assets/mcq.png'),
      navigator: 'examscreen',
    },
    // {
    //   title: "Latest News",
    //   img: require("../assets/news.png"),
    //   navigator: "Purchasedbook",
    // },
    {
      title: 'Job & Latest News',
      img: require('../assets/job-search.png'),
      navigator: 'appnavigator',
    },
    {
      title: 'Exam Result',
      img: require('../assets/exam.png'),
      navigator: 'resultNewsScreen',
    },
    {
      title: 'My Profile',
      img: require('../assets/user.png'),
      navigator: 'Purchasedbook',
    },
  ];

  return (
    <>
      <AppScreen>
        {/* <ActivityIndicator visible={loadingMcq || loading} /> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/icon.png')}
              style={{width: 50, height: 50, borderRadius: 10, marginLeft: 5}}
            />
            <AppText style={styles.headingText}>King Classes</AppText>
          </View>
          <View style={{flexDirection: 'row'}}>
            <HeaderRight />
          </View>
        </View>
        {/* <AudioPlayer
          uri="https://www.kingclasses.net/admin/upload_audio/5ece3d95bd2fb1.mp3"
          title="thisis title"
        /> */}
        <View>
          <FlatList
            data={menuItem}
            keyExtractor={v => v.title}
            numColumns={2}
            renderItem={({item: v}) =>
              v.title == 'My Profile' ? (
                <TouchableHighlight
                  //activeOpacity={0.5}
                  // underlayColor={theme.secondary}
                  // onPress={() => console.log("pres")}
                  style={{borderRadius: 15, width: '100%', paddingBottom: 50}}>
                  <View style={styles.boxOuter}>
                    {/* <View
                      style={{
                        width: 70,
                        height: 70,
                        backgroundColor: "#fff",
                        borderRadius: 35,
                        //justifyContent: "center",
                        //alignItems: "center",
                        borderWidth: 2,
                        borderColor: "#36071b",
                      }}
                    ></View> */}

                    {/* <AppText
                      style={{
                        color: theme.textColor,
                        fontSize: 16,
                        margin: 3,
                        textAlign: "center",
                        width: 120,
                        fontFamily: "MontserratMedium",
                      }}
                    >
                      {v.title}
                    </AppText> */}
                    <AppListItem
                      title={user.name}
                      subTitle={user.email}
                      imageUrl={{
                        uri: user.photourl,
                      }}
                    />
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        position: 'absolute',
                        width: '100%',
                        bottom: 0,
                        right: 0,
                      }}>
                      <AppText style={{color: theme.gold}}>
                        Your Coin: {user.coin}
                      </AppText>
                      <TouchableOpacity
                        style={{
                          backgroundColor: theme.secondary,
                          paddingVertical: 7,
                          paddingHorizontal: 15,
                          borderRadius: 15,
                        }}
                        onPress={logOut}>
                        <AppText style={{fontSize: 14, color: '#fff'}}>
                          Logout
                        </AppText>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableHighlight>
              ) : (
                <HomeBox
                  key={v.title}
                  title={v.title}
                  img={v.img}
                  loading={
                    v.title == 'MCQ Exams'
                      ? loadingMcq
                      : v.title == 'Job & Latest News' ||
                        v.title == 'Exam Result'
                      ? loading
                      : false
                  }
                  onPress={() =>
                    navigation.navigate(v.navigator, {title: v.title})
                  }
                />
              )
            }
          />
        </View>
      </AppScreen>
    </>
  );
};

export default HomeScreen;

const UseStyles = theme =>
  StyleSheet.create({
    container: {
      marginBottom: 40,
    },
    screen: {
      backgroundColor: theme.dark,
      paddingTop: 0,
    },
    headingText: {
      color: theme.textColor,
      fontSize: 20,
      marginTop: 10,
      marginLeft: 15,
      fontWeight: 'bold',
      fontFamily: 'MontserratBold',
    },
    boxOuter: {
      // width: "44%",
      height: 150,
      backgroundColor: theme.primary2,
      //backgroundColor: "#36071b",
      margin: '5%',
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
      padding: 20,
      position: 'relative',
      //justifyContent: "center",
      //alignItems: "center",
    },
  });
