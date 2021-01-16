import React from "react";
import { Image, View, ScrollView, TouchableOpacity } from "react-native";

import SectionTitle from "../UIElements/SectionTitle";
import CustomText from "../UIElements/CustomText";

import styles from "./LatestProducts.styles";

interface LatestProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
}

const LatestProductCard = ({
  data: { id, title, price, image } = {},
}: {
  data: any;
}) => (
  <TouchableOpacity style={styles.productCardContainer}>
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

const LatestProducts = ({ data = [] }: { data: LatestProductType[] }) => (
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
