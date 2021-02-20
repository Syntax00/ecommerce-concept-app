import React from "react";
import { Image, RefreshControl, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomText from "../../components/UIElements/CustomText";
import PageContainer from "../../components/UIElements/PageContainer";
import CustomButton from "../../components/UIElements/CustomButton/CustomButton";

import WithNetworkCall from "../../components/WithNetworkCall/WithNetworkCall";
import usePullToRefresh from "../../hooks/usePullToRefresh";
import PRODUCTS_APIS from "../../Networking/productsAPIs";
import { formateCategoryName, formatePrice } from "../../utilities/helpers";

import styles from "./ProductDetails.styles";

const ProductDetailsView = ({
  data: { category, price, image, title, description },
  handleRefresh,
  refresh,
}: {
  data: ProductType;
  handleRefresh: any;
  refresh: any;
}) => {
  const categoryName = formateCategoryName(category);
  const formattedPrice = formatePrice(price);

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

        <View style={styles.addToCartWrapper}>
          <CustomButton
            label="Add to Cart"
            icon="shopping-cart"
            pressAction={() => alert("ttt")}
          />
        </View>
      </PageContainer>
    </ScrollView>
  );
};

const ProductDetails = ({ route }: { route: any }) => {
  const { id = "" } = route.params;
  const [refresh, setRefresh] = usePullToRefresh();

  return (
    <WithNetworkCall
      promiseFunc={() => PRODUCTS_APIS.getProduct(id)}
      idleMessage="Loading Product Details"
      OnSuccessComponent={({ data }: { data: ProductType }) => (
        <ProductDetailsView
          data={data}
          handleRefresh={setRefresh}
          refresh={refresh}
        />
      )}
      deps={[refresh]}
    />
  );
};

export default ProductDetails;
