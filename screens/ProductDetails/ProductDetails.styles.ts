import { StyleSheet } from "react-native";
import { dimensions, themeColors } from "../../utilities/common";

export default StyleSheet.create({
  productImageWrapper: {
    backgroundColor: themeColors.white,
    paddingVertical: 20,
    marginBottom: 20,
    paddingBottom: 0,
    borderBottomWidth: 10,
    borderBottomColor: themeColors.gray1,
  },
  productImage: {
    height: dimensions.windowHeight * 0.27,
    width: dimensions.windowWidth,
    resizeMode: "contain",
  },
  productInfoWrapper: {
    paddingHorizontal: 8,
  },
  priceWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-end",
    width: "40%",
    backgroundColor: themeColors.primary,
    borderTopLeftRadius: 20,
    paddingVertical: 7,
    marginTop: 10
  },
  productPrice: {
    paddingHorizontal: 10,
    textAlign: "center",
    overflow: "hidden",
    color: themeColors.black,
    fontWeight: "500",
    fontSize: 17,
  },
  productTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: themeColors.secondary,
    marginBottom: 5,
  },
  productCategory: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: themeColors.gray1,
  },
  productCategoryWrapper: { flexDirection: "row", marginBottom: 10 },
  productDescription: {
    fontSize: 15,
    color: themeColors.secondary,
  },
  addToCartWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 7,
    marginBottom: 40,
  },
});