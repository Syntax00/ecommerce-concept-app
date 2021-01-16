import React from "react";
import { View, StyleSheet } from "react-native";

import CustomText from "./CustomText";

import { themeColors } from "../../utilities/common";

const SectionTitle = ({ children }: { children: string }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{children}</CustomText>

      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0,
  },
  title: {
    fontSize: 23,
    fontWeight: "500",
    color: themeColors.black,
  },
  underline: {
    height: 4,
    width: "25%",
    backgroundColor: themeColors.primary,
  },
});

export default SectionTitle;
