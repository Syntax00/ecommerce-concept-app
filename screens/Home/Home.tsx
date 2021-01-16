import * as React from "react";
import { ScrollView, View } from "react-native";

import AppCarousel from "../../components/UIElements/AppCarousel/AppCarousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import CustomSafeAreaView from "../../components/UIElements/CustomSafeAreaView";
import PageContainer from "../../components/UIElements/PageContainer";
import Categories from "../../components/Categories/Categories";
import Separator from "../../components/UIElements/Separator";
import LatestProducts from "../../components/LatestProducts/LatestProducts";

import styles from "./Home.styles";

const Home = () => {
  return (
    <CustomSafeAreaView>
      <PageContainer>
        <SearchBar />
      </PageContainer>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <PageContainer>
          <View style={styles.carouselContainer}>
            <AppCarousel
              items={[
                {
                  id: 1,
                  title: "NEW COLLECTION",
                  description:
                    "Out Now!",
                  thumbnail:
                    "https://images.unsplash.com/photo-1588413203251-fe2bdcbc1cc5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
                },
                {
                  id: 2,
                  title: "NEW COLLECTION",
                  description:
                    "Out Now!",
                  thumbnail:
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cHJvZHVjdHx8MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
                },
                {
                  id: 3,
                  title: "NEW COLLECTION",
                  description:
                    "Out Now!",
                  thumbnail:
                    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80",
                },
                {
                  id: 4,
                  title: "NEW COLLECTION",
                  description:
                    "Out Now!",
                  thumbnail:
                    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhZ3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                },
              ]}
            />
          </View>
          <Separator />
        </PageContainer>

        <Categories
          data={["men clothing", "women clothing", "jewelery", "electronics"]}
        />

        <Separator />
        <LatestProducts
          data={[
            {
              id: 20,
              title: "DANVOUY Womens T Shirt Casual Cotton Short",
              price: 12.99,
              description:
                "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
              category: "women clothing",
              image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            },
            {
              id: 19,
              title: "Opna Women's Short Sleeve Moisture",
              price: 7.95,
              description:
                "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
              category: "women clothing",
              image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
            },
            {
              id: 18,
              title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
              price: 9.85,
              description:
                "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
              category: "women clothing",
              image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
            },
            {
              id: 17,
              title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
              price: 39.99,
              description:
                "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
              category: "women clothing",
              image:
                "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
            },
            {
              id: 16,
              title:
                "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
              price: 29.95,
              description:
                "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
              category: "women clothing",
              image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
            },
          ]}
        />
      </ScrollView>
    </CustomSafeAreaView>
  );
};

export default Home;
