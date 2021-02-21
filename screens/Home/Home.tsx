import React, { useEffect } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import ProductsCarousel from "../../components/UIElements/ProductsCarousel/ProductsCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import CustomSafeAreaView from "../../components/UIElements/CustomSafeAreaView";
import PageContainer from "../../components/UIElements/PageContainer";
import Categories from "../../components/Categories/Categories";
import Separator from "../../components/UIElements/Separator";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import WithNetworkCall from "../../components/WithNetworkCall/WithNetworkCall";

import PRODUCTS_APIS from "../../Networking/productsAPIs";
import { fetchCategories } from "../../store/slices/categories";
import { fetchUserData } from "../../store/slices/user";
import usePullToRefresh from "../../hooks/usePullToRefresh";

import styles from "./Home.styles";

const HomeContent = ({
  latestProducts,
  handleRefresh,
  refresh,
}: {
  latestProducts: ProductType[];
  handleRefresh: any;
  refresh: any;
}) => {
  const { data: categoriesData = [] } = useSelector(
    (state: RootStateOrAny) => state.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(fetchCategories());
      dispatch(fetchUserData());
    })();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={() => handleRefresh(true)}
        />
      }
    >
      <View style={styles.content}>
        <View style={styles.categoriesWrapper}>
          <Categories data={categoriesData} />
        </View>

        <PageContainer>
          <View style={styles.carouselContainer}>
            <ProductsCarousel items={latestProducts} />
          </View>

          <Separator />
        </PageContainer>

        <LatestProducts data={latestProducts} />
      </View>
    </ScrollView>
  );
};

const Home = () => {
  const [refresh, setRefresh] = usePullToRefresh();

  return (
    <CustomSafeAreaView>
      <PageContainer>
        <SearchBar />
      </PageContainer>

      <View style={styles.container}>
        <WithNetworkCall
          promiseFunc={() =>
            PRODUCTS_APIS.getAllProducts({ sort: "desc", limit: 5 })
          }
          OnSuccessComponent={({ data }: { data: ProductType[] }) => (
            <HomeContent
              latestProducts={data}
              handleRefresh={setRefresh}
              refresh={refresh}
            />
          )}
          deps={[refresh]}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default Home;
