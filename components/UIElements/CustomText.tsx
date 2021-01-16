import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = ({
  children,
  style,
  ...props
}: {
  children: string;
  style?: any;
}) => (
  <Text
    style={[
      styles.textStyle,
      style,
      {
        fontFamily:
          style && style.fontWeight ? `OpenSans-${style.fontWeight}` : null,
      },
    ]}
    {...props}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "OpenSans-400",
  },
});

export default CustomText;
