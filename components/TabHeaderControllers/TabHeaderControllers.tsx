import React from "react";
import { View } from "react-native";

import CircularButton from "../UIElements/CircularButton";

import styles from "./TabHeaderControllers.styles";

const TabHeaderControllers = ({
  controllers = [],
}: {
  controllers: ButtomType[];
}) => {
  const controllersJSX = controllers.map(({ action, icon, id }) => (
    <CircularButton action={action} icon={icon} key={id} />
  ));

  return <View style={styles.wrapper}>{controllersJSX}</View>;
};

export default TabHeaderControllers;
