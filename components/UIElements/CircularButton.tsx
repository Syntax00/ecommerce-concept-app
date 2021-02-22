import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { FontAwesome as FontAwesomeIcon } from "@expo/vector-icons";

import CustomText from "./CustomText";

import { themeColors } from "../../utilities/common";

const CircularButton = ({ action, icon, count }: ButtomType) => {
  return (
    <TouchableOpacity onPress={action} style={styles.controller}>
      <FontAwesomeIcon name={icon} style={styles.controllerIcon} />

      {count && count > 0 ? (
        <View style={styles.count}>
          <CustomText style={styles.countTxt}>{count}</CustomText>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  controller: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColors.white,
    margin: 3,
    borderRadius: 20,
  },
  controllerIcon: {
    fontSize: 22,
    color: themeColors.primary,
  },
  count: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    backgroundColor: themeColors.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  countTxt: {
    color: themeColors.primary,
    fontWeight: "500",
    fontSize: 15,
  },
});

export default CircularButton;
