import { StyleSheet } from "react-native";
import { themeColors } from "../../../utilities/common";

export default StyleSheet.create({
  slide: {
    width: "100%",
    backgroundColor: themeColors.white,
    borderRadius: 10,
    overflow: "hidden",
  },
  slideContent: {
    padding: 12,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 15,
    color: themeColors.black,
    fontWeight: "700",
    marginBottom: 5
  },
  description: {
    fontSize: 11,
    fontWeight: "100",
  },
});
