import React from "react";
import { Image, View, ScrollView, TouchableOpacity } from "react-native";

import CustomText from "../UIElements/CustomText";

import { images } from "../../utilities/common";
import { navigate } from "../../navigation/navigationService";
import { fromNullable } from "../../utilities/fp_utils";

import styles from "./Categories.styles";

const CategoryCard = ({ name = "" }: { name: string }) => {
  const categoryDisplayName = fromNullable(
    name,
    "No category's name found"
  )
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

  return (
    <TouchableOpacity
      style={styles.categoryCardContainer}
      onPress={() => navigate("CategoryProducts", { categoryId: name })}
    >
      <Image source={images[name]} style={styles.categoryImage} />

      <CustomText style={styles.categoryTitle}>
        {categoryDisplayName}
      </CustomText>
    </TouchableOpacity>
  );
};

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
