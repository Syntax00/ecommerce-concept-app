import * as React from "react";
import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

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
import { actions } from "../../store/slices/cart";

import styles from "./Home.styles";

const HomeContent = ({
  latestProducts,
  categories,
}: {
  latestProducts: any[];
  categories: string[];
}) => {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log({ cart });
  const onAddToCart = () => {
    dispatch(actions.add(latestProducts && latestProducts[0]));
  };
  const onRemoveFromCart = () => {
    dispatch(actions.remove());
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      <PageContainer>
        <View style={styles.carouselContainer}>
          <AppCarousel items={latestProducts} />
        </View>
        <Separator />
      </PageContainer>
      <TouchableOpacity onPress={onAddToCart}>
        <CustomText>Increment</CustomText>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemoveFromCart}>
        <CustomText>Decrement</CustomText>
      </TouchableOpacity>
      <Categories data={categories} />

      <Separator />
      <LatestProducts data={latestProducts} />
    </ScrollView>
  );
};

const Home = () => {
  const [cats, setCats] = React.useState([]);

  return (
    <CustomSafeAreaView>
      <PageContainer>
        <SearchBar />
      </PageContainer>

      <WithNetworkCall
        promiseFunc={() =>
          Promise.all([
            CATEGORIES_APIS.getAllCategories(),
            PRODUCTS_APIS.getAllProducts({ sort: "desc", limit: 5 }),
          ])
        }
        OnSuccessComponent={({ data: [, products] }: { data: any[] }) => (
          <HomeContent latestProducts={products} categories={cats} />
        )}
        retrieveSuccessData={([categories]: any[]) => setCats(categories)}
      />
    </CustomSafeAreaView>
  );
};

export default Home;
