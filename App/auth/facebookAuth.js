import {LoginManager, AccessToken, Profile} from 'react-native-fbsdk-next';

export default facebookAuth = async () => {
  const token = await AccessToken.getCurrentAccessToken();
  if (token) {
    if (token.accessToken) {
      LoginManager.logOut();
    }
  }

  return LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    async function (result) {
      if (result.isCancelled) {
        return false;
      } else {
        const aToken = await AccessToken.getCurrentAccessToken();
        if (aToken.accessToken) {
          const res = await fetch(
            'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
              aToken.accessToken,
          );
          let user = await res.json();
          const json = await Profile.getCurrentProfile();

          user.photo = json.imageURL;

          return user;
        } else {
          return false;
        }
      }
    },
    function (error) {
      console.log('Login fail with error: ' + error);
      return false;
    },
  );
};
