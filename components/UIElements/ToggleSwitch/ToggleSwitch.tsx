import React, { useEffect, useState } from "react";
import { View, Switch } from "react-native";
import { themeColors } from "../../../utilities/common";
import CustomText from "../CustomText";

import styles from "./ToggleSwitch.styles";

const ToggleSwitch = ({
  label,
  onChange,
  initialValue = false,
}: {
  label: string;
  onChange: () => void;
  initialValue: boolean | undefined;
}) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const toggleSwitch = () => {
    onChange();

    return setIsEnabled((previousState) => !previousState);
  };
  
  useEffect(() => {
    setIsEnabled(initialValue);
  }, [initialValue]);

  return (
    <View style={styles.container}>
      <CustomText style={styles.label}>{label}</CustomText>

      <Switch
        trackColor={{ false: themeColors.gray1, true: themeColors.green }}
        thumbColor={themeColors.white}
        ios_backgroundColor={themeColors.gray3}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default ToggleSwitch;
