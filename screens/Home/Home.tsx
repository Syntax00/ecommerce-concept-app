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
import ErrorStatePlaceholder from "../../components/UIElements/ErrorStatePlaceholder/ErrorStatePlaceholder";
import Loader from "../../components/UIElements/Loader";

import PRODUCTS_APIS from "../../Networking/productsAPIs";
import { fetchCategories } from "../../store/slices/categories";
import { fetchUserData } from "../../store/slices/user";
import usePullToRefresh from "../../hooks/usePullToRefresh";

import styles from "./Home.styles";
import { handleDeeplinkRedirect } from "../../utilities/helpers";
import useDeeplinkRedirect from "../../hooks/useDeeplinkRedirect";

const HomeContent = ({ latestProducts }: { latestProducts: ProductType[] }) => {
  const {
    data: categoriesData = [],
    loading: categoriesLoading,
    error: categoriesError,
  } = useSelector((state: RootStateOrAny) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(fetchCategories());
      dispatch(fetchUserData());
    })();
  }, []);

  if (categoriesLoading) return <Loader secondary />;
  if (categoriesError)
    return (
      <ErrorStatePlaceholder
        message={categoriesError}
        messageDescription="Couldn't get categories data, try reloading the page."
      />
    );

  return (
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
  );
};

const Home = () => {
  const [refresh, setRefresh] = usePullToRefresh();
  const [url] = useDeeplinkRedirect();

  useEffect(() => {
    (async () => {
      try {
        handleDeeplinkRedirect(url);
      } catch (e) {
        console.log({ e });
      }
    })();
  }, [url]);

  return (
    <CustomSafeAreaView>
      <PageContainer>
        <SearchBar />
      </PageContainer>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => setRefresh(true)}
          />
        }
      >
        <WithNetworkCall
          promiseFunc={() =>
            PRODUCTS_APIS.getAllProducts({ sort: "desc", limit: 5 })
          }
          OnSuccessComponent={({ data }: { data: ProductType[] }) => (
            <HomeContent latestProducts={data} />
          )}
          OnFailureComponent={({ error }: { error: string }) => (
            <ErrorStatePlaceholder
              message={error}
              messageDescription="Couldn't get products, try reloading the page."
            />
          )}
          deps={[refresh]}
        />
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default Home;
