import { StyleSheet } from "react-native";
import { themeColors } from "../../utilities/common";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themeColors.white,
    borderRadius: 12,
    borderBottomColor: themeColors.gray1,
    borderBottomWidth: 10,
    marginHorizontal: 10,
  },
  userPicWrapper: {
    width: "30%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  userPic: {
    width: 70,
    height: 70,
  },
  userInfoWrapper: {
    width: "70%",
    paddingVertical: 15,
    paddingLeft: 5,
    alignItems: "flex-start"
  },
  userFullName: {
    fontSize: 18,
    fontWeight: "700",
  },
  userInfoList: {
    marginTop: 7,
  },
  userInfoListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  caretIcon: {
    fontSize: 11,
    color: themeColors.primary,
    marginRight: 8,
  },
});
