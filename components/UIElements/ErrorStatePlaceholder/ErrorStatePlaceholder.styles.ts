import { StyleSheet } from "react-native";

import { themeColors } from "../../../utilities/common";

export default StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  messageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 14,
    fontWeight: "900",
    color: themeColors.secondary,
  },
  messageDescription: { color: themeColors.secondary, fontSize: 12.5 },
});
