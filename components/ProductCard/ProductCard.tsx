import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import CustomText from "../UIElements/CustomText";

import { navigate } from "../../navigation/navigationService";
import { formatePrice } from "../../utilities/helpers";

import styles from "./ProductCard.styles";

const ProductCard = ({ data }: { data: ProductType }) => {
  const { image, title, description, price, id } = data;
  const routeToProductDetails = () => navigate("ProductDetails", { id });
  const formattedPrice = formatePrice(price);

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
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;