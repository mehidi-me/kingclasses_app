import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

const ButtonAuth = ({
  color = 'primary',
  title,
  onPress,
  width = '100%',
  Icon,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color, width}]}
      onPress={onPress}
      disabled={disabled}>
      <View
        style={{
          alignItems: 'flex-start',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon />
        <View style={{flex: 1}}>
          <AppText style={styles.text}>{title}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonAuth;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    //borderBottomWidth: 2,
    //borderBottomColor: '#fff',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
