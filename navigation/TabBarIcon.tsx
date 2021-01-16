import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome as FontAwesomeIcon } from "@expo/vector-icons";

import { themeColors } from "../utilities/common";

const TabBarIcon = ({ name, focused }: { name: string; focused: boolean }) => (
  <FontAwesomeIcon
    size={30}
    style={[styles.icon, (focused && styles.focused) || styles.default]}
    name={name}
  />
);

const styles = StyleSheet.create({
  icon: { marginBottom: -3 },
  focused: { color: themeColors.primary },
  default: { color: themeColors.gray3 },
});

export default TabBarIcon;
