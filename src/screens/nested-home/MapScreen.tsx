import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { useTypedRoute } from '@/hooks/useTypedRoute';

const MapScreen: FC = () => {
  const { params } = useTypedRoute<'Map'>();
  const { latitude, longitude } = params ?? {};
  console.log(latitude, longitude);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.0011,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title='Travel photo' />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default MapScreen;
