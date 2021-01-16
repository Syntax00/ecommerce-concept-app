import React from "react";

import { View, StyleSheet } from "react-native";

const PageContainer = ({
  children,
  style,
}: {
  children: any;
  style?: object;
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
});

export default PageContainer;
