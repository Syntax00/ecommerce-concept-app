import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";
import _get from "lodash/get";

import styles from "./LocationMap.styles";

const LocationMap = ({
  initialRegion,
  onLocationChange = (_) => _,
  loadingMapHandler = () => null,
}: {
  initialRegion: object;
  onLocationChange: unaryFunction;
  loadingMapHandler?: () => void;
}) => {
  const [region, setRegion] = useState(initialRegion);

  useEffect(() => {
    setRegion(initialRegion);
  }, [initialRegion]);
  useEffect(() => {
    onLocationChange(region);
  }, [region]);

  const lat = _get(region, "coords.latitude");
  const lng = _get(region, "coords.longitude");

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onMapReady={loadingMapHandler}
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={(reg) => setRegion({ coords: { ...reg } })}
      >
        <Marker
          draggable
          onDragEnd={(e) =>
            setRegion({ coords: { ...e.nativeEvent.coordinate } })
          }
          coordinate={{
            latitude: lat,
            longitude: lng,
          }}
        />
      </MapView>
    </View>
  );
};

export default LocationMap;
