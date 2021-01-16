import React from "react";
import { SafeAreaView, StatusBar, Platform } from "react-native";

const CustomSafeAreaView = ({ children }: { children: any }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
