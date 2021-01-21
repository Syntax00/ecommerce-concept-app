import React from "react";
import { Image, View, ScrollView, TouchableOpacity } from "react-native";

import SectionTitle from "../UIElements/SectionTitle";
import CustomText from "../UIElements/CustomText";

import { images } from "../../utilities/common";

import styles from "./Categories.styles";

const CategoryCard = ({ name = "" }: { name: string }) => (
  <TouchableOpacity style={styles.categoryCardContainer}>
    <Image source={images[name]} style={styles.categoryImage} />

    <CustomText style={styles.categoryTitle}>
      {name && name.slice(0, 1).toUpperCase() + name.slice(1)}
    </CustomText>
  </TouchableOpacity>
);

const Categories = ({ data = [] }: { data: string[] }) => (
  <View>
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {data.map((category) => (
        <CategoryCard name={category} key={category} />
      ))}
    </ScrollView>
  </View>
);

export default Categories;
