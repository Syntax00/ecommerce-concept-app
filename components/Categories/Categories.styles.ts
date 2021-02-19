import { StyleSheet } from "react-native";
import { dimensions, themeColors } from "../../utilities/common";

export default StyleSheet.create({
  categoriesWrapper: {
    flex: 1,
  },
  categoryCardContainer: {
    flexDirection: 'row',
    backgroundColor: themeColors.white,
    width: 0.4 * dimensions.windowWidth,
    marginHorizontal: 7,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  categoryImage: {
    width: 35,
    height: 35,
    marginRight: 10
  },
  categoryTitle: {
    fontWeight: "500",
    fontSize: 12,
    color: themeColors.secondary,
    textAlign: "center",
  },
});
