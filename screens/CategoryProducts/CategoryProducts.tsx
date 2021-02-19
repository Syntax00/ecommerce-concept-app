import React from "react";
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

import PRODUCTS_APIS from "../../Networking/productsAPIs";
import { navigate } from "../../navigation/navigationService";
import usePullToRefresh from "../../hooks/usePullToRefresh";
import { formatePrice } from "../../utilities/helpers";

import styles from "./CategoryProducts.styles";

const ProductCard = ({ data }: { data: ProductType }) => {
  const { image, title, description, price, id } = data;
  const routeToProductDetails = () => navigate("ProductDetails", { id });
  const formattedPrice = formatePrice(price);

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={routeToProductDetails}
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
          style={styles.price}
        >{`Price: ${formattedPrice}`}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

const CategryProductsView = ({
  data,
  categoryName,
  handleRefresh,
  refresh,
}: {
  data: ProductType[];
  categoryName: string;
  handleRefresh: any;
  refresh: any;
}) => (
  <PageContainer>
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={() => handleRefresh(true)}
        />
      }
      data={data}
      keyExtractor={({ id }: { id: string }) => String(id)}
      ListHeaderComponent={() => (
        <SectionTitle
          containerStyle={{ marginTop: 35 }}
        >{`${categoryName} Products`}</SectionTitle>
      )}
      renderItem={({ item }: { item: any }) => <ProductCard data={item} />}
      onEndReachedThreshold={Platform.OS === "ios" ? 0 : 1}
      showsVerticalScrollIndicator={false}
    />
  </PageContainer>
);

const CategoryProducts = ({ route }: { route: any }) => {
  const [refresh, setRefresh] = usePullToRefresh();
  const { categoryId = "" } = route.params;
  const categoryName = categoryId[0].toUpperCase() + categoryId.slice(1);

  return (
    <CustomSafeAreaView>
      <WithNetworkCall
        promiseFunc={() => PRODUCTS_APIS.getProductsByCategory(categoryId)}
        idleMessage={`Loading Products in ${categoryName}`}
        OnSuccessComponent={({ data = [] }: { data: ProductType[] }) => (
          <CategryProductsView
            data={data}
            handleRefresh={setRefresh}
            refresh={refresh}
            categoryName={categoryName}
          />
        )}
        deps={[refresh]}
      />
    </CustomSafeAreaView>
  );
};

export default CategoryProducts;
