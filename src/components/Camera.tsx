import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  reverseGeocodeAsync,
} from 'expo-location';
import React, { FC, useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import {
  IUploadPostImg,
  TypeUploadImgLocation,
} from '@/types/upload-post-img-interface';

const CameraComponent: FC = () => {
  const [type, setType] = useState(CameraType.back);
  const [flashType, setFlashType] = useState(FlashMode.off);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean>();
  const [hasLocationPermission, setHasLocationPermission] = useState<boolean>();

  const cameraRef = useRef<Camera>(null);
  const { navigate } = useTypedNavigation();

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        exif: false,
        quality: 1,
      });
      const location = await getCurrentPositionAsync();
      const reverseGeocodedAddress = await reverseGeocodeAsync({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      });

      const locationData: TypeUploadImgLocation = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        country: reverseGeocodedAddress[0].country
          ? reverseGeocodedAddress[0].country
          : '',
        city: reverseGeocodedAddress[0].city
          ? reverseGeocodedAddress[0].city
          : '',
      };

      const data: IUploadPostImg = {
        photo: photo.uri,
        location: locationData,
      };

      navigate('DefaultCreatePostScreen', data);
    }
  };

  const toggleCameraType = () => {
    setType((prev) =>
      prev === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const toggleFlashCamera = () => {
    setFlashType((prev) =>
      prev === FlashMode.off ? FlashMode.on : FlashMode.off,
    );
  };

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const locationStatus = await requestForegroundPermissionsAsync();
      setHasLocationPermission(locationStatus.status === 'granted');
    })();
  }, []);

  if (!hasCameraPermission) return <Text>No Camera Access</Text>;
  // if (!hasLocationPermission) Alert.alert('Your location will be undefined');

  return (
    <Camera
      style={styles.camera}
      ref={cameraRef}
      type={type}
      flashMode={flashType}
    >
      <View style={styles.cameraControls}>
        <TouchableOpacity onPress={toggleFlashCamera}>
          <Ionicons
            name={flashType === FlashMode.off ? 'flash-off' : 'flash'}
            size={30}
            color='#ccc'
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.snap}
          onPress={takePicture}
        >
          <View style={styles.snapDecor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleCameraType}>
          <FontAwesome name='refresh' size={30} color='#ccc' />
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 343,
    paddingBottom: 8,
  },
  cameraControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  snap: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: '#9e9c9c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  snapDecor: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 100,
  },
});

export default CameraComponent;
