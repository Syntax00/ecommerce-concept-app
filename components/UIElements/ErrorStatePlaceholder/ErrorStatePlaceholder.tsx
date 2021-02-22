import React from "react";
import { Image, View } from "react-native";

import CustomText from "../CustomText";

import { images } from "../../../utilities/common";

import styles from "./ErrorStatePlaceholder.styles";

const ErrorStatePlaceholder = ({
  image,
  message,
  messageDescription,
}: {
  image?: any;
  message: string;
  messageDescription?: string;
}) => (
  <View style={styles.container}>
    <Image source={image || images.error} style={styles.image} />

    <View style={styles.messageWrapper}>
      <CustomText style={styles.message}>{message}</CustomText>

      <CustomText style={styles.messageDescription}>
        {messageDescription}
      </CustomText>
    </View>
  </View>
);

export default ErrorStatePlaceholder;
