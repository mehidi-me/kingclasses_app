<<<<<<< HEAD
import React, {useState, useEffect, useContext} from 'react';
=======
import React, { useState, useEffect } from "react";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
<<<<<<< HEAD
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import useApi from '../hooks/useApi';
import category from '../api/category';
import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import useAuth from '../auth/useAuth';
import useAlert from '../hooks/useAlert';
import BookCard from '../components/BookCard';
import AuthContext from '../auth/context';
import math from '../api/math';

const AllClassesScreen = ({navigation}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  const {user} = useAuth();
  // const user = {
  //   id: 976,
  //   name: 'Mehidi hasan',
  //   email: 'mahedihasan08080@gmail.com',
  //   coin: 500,
  // };
  const [classTitle, setClassTitle] = useState([]);
  const [previewClass, setPreviewClass] = useState([]);
  const [listViewRef, setlistViewRef] = useState();
=======
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import category from "../api/category";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import MathModal from "../components/MathModal";
import useAuth from "../auth/useAuth";
import useAlert from "../hooks/useAlert";

const AllClassesScreen = ({ navigation }) => {
  const { user } = useAuth();
  const [classTitle, setClassTitle] = useState([]);
  const [previewClass, setPreviewClass] = useState([]);

>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  const [mathVisible, setMathVisible] = useState({
    visible: false,
    id: null,
    cost: null,
  });

  const showAlert = useAlert();

<<<<<<< HEAD
  const {data, error, loading, request} = useApi(category.getCategory);
  const {loading: loading2, request: requestMath} = useApi(math.getMath);

  const getCategory = async () => {
    const res = await request();
    if (res.ok) setClassTitle(res.data.data.filter(v => v.parent_id == null));
=======
  const { data, error, loading, request } = useApi(category.getCategory);

  const getCategory = async () => {
    const res = await request();
    if (res.ok) setClassTitle(res.data.data.filter((v) => v.parent_id == null));
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  };

  const handelPress = async (id, cost, title) => {
    const categorys = data.data.data;
<<<<<<< HEAD
    const value = categorys.filter(v => v.parent_id == id);
    const prevalue = categorys.find(v => v.id == id);
    const prevalueCheck = previewClass.find(v => v.id == id);
=======
    const value = categorys.filter((v) => v.parent_id == id);
    const prevalue = categorys.find((v) => v.id == id);
    const prevalueCheck = previewClass.find((v) => v.id == id);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

    if (value.length) {
      setClassTitle(value);

      if (!prevalueCheck) {
        setPreviewClass([...previewClass, prevalue]);
      }
    } else {
      if (cost > user.coin) {
        showAlert({
          message: `${title} এর মূল্য হচ্ছে ${cost} আপনার কয়েন আছে ${user.coin} দয়া করে কয়েন কিনুন।`,
<<<<<<< HEAD
          leftButtonTitle: 'Later',
          rightButtonTitle: 'Add Coin',
          action: () => {
            navigation.navigate('Addcoin');
=======
          leftButtonTitle: "Later",
          rightButtonTitle: "Add Coin",
          action: () => {
            navigation.navigate("Addcoin");
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          },
        });
      } else {
        showAlert({
          message: `${title} এর জন্য আপনার ${cost} কয়েন কেটে নেওয়া হবে।`,
<<<<<<< HEAD
          leftButtonTitle: 'Cancel',
          rightButtonTitle: 'Continue',
          action: async () => {
            const res = await requestMath(id);
            if (res.ok && res.data.ok) {
              navigation.navigate('Mathview', {
                mathVisible: true,
                name: title,
                mathId: id,
                mathCost: cost,
                allCat: previewClass,
                respons: res.data,
              });
            }

            setMathVisible({visible: true, id, cost});
=======
          leftButtonTitle: "Cancel",
          rightButtonTitle: "Continue",
          action: () => {
            setMathVisible({ visible: true, id, cost });
            navigation.navigate("Mathview", {
              mathVisible: true,
              name: title,
              mathId: id,
              mathCost: cost,
              allCat: previewClass,
            });
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
          },
        });
      }
    }
  };

<<<<<<< HEAD
  const preHandelPress = id => {
    const categorys = data.data.data;
    const value = categorys.filter(v => v.parent_id == id);
    const prevalue = categorys.find(v => v.id == id);

    const cat1 = previewClass.find(v => v.id == prevalue.parent_id);
    const cat2 = cat1 && previewClass.find(v => v.id == cat1.parent_id);
    const cat3 = cat2 && previewClass.find(v => v.id == cat2.parent_id);
    const cat4 = cat3 && previewClass.find(v => v.id == cat3.parent_id);
    const cat5 = cat4 && previewClass.find(v => v.id == cat4.parent_id);

    const arr = [cat5, cat4, cat3, cat2, cat1, prevalue];
    let preclass = [];
    arr.map(v => {
=======
  const preHandelPress = (id) => {
    const categorys = data.data.data;
    const value = categorys.filter((v) => v.parent_id == id);
    const prevalue = categorys.find((v) => v.id == id);

    const cat1 = previewClass.find((v) => v.id == prevalue.parent_id);
    const cat2 = cat1 && previewClass.find((v) => v.id == cat1.parent_id);
    const cat3 = cat2 && previewClass.find((v) => v.id == cat2.parent_id);
    const cat4 = cat3 && previewClass.find((v) => v.id == cat3.parent_id);
    const cat5 = cat4 && previewClass.find((v) => v.id == cat4.parent_id);

    const arr = [cat5, cat4, cat3, cat2, cat1, prevalue];
    let preclass = [];
    arr.map((v) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      if (v) {
        preclass.push(v);
      }
    });

    setPreviewClass(preclass);

    if (value.length) {
      setClassTitle(value);
    }
  };

<<<<<<< HEAD
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("tabPress", () => {
  //     setPreviewClass([]);
  //     getCategory();
  //   });
  //   return unsubscribe;
  // }, [navigation]);
=======
  useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", () => {
      setPreviewClass([]);
      getCategory();
    });
    return unsubscribe;
  }, [navigation]);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

  useEffect(() => {
    setPreviewClass([]);
    getCategory();
  }, []);

  return (
    <>
<<<<<<< HEAD
      <AppScreen>
        <ActivityIndicator visible={loading || loading2} />
        <ScrollView
          ref={ref => {
            //console.log(ref);
            setlistViewRef(ref);
          }}
          onContentSizeChange={() =>
            //listViewRef.scrollToEnd({ duration: 2000, animated: true })
            setTimeout(
              () => listViewRef.scrollToEnd({duration: 2000, animated: true}),
              2000,
            )
          }>
          <ImageBackground
            //source={require("../assets/backgroun.jpg")}
            style={{
              flex: 1,
              backgroundColor: theme.primary,
              paddingTop: 20,
            }}>
            {/* <AppText style={styles.text}>Filtering Classes</AppText> */}

            {previewClass.map(v => (
=======
      <ImageBackground
        source={require("../assets/backgroun.jpg")}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <AppScreen>
            <AppText style={styles.text}>Filtering Classes</AppText>

            {previewClass.map((v) => (
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
              <View key={v.id}>
                <TouchableOpacity onPress={() => preHandelPress(v.id)}>
                  <AppText
                    style={{
<<<<<<< HEAD
                      color: theme.textColor,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
=======
                      color: colors.grey,
                      textAlign: "center",
                    }}
                  >
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
                    {v.title}
                  </AppText>
                </TouchableOpacity>
                <MaterialCommunityIcons
                  name="arrow-down"
                  size={16}
<<<<<<< HEAD
                  color={theme.grey}
                  style={{textAlign: 'center'}}
                />
              </View>
            ))}
            {classTitle.map(v =>
              v.cost == null && !v.book_title ? (
                <TouchableOpacity key={v.id} onPress={() => handelPress(v.id)}>
                  <AppText style={styles.button}>{v.title}</AppText>
                </TouchableOpacity>
              ) : null,
            )}
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {classTitle.map(v =>
                !v.book_title && v.cost ? (
                  <TouchableOpacity
                    onPress={() => handelPress(v.id, v.cost, v.title)}
                    style={styles.button2}
                    key={v.id}>
                    <AppText style={styles.text2}>{v.title}</AppText>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <Text style={{color: theme.gold}}>Cost: {v.cost}</Text>
                      {/* <Text style={{ color: "green" }}>Complete</Text> */}
                    </View>
                  </TouchableOpacity>
                ) : null,
              )}
              {classTitle.map(v =>
                v.book_title && v.cost == null ? (
                  <BookCard
                    key={v.id}
                    title={v.book_title}
                    uri={
                      'https://kingclasses.net/resources/upload-images/' +
                      v.book_image_url
                    }
                    onPress={() =>
                      navigation.navigate('Bookdetails', {
                        title: v.book_title,
                        description: v.book_description,
                        image_url: v.book_image_url,
                        book_url: v.book_url,
                      })
                    }
                  />
                ) : null,
              )}
            </View>
          </ImageBackground>

          {!classTitle.length ? (
            !error?.ok ? (
              <>
                <AppText style={styles.text2}>Somthing was wrong!</AppText>
                <AppText style={styles.text2}>{error?.message}</AppText>
                <AppButton title="Retry" onPress={getCategory} />
              </>
            ) : null
          ) : null}
        </ScrollView>
      </AppScreen>
=======
                  color={colors.grey}
                  style={{ textAlign: "center" }}
                />
              </View>
            ))}
            {classTitle.map((v) =>
              v.cost == null ? (
                <TouchableOpacity key={v.id} onPress={() => handelPress(v.id)}>
                  <AppText style={styles.button}>{v.title}</AppText>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  key={v.id}
                  onPress={() => handelPress(v.id, v.cost, v.title)}
                >
                  <View style={styles.button2}>
                    <AppText style={styles.text2}>{v.title}</AppText>
                    <View
                      style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <Text style={{ color: "gold" }}>Cost: {v.cost}</Text>
                      {/* <Text style={{ color: "green" }}>Complete</Text> */}
                    </View>
                  </View>
                </TouchableOpacity>
              )
            )}
          </AppScreen>
        </ScrollView>
        {!classTitle.length ? (
          !error.ok ? (
            <>
              <AppText style={styles.text2}>Somthing was wrong!</AppText>
              <AppText style={styles.text2}>{error.message}</AppText>
              <AppButton title="Retry" onPress={getCategory} />
            </>
          ) : null
        ) : null}
        <ActivityIndicator visible={loading} />
      </ImageBackground>

>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      {/* {mathVisible.id ? (
        <MathModal
          mathVisible={mathVisible.visible}
          setMathVisible={setMathVisible}
          mathId={mathVisible.id}
          mathCost={mathVisible.cost}
          allCat={previewClass}
        />
      ) : null} */}
<<<<<<< HEAD

      {/* <PublisherBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        //onDidFailToReceiveAdWithError={this.bannerError}
        //onAdMobDispatchAppEvent={this.adMobEvent}
      /> */}
=======
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    </>
  );
};

export default AllClassesScreen;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    button: {
      borderWidth: 2,
      borderColor: theme.secondary,
      padding: 10,
      margin: 10,
      textAlign: 'center',
      borderRadius: 10,
      backgroundColor: theme.secondary,
      color: '#fff',
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
=======
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: 10,
    margin: 10,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: colors.primary,
    color: colors.white,
  },
  button2: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    margin: 10,
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: colors.secondary,
    color: colors.white,
  },
  text: {
    color: colors.secondary,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text2: {
    textAlign: "center",
    color: colors.white,
  },
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
