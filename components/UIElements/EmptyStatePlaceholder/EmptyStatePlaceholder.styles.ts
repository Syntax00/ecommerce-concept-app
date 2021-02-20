import { StyleSheet } from "react-native";

import { themeColors } from "../../../utilities/common";

export default StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: {
    width: 130,
    height: 130,
    resizeMode: "contain",
    borderRadius: 65,
  },
  messageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: "500",
    color: themeColors.secondary,
  },
  messageDescription: { color: themeColors.secondary },
});
