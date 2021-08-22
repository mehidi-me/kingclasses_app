<<<<<<< HEAD
import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Sound from 'react-native-sound';

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AuthContext from '../auth/context';

const AudioPlayer = ({uri, title, audioStop}) => {
  const {theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  const [sounds, setSound] = useState({audio: '', status: ''});
=======
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const AudioPlayer = ({ uri, title }) => {
  const [sounds, setSound] = useState({ audio: "", status: "" });
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  const [soundToggle, setsoundToggle] = useState(false);

  const [buffering, setBuffering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

<<<<<<< HEAD
  const [duration, setDuration] = useState('00:00');
  const [durationPosition, setDurationPosition] = useState('00:00');

  const reloadAudio = () => {
    setSound({audio: '', status: ''});
=======
  const [duration, setDuration] = useState("00:00");
  const [durationPosition, setDurationPosition] = useState("00:00");

  const reloadAudio = () => {
    setSound({ audio: "", status: "" });
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    playSound();
    setError(false);
  };

  const setPosition = (positionMillis, setDura) => {
<<<<<<< HEAD
    const dFullMinu = positionMillis / 60;
=======
    const dFullMinu = positionMillis / 1000 / 60;
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    let dMinu = Math.floor(dFullMinu);
    if (dMinu < 10) {
      dMinu = `0${dMinu}`;
    }
    let dSeco = Math.floor((dFullMinu - dMinu) * 60);
    if (dSeco < 10) {
      dSeco = `0${dSeco}`;
    }

    setDura(`${dMinu}:${dSeco}`);
  };

  const changePosition = async v => {
    try {
<<<<<<< HEAD
      sounds.audio.setCurrentTime(Math.floor(sounds.status.durationMillis * v));
    } catch (error) {
      console.log('set', error);
=======
      await sounds.audio.setPositionAsync(
        Math.floor(sounds.status.durationMillis * v)
      );
    } catch (error) {
      console.log("set", error);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      setError(true);
    }
  };

  const soundToggleFunc = async sound => {
    try {
<<<<<<< HEAD
      !soundToggle
        ? await sound.play(v => console.log(v))
        : await sound.pause();
    } catch (error) {
      console.log('n', error);
      setError(true);
    }
    const duration = sound.getDuration();
    //setPosition(duration, setDuration);
    setInterval(() => {
      sound.getCurrentTime(s => {
        if (Math.floor(s) == Math.floor(duration)) {
          setsoundToggle(true);
          sounds.audio.setCurrentTime(0);
        }
        setPosition(s, setDurationPosition);

        setSound({
          ...sounds,
          status: {positionMillis: s, durationMillis: duration},
        });
      });
    }, 1000);
=======
      !soundToggle ? await sound.playAsync() : await sound.pauseAsync();
    } catch (error) {
      console.log("n", error);
      setError(true);
    }
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  };

  async function playSound() {
    setLoading(true);
<<<<<<< HEAD

    var sound = new Sound(uri, null, err => {
      if (!err) {
        setSound({
          status: {positionMillis: 0, durationMillis: sound.getDuration()},
          audio: sound,
        });
        const duration = sound.getDuration();
        setPosition(duration, setDuration);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
        return;
      }

      console.log(sound.getDuration());
    });
=======
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: false }
      );

      await sound.setOnPlaybackStatusUpdate(async v => {
        if (v.isLoaded) {
          setPosition(v.positionMillis, setDurationPosition);
          setPosition(v.durationMillis, setDuration);

          if (v.positionMillis == v.durationMillis) {
            setsoundToggle(true);
            await sound.setPositionAsync(0);
          }

          setSound({ audio: sound, status: v });

          v.playableDurationMillis == v.positionMillis
            ? setBuffering(true)
            : setBuffering(false);
        } else {
          console.log("error");
        }
      });
    } catch (error) {
      console.log("m", error);
      setError(true);
    }

    setLoading(false);
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  }

  useEffect(() => {
    playSound();
<<<<<<< HEAD
    console.log(uri);
  }, []);

  useEffect(() => {
    return () => {
      if (audioStop && sounds.audio) {
        sounds.audio.stop();
      }
    };
  }, [audioStop]);

  // useEffect(() => {
  //   return sounds.audio
  //     ? () => {
  //         sounds.audio.unloadAsync();
  //       }
  //     : undefined;
  // }, [sounds.audio]);

  return (
    <View style={styles.container}>
      <AppText style={{fontWeight: 'bold'}}>{title}</AppText>
=======
  }, []);

  useEffect(() => {
    return sounds.audio
      ? () => {
          sounds.audio.unloadAsync();
        }
      : undefined;
  }, [sounds.audio]);

  return (
    <View style={styles.container}>
      <AppText style={{ fontWeight: "bold" }}>{title}</AppText>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

      {error ? (
        <AppButton title="Reload" onPress={reloadAudio} color="secondary" />
      ) : loading ? (
<<<<<<< HEAD
        <ActivityIndicator size={60} color={theme.secondary} />
=======
        <ActivityIndicator size={60} color={colors.secondary} />
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
      ) : (
        <>
          <View style={styles.audio}>
            {buffering ? (
              <ActivityIndicator
<<<<<<< HEAD
                style={{width: '15%'}}
                size={40}
                color={theme.secondary}
=======
                style={{ width: "15%" }}
                size={40}
                color={colors.secondary}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
              />
            ) : (
              <MaterialCommunityIcons
                onPress={() => {
                  soundToggleFunc(sounds.audio);
                  setsoundToggle(!soundToggle);
                }}
<<<<<<< HEAD
                name={soundToggle ? 'pause-circle' : 'play-circle'}
                color={theme.secondary}
                size={40}
                style={{width: '15%'}}
              />
            )}

            <View style={{width: '85%'}}>
=======
                name={soundToggle ? "pause-circle" : "play-circle"}
                color={colors.secondary}
                size={40}
                style={{ width: "15%" }}
              />
            )}

            <View style={{ width: "85%" }}>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
              {sounds.audio ? (
                <>
                  <Slider
                    style={{
<<<<<<< HEAD
                      width: '100%',
                    }}
                    minimumTrackTintColor={theme.secondary}
                    maximumTrackTintColor={theme.grey}
=======
                      width: "100%"
                    }}
                    minimumTrackTintColor={colors.secondary}
                    maximumTrackTintColor={colors.primary}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
                    value={
                      sounds.status.positionMillis /
                      sounds.status.durationMillis
                    }
                  />
                  <Slider
                    style={{
<<<<<<< HEAD
                      width: '100%',
                      position: 'absolute',
                    }}
                    minimumTrackTintColor={theme.secondary}
                    maximumTrackTintColor={theme.grey}
=======
                      width: "100%",
                      position: "absolute"
                    }}
                    minimumTrackTintColor={colors.secondary}
                    maximumTrackTintColor={colors.primary}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
                    value={
                      sounds.status.positionMillis /
                      sounds.status.durationMillis
                    }
                    onSlidingStart={() => setsoundToggle(false)}
                    onValueChange={v =>
                      setPosition(
                        Math.floor(sounds.status.durationMillis * v),
<<<<<<< HEAD
                        setDurationPosition,
=======
                        setDurationPosition
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
                      )
                    }
                    onSlidingComplete={v => {
                      soundToggleFunc(sounds.audio);
                      changePosition(v);
                      setsoundToggle(true);
                    }}
                  />
                </>
              ) : (
                <AppText></AppText>
              )}
            </View>
          </View>
<<<<<<< HEAD
          <Text style={{color: theme.textColor}}>
=======
          <Text>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
            {durationPosition}/{duration}
          </Text>
        </>
      )}
    </View>
  );
};

export default AudioPlayer;

<<<<<<< HEAD
const useStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.primary2,
      padding: 5,
      marginVertical: 10,
      marginHorizontal: 5,
      alignItems: 'center',
      borderColor: theme.primary,
      borderRadius: 20,
      borderWidth: 0,
      shadowColor: '#00070e',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
      elevation: 13,
    },
    audio: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
=======
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems: "center",
    borderColor: colors.primary,
    borderRadius: 20,
    borderWidth: 0,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  audio: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
