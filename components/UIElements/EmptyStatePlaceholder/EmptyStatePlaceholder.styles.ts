import { StyleSheet } from "react-native";

import { themeColors } from "../../../utilities/common";

export default StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    borderRadius: 100,
  },
  messageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  message: {
    fontSize: 16,
    fontWeight: "900",
    color: themeColors.black,
  },
  messageDescription: { color: themeColors.gray5, fontSize: 13 },
});
