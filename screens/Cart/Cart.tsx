import React from "react";
import { Platform, FlatList } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard/ProductCard";
import EmptyStatePlaceholder from "../../components/UIElements/EmptyStatePlaceholder/EmptyStatePlaceholder";
import PageContainer from "../../components/UIElements/PageContainer";
import SectionTitle from "../../components/UIElements/SectionTitle";

import { images } from "../../utilities/common";

import styles from "./Cart.styles";

const Cart = () => {
  const { cart: cartState } = useSelector((state: RootStateOrAny) => state);
  const cartProductsList = Object.values(cartState);

  if (!cartProductsList.length)
    return (
      <EmptyStatePlaceholder
        message="YOUR CART IS EMPTY"
        messageDescription="Start adding products to see them here"
        image={images.emptyCart}
      />
    );

  return (
    <PageContainer>
      <FlatList
        data={cartProductsList}
        keyExtractor={({ id }: { id: string }) => String(id)}
        ListHeaderComponent={() => (
          <SectionTitle containerStyle={styles.title}>My Bag</SectionTitle>
        )}
        renderItem={({ item }: { item: any }) => <ProductCard data={item} cartView />}
        onEndReachedThreshold={Platform.OS === "ios" ? 0 : 1}
        showsVerticalScrollIndicator={false}
      />
    </PageContainer>
  );
};

export default Cart;
