import React from "react";
import { Platform, RefreshControl, FlatList } from "react-native";

import PageContainer from "../../components/UIElements/PageContainer";
import WithNetworkCall from "../../components/WithNetworkCall/WithNetworkCall";
import SectionTitle from "../../components/UIElements/SectionTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
import EmptyStatePlaceholder from "../../components/UIElements/EmptyStatePlaceholder/EmptyStatePlaceholder";

import PRODUCTS_APIS from "../../Networking/productsAPIs";
import usePullToRefresh from "../../hooks/usePullToRefresh";

import styles from "./CategoryProducts.styles";

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
}) => {
  if (!data.length)
    return <EmptyStatePlaceholder message="No Products Were Found" />;

  return (
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
            containerStyle={styles.title}
          >{`${categoryName} Products`}</SectionTitle>
        )}
        renderItem={({ item }: { item: any }) => <ProductCard data={item} />}
        onEndReachedThreshold={Platform.OS === "ios" ? 0 : 1}
        showsVerticalScrollIndicator={false}
      />
    </PageContainer>
  );
};

const CategoryProducts = ({ route }: { route: any }) => {
  const [refresh, setRefresh] = usePullToRefresh();
  const { categoryId = "" } = route.params;
  const categoryName = categoryId[0].toUpperCase() + categoryId.slice(1);

  return (
    <WithNetworkCall
      promiseFunc={() => PRODUCTS_APIS.getProductsByCategory(categoryId)}
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
  );
};

export default CategoryProducts;
