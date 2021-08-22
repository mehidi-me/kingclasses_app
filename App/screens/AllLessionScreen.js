import React, {useState, useEffect, useContext, useRef, useMemo} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  CheckBox,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import category from '../api/category';
import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AuthContext from '../auth/context';
import {MaterialIcons} from '@expo/vector-icons';
import McqBox from '../components/McqBox';
import useToast from '../hooks/useToast';
import useApi from '../hooks/useApi';
import mcq from '../api/mcq';
import mcqStorage from '../../storage/mcqStorage';
import Feather from 'react-native-vector-icons/Feather';
import Sound from 'react-native-sound';
import LottieView from 'lottie-react-native';

const AllLessionScreen = ({
  navigation,
  route: {
    params: {title, id},
  },
}) => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);
  const showTost = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dataNotFound, setdataNotFound] = useState(false);
  const [rightAns, setRightAns] = useState(0);
  const [wrongtAns, setWrongAns] = useState(0);
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [listViewRef, setlistViewRef] = useState();
  const [rightEffect, setRightEffect] = useState(false);

  let RightAns = 0;
  let ComAns = 0;

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewbleItemsChanged = useRef(({viewableItems, changed}) => {
    console.log(viewableItems[0].item.cindex);
    ///setCurrentIndex(viewableItems[0].index);
  }).current;

  const [data, setData] = useState([]);

  const {loading, request} = useApi(mcq.getMcq);
  const getMcqFunc = async id => {
    const res = await request(id);

    if (res.data.ok) {
      if (!res.data.data.length) {
        setdataNotFound(true);
      }
      if (res.data.data) {
        await mcqStorage.totalMcqSet(id.toString(), res.data.data.length);

        const isDone = await mcqStorage.doneMcqGet(id.toString());
        console.log(isDone);
        if (isDone == 'done') {
          res.data.data.map(v => {
            v.done = true;
          });
        }

        setData(res.data.data);
      }
    }
    // const count = await mcqStorage.comMcqGet(id.toString());
    // if (count && count == res.data.data.length) {
    //   setAlreadyDone(true);
    // }
  };

  const completeLession = () => {
    navigation.goBack();
    showTost({message: `Complete ${title}`});
  };

  const mcqEvent = async (index, ans, done, uAlreadyDone) => {
    if (ans) {
    }
    if (!done && !ans) {
      var whoosh = new Sound('wronganswer.mp3', Sound.MAIN_BUNDLE, error => {
        whoosh.play();
      });
    }

    if (done) {
      if (!ans) {
        setWrongAns(v => v + 1);
      }

      setRightAns(v => v + 1);
      RightAns = RightAns + 1;
      setRightEffect(true);
      setTimeout(() => {
        setRightEffect(false);
      }, 3000);

      if (data.length !== index + 1) {
        setTimeout(() => {
          slidesRef.current.scrollToIndex({index: index + 1});
          // listViewRef.scrollTo({
          //   x: 30 * (index + 1),
          //   animated: true,
          // });
          setCurrentIndex(i => i + 1);
        }, 3000);
        const curData = data[index];
        curData.done = true;
      } else {
        setTimeout(() => {
          completeLession();
        }, 3000);
        console.log('data is  set');
        await mcqStorage.doneMcqSet(id.toString());
      }

      ComAns = ComAns + 1;
    }

    await mcqStorage.rightMcqSet(id.toString(), RightAns);
    if (!uAlreadyDone) {
      await mcqStorage.comMcqSet(id.toString(), ComAns);
    }
  };

  const renderItem = ({item, index}) => {
    const inputRange = [
      (index - 1) * SCREEN_WIDTH,
      index * SCREEN_WIDTH,
      (index + 1) * SCREEN_WIDTH,
    ];
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, 30, 0],
    });
    item.cindex = index + 1;
    return (
      <McqBox
        value={item}
        keyLength={index + 1}
        onPress={(ans, done) => {
          mcqEvent(index, ans, done, alreadyDone);
        }}
        //transform={[{translateY}]}
      />
    );
  };

  const memoizedValue = useMemo(() => renderItem, [data]);

  useEffect(() => {
    getMcqFunc(id);
  }, []);

  return (
    <>
      <AppScreen>
        <ActivityIndicator visible={loading} />
        {rightEffect ? (
          <LottieView
            autoPlay
            loop={false}
            source={require('../assets/animations/right.json')}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 999,
            }}
          />
        ) : null}
        {dataNotFound ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <AppText>No data found! Please try next lession.</AppText>
          </View>
        ) : (
          <>
            <View style={{height: 64}}>
              {/* <ScrollView
                horizontal
                ref={ref => {
                  //console.log(ref);
                  setlistViewRef(ref);
                }}>
                {data.map((_, i) => {
                  // console.log(scrollX);
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      key={i.toString()}
                      onPress={() => {
                        slidesRef.current.scrollToIndex({index: i});
                        //setCurrentIndex(i);
                      }}>
                      <View
                        style={[
                          styles.dot,
                          i == currentIndex ? {opacity: 1} : {opacity: 0.3},
                        ]}>
                        <Text style={{color: '#fff', fontWeight: 'bold'}}>
                          {i + 1}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView> */}
              <AppText style={{textAlign: 'center', color: theme.gold}}>
                {currentIndex + 1}/{data.length}
              </AppText>
            </View>

            {/* <View
              style={{
                flexDirection: 'row',
                height: 40,
                justifyContent: 'space-around',
              }}>
              <AppText style={{fontSize: 14, color: 'green'}}>
                Right Ans: {rightAns}
              </AppText>
              <AppText style={{fontSize: 14, color: theme.secondary}}>
                Wrong Ans: {wrongtAns}
              </AppText>
            </View> */}
            <FlatList
              data={data}
              keyExtractor={v => v.id.toString()}
              horizontal
              // showsHorizontalScrollIndicator

              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
              onViewableItemsChanged={viewbleItemsChanged}
              ref={slidesRef}
              renderItem={memoizedValue}
              //initialNumToRender={20}
              //snapToInterval={SCREEN_WIDTH}
              scrollEnabled={false}
            />
            <View
              style={{
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-around',
              }}>
              {currentIndex == 0 ? null : (
                <TouchableOpacity
                  onPress={() => {
                    slidesRef.current.scrollToIndex({index: currentIndex - 1});
                    setCurrentIndex(i => i - 1);
                  }}>
                  <Feather
                    name="arrow-left-circle"
                    size={50}
                    color={theme.secondary}
                  />
                </TouchableOpacity>
              )}

              {currentIndex == data.length - 1 ||
              !data[currentIndex]?.done ? null : (
                <TouchableOpacity
                  onPress={() => {
                    slidesRef.current.scrollToIndex({index: currentIndex + 1});
                    setCurrentIndex(i => i + 1);
                  }}>
                  <Feather
                    name="arrow-right-circle"
                    size={50}
                    color={theme.secondary}
                  />
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
      </AppScreen>
    </>
  );
};

export default AllLessionScreen;

const useStyles = theme =>
  StyleSheet.create({
    dot: {
      height: 30,
      width: 30,
      borderRadius: 15,
      backgroundColor: theme.secondary,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
