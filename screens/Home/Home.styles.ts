import { StyleSheet } from "react-native";
import { themeColors } from "../../utilities/common";

export default StyleSheet.create({
  container: { flex: 1 },
  carouselContainer: {
    paddingVertical: 20,
    backgroundColor: themeColors.primary,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: { paddingBottom: 40 },
  categoriesWrapper: { marginBottom: 20 },
});
