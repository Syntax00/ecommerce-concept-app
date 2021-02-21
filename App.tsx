import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Permissions from "expo-permissions";

import Navigation from "./navigation";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { isMountedRef } from "./navigation/navigationService";
import { fonts, themeColors } from "./utilities/common";
import store from "./store";
import FlashMessage from "react-native-flash-message";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts(fonts);
  const [, askForNotificationsPermission] = Permissions.usePermissions(
    Permissions.NOTIFICATIONS
  );
  
  useEffect(() => {
    askForNotificationsPermission();

    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);
  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar backgroundColor={themeColors.gray} />
          <FlashMessage position="bottom" />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
