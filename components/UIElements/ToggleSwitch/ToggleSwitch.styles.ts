import { StyleSheet } from "react-native";
import { themeColors } from "../../../utilities/common";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 14,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: themeColors.black,
  },
});
