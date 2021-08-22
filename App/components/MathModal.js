<<<<<<< HEAD
import React, {useContext, useEffect, useState, useRef} from 'react';
=======
import React, { useContext, useEffect, useState } from "react";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
<<<<<<< HEAD
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import ImageViewer from 'react-native-image-zoom-viewer';
// import { AdMobInterstitial, AdMobRewarded } from "expo-ads-admob";
// import { setStatusBarHidden } from "expo-status-bar";
// import * as ScreenOrientation from "expo-screen-orientation";

import AppText from '../components/AppText';
import CommentBox from '../components/CommentBox';
import ShowComment from '../components/ShowComment';
import AudioPlayer from '../components/AudioPlayer';
import useApi from '../hooks/useApi';
import math from '../api/math';
//import ActivityIndicator from './ActivityIndicator';
import AuthContext from '../auth/context';
import comment from '../api/comment';
import useAlert from '../hooks/useAlert';
// import { Video } from "expo-av";
// import VideoPlayer from "expo-video-player";
import storage from '../auth/storage';
import WebView from 'react-native-webview';
=======
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import ImageViewer from "react-native-image-zoom-viewer";

import AppText from "../components/AppText";
import colors from "../config/colors";
import CommentBox from "../components/CommentBox";
import ShowComment from "../components/ShowComment";
import AudioPlayer from "../components/AudioPlayer";
import useApi from "../hooks/useApi";
import math from "../api/math";
import ActivityIndicator from "./ActivityIndicator";
import AuthContext from "../auth/context";
import comment from "../api/comment";
import useAlert from "../hooks/useAlert";
import { useBackHandler } from "@react-native-community/hooks";
import { usePreventScreenCapture } from "expo-screen-capture";
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459

const MathModal = ({
  navigation,
  route: {
<<<<<<< HEAD
    params: {mathVisible, name, mathId, mathCost, allCat, respons},
  },
}) => {
  //usePreventScreenCapture();
=======
    params: {
      mathVisible,

      mathId,
      mathCost,
      allCat,
    },
  },
}) => {
  usePreventScreenCapture();
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
  const [zoomImage, setzoomImage] = useState(false);
  const [imagezoom, setImagezoom] = useState();
  const [image, setImage] = useState([]);
  const [audio, setAudio] = useState([]);
<<<<<<< HEAD
  const [videoUrl, setVideo] = useState(null);
  const [loadMedia, setLoadMedia] = useState(null);
  const [inFullscreen2, setInFullsreen2] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const [comments, setComment] = useState([]);

  const refVideo2 = useRef(null);

  const {user, setUser, theme} = useContext(AuthContext);
  const styles = useStyles(theme);

  const [commentBoxVisibal, setCommentBoxVisibal] = useState({
    visible: false,
    placeholder: '',
  });
  const [commentParentId, setCommentParentId] = useState({});
  const [audioStop, setAudioStop] = useState(false);

  const getMath = async data => {
    setLoadMedia(data.loadMedia);
    const coin = user.coin - mathCost;
    setUser({...user, coin});
    await storage.removeUserData();
    await storage.storeUserData({...user, coin});

    const imageObj = data.data.filter(v => v.image_name !== '');

    let imageUrl = [];
    let imageZoomUrl = [];
    imageObj.map(v => {
      if (v.image_url && data.loadMedia) {
        imageUrl.push(v.image_url);
        imageZoomUrl.push({url: v.image_url});
      } else {
        imageUrl.push(
          `https://www.kingclasses.net/admin/upload_image/${v.image_name}`,
        );
        imageZoomUrl.push({
          url: `https://www.kingclasses.net/admin/upload_image/${v.image_name}`,
        });
      }
    });
    setImage(imageUrl);
    setImagezoom(imageZoomUrl);

    const videoObj = data.data.find(v => v.video_name !== null);

    if (videoObj) {
      let url = videoObj.video_name;
      if (url.includes('view?usp=sharing')) {
        setVideo(url.replace('view?usp=sharing', 'preview'));
      } else {
        setVideo(url);
      }
    }

    setAudio(data.data.filter(v => v.audio_name !== ''));

    setComment(data.comment);
    //console.log(res.data.comment);
  };

  const getComment = async id => {
=======

  const [comments, setComment] = useState([]);

  const { user, setUser } = useContext(AuthContext);
  const [commentBoxVisibal, setCommentBoxVisibal] = useState({
    visible: false,
    placeholder: "",
  });
  const [commentParentId, setCommentParentId] = useState(null);

  const { data, error, loading, request } = useApi(math.getMath);
  const getMath = async () => {
    const res = await request(mathId);

    if (res.ok && res.data.ok) {
      const coin = user.coin - mathCost;
      setUser({ ...user, coin });

      const imageObj = res.data.data.filter((v) => v.image_name !== "");
      let imageUrl = [];
      let imageZoomUrl = [];
      imageObj.map((v) => {
        if (v.image_url) {
          imageUrl.push(v.image_url);
          imageZoomUrl.push({ url: v.image_url });
        } else {
          imageUrl.push(
            `https://www.kingclasses.net/admin/upload_image/${v.image_name}`
          );
          imageZoomUrl.push({
            url: `https://www.kingclasses.net/admin/upload_image/${v.image_name}`,
          });
        }
      });
      setImage(imageUrl);
      setImagezoom(imageZoomUrl);

      setAudio(res.data.data.filter((v) => v.audio_name !== ""));

      setComment(res.data.comment);
      //console.log(res.data.comment);
    } else {
      // setMathVisible({ visible: false, id: null, cost: null });
    }
  };

  const getComment = async (id) => {
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    const res = await comment.getComment(id);
    if (res.ok) setComment(res.data.data);
  };

  const showAlert = useAlert();
  useEffect(() => {
<<<<<<< HEAD
    getMath(respons);
    // AdMobRewarded.requestAdAsync();
    // return () => {
    //   AdMobRewarded.removeAllListeners();
    // };
  }, []);

  // useBackHandler(() => {
  //   showAlert({
  //     message: `Complete this math?`,
  //     leftButtonTitle: "No",
  //     rightButtonTitle: "Yes",
  //     action: () => {
  //         setAudioStop(true);
  //navigation.dispatch(e.data.action);
  //     },
  //   });
  //   return true;
  // });

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
        showAlert({
          message: `Complete this math and Leave this screen?`,
          leftButtonTitle: 'No',
          rightButtonTitle: 'Yes',
          action: () => {
            setAudioStop(true);
            navigation.dispatch(e.data.action);
          },
        });
      }),
    [navigation],
  );

  const runFirst = `
  document.getElementsByClassName("ndfHFb-c4YZDc-Wrql6b")[0].style.display = 'none';
    `;
  return (
    <>
      <View
        style={{
          backgroundColor: theme.primary,
          flex: 1,
          //position: "relative"
        }}>
        <View
          style={{
            width: '100%',
            height: 250,
          }}>
          <SliderBox
            onCurrentImagePressed={() =>
              navigation.navigate('imageview', {imagezoom})
            }
            dotColor={theme.secondary}
            images={image}
            imageLoadingColor={theme.secondary}
            resizeMode={'contain'}
            resizeMethod={'resize'}
            sliderBoxHeight={'95%'}
            inactiveDotColor={theme.textColor}
=======
    getMath();
  }, []);

  useBackHandler(() => {
    showAlert({
      message: `Complete this math?`,
      leftButtonTitle: "No",
      rightButtonTitle: "Yes",
      action: () => {
        navigation.goBack();
      },
    });
    return true;
  });
  return (
    <>
      <StatusBar hidden={true} />
      <ActivityIndicator visible={loading} />

      <View
        style={{
          backgroundColor: colors.primary,
          flex: 1,
          //position: "relative"
        }}
      >
        <View
          style={{
            width: "100%",
            height: 200,
          }}
        >
          <SliderBox
            onCurrentImagePressed={() => setzoomImage(true)}
            dotColor={colors.secondary}
            images={image}
            imageLoadingColor={colors.secondary}
            resizeMode={"contain"}
            resizeMethod={"resize"}
            sliderBoxHeight={"100%"}
            inactiveDotColor={colors.white}
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
            dotStyle={{
              width: 20,
              height: 20,
              borderRadius: 10,
            }}
            circleLoop
          />
        </View>
        <ScrollView>
<<<<<<< HEAD
          {videoUrl ? (
            <View style={{position: 'relative', height: 260, width: '100%'}}>
              {videoLoading ? (
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: theme.primary,
                    opacity: 0.8,
                    zIndex: 999,
                  }}>
                  <ActivityIndicator size={50} color={theme.secondary} />
                </View>
              ) : null}
              <WebView
                source={{
                  uri: videoUrl,
                }}
                injectedJavaScript={runFirst}
                onLoad={() => setVideoLoading(false)}
              />
            </View>
          ) : null}
          {audio.map(v => (
            <AudioPlayer
              key={v.id}
              uri={
                v.audio_url && loadMedia
=======
          {audio.map((v) => (
            <AudioPlayer
              key={v.id}
              uri={
                v.audio_url
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
                  ? v.audio_url
                  : `https://www.kingclasses.net/admin/upload_audio/${v.audio_name}`
              }
              title={v.audio_title}
<<<<<<< HEAD
              audioStop={audioStop}
=======
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
            />
          ))}

          <TouchableOpacity
            onPress={() => {
<<<<<<< HEAD
              navigation.goBack();
            }}>
            <AppText
              style={{
                textAlign: 'center',
                color: theme.secondary,
                marginVertical: 20,
              }}>
              Complete this math?
            </AppText>
          </TouchableOpacity>
          {/* <AppText
            style={{
              textAlign: 'center',
              color: theme.secondary,
              marginVertical: 20,
            }}>
            {error.message}
          </AppText> */}

          <ShowComment
            comment={comments}
            onPress={placeholder =>
              setCommentBoxVisibal({visible: true, placeholder})
            }
            commentParentId={(id, email, image) =>
              setCommentParentId({id: id, email: email, image: image})
            }
          />
        </ScrollView>
        <CommentBox
          visibal={commentBoxVisibal.visible}
          placeholder={commentBoxVisibal.placeholder}
          hideCommentInput={visible =>
            setCommentBoxVisibal({visible, placeholder: ''})
          }
          allCat={allCat}
          mathId={mathId}
          mathTitle={name}
          getComment={getComment}
          commentParentId={commentParentId.id}
          commentParentEmail={commentParentId.email}
          parentImage={commentParentId.image}
        />
      </View>

      {/* <Modal
        visible={zoomImage}
        transparent={true}
        onRequestClose={() => setzoomImage(false)}>
=======
              showAlert({
                message: `Complete this math?`,
                leftButtonTitle: "No",
                rightButtonTitle: "Yes",
                action: () => {
                  navigation.goBack();
                },
              });
            }}
          >
            <AppText
              style={{
                textAlign: "center",
                color: colors.secondary,
                marginVertical: 20,
              }}
            >
              Complete this math?
            </AppText>
          </TouchableOpacity>
          <AppText
            style={{
              textAlign: "center",
              color: colors.secondary,
              marginVertical: 20,
            }}
          >
            {error.message}
          </AppText>

          <ShowComment
            comment={comments}
            onPress={(placeholder) =>
              setCommentBoxVisibal({ visible: true, placeholder })
            }
            commentParentId={(id) => setCommentParentId(id)}
          />
        </ScrollView>
        <CommentBox
          data={data}
          visibal={commentBoxVisibal.visible}
          placeholder={commentBoxVisibal.placeholder}
          hideCommentInput={(visible) =>
            setCommentBoxVisibal({ visible, placeholder: "" })
          }
          allCat={allCat}
          mathId={mathId}
          getComment={getComment}
          commentParentId={commentParentId}
        />
      </View>

      <Modal
        visible={zoomImage}
        transparent={true}
        onRequestClose={() => setzoomImage(false)}
      >
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
        <ImageViewer
          imageUrls={imagezoom}
          enableSwipeDown={true}
          enablePreload={true}
          onSwipeDown={() => setzoomImage(false)}
          close={() => setzoomImage(false)}
<<<<<<< HEAD
          menuContext={{back: 'Back'}}
        />
      </Modal> */}
=======
          menuContext={{ back: "Back" }}
        />
      </Modal>
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
    </>
  );
};

export default MathModal;

<<<<<<< HEAD
const useStyles = theme => StyleSheet.create({});
=======
const styles = StyleSheet.create({});
>>>>>>> c0233f25515c61343aed1f302d0b7283486bf459
