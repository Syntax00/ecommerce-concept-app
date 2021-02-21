import React from "react";
import { Image, View } from "react-native";
import { FontAwesome as FontAwesomeIcon } from "@expo/vector-icons";

import CustomText from "../UIElements/CustomText";

import { images } from "../../utilities/common";

import styles from "./ProfileCard.styles";

const ProfileCard = ({ user }: { user: UserDataType }) => {
  const {
    address: { number: addressNumber, street, city } = {},
    username,
    email,
    name: { firstname, lastname } = {},
    phone,
  } = user;
  const fullName = `${firstname} ${lastname} ( ${username} )`;
  const fullAddress = `${addressNumber} - ${street} - ${city}`;

  return (
    <View style={styles.container}>
      <View style={styles.userPicWrapper}>
        <Image source={images.userPlaceholder} style={styles.userPic} />
      </View>

      <View style={styles.userInfoWrapper}>
        <CustomText style={styles.userFullName}>{fullName}</CustomText>

        <View style={styles.userInfoList}>
          <View style={styles.userInfoListItem}>
            <FontAwesomeIcon name="caret-right" style={styles.caretIcon} />

            <CustomText>{fullAddress}</CustomText>
          </View>

          <View style={styles.userInfoListItem}>
            <FontAwesomeIcon name="caret-right" style={styles.caretIcon} />

            <CustomText>{email}</CustomText>
          </View>

          <View style={styles.userInfoListItem}>
            <FontAwesomeIcon name="caret-right" style={styles.caretIcon} />

            <CustomText>{phone}</CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
