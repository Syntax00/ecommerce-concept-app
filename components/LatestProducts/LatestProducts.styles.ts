import { StyleSheet } from "react-native";
import { dimensions, themeColors } from "../../utilities/common";

export default StyleSheet.create({
  categoriesWrapper: {
    flex: 1,
  },
  productCardContainer: {
    backgroundColor: themeColors.white,
    width: 0.4 * dimensions.windowWidth,
    marginHorizontal: 7,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
  },
  newPatchWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: 7,
  },
  newPatch: {
    backgroundColor: themeColors.black,
    paddingVertical: 2,
    paddingHorizontal: 15,
    color: themeColors.white,
    fontWeight: "400",
    borderRadius: 5,
    fontSize: 13,
    overflow: "hidden",
  },
  productImage: {
    width: 90,
    height: 90,
    marginBottom: 13,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "500",
    fontSize: 12,
    color: themeColors.secondary,
    textAlign: "left",
  },
  price: {
    fontWeight: "700",
    fontSize: 14,
    color: themeColors.black,
    marginVertical: 5,
    textAlign: "left",
  },
});
