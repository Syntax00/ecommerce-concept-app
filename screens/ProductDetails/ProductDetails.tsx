import React, { useCallback } from "react";
import { Image, RefreshControl, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome as FontAwesomeIcon } from "@expo/vector-icons";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import CustomText from "../../components/UIElements/CustomText";
import PageContainer from "../../components/UIElements/PageContainer";
import CustomButton from "../../components/UIElements/CustomButton/CustomButton";
import WithNetworkCall from "../../components/WithNetworkCall/WithNetworkCall";
import ErrorStatePlaceholder from "../../components/UIElements/ErrorStatePlaceholder/ErrorStatePlaceholder";

import usePullToRefresh from "../../hooks/usePullToRefresh";
import PRODUCTS_APIS from "../../Networking/productsAPIs";
import {
  formateCategoryName,
  formatePrice,
  showToastMessage,
} from "../../utilities/helpers";
import { actions as cartActions } from "../../store/slices/cart";
import { navigate } from "../../navigation/navigationService";

import styles from "./ProductDetails.styles";

const ProductDetailsView = ({
  data,
  handleRefresh,
  refresh,
}: {
  data: ProductType;
  handleRefresh: any;
  refresh: any;
}) => {
  const dispatch = useDispatch();

  const { category, price, image, title, description, id } = data;
  const categoryName = formateCategoryName(category);
  const formattedPrice = formatePrice(price);
  const { cart: cartState } = useSelector((state: RootStateOrAny) => state);
  const productAddedToCart = cartState[id];

  const addProductToCart = useCallback(() => {
    dispatch(cartActions.add(data));

    return showToastMessage(
      "success",
      "Product has been successfully added to Cart. Click to view in Cart.",
      () => navigate("Cart")
    );
  }, []);

  const cartController = !productAddedToCart ? (
    <CustomButton
      label="Add to Cart"
      icon="shopping-cart"
      pressAction={addProductToCart}
    />
  ) : (
    <View style={styles.addedToCartMessage}>
      <FontAwesomeIcon name="check" style={styles.addedToCartIcon} />
      <CustomText style={styles.addedToCardTxt}>
        Product is added to your Shopping Cart
      </CustomText>
    </View>
  );

  return (
    <View>
      <View style={styles.productImageWrapper}>
        <Image source={{ uri: image }} style={styles.productImage} />

        <View style={styles.priceWrapper}>
          <CustomText style={styles.productPrice}>{formattedPrice}</CustomText>
        </View>
      </View>

      <PageContainer>
        <View style={styles.productInfoWrapper}>
          <CustomText style={styles.productTitle}>{title}</CustomText>

          <View style={styles.productCategoryWrapper}>
            <CustomText style={styles.productCategory}>
              {categoryName}
            </CustomText>
          </View>

          <CustomText style={styles.productDescription}>
            {description}
          </CustomText>
        </View>

        <View style={styles.addToCartWrapper}>{cartController}</View>
      </PageContainer>
    </View>
  );
};

const ProductDetails = ({ route }: { route: any }) => {
  const { id = "" } = route.params;
  const [refresh, setRefresh] = usePullToRefresh();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={() => setRefresh(true)}
        />
      }
    >
      <WithNetworkCall
        promiseFunc={() => PRODUCTS_APIS.getProduct(id)}
        OnSuccessComponent={({ data }: { data: ProductType }) => (
          <ProductDetailsView
            data={data}
            handleRefresh={setRefresh}
            refresh={refresh}
          />
        )}
        OnFailureComponent={({ error }: { error: string }) => (
          <ErrorStatePlaceholder
            message={error}
            messageDescription="Couldn't get product data, try reloading the page."
          />
        )}
        deps={[refresh]}
      />
    </ScrollView>
  );
};

export default ProductDetails;
