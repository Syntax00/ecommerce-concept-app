import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import { themeColors } from "../utilities/common";
import { handleDeeplinkRedirect } from "../utilities/helpers";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { navigationRef } from "./navigationService";

const Stack = createStackNavigator<RootStackParamList>();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: themeColors.gray,
  },
};

const Navigation = ({
  colorScheme,
  url,
}: {
  colorScheme: ColorSchemeName;
  url?: string | undefined | null;
}) => {
  React.useEffect(() => {
    (async () => {
      try {
        handleDeeplinkRedirect(url);
      } catch (e) {
        console.log({ e });
      }
    })();
  }, [url]);

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : MyTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Root" component={BottomTabNavigator} />
    <Stack.Screen
      name="NotFound"
      component={NotFoundScreen}
      options={{ title: "Oops!" }}
    />
  </Stack.Navigator>
);

export default Navigation;
