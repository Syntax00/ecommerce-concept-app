import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Permissions from "expo-permissions";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import Navigation from "./navigation";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { isMountedRef, navigationRef } from "./navigation/navigationService";
import { fonts, themeColors } from "./utilities/common";
import store from "./store";
import useDeeplinkRedirect from "./hooks/useDeeplinkRedirect";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: themeColors.gray,
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  let [fontsLoaded] = useFonts(fonts);
  const [, askForNotificationsPermission] = Permissions.usePermissions(
    Permissions.NOTIFICATIONS
  );
  const [url] = useDeeplinkRedirect();

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
          <NavigationContainer
            ref={navigationRef}
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : MyTheme}
          >
            <Navigation url={url} />
            <StatusBar backgroundColor={themeColors.gray} />
            <FlashMessage position="bottom" />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
