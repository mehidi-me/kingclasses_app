import { useEffect, useState, useRef } from "react";
import { Alert, BackHandler, AppState } from "react-native";

const userState = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  console.log("log", appStateVisible);
  //   if (appStateVisible == "active") {
  //     Alert.alert("Kingclasses", `Somthink wrong!`, [
  //       {
  //         text: "Exit",
  //         onPress: () => {
  //           BackHandler.exitApp();
  //         },
  //       },
  //     ]);
  //   }
  // "your account already has activated on samsung s20"
};

export default userState;
