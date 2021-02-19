import { StyleSheet } from "react-native";

import { themeColors } from "../../utilities/common";

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: themeColors.white,
    margin: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderBottomWidth: 5,
    borderColor: themeColors.gray1
  },
  productThumbnailWrapper: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  productThumbnail: {
    height: 80,
    width: 80,
    resizeMode: 'contain'
  },
  productInfoWrapper: {
    padding: 14,
    width: "70%",
  },
  productTitle: {
    fontWeight: "700",
    marginBottom: 6,
  },
  productDescription: {
    fontSize: 14,
  },
});
