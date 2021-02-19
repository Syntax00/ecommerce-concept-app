import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  RefreshControl,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import CustomSafeAreaView from "../../components/UIElements/CustomSafeAreaView";
import PageContainer from "../../components/UIElements/PageContainer";
import WithNetworkCall from "../../components/WithNetworkCall/WithNetworkCall";
import CustomText from "../../components/UIElements/CustomText";
import SectionTitle from "../../components/UIElements/SectionTitle";

import { themeColors } from "../../utilities/common";
import PRODUCTS_APIS from "../../Networking/productsAPIs";
import { navigate } from "../../navigation/navigationService";

import styles from "./CategoryProducts.styles";

const ProductCard = ({ data }: { data: ProductType }) => {
  const { image, title, description, price, id } = data;

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigate("ProductDetails", { id })}
    >
      <View style={styles.productThumbnailWrapper}>
        <Image source={{ uri: image }} style={styles.productThumbnail} />
      </View>

      <View style={styles.productInfoWrapper}>
        <CustomText style={styles.productTitle}>{title}</CustomText>
        <CustomText style={styles.productDescription}>
          {description.slice(0, 70)}
        </CustomText>
        <CustomText
          style={{
            fontWeight: "700",
            color: themeColors.primary,
            marginTop: 10,
          }}
        >
          {`Price: $${price}`}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const CategoryProducts = ({ route }: { route: any }) => {
  const [refresh, setRefresh] = useState(false);
  const { categoryId } = route.params;
  const categoryName = categoryId[0].toUpperCase() + categoryId.slice(1);

  useEffect(() => {
    setRefresh(false);
  }, [refresh]);

  return (
    <CustomSafeAreaView>
      <WithNetworkCall
        promiseFunc={() => PRODUCTS_APIS.getProductsByCategory(categoryId)}
        idleMessage={`Loading Products in ${categoryName}`}
        OnSuccessComponent={({ data }: { data: ProductType[] }) => (
          <PageContainer>
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={refresh}
                  onRefresh={() => setRefresh(true)}
                />
              }
              data={data}
              keyExtractor={({ id }: { id: string }) => String(id)}
              ListHeaderComponent={() => (
                <SectionTitle
                  containerStyle={{ marginTop: 35 }}
                >{`${categoryName} Products`}</SectionTitle>
              )}
              renderItem={({ item }: { item: any }) => (
                <ProductCard data={item} />
              )}
              onEndReachedThreshold={Platform.OS === "ios" ? 0 : 1}
              showsVerticalScrollIndicator={false}
            />
          </PageContainer>
        )}
        deps={[refresh]}
      />
    </CustomSafeAreaView>
  );
};

export default CategoryProducts;
