import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default googleAuth = async () => {
  GoogleSignin.configure({
    scopes: ['email'],
    webClientId:
      '794089495312-u6m4to4soje0kv35huva4ajjqdob57j7.apps.googleusercontent.com',
  });
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    if (userInfo.user) {
      return userInfo.user;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};
