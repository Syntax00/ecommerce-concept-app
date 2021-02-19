import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";

import CustomText from "../UIElements/CustomText";

import { images } from "../../utilities/common";
import { navigate } from "../../navigation/navigationService";
import { formateCategoryName } from "../../utilities/helpers";

import styles from "./Categories.styles";

const CategoryCard = ({ name = "" }: { name: string }) => {
  const categoryDisplayName = formateCategoryName(name);

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
  <ScrollView
    contentContainerStyle={{ paddingHorizontal: 10 }}
    horizontal
    showsHorizontalScrollIndicator={false}
  >
    {data.map((category) => (
      <CategoryCard name={category} key={category} />
    ))}
  </ScrollView>
);

export default Categories;
