import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import AppCarousel from "../../components/UIElements/AppCarousel/AppCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import CustomSafeAreaView from "../../components/UIElements/CustomSafeAreaView";
import PageContainer from "../../components/UIElements/PageContainer";
import Categories from "../../components/Categories/Categories";
import Separator from "../../components/UIElements/Separator";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import WithNetworkCall from "../../components/WithNetworkCall/WithNetworkCall";
import CustomText from "../../components/UIElements/CustomText";

import CATEGORIES_APIS from "../../Networking/categoriesAPIs";
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
    (async function () {
      dispatch(fetchCategories());
      dispatch(fetchUserData());
    })();
  }, []);

  if (categoriesLoading) return <CustomText>Loading Categories...</CustomText>;

  return (
    <View>
      <PageContainer>
        <View style={styles.carouselContainer}>
          <AppCarousel items={latestProducts} />
        </View>
        <Separator />
      </PageContainer>

      <Categories data={categoriesData} />

      <Separator />

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
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => setRefresh(true)}
          />
        }
      >
        <WithNetworkCall
          promiseFunc={() =>
            Promise.all([
              CATEGORIES_APIS.getAllCategories(),
              PRODUCTS_APIS.getAllProducts({ sort: "desc", limit: 5 }),
            ])
          }
          OnSuccessComponent={({ data: [, products] }: { data: any[] }) => (
            <HomeContent latestProducts={products} />
          )}
          deps={[refresh]}
        />
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default Home;
