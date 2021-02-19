import React from "react";
import { Image, View, ScrollView, TouchableOpacity } from "react-native";

import SectionTitle from "../UIElements/SectionTitle";
import CustomText from "../UIElements/CustomText";

import { navigate } from "../../navigation/navigationService";

import styles from "./LatestProducts.styles";

const LatestProductCard = ({ data }: { data: ProductType }) => {
  const { title, price, image, id } = data || {};
  const routeToProductDetails = () => navigate("ProductDetails", { id });

  return (
    <TouchableOpacity
      style={styles.productCardContainer}
      onPress={routeToProductDetails}
    >
      <View style={styles.newPatchWrapper}>
        <CustomText style={styles.newPatch}>New</CustomText>
      </View>

      <Image source={{ uri: image }} style={styles.productImage} />

      <View>
        <CustomText style={styles.title} numberOfLines={3}>
          {title}
        </CustomText>
        <CustomText style={styles.price}>{`$${price}`}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

const LatestProducts = ({ data = [] }: { data: ProductType[] }) => (
  <View>
    <SectionTitle>Latest Products</SectionTitle>

    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {data.map((product) => (
        <LatestProductCard data={product} key={product.id} />
      ))}
    </ScrollView>
  </View>
);

export default LatestProducts;
