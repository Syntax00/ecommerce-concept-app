import React, { useRef } from "react";
import Carousel from "react-native-snap-carousel";
import { View, Image } from "react-native";

import CustomText from "../CustomText";

import { dimensions } from "../../../utilities/common";

import styles from "./AppCarousel.styles";

interface ItemType {
  title: string;
  thumbnail: string;
  description: string;
  id?: number;
}

const _renderItem = ({ item }: { item: ItemType }) => {
  const { thumbnail, title, description } = item;

  return (
    <View style={styles.slide}>
      <Image
        source={{ uri: thumbnail }}
        style={{ width: "100%", height: 190 }}
      />
      <View style={styles.slideContent}>
        <CustomText style={styles.title}>
          {title && title.toUpperCase()}
        </CustomText>
        <CustomText style={styles.description}>{description}</CustomText>
      </View>
    </View>
  );
};

const AppCarousel = ({ items = [] }: { items: ItemType[] }) => {
  const cRef = useRef(null);

  return (
    <Carousel
      ref={cRef}
      layout={"stack"}
      layoutCardOffset={18}
      data={items}
      renderItem={_renderItem}
      sliderWidth={dimensions.windowWidth}
      itemWidth={dimensions.windowWidth - 60}
    />
  );
};

export default AppCarousel;
