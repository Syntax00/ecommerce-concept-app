import React from "react";
import { StyleSheet, View } from "react-native";

import { themeColors } from "../../utilities/common";

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    width: "70%",
    height: 1,
    backgroundColor: themeColors.gray1,
    marginHorizontal: "15%",
    marginVertical: 20
  },
});

export default Separator;
