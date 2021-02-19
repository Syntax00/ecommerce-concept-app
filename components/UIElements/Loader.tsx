import React from "react";
import { View, StyleSheet } from "react-native";
import { Fold } from "react-native-animated-spinkit";

import CustomText from "./CustomText";

import { themeColors } from "../../utilities/common";

const Loader = ({ message }: { message?: string }) => {
  return (
    <View style={styles.container}>
      <Fold
        size={48}
        style={{ marginBottom: 20 }}
        color={themeColors.primary}
      />
      {message ? (
        <CustomText style={styles.messageText}>{message}</CustomText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.gray,
    justifyContent: "center",
    alignItems: "center",
  },
  messageText: {
    color: themeColors.secondary,
  },
});

export default Loader;
