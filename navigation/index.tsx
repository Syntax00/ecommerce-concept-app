import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import { handleDeeplinkRedirect } from "../utilities/helpers";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = ({ url }: { url?: string | null }) => {
  React.useEffect(() => {
    (async () => {
      handleDeeplinkRedirect(url);
    })();
  }, [url]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
