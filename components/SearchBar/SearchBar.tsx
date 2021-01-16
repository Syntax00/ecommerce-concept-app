import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome as FontAwesomeIcon } from "@expo/vector-icons";

import TabHeaderControllers from "../TabHeaderControllers/TabHeaderControllers";

import { navigate } from "../../navigation/navigationService";

import styles from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInputWrapper}>
        <TouchableOpacity style={styles.searchIconWrapper}>
          <FontAwesomeIcon name="search" style={styles.searchIcon} />
        </TouchableOpacity>

        <TextInput
          placeholder="I am looking for ..."
          style={styles.searchInput}
        />
      </View>

      <View style={styles.controllers}>
        <TabHeaderControllers
          controllers={[
            {
              id: 1,
              icon: "shopping-cart",
              action: () => navigate("Cart", {}),
            },
            {
              id: 2,
              icon: "bell",
              action: () => navigate("Cart", {}),
            },
          ]}
        />
      </View>
    </View>
  );
};

export default SearchBar;
