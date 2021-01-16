import React from "react";
import { View } from "react-native";

import CircularButton from "../UIElements/CircularButton";

import styles from "./TabHeaderControllers.styles";

interface ControllerType {
  action: () => void;
  icon: string;
  id: number;
}

const TabHeaderControllers = ({
  controllers = [],
}: {
  controllers: ControllerType[];
}) => {
  const controllersJSX = controllers.map(({ action, icon, id }) => (
    <CircularButton action={action} icon={icon} key={id} />
  ));

  return <View style={styles.wrapper}>{controllersJSX}</View>;
};

export default TabHeaderControllers;
