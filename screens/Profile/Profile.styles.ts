import { StyleSheet } from "react-native";
import { themeColors } from "../../utilities/common";

export default StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30
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
  addressesContainer: {
    marginHorizontal: 10,
    backgroundColor: "white",
    padding: 15,
    borderBottomColor: themeColors.gray1,
    borderBottomWidth: 10,
    borderRadius: 12,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingRight: 15
  },
  addressIcon: {
    color: themeColors.primary,
    fontSize: 16,
    marginRight: 13,
  },
  addressLabel: {
    fontSize: 16,
  },
  addressesHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
  },
});
