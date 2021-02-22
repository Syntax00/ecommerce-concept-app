import { StyleSheet } from "react-native";
import { dimensions } from "../../utilities/common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: dimensions.windowWidth,
    height: dimensions.windowHeight * 0.5,
  },
});
