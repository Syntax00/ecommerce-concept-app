import React, { useRef } from "react";
import Carousel from "react-native-snap-carousel";
import { View, Image } from "react-native";

import CustomText from "../CustomText";

import { dimensions } from "../../../utilities/common";

import styles from "./AppCarousel.styles";

const _renderItem = ({ item }: { item: ProductType }) => {
  const { image, title, description } = item;

  return (
    <View style={styles.slide}>
      <Image source={{ uri: image }} style={{ width: "100%", height: 190 }} />
      <View style={styles.slideContent}>
        <CustomText style={styles.title}>
          {title && title.toUpperCase()}
        </CustomText>
        
        <CustomText style={styles.description}>
          {description.slice(0, 200)}
        </CustomText>
      </View>
    </View>
  );
};

const AppCarousel = ({ items = [] }: { items: ProductType[] }) => {
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
