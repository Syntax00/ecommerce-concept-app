import React from "react";

import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome as FontAwesomeIcon } from "@expo/vector-icons";
import { themeColors } from "../../utilities/common";

const CircularButton = ({ action, icon }: ButtomType) => {
  return (
    <TouchableOpacity onPress={action} style={styles.controller}>
      <FontAwesomeIcon name={icon} style={styles.controllerIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  controller: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColors.gray,
    margin: 3,
    borderRadius: 20,
  },
  controllerIcon: {
    fontSize: 22,
    color: themeColors.primary,
  },
});

export default CircularButton;
