import { StyleSheet } from "react-native";
import { dimensions, themeColors } from "../../utilities/common";

export default StyleSheet.create({
  container: { flex: 1 },
  productImageWrapper: {
    backgroundColor: themeColors.white,
    paddingVertical: 20,
    marginBottom: 20,
    paddingBottom: 0,
    borderBottomColor: themeColors.primary,
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
    marginTop: 10,
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
    textAlign: "left"
  },
  productCategory: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: themeColors.gray1,
  },
  productCategoryWrapper: { flexDirection: "row", marginBottom: 10 },
  productDescription: {
    fontSize: 14,
    color: themeColors.secondary,
    textAlign: "left"
  },
  addToCartWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 7,
    marginBottom: 40,
  },
  addedToCartMessage: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  addedToCartIcon: {
    color: themeColors.green,
    fontSize: 16,
    marginRight: 10,
  },
  addedToCardTxt: {
    color: themeColors.green,
    fontSize: 14,
  },
});
