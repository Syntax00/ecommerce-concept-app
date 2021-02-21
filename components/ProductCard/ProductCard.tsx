import React, { useCallback } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { FontAwesome as FontAwesomeIcon } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import CustomText from "../UIElements/CustomText";

import { navigate } from "../../navigation/navigationService";
import { formatePrice } from "../../utilities/helpers";
import { actions as cartActions } from "../../store/slices/cart";

import styles from "./ProductCard.styles";

const ProductCard = ({
  data,
  cartView,
}: {
  data: ProductType;
  cartView?: boolean;
}) => {
  const { image, title, description, price, id } = data;
  const routeToProductDetails = () => navigate("ProductDetails", { id });
  const formattedPrice = formatePrice(price);
  const dispatch = useDispatch();
  const removeFromCart = useCallback(
    () => dispatch(cartActions.remove(id)),
    []
  );
  
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={routeToProductDetails}
    >
      <View style={styles.productThumbnailWrapper}>
        <Image source={{ uri: image }} style={styles.productThumbnail} />
      </View>

      <View style={styles.productInfoWrapper}>
        <CustomText style={styles.productTitle}>{title}</CustomText>
        <CustomText style={styles.productDescription}>
          {description.slice(0, 70)}
        </CustomText>

        <CustomText
          style={styles.price}
        >{`Price: ${formattedPrice}`}</CustomText>

        {cartView ? (
          <TouchableOpacity onPress={removeFromCart} style={styles.removeBtn}>
            <FontAwesomeIcon name="times" style={styles.removeIcon} />
            <CustomText>Remove</CustomText>
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
