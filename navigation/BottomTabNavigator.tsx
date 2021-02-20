import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import TabBarIcon from "./TabBarIcon";
import CategoryProducts from "../screens/CategoryProducts/CategoryProducts";
import Cart from "../screens/Cart/Cart";
import ProductDetails from "../screens/ProductDetails/ProductDetails";

import {
  BottomTabParamList,
  HomeStackParamList,
  ProfileParamList,
} from "../types";
import { themeColors } from "../utilities/common";

const HomeStack = createStackNavigator<HomeStackParamList>();
const ProfileStack = createStackNavigator<ProfileParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const HomeNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="Cart"
      component={Cart}
      options={{
        headerTitle: "My Bag",
        headerBackTitleStyle: {
          color: themeColors.secondary,
        },
        headerTintColor: themeColors.secondary,
      }}
    />
    <HomeStack.Screen
      name="CategoryProducts"
      component={CategoryProducts}
      options={{
        headerTitle: "Products",
        headerBackTitleStyle: {
          color: themeColors.secondary,
        },
        headerTintColor: themeColors.secondary,
      }}
    />
    <HomeStack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{
        headerTitle: "Product Details",
        headerBackTitleStyle: {
          color: themeColors.secondary,
        },
        headerTintColor: themeColors.secondary,
      }}
    />
  </HomeStack.Navigator>
);

const ProfileNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{ headerTitle: "Tab Two Title" }}
    />
  </ProfileStack.Navigator>
);

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      tabBarOptions={{
        activeTintColor: themeColors.primary,
        inactiveTintColor: themeColors.gray3,
        labelStyle: { fontWeight: "bold" },
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" focused={focused} />
          ),
          title: "Home",
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="user" focused={focused} />
          ),
          title: "Profile",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
