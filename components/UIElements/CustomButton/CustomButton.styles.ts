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
    backgroundColor: themeColors.black,
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
    textAlign: 'left'
  },
  btnTextSecondary: {
    color: themeColors.white,
    fontWeight: "500",
    textAlign: 'left'
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
    color: themeColors.white,
  },
  label: { flex: 1 },
  disabled: { backgroundColor: "#E9EBEE" },
  disabledText: { color: "#CBCBCC" },
});
