import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import {
  TabView as NativeTabView,
  SceneMap,
  TabBar,
} from "react-native-tab-view";
import { dimensions, themeColors } from "../../../utilities/common";

interface SceneType {
  key: string;
  title: string;
  component: any;
}

const getRoutes = (scenes: SceneType[]) =>
  scenes.map(({ key, title }) => ({ key, title }));
const getScenesJSX = (scenes: SceneType[]) =>
  scenes.reduce((acc: any, { key, component }) => {
    acc[key] = component;

    return acc;
  }, {});

const CustomTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={styles.tabBarIndicator}
    style={styles.tabBar}
    labelStyle={styles.tabBarLabel}
    scrollEnabled
    tabStyle={styles.tab}
  />
);
const TabView = ({ scenes = [] }: { scenes: SceneType[] }) => {
  console.log({ scenes });
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState(getRoutes(scenes));
  const _handleIndexChange = (ndx: number) => setIndex(ndx);

  useEffect(() => {
    setRoutes(getRoutes(scenes));
  }, [scenes]);

  return (
    <NativeTabView
      style={styles.container}
      navigationState={{ index, routes }}
      renderTabBar={CustomTabBar}
      renderScene={SceneMap(getScenesJSX(scenes))}
      onIndexChange={_handleIndexChange}
      sceneContainerStyle={{ flex: 1,}}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  tabBar: { backgroundColor: themeColors.white, paddingVertical: 5 },
  tabBarIndicator: { backgroundColor: themeColors.primary, height: 3 },
  tabBarLabel: { color: themeColors.primary },
  tab: { width: dimensions.windowWidth * 0.35 },
});

export default TabView;
