import React, {useState, useEffect, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from 'react-native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import category from '../api/category';
import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AuthContext from '../auth/context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Sound from 'react-native-sound';

const McqBox = ({navigation, value, onPress, keyLength, transform}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);
  const [mcqEvent, setMcqEvent] = useState({
    A: null,
    B: null,
    C: null,
    D: null,
  });

  const [rightAns, setRightAns] = useState(true);

  const onHandlePress = (v, name) => {
    if (v == value.ans_right) {
      var whoosh = new Sound('rightanswer.mp3', Sound.MAIN_BUNDLE, error => {
        whoosh.play();
      });

      setMcqEvent({...mcqEvent, [name]: 'right'});

      onPress(rightAns, true);
    } else {
      setMcqEvent({...mcqEvent, [name]: 'wrong'});
      onPress(false);
    }

    setRightAns(false);
  };

  const McqEventButton = ({v, title}) => (
    <>
      <AppText
        style={[
          styles.button2,
          !mcqEvent[v]
            ? {}
            : mcqEvent[v] == 'wrong'
            ? {
                borderColor: theme.secondary,
              }
            : mcqEvent[v] == 'right'
            ? {borderColor: 'green'}
            : {},
        ]}>
        {!mcqEvent[v] ? (
          v
        ) : mcqEvent[v] == 'wrong' ? (
          <MaterialIcons name="close" size={24} color={theme.secondary} />
        ) : mcqEvent[v] == 'right' ? (
          <MaterialIcons name="done" size={24} color="green" />
        ) : (
          v
        )}
      </AppText>
      <AppText
        style={[
          styles.button,
          !mcqEvent[v]
            ? {}
            : mcqEvent[v] == 'wrong'
            ? {
                color: theme.secondary,
                textDecorationLine: 'line-through',
                fontSize: 16,
                borderColor: theme.secondary,
              }
            : mcqEvent[v] == 'right'
            ? {fontSize: 18, color: 'green', borderColor: 'green'}
            : {},
        ]}>
        {title}
      </AppText>
    </>
  );
  return (
    <Animated.View style={[styles.card, {transform}]}>
      <AppText style={{fontSize: 14, textAlign: 'center'}}>
        Question {keyLength}
      </AppText>
      <AppText
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          marginVertical: 10,
          width: Dimensions.get('window').width - 45,
        }}>
        {value.qus}
      </AppText>
      <View style={styles.card2}>
        <TouchableOpacity
          onPress={() => onHandlePress(value.ans_1, 'A')}
          style={{flexDirection: 'row'}}>
          <McqEventButton v="A" title={value.ans_1} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onHandlePress(value.ans_2, 'B')}
          style={{flexDirection: 'row'}}>
          <McqEventButton v="B" title={value.ans_2} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onHandlePress(value.ans_3, 'C')}
          style={{flexDirection: 'row'}}>
          <McqEventButton v="C" title={value.ans_3} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onHandlePress(value.ans_4, 'D')}
          style={{flexDirection: 'row'}}>
          <McqEventButton v="D" title={value.ans_4} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default McqBox;

const useStyles = theme =>
  StyleSheet.create({
    card: {
      //borderWidth: 2,
      // borderColor: theme.secondary,
      flex: 1,
      flexDirection: 'column',

      textAlign: 'center',
    },
    card2: {
      width: Dimensions.get('window').width - 45,
      // height: 500,
      padding: 10,
      margin: 10,
      borderRadius: 10,
      backgroundColor: theme.primary2,
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
    button: {
      borderWidth: 1,
      borderColor: theme.grey,
      padding: 5,
      margin: 15,
      fontSize: 16,
      color: theme.grey,
      borderRadius: 5,
      backgroundColor: theme.primary,

      shadowColor: theme.secondary,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
      flex: 1,
    },
    button2: {
      borderWidth: 1,
      borderColor: theme.grey,
      padding: 5,
      paddingHorizontal: 10,
      margin: 15,
      marginRight: 0,
      fontSize: 18,
      color: theme.white,
      borderRadius: 5,
      backgroundColor: theme.primary,

      shadowColor: theme.secondary,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
    },
  });
