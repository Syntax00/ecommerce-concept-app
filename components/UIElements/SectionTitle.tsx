import React from "react";
import { View, StyleSheet } from "react-native";

import CustomText from "./CustomText";

import { themeColors } from "../../utilities/common";

const SectionTitle = ({
  children,
  containerStyle,
  lineStyle,
  textStyle,
}: {
  children: string;
  containerStyle?: any;
  lineStyle?: any;
  textStyle?: any;
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <CustomText style={styles.title}>{children}</CustomText>

      <View style={[styles.underline, lineStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 0,
  },
  title: {
    fontSize: 26,
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
