<<<<<<< HEAD
import React, {useContext, useEffect, useState} from 'react';
=======
import React, { useEffect, useState } from "react";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
import {
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
<<<<<<< HEAD
} from 'react-native';
import book from '../api/book';
import useAuth from '../auth/useAuth';
import ActivityIndicator from '../components/ActivityIndicator';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import useAlert from '../hooks/useAlert';
import useApi from '../hooks/useApi';
import dayjs from 'dayjs';
import AuthContext from '../auth/context';
=======
} from "react-native";
import book from "../api/book";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "../components/ActivityIndicator";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import useAlert from "../hooks/useAlert";
import useApi from "../hooks/useApi";
import dayjs from "dayjs";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

const BookDetailesScreen = ({
  navigation,
  route: {
<<<<<<< HEAD
    params: {title, description, book_url, image_url},
  },
}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  return (
    <>
      <AppScreen style={styles.screen}>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri:
                  'https://kingclasses.net/resources/upload-images/' +
                  image_url,
              }}
              resizeMode="contain"
              style={styles.image}
            />
            <AppText style={styles.title}>{title}</AppText>
          </View>
          <AppText style={styles.description}>{description}</AppText>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Readbook', {
                url: book_url,
                name: title,
              })
            }>
            <AppText
              style={{
                color: '#fff',
                fontSize: 20,
                padding: 7,
              }}>
              View Book
            </AppText>
          </TouchableOpacity>
        </View>
      </AppScreen>
=======
    params: { id },
  },
}) => {
  const { user, setUser } = useAuth();
  const showAlert = useAlert();
  const { loading, request } = useApi(book.getSingelBook);
  const { loading: loadingPurchased, request: requestPurchased } = useApi(
    book.bookPurchased
  );
  const [data, setData] = useState();
  const getbook = async () => {
    const res = await request(id);
    if (res.ok) return setData(res.data.data[0]);
  };
  const purchasedBook = async (value) => {
    const res = await requestPurchased(value);
    if (res.ok) {
      const coin = user.coin - data.cost;
      setUser({ ...user, coin });
      getbook();
    }
  };
  useEffect(() => {
    getbook();
  }, []);

  const buyBook = () => {
    if (data.cost > user.coin) {
      showAlert({
        message: `${data.title} এর মূল্য হচ্ছে ${data.cost} আপনার কয়েন আছে ${user.coin} দয়া করে কয়েন কিনুন।`,
        leftButtonTitle: "Later",
        rightButtonTitle: "Add Coin",
        action: () => {
          navigation.navigate("Addcoin");
        },
      });
    } else {
      showAlert({
        message: `${data.title} বইটি কেনার জন্য আপনার ${data.cost} কয়েন কেটে নেওয়া হবে।`,
        leftButtonTitle: "Cancel",
        rightButtonTitle: "Continue",
        action: () => {
          purchasedBook({
            user_id: user.id,
            book_id: data.id,
            date: dayjs().format("D MMM YYYY"),
            cost: data.cost,
          });
        },
      });
    }
  };

  return (
    <>
      <ActivityIndicator visible={loading || loadingPurchased} />
      {data ? (
        <AppScreen style={styles.screen}>
          <ScrollView>
            <View style={{ alignItems: "center" }}>
              <Image
                source={{
                  uri:
                    "http://192.168.0.104/king-classes4/resources/upload-images/" +
                    data.image_url,
                }}
                style={styles.image}
              />
              <AppText style={styles.title}>{data.title}</AppText>
            </View>
            <AppText style={styles.description}>{data.description}</AppText>
          </ScrollView>
          <View style={styles.bottomContainer}>
            {data.book_url ? (
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Readbook", {
                    url: data.book_url,
                    name: data.title,
                  })
                }
              >
                <AppText
                  style={{ color: colors.white, fontSize: 20, padding: 10 }}
                >
                  Read Book
                </AppText>
              </TouchableOpacity>
            ) : (
              <>
                <AppText
                  style={{
                    color: colors.gold,
                    fontSize: 22,
                    padding: 10,
                  }}
                >
                  Cost : {data.cost}
                </AppText>

                <TouchableOpacity style={styles.button} onPress={buyBook}>
                  <AppText style={{ color: colors.white, fontSize: 20 }}>
                    Buy now
                  </AppText>
                </TouchableOpacity>
              </>
            )}
          </View>
        </AppScreen>
      ) : null}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    </>
  );
};

export default BookDetailesScreen;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    screen: {
      backgroundColor: theme.primary,
      paddingTop: 0,
      position: 'relative',
      minHeight: '100%',
    },
    image: {
      width: '95%',
      height: 380,
      borderRadius: 5,
    },
    title: {
      margin: 10,
      fontSize: 22,
      color: theme.white,
    },
    description: {
      margin: 10,
      paddingBottom: 100,
      color: theme.grey,
    },
    bottomContainer: {
      width: '100%',
      textAlign: 'center',
      backgroundColor: theme.grey,
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      paddingVertical: 7,
    },
    button: {
      width: '70%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.secondary,
      borderRadius: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
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
=======
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.primary,
    paddingTop: 0,
  },
  image: {
    width: "70%",
    height: 300,
    borderRadius: 10,
  },
  title: {
    margin: 10,
    fontSize: 22,
    color: colors.white,
  },
  description: {
    margin: 10,
    paddingBottom: 80,
    color: colors.grey,
  },
  bottomContainer: {
    width: "100%",
    textAlign: "center",
    backgroundColor: colors.grey,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
  },
  button: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
