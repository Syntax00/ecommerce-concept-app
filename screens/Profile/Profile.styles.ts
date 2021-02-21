import { StyleSheet } from "react-native";
import { themeColors } from "../../utilities/common";

export default StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  togglersContainer: {
    marginHorizontal: 10,
    backgroundColor: "white",
    padding: 15,
    borderBottomColor: themeColors.gray1,
    borderBottomWidth: 10,
    borderRadius: 12,
  },
});
