import { StyleSheet } from "react-native";

import { themeColors } from "../../../utilities/common";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themeColors.white,
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 20,
    borderRadius: 30,
    paddingVertical: 17,
  },
  loader: {
    marginVertical: 4,
  },
  secondary: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: themeColors.primary,
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 20,
    borderRadius: 30,
    paddingVertical: 16,
  },
  btnText: {
    fontSize: 16,
    color: themeColors.black,
    paddingLeft: 10,
    fontWeight: "500",
  },
  btnTextSecondary: {
    color: themeColors.black,
    fontWeight: "500",
  },
  btnIcon: {
    textAlign: "center",
    fontSize: 22,
    paddingRight: 10,
    color: themeColors.black,
  },
  btnIconSecondary: {
    textAlign: "center",
    fontSize: 22,
    paddingRight: 10,
    color: themeColors.black,
  },
  label: { flex: 1 },
  disabled: { backgroundColor: "#E9EBEE" },
  disabledText: { color: "#CBCBCC" },
});
