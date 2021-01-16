import { StyleSheet } from "react-native";
import { themeColors } from "../../utilities/common";

export default StyleSheet.create({
  carouselContainer: {
    paddingVertical: 20,
    backgroundColor: themeColors.primary,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
