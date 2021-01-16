import { StyleSheet } from "react-native";
import { dimensions, themeColors } from "../../utilities/common";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 2.5 * (dimensions.windowHeight / 100),
    width: "100%",
    borderRadius: 10,
    backgroundColor: themeColors.white,
  },
  searchInputWrapper: {
    flexDirection: "row",
    width: "70%",
  },
  searchInput: {
    height: 55,
    paddingHorizontal: 20,
    paddingLeft: 10,
    backgroundColor: themeColors.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  searchIconWrapper: {
    width: 50,
    height: 55,
    backgroundColor: themeColors.white,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchIcon: {
    fontSize: 20,
    color: themeColors.primary,
  },
  controllers: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
});
