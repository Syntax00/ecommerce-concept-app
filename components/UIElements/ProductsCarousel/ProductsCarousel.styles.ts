import { StyleSheet } from "react-native";
import { dimensions, themeColors } from "../../../utilities/common";

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
    marginBottom: 5,
    textAlign: "left",
  },
  image: { width: "100%", height: 0.23 * dimensions.windowHeight },
  description: {
    fontSize: 11,
    fontWeight: "100",
    textAlign: "left",
  },
  salePatch: {
    backgroundColor: themeColors.black,
    padding: 5,
    paddingHorizontal: 10,
    color: themeColors.white,
    width: "35%",
    textAlign: "center",
    fontWeight: "900",
    borderRadius: 3,
    overflow: "hidden",
  },
});
