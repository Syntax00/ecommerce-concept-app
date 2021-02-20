import React from "react";
import { Platform, FlatList } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard/ProductCard";
import PageContainer from "../../components/UIElements/PageContainer";
import SectionTitle from "../../components/UIElements/SectionTitle";

const Cart = () => {
  const { cart: cartState } = useSelector((state: RootStateOrAny) => state);
  const cartProductsList = Object.values(cartState);

  return (
    <PageContainer>
      <FlatList
        data={cartProductsList}
        keyExtractor={({ id }: { id: string }) => String(id)}
        ListHeaderComponent={() => (
          <SectionTitle containerStyle={{ marginTop: 35 }}>My Bag</SectionTitle>
        )}
        renderItem={({ item }: { item: any }) => <ProductCard data={item} />}
        onEndReachedThreshold={Platform.OS === "ios" ? 0 : 1}
        showsVerticalScrollIndicator={false}
      />
    </PageContainer>
  );
};

export default Cart;
