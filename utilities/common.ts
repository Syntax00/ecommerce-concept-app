import { Dimensions } from "react-native";

const themeColors = {
  primary: "#F2927E",
  secondary: "#555",
  black: "#000",
  white: "#FFF",
  green: "#5ddd9d",
  red: "#f23e4d",
  gray: "#f7f7f7",
  gray1: "#ececec",
  gray2: "#dbdbdb",
  gray3: "#a0a0a0",
  gray4: "#7e7e7e",
  gray5: "#4a4a4a",
};
const dimensions = {
  windowWidth: Dimensions.get("window").width,
  windowHeight: Dimensions.get("window").height,
};
const images = {
  "women clothing": require("../assets/images/women-clothing.png"),
  "men clothing": require("../assets/images/male-clothes.png"),
  jewelery: require("../assets/images/earrings.png"),
  electronics: require("../assets/images/electronics.png"),
  emptyState: require("../assets/images/empty-state.png"),
  emptyCart: require("../assets/images/empty-cart.png"),
  userPlaceholder: require("../assets/images/user-placeholder.jpg"),
};
const fonts = {
  "OpenSans-100": require("../assets/fonts/OpenSans-Light.ttf"),
  "OpenSans-400": require("../assets/fonts/OpenSans-Regular.ttf"),
  "OpenSans-500": require("../assets/fonts/OpenSans-SemiBold.ttf"),
  "OpenSans-700": require("../assets/fonts/OpenSans-Bold.ttf"),
  "OpenSans-900": require("../assets/fonts/OpenSans-ExtraBold.ttf"),
};

export { themeColors, dimensions, images, fonts };
