import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { FC, useEffect, useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { useTypedRoute } from '@/hooks/useTypedRoute';
import { IPostLocation } from '@/types/post-interface';
import { Gstyles } from '@/utils/global-styles';

const initialLocation: IPostLocation = {
  address: '',
  latitude: null,
  longitude: null,
};

const DefaultScreen: FC = () => {
  const isFocused = useIsFocused();
  const { navigate } = useTypedNavigation();
  const { params } = useTypedRoute<'DefaultCreatePostScreen'>();
  const { photo, location } = params ?? {};

  const [photoData, setPhotoData] = useState('');
  const [descrInput, setDescrInput] = useState('');
  const [locationData, setLocationData] = useState(initialLocation);

  useEffect(() => {
    if (photo) setPhotoData(photo);

    if (!location) return;
    const { latitude, longitude, country, city } = location;

    if (latitude && longitude && country && city)
      setLocationData({ latitude, longitude, address: country + ' , ' + city });
  }, [photo, location]);

  useEffect(() => {
    if (!isFocused) handleDelete();
  }, [isFocused]);

  const handleDelete = () => {
    setPhotoData('');
    setDescrInput('');
    setLocationData(initialLocation);
  };

  const handlePublish = () => {
    if (!photoData) return Alert.alert("You can't send an empty post!");

    navigate('DefaultHomeScreen', {
      img: photoData,
      title: descrInput,
      location: locationData,
      likes: 0,
      comments: [],
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.imgWrapper}>
            {!photoData ? (
              <View style={styles.img} />
            ) : (
              <Image
                source={{ uri: photoData }}
                style={styles.img}
                resizeMode='contain'
              />
            )}
            <TouchableOpacity
              style={styles.imgIcon}
              activeOpacity={0.7}
              onPress={() => navigate('CameraScreen')}
            >
              <MaterialIcons name='add-a-photo' size={24} color='#BDBDBD' />
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={{
                ...Gstyles.mainText,
                ...styles.input,
                fontWeight: '500',
              }}
              value={descrInput}
              onChangeText={(value) => setDescrInput(value)}
              placeholder='Description'
              placeholderTextColor='#BDBDBD'
            />
            <View style={styles.locationInputWrapper}>
              <TextInput
                style={{
                  ...Gstyles.mainText,
                  ...styles.input,
                  paddingLeft: 30,
                }}
                value={locationData.address}
                onChangeText={(value) =>
                  setLocationData((prev) => ({ ...prev, address: value }))
                }
                placeholder={!locationData.address ? 'Location' : ''}
                placeholderTextColor='#BDBDBD'
              />
              <Ionicons
                name='location-outline'
                style={styles.locationIcon}
                size={24}
                color='#BDBDBD'
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={{
            ...Gstyles.mainBtn,
            // display: isShowKeyboard ? 'none' : 'flex',
          }}
          // onPress={handleSubmit}
          activeOpacity={0.7}
          onPress={handlePublish}
        >
          <Text style={{ ...Gstyles.mainText, color: '#fff' }}>Publish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteBtn}
          activeOpacity={0.7}
          onPress={handleDelete}
        >
          <AntDesign name='delete' size={30} color='#BDBDBD' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  imgWrapper: {
    position: 'relative',
    height: '35%',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
  img: {
    height: '100%',
    borderRadius: 8,
  },
  imgIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 100,
  },
  inputWrapper: {
    marginTop: 32,
    marginBottom: 48,
    gap: 16,
  },
  input: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  locationInputWrapper: {
    position: 'relative',
  },
  locationIcon: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: [{ translateY: -12 }],
  },
  deleteBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 32,
    width: 70,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },
});

export default DefaultScreen;
