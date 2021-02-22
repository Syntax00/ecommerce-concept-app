import { showMessage } from "react-native-flash-message";
import _get from "lodash/get";
import queryString from "query-string";

import { fromNullable } from "./fp_utils";
import errorsMap from "./errorsMap";
import { navigate } from "../navigation/navigationService";

const formateCategoryName = (name: string | undefined): any =>
  fromNullable(name, "No category's name found")
    .map((categoryName) => categoryName.split(" ")[0])
    .map(
      (categoryFirstName) =>
        categoryFirstName.slice(0, 1).toUpperCase() +
        categoryFirstName.split(" ")[0].slice(1)
    )
    .fold(
      (_: any, error: string) => error, // Return the given error passed to fromNullable
      (categoryName: string) => categoryName // In case of success, return the modified category name
    );

const formatePrice = (price: number): string => `$${price.toString()}`;
const showToastMessage = (
  type:
    | "none"
    | "default"
    | "info"
    | "success"
    | "danger"
    | "warning"
    | undefined,
  message: string,
  onClick?: () => void
) =>
  showMessage({
    message,
    type,
    onPress: onClick,
    duration: 3000,
    icon: "auto",
  });

const resolveNetworkError = (error: any): string => {
  const status = _get(error, "response.status");

  return errorsMap[status] || error.message || "Something went wrong.";
};
const handleDeeplinkRedirect = (url: string | undefined | null) => {
  if (url) {
    const productId = queryString.parse(url.split("?")[1]);
    if (productId?.id) navigate("ProductDetails", productId);
  }
};
export {
  formateCategoryName,
  formatePrice,
  showToastMessage,
  resolveNetworkError,
  handleDeeplinkRedirect,
};
