import React from "react";
import { View, StyleSheet } from "react-native";
import { Flow, Fold } from "react-native-animated-spinkit";

import CustomText from "./CustomText";

import { themeColors } from "../../utilities/common";

const PrimaryLoader = () => (
  <Fold size={48} style={{ marginBottom: 20 }} color={themeColors.primary} />
);
const SecondaryLoader = () => (
  <Flow size={70} style={{ marginBottom: 20 }} color={themeColors.gray2} />
);

const Loader = ({
  message,
  secondary,
}: {
  message?: string;
  secondary?: boolean;
}) => {
  const LoaderComponent = secondary ? SecondaryLoader : PrimaryLoader;

  return (
    <View style={styles.container}>
      <LoaderComponent />
      {message ? (
        <CustomText style={styles.messageText}>{message}</CustomText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messageText: {
    color: themeColors.gray5,
    fontSize: 14,
  },
});

export default Loader;
