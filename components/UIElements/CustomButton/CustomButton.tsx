import React from "react";
import { TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import CustomText from "../CustomText";
import Loader from "../Loader";

import styles from "./CustomButton.styles";

interface customButtonType {
  pressAction: () => void;
  label: string;
  icon: string;
  secondary?: boolean;
  disabled?: boolean;
  txtProps?: object;
  txtStyle?: object;
  style?: object;
  loading?: boolean;
  iconStyle?: object;
}

const CustomButton = ({
  pressAction = () => null,
  label,
  icon,
  secondary,
  disabled,
  txtProps = {},
  txtStyle = {},
  style = {},
  loading,
  iconStyle = {},
}: customButtonType) =>
  loading ? (
    <View style={styles.loader}>
      <Loader />
    </View>
  ) : (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => pressAction()}
      style={[
        secondary ? styles.secondary : styles.container,
        disabled && styles.disabled,
        style,
      ]}
    >
      <View style={styles.label}>
        <CustomText
          style={[
            secondary ? styles.btnTextSecondary : styles.btnText,
            disabled && styles.disabledText,
            txtStyle,
          ]}
          {...txtProps}
        >
          {label}
        </CustomText>
      </View>

      <FontAwesome
        name={icon}
        style={[
          secondary ? styles.btnIconSecondary : styles.btnIcon,
          iconStyle,
          disabled && styles.disabledText,
        ]}
      />
    </TouchableOpacity>
  );

export default CustomButton;
