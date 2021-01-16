import { StyleSheet } from "react-native";
import { dimensions, themeColors } from "../../utilities/common";

export default StyleSheet.create({
  categoriesWrapper: {
    flex: 1,
  },
  categoryCardContainer: {
    backgroundColor: themeColors.white,
    width: 0.35 * dimensions.windowWidth,
    marginHorizontal: 7,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  categoryImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  categoryTitle: {
    fontWeight: "500",
    fontSize: 12,
    color: themeColors.secondary,
    textAlign: "center",
  },
});
