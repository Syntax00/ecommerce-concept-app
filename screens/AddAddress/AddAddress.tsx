import React, { useEffect, useCallback, useReducer } from "react";
import { ScrollView } from "react-native";
import * as Location from "expo-location";
import { View } from "react-native";
import _isEmpty from "lodash/isEmpty";
import { useDispatch } from "react-redux";

import PageContainer from "../../components/UIElements/PageContainer";
import LocationMap from "../../components/LocationMap/LocationMap";
import CustomButton from "../../components/UIElements/CustomButton/CustomButton";
import Loader from "../../components/UIElements/Loader";

import axios from "../../Networking/axiosInstance";
import { actions as addressesActions } from "../../store/slices/addresses";
import { showToastMessage } from "../../utilities/helpers";
import { navigate } from "../../navigation/navigationService";
import { dimensions } from "../../utilities/common";

import styles from "./AddAddress.styles";

const AddAddress = () => {
  const [
    { location, loadingAddressData, finalLocation, loadingMap },
    setState,
  ] = useReducer((base: any, point: any) => ({ ...base, ...point }), {
    location: {},
    loadingAddressData: false,
    errorMessage: "",
    finalLocation: {},
    loadingMap: true,
  });
  const dispatch = useDispatch();

  const addAddressHandler = useCallback(async () => {
    setState({ loadingAddressData: true });
    try {
      const { display_name: addressName } = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${finalLocation?.coords?.latitude}&lon=${finalLocation?.coords?.longitude}&accept-language=en`
      );

      dispatch(
        addressesActions.add({
          addressName,
          coordinates: finalLocation?.coords,
        })
      );
      setState({ loadingAddressData: false });

      return showToastMessage(
        "success",
        "Address has been added. Click here to view it on your profile.",
        () => navigate("Profile")
      );
    } catch (e) {
      setState({ loadingAddressData: false });

      return showToastMessage(
        "danger",
        "Could not add the address. Something went wrong!"
      );
    }
  }, [finalLocation]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        return setState({
          errorMessage: "Permission to access location was denied",
        });
      }

      let location = await Location.getCurrentPositionAsync({});
      setState({ location });
    })();
  }, []);

  return (
    <ScrollView>
      <PageContainer>
        {location && !_isEmpty(location) ? (
          <LocationMap
            initialRegion={location}
            onLocationChange={(reg) => setState({ finalLocation: reg })}
            loadingMapHandler={() => setState({ loadingMap: false })}
          />
        ) : null}
        {loadingMap ? (
          <View style={styles.mapLoader}>
            <Loader secondary />
          </View>
        ) : null}

        <View style={styles.addAddressBtn}>
          <CustomButton
            label="Add Address"
            icon="map-marker"
            disabled={loadingAddressData}
            pressAction={addAddressHandler}
          />
        </View>
      </PageContainer>
    </ScrollView>
  );
};

export default AddAddress;
