import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ProductsCarousel from "../../components/UIElements/ProductsCarousel/ProductsCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import CustomSafeAreaView from "../../components/UIElements/CustomSafeAreaView";
import PageContainer from "../../components/UIElements/PageContainer";
import Categories from "../../components/Categories/Categories";
import Separator from "../../components/UIElements/Separator";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import WithNetworkCall from "../../components/WithNetworkCall/WithNetworkCall";
import Loader from "../../components/UIElements/Loader";

import PRODUCTS_APIS from "../../Networking/productsAPIs";
import { fetchCategories } from "../../store/slices/categories";
import { fetchUserData } from "../../store/slices/user";

import styles from "./Home.styles";

const HomeContent = ({ latestProducts }: { latestProducts: ProductType[] }) => {
  const {
    categoriesState: {
      data: categoriesData,
      loading: categoriesLoading,
      error: categoriesError,
    },
  } = useSelector((state: any) => ({
    categoriesState: state.categories,
    userState: state.user,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(fetchCategories());
      dispatch(fetchUserData());
    })();
  }, []);

  return (
    <View style={{ paddingBottom: 40 }}>
      <View style={{ marginBottom: 20 }}>
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
  );
};

const Home = () => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(false);
  }, [refresh]);

  return (
    <CustomSafeAreaView>
      <PageContainer>
        <SearchBar />
      </PageContainer>

      <View style={{ flex: 1 }}>
        <WithNetworkCall
          promiseFunc={() =>
            PRODUCTS_APIS.getAllProducts({ sort: "desc", limit: 5 })
          }
          idleMessage="Loading Products"
          OnSuccessComponent={({ data }: { data: ProductType[] }) => (
            <ScrollView
              showsVerticalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={refresh}
                  onRefresh={() => setRefresh(true)}
                />
              }
            >
              <HomeContent latestProducts={data} />
            </ScrollView>
          )}
          deps={[refresh]}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default Home;
