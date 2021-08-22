import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import AuthContext from '../auth/context';
import AppText from '../components/AppText';

const HomeBox = ({title, img, onPress, loading}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
        //flexWrap: "wrap",
        //width: "44%",
        //alignSelf: "flex-start",
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
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={theme.secondary}
        onPress={onPress}
        style={{borderRadius: 15}}>
        <View style={styles.boxOuter}>
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: '#fff',
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: '#36071b',
            }}>
            <Image source={img} style={{width: 40, height: 40}} />
          </View>

          <AppText
            style={{
              color: theme.textColor,
              fontSize: 16,
              margin: 3,
              textAlign: 'center',
              width: 120,
              fontFamily: 'MontserratMedium',
            }}>
            {title}
          </AppText>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default HomeBox;

const useStyles = theme =>
  StyleSheet.create({
    boxInner: {
      width: 120,
      height: 120,
      backgroundColor: theme.primary2,
      margin: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
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
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
