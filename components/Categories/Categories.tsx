import React from "react";
import { Image, View, ScrollView, TouchableOpacity } from "react-native";

import CustomText from "../UIElements/CustomText";

import { images } from "../../utilities/common";
import { navigate } from "../../navigation/navigationService";

import styles from "./Categories.styles";

const CategoryCard = ({ name = "" }: { name: string }) => (
  <TouchableOpacity
    style={styles.categoryCardContainer}
    onPress={() => navigate("CategoryProducts", { categoryId: name })}
  >
    <Image source={images[name]} style={styles.categoryImage} />

    <CustomText style={styles.categoryTitle}>
      {name &&
        name.split(" ")[0].slice(0, 1).toUpperCase() +
          name.split(" ")[0].slice(1)}
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
