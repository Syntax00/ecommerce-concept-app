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
    borderColor: themeColors.gray1,
  },
  productThumbnailWrapper: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  productThumbnail: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  productInfoWrapper: {
    padding: 14,
    width: "70%",
    alignItems: "flex-start",
  },
  productTitle: {
    fontWeight: "700",
    marginBottom: 6,
    textAlign: "left",
  },
  productDescription: {
    fontSize: 14,
    textAlign: "left",
  },
  price: {
    fontWeight: "700",
    color: themeColors.primary,
    marginTop: 10,
  },
  removeBtn: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    justifyContent: "center",
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "#f7f7f7",
    marginVertical: 7,
    borderRadius: 30,
  },
  removeIcon: { marginRight: 10 },
});
